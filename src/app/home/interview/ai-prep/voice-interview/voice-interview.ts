import { ChangeDetectionStrategy, Component, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { AiPrepService } from '../ai-prep.service';
import {
  AI_PREP_ROLES,
  AI_PREP_SKILLS,
  Difficulty,
  VoiceInterviewResults,
  VoiceSessionResponse,
  VoiceSpeechStats,
  VoiceTranscriptEntry,
} from '../ai-prep.models';

type VoiceScreen = 'setup' | 'interview' | 'results';

/**
 * Browser-side Gemini Live client. The browser receives only a short-lived,
 * one-use token from Xora's proxy; the permanent Gemini key stays server-side.
 */
@Component({
  selector: 'app-voice-interview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './voice-interview.html',
  styleUrl: './voice-interview.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class VoiceInterview implements OnDestroy {
  private readonly aiService = inject(AiPrepService);
  private socket: WebSocket | null = null;
  private audioContext: AudioContext | null = null;
  private mediaStream: MediaStream | null = null;
  private microphone: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private silentGain: GainNode | null = null;
  private outputSources = new Set<AudioBufferSourceNode>();
  private nextPlaybackTime = 0;
  private currentCandidateText = '';
  private currentInterviewerText = '';
  private candidateTurnStartedAt: number | null = null;
  private candidateSpeechMs = 0;

  readonly screen = signal<VoiceScreen>('setup');
  readonly roles = AI_PREP_ROLES;
  readonly skills = AI_PREP_SKILLS;
  readonly selectedRole = signal<string>('Senior Backend Engineer');
  readonly selectedSkills = signal<Set<string>>(new Set(['Spring Boot', 'Java']));
  readonly selectedDifficulty = signal<Difficulty>('intermediate');
  readonly status = signal<'idle' | 'connecting' | 'listening' | 'speaking' | 'ended'>('idle');
  readonly liveText = signal<string>('');
  readonly transcript = signal<VoiceTranscriptEntry[]>([]);
  readonly results = signal<VoiceInterviewResults | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');

  toggleSkill(skill: string): void {
    const next = new Set(this.selectedSkills());
    next.has(skill) ? next.delete(skill) : next.add(skill);
    this.selectedSkills.set(next);
  }

  isSkillSelected(skill: string): boolean {
    return this.selectedSkills().has(skill);
  }

  async start(): Promise<void> {
    if (!navigator.mediaDevices?.getUserMedia) {
      this.error.set('Voice Interview needs a modern browser with microphone access.');
      return;
    }
    if (this.selectedSkills().size === 0) {
      this.error.set('Select at least one skill.');
      return;
    }

    this.loading.set(true);
    this.error.set('');
    this.status.set('connecting');
    this.transcript.set([]);
    this.results.set(null);
    this.currentCandidateText = '';
    this.currentInterviewerText = '';
    this.candidateSpeechMs = 0;

    try {
      await this.startMicrophone();
      const session = await firstValueFrom(this.aiService.createVoiceSession({
        role: this.selectedRole(),
        skills: [...this.selectedSkills()],
        difficulty: this.selectedDifficulty(),
      }));
      this.connect(session);
      this.screen.set('interview');
    } catch (err) {
      this.error.set(this.errorMessage(err, 'Unable to start the voice interview.'));
      this.stopConnection();
      this.status.set('idle');
    } finally {
      this.loading.set(false);
    }
  }

  async finish(): Promise<void> {
    this.commitTurn();
    this.stopConnection();
    this.status.set('ended');
    if (this.transcript().filter((entry) => entry.speaker === 'candidate').length === 0) {
      this.error.set('Answer at least one question before ending the interview.');
      return;
    }

    this.loading.set(true);
    this.error.set('');
    try {
      const results = await firstValueFrom(this.aiService.getVoiceResults({
        role: this.selectedRole(),
        skills: [...this.selectedSkills()],
        transcript: this.transcript(),
        speechStats: this.speechStats(),
      }));
      this.results.set(results);
      this.screen.set('results');
    } catch (err) {
      this.error.set(this.errorMessage(err, 'Unable to generate the interview report.'));
    } finally {
      this.loading.set(false);
    }
  }

  restart(): void {
    this.stopConnection();
    this.screen.set('setup');
    this.status.set('idle');
    this.liveText.set('');
    this.transcript.set([]);
    this.results.set(null);
    this.error.set('');
  }

  ngOnDestroy(): void {
    this.stopConnection();
  }

  private connect(session: VoiceSessionResponse): void {
    const token = encodeURIComponent(session.token);
    const url = 'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained?access_token=' + token;
    const socket = new WebSocket(url);
    this.socket = socket;

    socket.onopen = () => {
      socket.send(JSON.stringify({
        setup: {
          model: `models/${session.model}`,
          ...session.config,
        },
      }));
    };
    socket.onmessage = (event) => this.handleMessage(event.data);
    socket.onerror = () => {
      this.error.set('The Gemini Live connection failed. Check the proxy environment variables and try again.');
    };
    socket.onclose = () => {
      if (this.status() !== 'ended' && this.screen() === 'interview') {
        this.status.set('ended');
      }
    };
  }

  private async startMicrophone(): Promise<void> {
    this.mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
    });
    this.audioContext ??= new AudioContext();
    await this.audioContext.resume();
    this.microphone = this.audioContext.createMediaStreamSource(this.mediaStream);
    this.processor = this.audioContext.createScriptProcessor(2048, 1, 1);
    this.silentGain = this.audioContext.createGain();
    this.silentGain.gain.value = 0;
    this.processor.onaudioprocess = (event) => this.sendMicrophoneChunk(event.inputBuffer.getChannelData(0));
    this.microphone.connect(this.processor);
    this.processor.connect(this.silentGain);
    this.silentGain.connect(this.audioContext.destination);
  }

  private sendMicrophoneChunk(samples: Float32Array): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN || this.status() === 'connecting') return;
    const context = this.audioContext;
    if (!context) return;
    this.socket.send(JSON.stringify({
      realtimeInput: {
        audio: {
          data: this.float32ToBase64(samples),
          mimeType: `audio/pcm;rate=${Math.round(context.sampleRate)}`,
        },
      },
    }));
  }

  private handleMessage(raw: unknown): void {
    if (typeof raw !== 'string') return;
    let message: any;
    try {
      message = JSON.parse(raw);
    } catch {
      return;
    }
    if (message.setupComplete) {
      this.status.set('listening');
      this.liveText.set('Connected. The interviewer is about to begin.');
      return;
    }

    const content = message.serverContent;
    if (!content) return;
    if (content.inputTranscription?.text) {
      if (!this.candidateTurnStartedAt) this.candidateTurnStartedAt = Date.now();
      this.currentCandidateText = this.mergeText(this.currentCandidateText, content.inputTranscription.text);
      this.liveText.set(`You: ${this.currentCandidateText}`);
    }
    if (content.outputTranscription?.text) {
      this.currentInterviewerText = this.mergeText(this.currentInterviewerText, content.outputTranscription.text);
      this.liveText.set(`Xora: ${this.currentInterviewerText}`);
    }
    for (const part of content.modelTurn?.parts || []) {
      if (part.inlineData?.data) this.playPcm(part.inlineData.data);
    }
    if (content.modelTurn) {
      this.finishCandidateTurn();
      this.status.set('speaking');
    }
    if (content.interrupted) this.stopPlayback();
    if (content.turnComplete) {
      this.commitTurn();
      this.status.set('listening');
    }
  }

  private commitTurn(): void {
    this.finishCandidateTurn();
    const entries: VoiceTranscriptEntry[] = [];
    if (this.currentCandidateText.trim()) entries.push({ speaker: 'candidate', text: this.currentCandidateText.trim() });
    if (this.currentInterviewerText.trim()) entries.push({ speaker: 'interviewer', text: this.currentInterviewerText.trim() });
    if (entries.length) this.transcript.update((current) => [...current, ...entries].slice(-100));
    this.currentCandidateText = '';
    this.currentInterviewerText = '';
  }

  private finishCandidateTurn(): void {
    if (this.candidateTurnStartedAt) {
      this.candidateSpeechMs += Date.now() - this.candidateTurnStartedAt;
      this.candidateTurnStartedAt = null;
    }
  }

  private playPcm(base64: string): void {
    const context = this.audioContext;
    if (!context) return;
    const bytes = this.base64ToArrayBuffer(base64);
    const sourceSamples = new Int16Array(bytes);
    if (!sourceSamples.length) return;
    const buffer = context.createBuffer(1, sourceSamples.length, 24000);
    const channel = buffer.getChannelData(0);
    for (let i = 0; i < sourceSamples.length; i += 1) channel[i] = sourceSamples[i] / 32768;
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.onended = () => this.outputSources.delete(source);
    const startAt = Math.max(context.currentTime + 0.05, this.nextPlaybackTime);
    source.start(startAt);
    this.nextPlaybackTime = startAt + buffer.duration;
    this.outputSources.add(source);
  }

  private stopPlayback(): void {
    for (const source of this.outputSources) source.stop();
    this.outputSources.clear();
    this.nextPlaybackTime = this.audioContext?.currentTime || 0;
  }

  private stopConnection(): void {
    this.stopPlayback();
    this.socket?.close();
    this.socket = null;
    this.processor?.disconnect();
    this.microphone?.disconnect();
    this.silentGain?.disconnect();
    this.processor = null;
    this.microphone = null;
    this.silentGain = null;
    this.mediaStream?.getTracks().forEach((track) => track.stop());
    this.mediaStream = null;
  }

  private speechStats(): VoiceSpeechStats {
    const words = this.transcript()
      .filter((entry) => entry.speaker === 'candidate')
      .flatMap((entry) => entry.text.match(/\b[\w']+\b/g) || []);
    const fullText = words.join(' ').toLowerCase();
    const fillerWords = ['um', 'uh', 'like', 'basically', 'actually', 'you know'].reduce<Record<string, number>>((all, filler) => {
      const expression = filler.includes(' ')
        ? new RegExp(`\\b${filler.replace(' ', '\\s+')}\\b`, 'g')
        : new RegExp(`\\b${filler}\\b`, 'g');
      all[filler] = fullText.match(expression)?.length || 0;
      return all;
    }, {});
    const minutes = this.candidateSpeechMs / 60_000;
    return { candidateWords: words.length, wordsPerMinute: minutes > 0 ? Math.round(words.length / minutes) : null, fillerWords };
  }

  private mergeText(existing: string, next: string): string {
    const trimmed = next.trim();
    if (!trimmed || existing.endsWith(trimmed)) return existing;
    if (trimmed.startsWith(existing)) return trimmed;
    return `${existing} ${trimmed}`.trim();
  }

  private float32ToBase64(samples: Float32Array): string {
    const bytes = new Uint8Array(samples.length * 2);
    const view = new DataView(bytes.buffer);
    samples.forEach((sample, index) => view.setInt16(index * 2, Math.max(-1, Math.min(1, sample)) * 0x7fff, true));
    let binary = '';
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary);
  }

  private base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes.buffer;
  }

  private errorMessage(error: unknown, fallback: string): string {
    const apiError = error as { error?: { detail?: string; error?: string }; message?: string };
    return apiError?.error?.detail || apiError?.error?.error || apiError?.message || fallback;
  }
}
