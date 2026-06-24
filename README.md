# Rana Rahul Kumar — Cinematic Spatial Portfolio

A premium Angular 21 portfolio built with **spatial UI design** and **cinematic scroll choreography**. Built for Rana Rahul Kumar, Senior Full Stack Engineer (Angular × Java Spring Boot).

---

## ✦ Design language

- **Spatial UI**: layered depth, glassmorphism surfaces, floating shards, 3D tilt on hover, parallax that recedes/rushes with scroll
- **Cinematic movement**: GSAP `ScrollTrigger` pinning, word-by-word text reveals, blur-fade entrances, horizontal scroll for projects, scroll-progress-linked line fills, animated counters
- **Custom cursor** with contextual labels (magnetic hover, label hover, text cursor)
- **Lenis smooth scroll** for buttery inertia
- **Premium dark theme** with warm bronze-gold accent (`#d4a574`)
- **Loader sequence** with counter + bar reveal before content unveils
- Type system: `Instrument Serif` (display) × `Space Grotesk` (UI) × `JetBrains Mono` (meta)

---

## ✦ Tech stack

- **Angular 21** — standalone components, Signals, OnPush change detection
- **GSAP + ScrollTrigger** — cinematic scroll choreography
- **Lenis** — smooth inertial scrolling
- **SCSS** — design tokens, glass utilities, spatial layering
- TypeScript strict mode

---

## ✦ Sections

1. **Hero** — kinetic typography, parallax shards, floating "now" card
2. **About** — bio, education, animated stat counters
3. **Experience** — Digit Insurance trajectory with scroll-linked timeline progress
4. **Projects** — CoreStack horizontal pinned scroll (4 products + end card)
5. **Skills** — spatial 4-column grid with tilt + skill bars
6. **Achievements** — Top Gun, Wall of Awesomeness, Super Squad, Tech Titan
7. **Contact** — big kinetic CTA, magnetic email button, link grid

---

## ✦ Run it

```bash
# install deps
npm install

# dev server (http://localhost:4200)
npm start

# production build
npm run build
```

> Requires Node 20+ and Angular CLI 21 (`npm i -g @angular/cli@21` optional).

---

## ✦ File map

```
src/
├── app/
│   ├── app.component.ts          # root shell + loader orchestration
│   ├── app.config.ts             # providers (router, animations, zone)
│   ├── app.routes.ts
│   ├── components/
│   │   ├── loader/               # counter + bar preloader
│   │   ├── custom-cursor/        # magnetic contextual cursor
│   │   ├── navigation/           # sticky pill nav + progress bar
│   │   ├── hero/                 # kinetic title + parallax shards
│   │   ├── about/                # bio + animated counters
│   │   ├── experience/           # scroll-linked timeline
│   │   ├── projects/             # horizontal pinned scroll
│   │   ├── skills/               # spatial tilt grid
│   │   ├── achievements/         # award cards with magnetic hover
│   │   └── contact/              # final CTA
│   ├── directives/
│   │   ├── parallax.directive.ts     # scroll-speed transform
│   │   ├── reveal.directive.ts       # 5 reveal variants (rise/clip/scale/blur/split)
│   │   ├── magnetic.directive.ts     # cursor-magnetic pull
│   │   └── tilt.directive.ts         # 3D hover rotation
│   ├── services/
│   │   └── smooth-scroll.service.ts  # Lenis wrapper + signals
│   ├── data/
│   │   └── portfolio.data.ts         # all content (edit me!)
│   └── models/
│       └── portfolio.model.ts
├── styles.scss                   # design tokens, ambient bg, grain
├── index.html                    # fonts + meta
└── main.ts
```

---

## ✦ Customising

All content lives in **`src/app/data/portfolio.data.ts`** — edit that single file to update name, bio, experience, projects, skills, awards, and education. The UI re-renders automatically.

To change the accent color, edit `--accent` in **`src/styles.scss`**.

---

## ✦ Notes

- Custom cursor & magnetic effects auto-disable on touch devices
- `prefers-reduced-motion` is respected
- Keyboard arrows (↑ ↓) trigger smooth section jumps
- All animations are GPU-friendly (transform / opacity / filter only)

Built with care. — RRK
