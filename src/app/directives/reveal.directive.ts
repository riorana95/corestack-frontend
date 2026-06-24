import {
  Directive,
  ElementRef,
  input,
  afterNextRender,
  inject,
  DestroyRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * RevealDirective
 * ----------------
 * Cinematic reveal-on-scroll. Animates children (or self) with a
 * staggered, depth-aware entrance.
 *
 * Variants:
 *  - 'rise'      : translateY + opacity (default)
 *  - 'clip'      : clip-path reveal from bottom
 *  - 'scale'     : scale 0.94 → 1 + opacity
 *  - 'blur'      : filter blur(20px) → 0 + opacity
 *  - 'split'     : splits text by word and staggers them
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective {
  readonly variant = input<'rise' | 'clip' | 'scale' | 'blur' | 'split'>('rise', {
    alias: 'appReveal',
  });
  readonly stagger = input<number>(0.08);
  readonly delay = input<number>(0);
  readonly y = input<number>(40);
  readonly duration = input<number>(1.1);

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      requestAnimationFrame(() => this.setup());
    });
  }

  private setup(): void {
    const host = this.el.nativeElement;
    const variant = this.variant();

    let targets: Element[];
    if (variant === 'split') {
      targets = this.splitText(host);
    } else {
      const children = Array.from(host.querySelectorAll('[data-reveal-child]'));
      targets = children.length ? children : [host];
    }

    const fromVars: gsap.TweenVars = (() => {
      switch (variant) {
        case 'clip':
          return { opacity: 0, clipPath: 'inset(100% 0% 0% 0%)' };
        case 'scale':
          return { opacity: 0, scale: 0.94, filter: 'blur(8px)' };
        case 'blur':
          return { opacity: 0, filter: 'blur(20px)' };
        case 'split':
          return { opacity: 0, yPercent: 120, rotate: 4 };
        case 'rise':
        default:
          return { opacity: 0, y: this.y(), filter: 'blur(6px)' };
      }
    })();

    const toVars: gsap.TweenVars = {
      opacity: 1,
      y: 0,
      yPercent: 0,
      scale: 1,
      filter: 'blur(0px)',
      clipPath: 'inset(0% 0% 0% 0%)',
      rotate: 0,
      duration: this.duration(),
      ease: 'expo.out',
      stagger: this.stagger(),
      delay: this.delay(),
    };

    const tween = gsap.set(targets, fromVars);
    const st = ScrollTrigger.create({
      trigger: host,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(targets, toVars);
      },
    });

    this.destroyRef.onDestroy(() => {
      st.kill();
      tween.kill();
    });
  }

  private splitText(host: HTMLElement): HTMLElement[] {
    // wrap each word in a span with overflow hidden mask
    const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, null);
    const textNodes: Text[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      if (node.textContent?.trim()) textNodes.push(node as Text);
    }
    const wrapped: HTMLElement[] = [];

    for (const tn of textNodes) {
      const words = (tn.textContent ?? '').split(/(\s+)/);
      const frag = document.createDocumentFragment();
      for (const w of words) {
        if (!w) continue;
        if (/^\s+$/.test(w)) {
          frag.appendChild(document.createTextNode(' '));
          continue;
        }
        const mask = document.createElement('span');
        mask.className = 'reveal-word';
        const inner = document.createElement('span');
        inner.className = 'reveal-word__inner';
        inner.textContent = w;
        mask.appendChild(inner);
        frag.appendChild(mask);
        wrapped.push(inner);
      }
      tn.replaceWith(frag);
    }
    return wrapped;
  }
}
