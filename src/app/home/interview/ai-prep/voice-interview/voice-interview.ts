import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
  signal,
} from '@angular/core';

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


type VoiceScreen =
  'setup'
  | 'interview'
  | 'results';


type VoiceStatus =
  | 'idle'
  | 'connecting'
  | 'speaking'
  | 'listening'
  | 'processing'
  | 'ended';


@Component({
  selector: 'app-voice-interview',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
  ],

  templateUrl: './voice-interview.html',

  styleUrl: './voice-interview.scss',

  changeDetection:
    ChangeDetectionStrategy.Eager,
})
export class VoiceInterview
  implements OnDestroy {

  private interviewerHasSpoken = false;

  private readonly aiService =
    inject(AiPrepService);


  /* ============================================================
     GEMINI CONNECTION
     ============================================================ */

  private socket:
    WebSocket | null = null;

  private audioContext:
    AudioContext | null = null;

  private mediaStream:
    MediaStream | null = null;

  private microphone:
    MediaStreamAudioSourceNode | null = null;

  private processor:
    ScriptProcessorNode | null = null;

  private silentGain:
    GainNode | null = null;


  /* ============================================================
     AUDIO PLAYBACK
     ============================================================ */

  private outputSources =
    new Set<AudioBufferSourceNode>();

  private nextPlaybackTime = 0;


  /* ============================================================
     TRANSCRIPT STATE
     ============================================================ */

  private currentCandidateText =
    '';

  private currentInterviewerText =
    '';

  private candidateTurnStartedAt:
    number | null = null;

  private candidateSpeechMs =
    0;


  /* ============================================================
     UI STATE
     ============================================================ */

  readonly screen =
    signal<VoiceScreen>('setup');


  readonly roles =
    AI_PREP_ROLES;


  readonly skills =
    AI_PREP_SKILLS;


  readonly selectedRole =
    signal<string>(
      'Senior Backend Engineer'
    );


  readonly selectedSkills =
    signal<Set<string>>(
      new Set([
        'Spring Boot',
        'Java',
      ])
    );


  readonly selectedDifficulty =
    signal<Difficulty>(
      'intermediate'
    );


  readonly status =
    signal<VoiceStatus>('idle');


  readonly loading =
    signal(false);


  readonly error =
    signal('');


  readonly liveText =
    signal('');


  readonly liveInterviewerText =
    signal('');


  readonly liveCandidateText =
    signal('');


  readonly transcript =
    signal<VoiceTranscriptEntry[]>(
      []
    );


  readonly results =
    signal<VoiceInterviewResults | null>(
      null
    );


  /**
   * true only while candidate is allowed
   * to send microphone audio.
   */
  readonly micEnabled =
    signal(false);


  /**
   * Text answer composer.
   */
  readonly answerText =
    signal('');


  /**
   * Code answer composer.
   */
  readonly codeText =
    signal('');


  readonly composerMode =
    signal<'answer' | 'code'>(
      'answer'
    );


  /* ============================================================
     SETUP
     ============================================================ */

  toggleSkill(
    skill: string
  ): void {
    const next =
      new Set(
        this.selectedSkills()
      );


    if (next.has(skill)) {
      next.delete(skill);
    } else {
      next.add(skill);
    }


    this.selectedSkills.set(next);
  }


  isSkillSelected(
    skill: string
  ): boolean {
    return this
      .selectedSkills()
      .has(skill);
  }


  /* ============================================================
     START
     ============================================================ */

  async start(): Promise<void> {

    if (
      !navigator.mediaDevices
        ?.getUserMedia
    ) {
      this.error.set(
        'Voice Interview requires a browser with microphone access.'
      );

      return;
    }


    if (
      this.selectedSkills().size === 0
    ) {
      this.error.set(
        'Select at least one skill.'
      );

      return;
    }


    this.loading.set(true);

    this.error.set('');

    this.status.set(
      'connecting'
    );

    this.transcript.set([]);

    this.results.set(null);

    this.liveText.set('');

    this.liveInterviewerText.set('');

    this.liveCandidateText.set('');

    this.currentCandidateText =
      '';

    this.currentInterviewerText =
      '';

    this.candidateSpeechMs =
      0;

    this.answerText.set('');

    this.codeText.set('');

    this.micEnabled.set(false);


    try {

      /*
       * Start microphone first so permission
       * is requested from the user gesture.
       */
      await this.startMicrophone();


      const session =
        await firstValueFrom(
          this.aiService.createVoiceSession({
            role:
              this.selectedRole(),

            skills:
              [...this.selectedSkills()],

            difficulty:
              this.selectedDifficulty(),
          })
        );


      this.screen.set(
        'interview'
      );


      this.connect(session);

    } catch (err) {

      this.error.set(
        this.errorMessage(
          err,
          'Unable to start the voice interview.'
        )
      );

      this.stopConnection();

      this.status.set('idle');

    } finally {

      this.loading.set(false);
    }
  }


  /* ============================================================
     GEMINI WEBSOCKET
     ============================================================ */

  private connect(
    session: VoiceSessionResponse
  ): void {

    const token =
      encodeURIComponent(
        session.token
      );


    const url =
      'wss://generativelanguage.googleapis.com/' +
      'ws/google.ai.generativelanguage.v1beta.' +
      'GenerativeService.BidiGenerateContentConstrained' +
      `?access_token=${token}`;


    console.log(
      '[Xora Voice] Connecting to Gemini Live...'
    );


    const socket =
      new WebSocket(url);


    this.socket =
      socket;


    socket.onopen = () => {

      console.log(
        '[Xora Voice] WebSocket opened'
      );


      /*
       * The raw WebSocket API requires:
       *
       * setup.model
       * setup.generationConfig
       * setup.systemInstruction
       * setup.realtimeInputConfig
       * ...
       */

      const config =
        session.config as any;


      const setupMessage = {
        setup: {
          model: `models/${session.model}`,

          responseModalities: ['AUDIO'],

          systemInstruction:
            config.systemInstruction,

          realtimeInputConfig:
            config.realtimeInputConfig,

          inputAudioTranscription:
            config.inputAudioTranscription,

          outputAudioTranscription:
            config.outputAudioTranscription,

          sessionResumption:
            config.sessionResumption,

          contextWindowCompression:
            config.contextWindowCompression,
        },
      };


      console.log(
        '[Xora Voice] Sending setup'
      );


      socket.send(
        JSON.stringify(
          setupMessage
        )
      );
    };


    socket.onmessage =
      (event) => {
        this.handleMessage(
          event.data
        );
      };


    socket.onerror =
      (event) => {

        console.error(
          '[Xora Voice] WebSocket error',
          event
        );


        this.error.set(
          'Gemini Live connection failed. Open DevTools → Console for details.'
        );
      };


    socket.onclose =
      (event) => {

        console.warn(
          '[Xora Voice] WebSocket closed:',
          event.code,
          event.reason
        );


        if (
          this.status() !== 'ended' &&
          this.screen() === 'interview'
        ) {
          this.micEnabled.set(false);

          this.status.set(
            'ended'
          );


          if (!this.error()) {
            this.error.set(
              `Gemini Live connection closed (${event.code}).`
            );
          }
        }
      };
  }


  /* ============================================================
     HANDLE GEMINI MESSAGE
     ============================================================ */

  private handleMessage(
    raw: unknown
  ): void {

    if (
      typeof raw !== 'string'
    ) {
      return;
    }


    let message: any;


    try {
      message =
        JSON.parse(raw);
    } catch {
      return;
    }
    console.log(
      '%c[Xora Gemini]',
      'color: #00d9ff; font-weight: bold;',
      message
    );
    console.log('[Xora Voice] Gemini message:', message);

    if (message.error) {
      console.error('[Xora Voice] Gemini error:', message.error);

      this.error.set(
        message.error.message ||
        'Gemini Live returned an error.'
      );

      this.status.set('ended');
      return;
    }


    /* ----------------------------------------------------------
       SETUP COMPLETE
       ---------------------------------------------------------- */

    if (message.setupComplete) {
      console.log(
        '[Xora Voice] Setup complete'
      );

      this.status.set('processing');

      this.liveText.set(
        'Xora is preparing your first question...'
      );

      this.sendRealtimeText(
        'Begin the interview now. Ask the first concise technical interview question. Do not wait for the candidate to speak first.'
      );

      return;
    }


    /* ----------------------------------------------------------
       SESSION RESUMPTION
       ---------------------------------------------------------- */

    if (
      message.sessionResumptionUpdate
    ) {

      console.log(
        '[Xora Voice] Session resumption update',
        message.sessionResumptionUpdate
      );

      return;
    }


    /* ----------------------------------------------------------
       GO AWAY
       ---------------------------------------------------------- */

    if (
      message.goAway
    ) {

      console.warn(
        '[Xora Voice] Gemini connection ending soon:',
        message.goAway
      );

      return;
    }


    const content =
      message.serverContent;


    if (!content) {
      return;
    }


    /* ----------------------------------------------------------
       MODEL OUTPUT TRANSCRIPTION
       ---------------------------------------------------------- */

    if (content.outputTranscription?.text) {
      this.interviewerHasSpoken = true;

      const text =
        content.outputTranscription.text;

      this.currentInterviewerText =
        this.mergeText(
          this.currentInterviewerText,
          text
        );


      this.liveInterviewerText.set(
        this.currentInterviewerText
      );


      this.liveText.set(
        this.currentInterviewerText
      );


      /*
       * As soon as Xora starts producing text,
       * lock the microphone.
       */
      this.lockCandidateInput();


      this.status.set(
        'speaking'
      );
    }


    /* ----------------------------------------------------------
       CANDIDATE TRANSCRIPTION
       ---------------------------------------------------------- */

    if (
      content.inputTranscription?.text
    ) {

      const text =
        content.inputTranscription.text;


      if (
        !this.candidateTurnStartedAt
      ) {
        this.candidateTurnStartedAt =
          Date.now();
      }


      this.currentCandidateText =
        this.mergeText(
          this.currentCandidateText,
          text
        );


      this.liveCandidateText.set(
        this.currentCandidateText
      );


      this.liveText.set(
        `You: ${this.currentCandidateText}`
      );
    }


    /* ----------------------------------------------------------
       MODEL AUDIO
       ---------------------------------------------------------- */

    for (
      const part of
      content.modelTurn?.parts || []
    ) {

      if (
        part.inlineData?.data
      ) {

        /*
         * Xora is speaking.
         * Lock candidate microphone immediately.
         */
        this.lockCandidateInput();


        this.status.set(
          'speaking'
        );


        this.playPcm(
          part.inlineData.data
        );
      }
    }


    /* ----------------------------------------------------------
       INTERRUPTION
       ---------------------------------------------------------- */

    if (
      content.interrupted
    ) {

      console.warn(
        '[Xora Voice] Model interrupted'
      );


      this.stopPlayback();

      this.lockCandidateInput();
    }


    /* ----------------------------------------------------------
       GENERATION COMPLETE
       ---------------------------------------------------------- */

    if (
      content.generationComplete
    ) {

      console.log(
        '[Xora Voice] Generation complete'
      );
    }


    /* ----------------------------------------------------------
       TURN COMPLETE
       ---------------------------------------------------------- */
    if (content.turnComplete) {
      console.log(
        '[Xora Voice] Turn complete'
      );

      window.setTimeout(() => {
        this.commitCurrentTurn();

        if (this.interviewerHasSpoken) {
          this.unlockCandidateInput();

          this.status.set('listening');

          this.liveText.set(
            'Your turn — answer by voice, typing, or code.'
          );

          this.interviewerHasSpoken = false;
        }
      }, 150);
    }
  }


  /* ============================================================
     SEND INITIAL / TYPED CONTENT
     ============================================================ */

  private sendRealtimeText(text: string): void {
    if (
      !this.socket ||
      this.socket.readyState !== WebSocket.OPEN
    ) {
      console.warn(
        '[Xora Voice] Cannot send text — WebSocket not open'
      );
      return;
    }

    const message = {
      realtimeInput: {
        text,
      },
    };

    console.log(
      '[Xora Voice] Sending realtime text:',
      text
    );

    this.socket.send(
      JSON.stringify(message)
    );
  }


  /* ============================================================
     SUBMIT TEXT / CODE
     ============================================================ */

  submitTypedAnswer(): void {

    if (
      this.status() === 'speaking' ||
      this.status() === 'processing' ||
      this.status() === 'connecting'
    ) {
      return;
    }


    const answer =
      this.answerText().trim();


    const code =
      this.codeText().trim();


    if (!answer && !code) {
      this.error.set(
        'Enter an answer or code first.'
      );

      return;
    }


    let combined = '';


    if (answer) {
      combined +=
        `Candidate's written answer:\n${answer}`;
    }


    if (code) {

      if (combined) {
        combined += '\n\n';
      }


      combined +=
        `Candidate's code submission:\n` +
        '```\n' +
        code +
        '\n```';
    }


    /*
     * Add candidate entry immediately.
     * Text/code input does not need Gemini
     * speech transcription.
     */
    const candidateEntry: VoiceTranscriptEntry = {
      speaker: 'candidate',
      text: combined,
    };

    this.transcript.update(
      (current) => [
        ...current,
        candidateEntry,
      ].slice(-100)
    );


    this.answerText.set('');

    this.codeText.set('');


    this.lockCandidateInput();


    this.status.set(
      'processing'
    );


    this.liveText.set(
      'Xora is evaluating your answer...'
    );


    this.sendRealtimeText(
      combined
    );
  }


  /* ============================================================
     MICROPHONE CONTROL
     ============================================================ */

  toggleMicrophone(): void {

    if (
      this.status() === 'speaking' ||
      this.status() === 'processing' ||
      this.status() === 'connecting'
    ) {
      return;
    }


    if (
      this.micEnabled()
    ) {
      this.lockCandidateInput();

      this.liveText.set(
        'Microphone muted. You can type an answer instead.'
      );

      return;
    }


    this.unlockCandidateInput();

    this.liveText.set(
      'Microphone active — speak your answer.'
    );
  }


  private lockCandidateInput(): void {

    this.micEnabled.set(
      false
    );
  }


  private unlockCandidateInput(): void {

    /*
     * Only unlock if the interview is still active.
     */
    if (
      this.screen() !==
      'interview'
    ) {
      return;
    }


    this.micEnabled.set(
      true
    );
  }


  /* ============================================================
     MICROPHONE
     ============================================================ */

  private async startMicrophone(): Promise<void> {

    this.mediaStream =
      await navigator.mediaDevices
        .getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });


    this.audioContext ??=
      new AudioContext();


    await this.audioContext.resume();


    this.microphone =
      this.audioContext
        .createMediaStreamSource(
          this.mediaStream
        );


    /*
     * 1024 samples gives roughly:
     * 21ms @ 48kHz
     * 23ms @ 44.1kHz
     *
     * This keeps Live API latency low.
     */
    this.processor =
      this.audioContext
        .createScriptProcessor(
          1024,
          1,
          1
        );


    this.silentGain =
      this.audioContext
        .createGain();


    this.silentGain.gain.value =
      0;


    this.processor.onaudioprocess =
      (event) => {

        if (
          !this.micEnabled()
        ) {
          return;
        }


        const input =
          event.inputBuffer
            .getChannelData(0);


        this.sendMicrophoneChunk(
          input
        );
      };


    this.microphone.connect(
      this.processor
    );


    this.processor.connect(
      this.silentGain
    );


    this.silentGain.connect(
      this.audioContext.destination
    );
  }


  private sendMicrophoneChunk(
    samples: Float32Array
  ): void {

    if (
      !this.socket ||
      this.socket.readyState !==
      WebSocket.OPEN
    ) {
      return;
    }


    if (
      !this.micEnabled()
    ) {
      return;
    }


    const context =
      this.audioContext;


    if (!context) {
      return;
    }


    /*
     * Gemini Live expects raw 16-bit PCM.
     * Resample browser audio to 16kHz.
     */
    const resampled =
      this.resampleTo16k(
        samples,
        context.sampleRate
      );


    const base64 =
      this.float32ToBase64(
        resampled
      );


    if (!base64) {
      return;
    }


    this.socket.send(
      JSON.stringify({
        realtimeInput: {
          audio: {
            data: base64,

            mimeType:
              'audio/pcm;rate=16000',
          },
        },
      })
    );
  }


  /* ============================================================
     AUDIO RESAMPLING
     ============================================================ */

  private resampleTo16k(
    input: Float32Array,
    inputRate: number
  ): Float32Array {

    const targetRate =
      16000;


    if (
      inputRate === targetRate
    ) {
      return input;
    }


    const ratio =
      inputRate / targetRate;


    const outputLength =
      Math.max(
        1,
        Math.floor(
          input.length / ratio
        )
      );


    const output =
      new Float32Array(
        outputLength
      );


    for (
      let i = 0;
      i < outputLength;
      i++
    ) {

      const position =
        i * ratio;


      const left =
        Math.floor(position);


      const right =
        Math.min(
          left + 1,
          input.length - 1
        );


      const weight =
        position - left;


      output[i] =
        input[left] *
        (1 - weight) +
        input[right] *
        weight;
    }


    return output;
  }


  /* ============================================================
     PLAY GEMINI PCM
     ============================================================ */

  private playPcm(
    base64: string
  ): void {

    const context =
      this.audioContext;


    if (!context) {
      return;
    }


    const bytes =
      this.base64ToArrayBuffer(
        base64
      );


    const sourceSamples =
      new Int16Array(bytes);


    if (
      sourceSamples.length === 0
    ) {
      return;
    }


    /*
     * Gemini Live audio output is 24kHz.
     */
    const buffer =
      context.createBuffer(
        1,
        sourceSamples.length,
        24000
      );


    const channel =
      buffer.getChannelData(0);


    for (
      let i = 0;
      i < sourceSamples.length;
      i++
    ) {
      channel[i] =
        sourceSamples[i] /
        32768;
    }


    const source =
      context.createBufferSource();


    source.buffer =
      buffer;


    source.connect(
      context.destination
    );


    source.onended =
      () => {
        this.outputSources
          .delete(source);
      };


    const startAt =
      Math.max(
        context.currentTime + 0.03,
        this.nextPlaybackTime
      );


    source.start(
      startAt
    );


    this.nextPlaybackTime =
      startAt +
      buffer.duration;


    this.outputSources.add(
      source
    );
  }


  private stopPlayback(): void {

    for (
      const source of
      this.outputSources
    ) {
      try {
        source.stop();
      } catch {
        // already stopped
      }
    }


    this.outputSources.clear();


    this.nextPlaybackTime =
      this.audioContext
        ?.currentTime || 0;
  }


  /* ============================================================
     TRANSCRIPT
     ============================================================ */

  private commitCurrentTurn(): void {

    this.finishCandidateTurn();


    const entries:
      VoiceTranscriptEntry[] =
      [];


    if (
      this.currentCandidateText.trim()
    ) {

      entries.push({
        speaker:
          'candidate',

        text:
          this.currentCandidateText.trim(),
      });
    }


    if (
      this.currentInterviewerText.trim()
    ) {

      entries.push({
        speaker:
          'interviewer',

        text:
          this.currentInterviewerText.trim(),
      });
    }


    if (entries.length) {

      this.transcript.update(
        (current) =>
          [
            ...current,
            ...entries,
          ].slice(-100)
      );
    }


    this.currentCandidateText =
      '';

    this.currentInterviewerText =
      '';

    this.liveCandidateText.set(
      ''
    );

    this.liveInterviewerText.set(
      ''
    );
  }


  private finishCandidateTurn(): void {

    if (
      this.candidateTurnStartedAt
    ) {

      this.candidateSpeechMs +=
        Date.now() -
        this.candidateTurnStartedAt;


      this.candidateTurnStartedAt =
        null;
    }
  }


  /* ============================================================
     FINISH INTERVIEW
     ============================================================ */

  async finish(): Promise<void> {

    /*
     * Capture any text currently being transcribed.
     */
    this.finishCandidateTurn();


    this.commitCurrentTurn();


    this.lockCandidateInput();


    this.stopConnection();


    this.status.set(
      'ended'
    );


    const candidateEntries =
      this.transcript()
        .filter(
          (entry) =>
            entry.speaker ===
            'candidate'
        );


    if (
      candidateEntries.length === 0
    ) {

      this.error.set(
        'Answer at least one question before ending the interview.'
      );

      return;
    }


    this.loading.set(true);

    this.error.set('');


    try {

      const results =
        await firstValueFrom(
          this.aiService.getVoiceResults({
            role:
              this.selectedRole(),

            skills:
              [...this.selectedSkills()],

            transcript:
              this.transcript(),

            speechStats:
              this.speechStats(),
          })
        );


      this.results.set(
        results
      );


      this.screen.set(
        'results'
      );

    } catch (err) {

      this.error.set(
        this.errorMessage(
          err,
          'Unable to generate the interview report.'
        )
      );

    } finally {

      this.loading.set(false);
    }
  }


  /* ============================================================
     RESTART
     ============================================================ */

  restart(): void {

    this.stopConnection();

    this.screen.set(
      'setup'
    );

    this.status.set(
      'idle'
    );

    this.liveText.set('');

    this.liveInterviewerText.set('');

    this.liveCandidateText.set('');

    this.transcript.set([]);

    this.results.set(null);

    this.error.set('');

    this.answerText.set('');

    this.codeText.set('');

    this.micEnabled.set(
      false
    );
  }


  /* ============================================================
     CLEANUP
     ============================================================ */

  ngOnDestroy(): void {
    this.stopConnection();
  }


  private stopConnection(): void {

    this.lockCandidateInput();

    this.stopPlayback();


    try {
      this.socket?.close();
    } catch {
      // ignore
    }


    this.socket =
      null;


    this.processor?.disconnect();

    this.microphone?.disconnect();

    this.silentGain?.disconnect();


    this.processor =
      null;

    this.microphone =
      null;

    this.silentGain =
      null;


    this.mediaStream
      ?.getTracks()
      .forEach(
        (track) =>
          track.stop()
      );


    this.mediaStream =
      null;
  }


  /* ============================================================
     SPEECH STATS
     ============================================================ */

  private speechStats():
    VoiceSpeechStats {

    const words =
      this.transcript()
        .filter(
          (entry) =>
            entry.speaker ===
            'candidate'
        )
        .flatMap(
          (entry) =>
            entry.text.match(
              /\b[\w']+\b/g
            ) || []
        );


    const fullText =
      words
        .join(' ')
        .toLowerCase();


    const fillerWords = [
      'um',
      'uh',
      'like',
      'basically',
      'actually',
      'you know',
    ].reduce<
      Record<string, number>
    >(
      (all, filler) => {

        const escaped =
          filler.replace(
            /\s+/g,
            '\\s+'
          );


        const expression =
          new RegExp(
            `\\b${escaped}\\b`,
            'g'
          );


        all[filler] =
          fullText.match(
            expression
          )?.length || 0;


        return all;
      },
      {}
    );


    const minutes =
      this.candidateSpeechMs /
      60000;


    return {
      candidateWords:
        words.length,

      wordsPerMinute:
        minutes > 0
          ? Math.round(
            words.length /
            minutes
          )
          : null,

      fillerWords,
    };
  }


  /* ============================================================
     HELPERS
     ============================================================ */

  private mergeText(
    existing: string,
    next: string
  ): string {

    const trimmed =
      next.trim();


    if (!trimmed) {
      return existing;
    }


    if (
      existing.endsWith(trimmed)
    ) {
      return existing;
    }


    if (
      trimmed.startsWith(existing)
    ) {
      return trimmed;
    }


    return (
      `${existing} ${trimmed}`
    ).trim();
  }


  private float32ToBase64(
    samples: Float32Array
  ): string {

    const bytes =
      new Uint8Array(
        samples.length * 2
      );


    const view =
      new DataView(
        bytes.buffer
      );


    for (
      let index = 0;
      index < samples.length;
      index++
    ) {

      const sample =
        Math.max(
          -1,
          Math.min(
            1,
            samples[index]
          )
        );


      view.setInt16(
        index * 2,
        sample * 0x7fff,
        true
      );
    }


    let binary = '';


    for (
      const byte of bytes
    ) {
      binary +=
        String.fromCharCode(
          byte
        );
    }


    return btoa(binary);
  }


  private base64ToArrayBuffer(
    base64: string
  ): ArrayBuffer {

    const binary =
      atob(base64);


    const bytes =
      new Uint8Array(
        binary.length
      );


    for (
      let i = 0;
      i < binary.length;
      i++
    ) {
      bytes[i] =
        binary.charCodeAt(i);
    }


    return bytes.buffer;
  }


  private errorMessage(
    error: unknown,
    fallback: string
  ): string {

    const apiError =
      error as {
        error?: {
          detail?: string;
          error?: string;
          message?: string;
        };

        message?: string;
      };


    return (
      apiError?.error?.detail ||
      apiError?.error?.error ||
      apiError?.error?.message ||
      apiError?.message ||
      fallback
    );
  }
}