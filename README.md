# ██████████████████████████████████████████
# ██  NEO-BRUTALISTA PORTFOLIO — DOCS v2  ██
# ██  React + Vite + TypeScript + CSS Mod ██
# ██████████████████████████████████████████

> Arquitectura inmersiva, animaciones de impacto, CSS Modules por componente.
> Cada sección tiene su propia animación, lógica y CSS encapsulado.

---

## ▸ 1. PALETA DE COLOR DEFINITIVA — "ACID CONCRETE"

El brutalismo auténtico usa UNA familia cromática fuerte con acento ácido.
Esta es la paleta más usada en portfolios brutalistas que ganan premios en Awwwards:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  NOMBRE          HEX         USO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  Void Black      #080808     Fondo global
  Deep Concrete   #111114     Fondo cards
  Acid Yellow     #E8FF00     ACENTO PRIMARIO (bordes, hovers, highlights)
  Electric Red    #FF1744     ACENTO SECUNDARIO (errores, urgencia, tags)
  Cyber Cyan      #00E5FF     ACENTO TERCIARIO (links, badges activos)
  Bone White      #F5F5F0     Texto principal
  Ash             #8A8A85     Texto secundario
  Dark Border     #1E1E22     Bordes sutiles
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**¿Por qué este esquema?**
- Negro profundo + amarillo ácido = máximo contraste brutalista
- El rojo eléctrico crea urgencia visual sin ser agresivo
- Cyan para profundidad y elementos tech
- Bone white > white puro: menos fatiga visual

---

## ▸ 2. IMAGEN DE FONDO RECOMENDADA

### Opción A — Textura Concreta (RECOMENDADA)
```
URL: https://unsplash.com/photos/gray-concrete-wall-texture-5IHz5WhosQE
Autor: Pawel Czerwinski en Unsplash
Búsqueda: "dark concrete texture brutalist"
```
Cómo usarla en el body:
```css
body {
  background-color: #080808;
  background-image:
    url('https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1920&q=60'),
    linear-gradient(rgba(8,8,8,0.92), rgba(8,8,8,0.92));
  background-blend-mode: multiply;
  background-size: 400px 400px;
  background-repeat: repeat;
}
```

### Opción B — Noise Grain Procedural (sin dependencia externa)
```css
/* Agregar al :root o body con SVG inline data URI */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 300px 300px;
}
```

### Opción C — Glitch Grid Lines (más brutalista)
```css
body {
  background-color: #080808;
  background-image:
    linear-gradient(rgba(232,255,0,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232,255,0,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}
```
**Combina las 3 opciones para máximo impacto.**

---

## ▸ 3. ARQUITECTURA COMPLETA DEL PROYECTO

```
portfolio/
│
├── public/
│   ├── fonts/
│   │   ├── Syne-Bold.woff2           ← Display font principal
│   │   ├── Syne-ExtraBold.woff2
│   │   └── JetBrainsMono-Regular.woff2 ← Mono font
│   ├── images/
│   │   ├── bg-concrete.jpg           ← Fondo textura
│   │   ├── og-image.png              ← Open Graph
│   │   └── projects/                 ← Screenshots proyectos
│   └── favicon.svg
│
├── src/
│   │
│   ├── styles/                       ← SOLO variables globales
│   │   ├── variables.css             ← Tokens de diseño
│   │   ├── reset.css                 ← CSS reset moderno
│   │   ├── globals.css               ← Body, html, ::selection
│   │   └── fonts.css                 ← @font-face declarations
│   │
│   ├── components/
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   └── Navbar.module.css ← CSS encapsulado
│   │   │   └── Footer/
│   │   │       ├── Footer.tsx
│   │   │       └── Footer.module.css
│   │   │
│   │   ├── ui/                       ← Componentes reutilizables
│   │   │   ├── Cursor/
│   │   │   │   ├── Cursor.tsx
│   │   │   │   └── Cursor.module.css
│   │   │   ├── GlitchText/
│   │   │   │   ├── GlitchText.tsx
│   │   │   │   └── GlitchText.module.css
│   │   │   ├── BrutalButton/
│   │   │   │   ├── BrutalButton.tsx
│   │   │   │   └── BrutalButton.module.css
│   │   │   ├── BrutalCard/
│   │   │   │   ├── BrutalCard.tsx
│   │   │   │   └── BrutalCard.module.css
│   │   │   ├── ScrollReveal/
│   │   │   │   ├── ScrollReveal.tsx
│   │   │   │   └── ScrollReveal.module.css
│   │   │   ├── NoiseOverlay/
│   │   │   │   ├── NoiseOverlay.tsx
│   │   │   │   └── NoiseOverlay.module.css
│   │   │   ├── ScrollProgress/
│   │   │   │   ├── ScrollProgress.tsx
│   │   │   │   └── ScrollProgress.module.css
│   │   │   ├── SectionLabel/          ← Tag "01 — SOBRE MÍ"
│   │   │   │   ├── SectionLabel.tsx
│   │   │   │   └── SectionLabel.module.css
│   │   │   └── Tooltip/
│   │   │       ├── Tooltip.tsx
│   │   │       └── Tooltip.module.css
│   │   │
│   │   ├── animations/               ← Wrappers de animación
│   │   │   ├── MagneticElement/
│   │   │   │   ├── MagneticElement.tsx
│   │   │   │   └── MagneticElement.module.css
│   │   │   ├── ParallaxText/
│   │   │   │   ├── ParallaxText.tsx
│   │   │   │   └── ParallaxText.module.css
│   │   │   ├── SplitTextReveal/
│   │   │   │   ├── SplitTextReveal.tsx
│   │   │   │   └── SplitTextReveal.module.css
│   │   │   └── CounterNumber/
│   │   │       ├── CounterNumber.tsx
│   │   │       └── CounterNumber.module.css
│   │   │
│   │   └── sections/                 ← Una carpeta = una sección
│   │       ├── Hero/
│   │       │   ├── Hero.tsx
│   │       │   ├── Hero.module.css
│   │       │   ├── HeroCanvas.tsx    ← Three.js background
│   │       │   └── HeroTypewriter.tsx
│   │       ├── About/
│   │       │   ├── About.tsx
│   │       │   ├── About.module.css
│   │       │   └── AboutStats.tsx
│   │       ├── Skills/
│   │       │   ├── Skills.tsx
│   │       │   ├── Skills.module.css
│   │       │   ├── SkillKey.tsx      ← Componente "tecla"
│   │       │   └── SkillCarousel.tsx ← Carrusel de logos
│   │       ├── Projects/
│   │       │   ├── Projects.tsx
│   │       │   ├── Projects.module.css
│   │       │   ├── ProjectCard.tsx
│   │       │   ├── ProjectModal.tsx  ← Modal al click
│   │       │   └── ProjectCarousel.tsx
│   │       ├── Experience/
│   │       │   ├── Experience.tsx
│   │       │   ├── Experience.module.css
│   │       │   └── TimelineItem.tsx
│   │       ├── Testimonials/         ← BONUS: Sección extra
│   │       │   ├── Testimonials.tsx
│   │       │   ├── Testimonials.module.css
│   │       │   └── TestimonialCarousel.tsx
│   │       └── Contact/
│   │           ├── Contact.tsx
│   │           ├── Contact.module.css
│   │           └── ContactForm.tsx
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts        ← IntersectionObserver custom
│   │   ├── useMagneticEffect.ts      ← Efecto magnético en mouse
│   │   ├── useSmoothScroll.ts        ← Lenis setup
│   │   ├── useMousePosition.ts       ← Track cursor global
│   │   ├── useWindowSize.ts          ← Responsive breakpoints
│   │   └── useActiveSection.ts       ← Sección activa en navbar
│   │
│   ├── data/
│   │   ├── projects.ts               ← Array de proyectos tipado
│   │   ├── skills.ts                 ← Array de habilidades
│   │   ├── experience.ts             ← Array de experiencia
│   │   └── testimonials.ts           ← Array de testimonios
│   │
│   ├── types/
│   │   └── index.ts                  ← Interfaces TypeScript
│   │
│   ├── utils/
│   │   ├── cn.ts                     ← clsx helper
│   │   └── gsap-utils.ts             ← GSAP helpers reutilizables
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── vite.config.ts
└── package.json
```

---

## ▸ 4. INSTALACIÓN — TODOS LOS PAQUETES

```bash
# Crear proyecto
npm create vite@latest portfolio -- --template react-ts
cd portfolio && npm install

# ════════════════════════════════════════
# 🎬 ANIMACIÓN — EL NÚCLEO
# ════════════════════════════════════════
npm install framer-motion              # Animación declarativa React
npm install gsap @gsap/react           # GSAP + ScrollTrigger + SplitText
npm install @studio-freight/lenis      # Smooth scroll de siguiente nivel

# ════════════════════════════════════════
# 🌐 3D / WEBGL — PARA EL HERO
# ════════════════════════════════════════
npm install three @react-three/fiber @react-three/drei   # Three.js en React
npm install @react-spring/three        # Spring physics para 3D

# ════════════════════════════════════════
# 🎠 CARRUSELES / SLIDERS
# ════════════════════════════════════════
npm install embla-carousel-react embla-carousel-autoplay   # El mejor carrusel
npm install swiper                     # Alternativa con más efectos

# ════════════════════════════════════════
# ✨ EFECTOS VISUALES
# ════════════════════════════════════════
npm install @tsparticles/react @tsparticles/slim          # Partículas
npm install react-tilt                 # Efecto perspectiva en cards
npm install vanilla-tilt               # Tilt sin React (más suave)
npm install react-parallax-tilt        # Versión React del tilt

# ════════════════════════════════════════
# 🔢 TEXTO Y TIPOGRAFÍA ANIMADA
# ════════════════════════════════════════
npm install split-type                 # Split letras para GSAP
npm install typewriter-effect          # Efecto typewriter
npm install react-scramble             # Texto scramble estilo Matrix

# ════════════════════════════════════════
# 📊 CONTADORES Y NÚMEROS
# ════════════════════════════════════════
npm install react-countup              # Animación de números

# ════════════════════════════════════════
# 🎯 INTERSECTION / SCROLL DETECTION
# ════════════════════════════════════════
npm install react-intersection-observer   # Hook para detectar en viewport

# ════════════════════════════════════════
# 🎨 ICONOS — MÚLTIPLES PACKS
# ════════════════════════════════════════
npm install lucide-react               # Iconos stroke modernos
npm install react-icons                # FA, MD, Si, Io, Ri, Bi, etc.
npm install @iconify/react             # 200k+ iconos

# ════════════════════════════════════════
# 🖱️ CURSOR
# ════════════════════════════════════════
npm install react-animated-cursor      # Cursor animado

# ════════════════════════════════════════
# 📬 FORMULARIO
# ════════════════════════════════════════
npm install react-hook-form            # Manejo de formularios
npm install @hookform/resolvers zod    # Validación con Zod
npm install emailjs-com                # Enviar emails sin backend

# ════════════════════════════════════════
# 🔔 NOTIFICACIONES
# ════════════════════════════════════════
npm install react-hot-toast            # Toast notifications

# ════════════════════════════════════════
# 🛠️ UTILITARIOS
# ════════════════════════════════════════
npm install clsx tailwind-merge        # Utility classnames
npm install react-use                  # Hooks útiles varios
npm install date-fns                   # Manejo de fechas
```

---

## ▸ 5. CONFIGURACIÓN GLOBAL CSS

### `src/styles/variables.css`
```css
:root {
  /* ── COLORES BASE ── */
  --c-void:       #080808;
  --c-concrete:   #111114;
  --c-card:       #16161A;
  --c-border:     #1E1E24;

  /* ── ACENTOS ÁCIDOS ── */
  --c-acid:       #E8FF00;   /* PRIMARIO — amarillo eléctrico */
  --c-red:        #FF1744;   /* SECUNDARIO — rojo brutal */
  --c-cyan:       #00E5FF;   /* TERCIARIO — cyan tech */
  --c-purple:     #BF5AF2;   /* BONUS — púrpura neón */

  /* ── TEXTO ── */
  --c-white:      #F5F5F0;
  --c-ash:        #8A8A85;
  --c-muted:      #3A3A3F;

  /* ── TIPOGRAFÍA ── */
  --font-display: 'Syne', sans-serif;          /* Headings brutales */
  --font-mono:    'JetBrains Mono', monospace; /* Código y tags */
  --font-body:    'DM Sans', sans-serif;       /* Body legible */
  --font-number:  'Bebas Neue', cursive;       /* Números grandes */

  /* ── ESPACIADO ── */
  --sp-xs:  4px;
  --sp-sm:  8px;
  --sp-md:  16px;
  --sp-lg:  32px;
  --sp-xl:  64px;
  --sp-2xl: 120px;
  --sp-3xl: 180px;
  --section-gap: clamp(80px, 15vw, 180px);
  --container:   min(1280px, 100% - 48px);
  --gutter:      clamp(16px, 5vw, 64px);

  /* ── EFECTOS BRUTALES ── */
  --shadow-acid:    4px 4px 0px var(--c-acid);
  --shadow-red:     4px 4px 0px var(--c-red);
  --shadow-cyan:    4px 4px 0px var(--c-cyan);
  --shadow-lg-acid: 8px 8px 0px var(--c-acid);
  --border-w:       2px;
  --border-acid:    var(--border-w) solid var(--c-acid);
  --border-red:     var(--border-w) solid var(--c-red);
  --border-subtle:  1px solid var(--c-border);

  /* ── EASING ── */
  --ease-brutal:  cubic-bezier(0.77, 0, 0.175, 1);
  --ease-bounce:  cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-elastic: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth:  cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* ── DURACIÓN ── */
  --dur-fast: 150ms;
  --dur-mid:  400ms;
  --dur-slow: 700ms;
  --dur-epic: 1200ms;

  /* ── Z-INDEX ── */
  --z-bg:      -1;
  --z-base:     1;
  --z-card:    10;
  --z-modal:  100;
  --z-nav:    200;
  --z-cursor: 999;
}
```

### `src/styles/globals.css`
```css
@import './variables.css';
@import './reset.css';
@import './fonts.css';

html {
  font-size: 16px;
  scroll-behavior: auto; /* Lenis maneja el scroll */
}

body {
  font-family: var(--font-body);
  background-color: var(--c-void);
  color: var(--c-white);
  line-height: 1.6;
  overflow-x: hidden;
  cursor: none; /* cursor custom */

  /* ── FONDO NOISE + GRID ── */
  background-image:
    linear-gradient(rgba(232,255,0,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(232,255,0,0.025) 1px, transparent 1px),
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 60px 60px, 60px 60px, 300px 300px;
  background-repeat: repeat, repeat, repeat;
}

/* Noise overlay oscurece el grid donde sea necesario */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: var(--z-bg);
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 400px 400px;
  animation: noiseShift 8s steps(2) infinite;
}

@keyframes noiseShift {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-10px, 5px); }
  50%  { transform: translate(5px, -10px); }
  75%  { transform: translate(-5px, 10px); }
  100% { transform: translate(0, 0); }
}

::selection {
  background: var(--c-acid);
  color: var(--c-void);
}

::-webkit-scrollbar       { width: 4px; }
::-webkit-scrollbar-track { background: var(--c-void); }
::-webkit-scrollbar-thumb { background: var(--c-acid); }

.container {
  width: var(--container);
  margin-inline: auto;
}

.section {
  padding-block: var(--section-gap);
  position: relative;
}
```

---

## ▸ 6. SECCIÓN: HERO (Inmersivo 3D + WebGL)

### Concepto: "WARP ROOM"
El hero simula entrar a un túnel/portal en 3D. Mientras haces scroll, el texto se acerca
y los elementos 3D reaccionan. El nombre hace glitch. Hay un fondo de partículas/malla 3D.
El cursor deja una estela luminosa.

### `Hero.module.css`
```css
.hero {
  position: relative;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

/* Canvas 3D de fondo */
.canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Overlay oscuro gradiente sobre el canvas */
.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(
    ellipse 80% 60% at 50% 50%,
    transparent 0%,
    rgba(8, 8, 8, 0.6) 60%,
    rgba(8, 8, 8, 0.95) 100%
  );
}

.content {
  position: relative;
  z-index: 2;
  padding: 0 var(--gutter);
  max-width: var(--container);
  margin-inline: auto;
  width: 100%;
}

/* ── EYEBROW LINE ── */
.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: clamp(0.6rem, 1.2vw, 0.75rem);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--c-acid);
  margin-bottom: 24px;
  opacity: 0;
  transform: translateY(20px);
}

.eyebrow.animate {
  animation: fadeSlideUp 0.8s var(--ease-brutal) 0.2s forwards;
}

.statusDot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--c-acid);
  box-shadow: 0 0 8px var(--c-acid), 0 0 20px var(--c-acid);
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 6px var(--c-acid); opacity: 1; }
  50%       { box-shadow: 0 0 20px var(--c-acid), 0 0 40px var(--c-acid); opacity: 0.7; }
}

/* ── NOMBRE PRINCIPAL ── */
.nameWrap {
  overflow: hidden;
  margin-bottom: -8px;
}

.name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3.5rem, 13vw, 12rem);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  color: var(--c-white);
  /* Efecto outline en hover */
  transition: color 300ms ease;
  display: block;
  transform: translateY(110%);
}

.name.animate {
  animation: slideUpClip 1s var(--ease-brutal) 0.3s forwards;
}

/* Segunda línea del nombre: color ácido o stroke */
.nameStroke {
  -webkit-text-stroke: 2px var(--c-acid);
  color: transparent;
  transform: translateY(110%);
}

.nameStroke.animate {
  animation: slideUpClip 1s var(--ease-brutal) 0.45s forwards;
}

@keyframes slideUpClip {
  from { transform: translateY(110%); }
  to   { transform: translateY(0); }
}

/* ── SEPARADOR ── */
.divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--c-acid), transparent);
  margin-block: 24px;
  transform: scaleX(0);
  transform-origin: left;
}

.divider.animate {
  animation: scaleInX 0.8s var(--ease-brutal) 0.7s forwards;
}

@keyframes scaleInX {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}

/* ── BOTTOM ROW ── */
.bottomRow {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  opacity: 0;
}

.bottomRow.animate {
  animation: fadeSlideUp 0.8s var(--ease-brutal) 0.9s forwards;
}

.role {
  font-family: var(--font-mono);
  font-size: clamp(0.7rem, 1.5vw, 0.9rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-ash);
  max-width: 320px;
  line-height: 1.8;
}

.roleHighlight {
  color: var(--c-acid);
  font-weight: 700;
}

/* ── SCROLL INDICATOR ── */
.scrollIndicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-ash);
  cursor: pointer;
}

.scrollLine {
  width: 1px;
  height: 60px;
  background: linear-gradient(var(--c-acid), transparent);
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%   { transform: scaleY(0); transform-origin: top; }
  50%  { transform: scaleY(1); transform-origin: top; }
  51%  { transform: scaleY(1); transform-origin: bottom; }
  100% { transform: scaleY(0); transform-origin: bottom; }
}

/* ── HERO NUMBER ── */
.heroNum {
  font-family: var(--font-number);
  font-size: clamp(6rem, 20vw, 18rem);
  position: absolute;
  right: var(--gutter);
  bottom: -30px;
  color: transparent;
  -webkit-text-stroke: 1px rgba(232,255,0,0.06);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
  z-index: 1;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### `Hero.tsx` — Estructura
```tsx
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Stars, Float } from '@react-three/drei'
import { GlitchText } from '@/components/ui/GlitchText'
import { MagneticElement } from '@/components/animations/MagneticElement'
import { BrutalButton } from '@/components/ui/BrutalButton'
import { ParallaxText } from '@/components/animations/ParallaxText'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './Hero.module.css'

// Componente 3D de fondo
const HeroBackground3D = () => (
  <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
    <Stars
      radius={100}
      depth={50}
      count={800}
      factor={4}
      saturation={0}
      fade
      speed={0.5}
    />
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      {/* Grid 3D brutalista */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshBasicMaterial
          color="#E8FF00"
          wireframe
          transparent
          opacity={0.04}
        />
      </mesh>
    </Float>
  </Canvas>
)

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef })
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  useGSAP(() => {
    // Revelar elementos con GSAP stagger
    gsap.from('.hero-char', {
      y: '120%',
      opacity: 0,
      duration: 1,
      stagger: 0.04,
      ease: 'power4.out',
      delay: 0.4
    })
  })

  return (
    <section ref={heroRef} className={styles.hero} id="inicio">
      {/* Canvas 3D */}
      <div className={styles.canvas}>
        <HeroBackground3D />
      </div>
      <div className={styles.overlay} />

      <motion.div
        style={{ y, opacity }}
        className={styles.content}
      >
        {/* Eyebrow */}
        <div className={`${styles.eyebrow} ${styles.animate}`}>
          <span className={styles.statusDot} />
          <span>Disponible para proyectos</span>
          <span>—</span>
          <span>Lima, Perú</span>
          <span>—</span>
          <span>2025</span>
        </div>

        {/* Nombre con Glitch */}
        <div className={styles.nameWrap}>
          <GlitchText text="TU" className={styles.name} />
        </div>
        <div className={styles.nameWrap}>
          <GlitchText text="NOMBRE" className={`${styles.name} ${styles.nameStroke}`} />
        </div>

        <div className={`${styles.divider} ${styles.animate}`} />

        <div className={`${styles.bottomRow} ${styles.animate}`}>
          <div className={styles.role}>
            <span className={styles.roleHighlight}>FULL-STACK DEVELOPER</span>
            <br />
            DISEÑANDO EXPERIENCIAS QUE ROMPEN<br />
            LO CONVENCIONAL
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <MagneticElement>
              <BrutalButton variant="acid" href="#proyectos">
                VER TRABAJO
              </BrutalButton>
            </MagneticElement>
            <MagneticElement>
              <BrutalButton variant="outline" href="#contacto">
                CONTACTAR
              </BrutalButton>
            </MagneticElement>
          </div>

          <div className={styles.scrollIndicator} onClick={() => scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <span className={styles.scrollLine} />
            <span>SCROLL</span>
          </div>
        </div>
      </motion.div>

      {/* Número decorativo de fondo */}
      <span className={styles.heroNum}>01</span>

      {/* Marquee debajo del hero */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3 }}>
        <ParallaxText direction="left">
          FULL-STACK DEVELOPER ★ REACT ★ NODE.JS ★ UI/UX ★ TYPESCRIPT
        </ParallaxText>
      </div>
    </section>
  )
}
```

---

## ▸ 7. SECCIÓN: ABOUT (Asimétrica con tilt 3D)

### Concepto: "BLUEPRINT"
Layout en dos columnas asimétricas. A la izquierda: texto con reveal letra por letra.
A la derecha: foto con borde brutal + efecto tilt 3D + stats animados.
Una línea decorativa vertical separa las columnas.

### `About.module.css`
```css
.about {
  position: relative;
  overflow: hidden;
}

/* ── GRID ASIMÉTRICO ── */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(40px, 8vw, 100px);
  align-items: center;
}

@media (max-width: 768px) {
  .grid { grid-template-columns: 1fr; }
}

/* ── NÚMERO DE SECCIÓN GIGANTE ── */
.sectionBg {
  position: absolute;
  font-family: var(--font-number);
  font-size: clamp(8rem, 25vw, 22rem);
  color: transparent;
  -webkit-text-stroke: 1px rgba(232,255,0,0.04);
  top: -60px;
  left: -20px;
  user-select: none;
  pointer-events: none;
  line-height: 1;
}

/* ── COLUMNA TEXTO ── */
.textCol {
  position: relative;
}

.sectionTag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-acid);
  border: 1px solid var(--c-acid);
  padding: 6px 12px;
  margin-bottom: 32px;
}

.headline {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: 24px;
}

.headlineAccent { color: var(--c-acid); }

.body {
  font-size: clamp(0.9rem, 1.5vw, 1.05rem);
  color: var(--c-ash);
  line-height: 1.8;
  max-width: 48ch;
  margin-bottom: 40px;
}

.bodyHighlight {
  color: var(--c-white);
  font-weight: 600;
}

/* ── STATS ROW ── */
.statsRow {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--c-border);
  border: 1px solid var(--c-border);
  margin-top: 40px;
}

.statItem {
  background: var(--c-void);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.statNumber {
  font-family: var(--font-number);
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--c-acid);
  line-height: 1;
  letter-spacing: -0.02em;
}

.statLabel {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-ash);
}

/* ── COLUMNA IMAGEN ── */
.imageCol {
  position: relative;
}

.imageWrap {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 420px;
}

/* Borde brutal con sombra dura */
.imageFrame {
  position: relative;
  border: var(--border-acid);
  box-shadow: var(--shadow-lg-acid);
  transform-style: preserve-3d;
  /* Tilt via JS */
}

.imageFrame img {
  display: block;
  width: 100%;
  filter: grayscale(30%) contrast(1.1);
  transition: filter 400ms ease;
}

.imageFrame:hover img {
  filter: grayscale(0%) contrast(1);
}

/* Decoración: etiqueta sobre la imagen */
.imageTag {
  position: absolute;
  bottom: -12px;
  left: -12px;
  background: var(--c-acid);
  color: var(--c-void);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 8px 14px;
  z-index: 2;
}

/* Cruz decorativa */
.cross {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  color: var(--c-acid);
}

.cross::before, .cross::after {
  content: '';
  position: absolute;
  background: var(--c-acid);
}

.cross::before {
  width: 2px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.cross::after {
  width: 100%;
  height: 2px;
  top: 50%;
  transform: translateY(-50%);
}

/* Línea vertical decorativa */
.vertLine {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(transparent, var(--c-acid), transparent);
  transform: translateX(-50%);
  opacity: 0.15;
}
```

---

## ▸ 8. SECCIÓN: SKILLS (Carrusel inmersivo + Grid teclado)

### Concepto: "COMMAND CENTER"
Dos bloques: arriba un grid de "teclas" brutalistas que responden al hover con efecto press.
Abajo un carrusel infinito de logos de tecnologías con Embla Carousel.
Un visualizador tipo radar/sonar con los niveles de habilidad.

### `Skills.module.css`
```css
.skills { overflow: hidden; }

/* ── HEADING BRUTAL ── */
.heading {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2rem, 6vw, 5rem);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: 16px;
}

/* ── CARRUSEL DE LOGOS ── */
.carouselWrap {
  position: relative;
  margin-inline: calc(-1 * var(--gutter));
  overflow: hidden;
  border-top: var(--border-acid);
  border-bottom: var(--border-acid);
  padding-block: 20px;
  background: var(--c-concrete);
  margin-block: 60px;
}

/* Fade edges */
.carouselWrap::before,
.carouselWrap::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 120px;
  z-index: 2;
  pointer-events: none;
}

.carouselWrap::before {
  left: 0;
  background: linear-gradient(90deg, var(--c-void), transparent);
}

.carouselWrap::after {
  right: 0;
  background: linear-gradient(-90deg, var(--c-void), transparent);
}

.carouselTrack {
  display: flex;
  gap: 48px;
  align-items: center;
  animation: logoScroll 20s linear infinite;
  width: max-content;
}

.carouselTrack:hover { animation-play-state: paused; }

@keyframes logoScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.logoItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0.4;
  transition: opacity 300ms ease, transform 300ms ease;
  cursor: default;
  min-width: 80px;
}

.logoItem:hover {
  opacity: 1;
  transform: scale(1.15);
}

.logoIcon {
  font-size: 32px;
  line-height: 1;
}

.logoName {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-ash);
  text-align: center;
}

/* ── GRID DE SKILLS (TECLADO) ── */
.keyGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 4px;
  margin-block: 60px;
}

.key {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 12px;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  cursor: default;
  transition:
    border-color 200ms ease,
    box-shadow 200ms ease,
    transform 100ms ease,
    background 200ms ease;
  aspect-ratio: 1;
  overflow: hidden;
}

/* Efecto "tecla presionada" */
.key:hover {
  border-color: var(--c-acid);
  box-shadow: 0 4px 0 var(--c-acid);
  transform: translateY(-4px);
  background: rgba(232, 255, 0, 0.04);
}

.key:active {
  transform: translateY(0);
  box-shadow: 0 0px 0 var(--c-acid);
}

/* Borde color dinámico por categoría */
.key[data-cat="frontend"] { --key-color: var(--c-cyan); }
.key[data-cat="backend"]  { --key-color: var(--c-red); }
.key[data-cat="devops"]   { --key-color: var(--c-purple); }
.key[data-cat="design"]   { --key-color: var(--c-acid); }

.key:hover { border-color: var(--key-color, var(--c-acid)); }

.keyIcon  { font-size: 28px; }
.keyName  {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-ash);
  text-align: center;
}

/* Indicador de nivel (dot) */
.keyLevel {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
}
.keyLevel[data-level="senior"] { background: var(--c-acid); }
.keyLevel[data-level="mid"]    { background: var(--c-cyan); }
.keyLevel[data-level="junior"] { background: var(--c-red); }
```

---

## ▸ 9. SECCIÓN: PROJECTS (Carrusel fullscreen + Modal)

### Concepto: "GALLERY WALL"
Cards grandes en carrusel horizontal. Cada card ocupa ~70vw.
Click → abre modal fullscreen con animación de scale-up desde la card.
Hover sobre card → preview con efecto parallax en la imagen.
Las cards tienen número de proyecto superpuesto estilo editorial.

### `Projects.module.css`
```css
.projects { overflow: hidden; }

/* ── CARRUSEL HORIZONTAL ── */
.carouselOuter {
  position: relative;
  margin-inline: calc(-1 * var(--gutter));
}

/* Embla carousel */
.embla            { overflow: hidden; }
.emblaContainer   { display: flex; gap: 20px; padding-inline: var(--gutter); }
.emblaSlide       { flex: 0 0 min(700px, 72vw); position: relative; }

/* ── PROJECT CARD ── */
.card {
  position: relative;
  height: clamp(380px, 55vh, 580px);
  border: var(--border-acid);
  overflow: hidden;
  cursor: pointer;
  background: var(--c-card);
  box-shadow: var(--shadow-acid);
  transition: box-shadow 300ms ease, transform 300ms var(--ease-bounce);
}

.card:hover {
  box-shadow: var(--shadow-lg-acid);
  transform: translate(-3px, -3px);
}

/* Imagen de fondo con overlay */
.cardImage {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: grayscale(60%) brightness(0.4);
  transition: transform 500ms var(--ease-smooth), filter 500ms ease;
}

.card:hover .cardImage {
  transform: scale(1.08);
  filter: grayscale(0%) brightness(0.3);
}

/* Número gigante superpuesto */
.cardNum {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: var(--font-number);
  font-size: clamp(5rem, 10vw, 8rem);
  color: transparent;
  -webkit-text-stroke: 1px rgba(232,255,0,0.15);
  line-height: 1;
  z-index: 1;
  user-select: none;
}

/* Contenido inferior */
.cardContent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  z-index: 2;
  background: linear-gradient(transparent, rgba(8,8,8,0.95) 50%);
  transform: translateY(0);
  transition: transform 400ms var(--ease-brutal);
}

.cardTag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-acid);
  margin-bottom: 8px;
}

.cardTitle {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.4rem, 3vw, 2rem);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
  color: var(--c-white);
}

.cardDesc {
  font-size: 0.85rem;
  color: var(--c-ash);
  line-height: 1.6;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 400ms ease 100ms, transform 400ms ease 100ms;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card:hover .cardDesc {
  opacity: 1;
  transform: translateY(0);
}

.techRow {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
}

.techTag {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  padding: 3px 8px;
  border: 1px solid rgba(232,255,0,0.3);
  color: var(--c-acid);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

/* Arrow CTA */
.cardArrow {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 36px;
  height: 36px;
  border: var(--border-acid);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--c-acid);
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 300ms ease, transform 300ms ease;
  z-index: 3;
}

.card:hover .cardArrow {
  opacity: 1;
  transform: translateX(0);
}

/* ── CONTROLES CARRUSEL ── */
.controls {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
  padding-inline: var(--gutter);
}

.arrowBtn {
  width: 48px;
  height: 48px;
  border: var(--border-acid);
  background: transparent;
  color: var(--c-acid);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 200ms ease, box-shadow 200ms ease, transform 200ms ease;
}

.arrowBtn:hover {
  background: var(--c-acid);
  color: var(--c-void);
  box-shadow: var(--shadow-acid);
  transform: translate(-2px, -2px);
}

.progressBar {
  flex: 1;
  height: 2px;
  background: var(--c-border);
  position: relative;
  overflow: hidden;
}

.progressFill {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  background: var(--c-acid);
  transition: width 400ms var(--ease-brutal);
}

/* ── MODAL ── */
.modal {
  position: fixed;
  inset: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modalBackdrop {
  position: absolute;
  inset: 0;
  background: rgba(8, 8, 8, 0.96);
  backdrop-filter: blur(8px);
}

.modalContent {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 860px;
  max-height: 90dvh;
  background: var(--c-card);
  border: var(--border-acid);
  box-shadow: 12px 12px 0px var(--c-acid);
  overflow-y: auto;
  padding: 48px;
}

.modalClose {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border: var(--border-acid);
  background: transparent;
  color: var(--c-acid);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: background 200ms ease;
}

.modalClose:hover {
  background: var(--c-acid);
  color: var(--c-void);
}
```

---

## ▸ 10. SECCIÓN: EXPERIENCE (Timeline animado con GSAP)

### Concepto: "MISSION LOG"
Timeline vertical con línea ácida. Cada ítem "cae" con scroll usando ScrollTrigger.
Las fechas quedan fijas (sticky) mientras el contenido scrollea.
Efecto de "typing" en las descripciones cuando entran al viewport.

### `Experience.module.css`
```css
.experience { position: relative; }

/* ── TIMELINE CONTAINER ── */
.timeline {
  position: relative;
  padding-left: 48px;
  margin-top: 60px;
}

/* Línea vertical izquierda */
.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--c-acid) 0%,
    var(--c-acid) var(--progress, 0%),
    var(--c-border) var(--progress, 0%)
  );
  transition: --progress 100ms linear;
}

/* ── ITEM ── */
.item {
  position: relative;
  padding-bottom: 60px;
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s var(--ease-brutal), transform 0.6s var(--ease-brutal);
}

.item.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Punto en la línea */
.dot {
  position: absolute;
  left: -55px;
  top: 6px;
  width: 14px;
  height: 14px;
  border: 2px solid var(--c-acid);
  background: var(--c-void);
  transition: background 300ms ease;
}

.item.visible .dot { background: var(--c-acid); }

/* Línea horizontal del dot */
.dot::after {
  content: '';
  position: absolute;
  right: -24px;
  top: 50%;
  width: 24px;
  height: 1px;
  background: var(--c-acid);
  transform: translateY(-50%);
}

/* Periodo de fechas */
.period {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-acid);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.periodBadge {
  background: rgba(232,255,0,0.08);
  border: 1px solid rgba(232,255,0,0.2);
  padding: 2px 8px;
  font-size: 0.6rem;
}

.company {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  text-transform: uppercase;
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.role {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--c-ash);
  letter-spacing: 0.05em;
  margin-bottom: 16px;
}

.achievements {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.achievement {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 0.9rem;
  color: var(--c-ash);
  line-height: 1.6;
}

.achievement::before {
  content: '▸';
  color: var(--c-acid);
  flex-shrink: 0;
  margin-top: 2px;
}
```

---

## ▸ 11. SECCIÓN: SKILLS CARRUSEL (Embla React)

```tsx
// src/components/sections/Skills/SkillCarousel.tsx
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SiReact, SiTypescript, SiNodedotjs, SiPython,
         SiDocker, SiPostgresql, SiFigma, SiAmazonaws,
         SiNextdotjs, SiGraphql, SiRedis, SiMongodb } from 'react-icons/si'
import styles from './Skills.module.css'

const techList = [
  { icon: SiReact,       name: 'React',      color: '#61DAFB' },
  { icon: SiTypescript,  name: 'TypeScript', color: '#3178C6' },
  { icon: SiNodedotjs,   name: 'Node.js',    color: '#339933' },
  { icon: SiNextdotjs,   name: 'Next.js',    color: '#ffffff' },
  { icon: SiPython,      name: 'Python',     color: '#3776AB' },
  { icon: SiDocker,      name: 'Docker',     color: '#2496ED' },
  { icon: SiPostgresql,  name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiFigma,       name: 'Figma',      color: '#F24E1E' },
  { icon: SiAmazonaws,   name: 'AWS',        color: '#FF9900' },
  { icon: SiGraphql,     name: 'GraphQL',    color: '#E10098' },
  { icon: SiRedis,       name: 'Redis',      color: '#DC382D' },
  { icon: SiMongodb,     name: 'MongoDB',    color: '#47A248' },
]

// Duplicamos para efecto infinito
const doubled = [...techList, ...techList]

export const SkillCarousel = () => {
  // CSS Marquee simple (más eficiente que Embla para esto)
  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselTrack}>
        {doubled.map((tech, i) => (
          <div key={i} className={styles.logoItem}>
            <tech.icon
              className={styles.logoIcon}
              style={{ color: tech.color, fontSize: 36 }}
            />
            <span className={styles.logoName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## ▸ 12. COMPONENTE: BRUTAL BUTTON

### `BrutalButton.module.css`
```css
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  outline: 0;
  transition:
    transform 150ms var(--ease-brutal),
    box-shadow 150ms var(--ease-brutal);
  white-space: nowrap;
}

/* Sombra "levantada" */
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
}

/* ── VARIANTES ── */
.acid {
  background: var(--c-acid);
  color: var(--c-void);
  box-shadow: 4px 4px 0px var(--c-void);
}

.acid:hover {
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0px var(--c-void);
}

.acid:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--c-void);
}

.outline {
  background: transparent;
  color: var(--c-acid);
  border: var(--border-acid);
  box-shadow: 4px 4px 0px var(--c-acid);
}

.outline:hover {
  background: rgba(232,255,0,0.06);
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0px var(--c-acid);
}

.outline:active {
  transform: translate(2px, 2px);
  box-shadow: 0px 0px 0px var(--c-acid);
}

.red {
  background: transparent;
  color: var(--c-red);
  border: var(--border-red);
  box-shadow: var(--shadow-red);
}

.red:hover {
  background: rgba(255,23,68,0.08);
  transform: translate(-3px, -3px);
  box-shadow: 7px 7px 0px var(--c-red);
}

/* Icono flecha */
.arrow {
  transition: transform 250ms var(--ease-bounce);
}

.btn:hover .arrow {
  transform: translateX(4px);
}
```

### `BrutalButton.tsx`
```tsx
import { ArrowRight } from 'lucide-react'
import styles from './BrutalButton.module.css'
import { clsx } from 'clsx'

type Variant = 'acid' | 'outline' | 'red'

interface Props {
  children: React.ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  showArrow?: boolean
  className?: string
}

export const BrutalButton = ({
  children,
  variant = 'acid',
  href,
  onClick,
  showArrow = true,
  className,
}: Props) => {
  const cls = clsx(styles.btn, styles[variant], className)

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {showArrow && <ArrowRight size={14} className={styles.arrow} />}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
      {showArrow && <ArrowRight size={14} className={styles.arrow} />}
    </button>
  )
}
```

---

## ▸ 13. COMPONENTE: GLITCH TEXT (Mejorado)

### `GlitchText.module.css`
```css
.glitch {
  position: relative;
  display: inline-block;
}

/* Las capas pseudo-elementos */
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font: inherit;
  pointer-events: none;
}

/* Estado activo (hover o por clase) */
.glitch.active::before {
  color: var(--c-red);
  animation: glitchLayer1 0.35s steps(2) infinite;
  clip-path: polygon(0 15%, 100% 15%, 100% 40%, 0 40%);
}

.glitch.active::after {
  color: var(--c-cyan);
  animation: glitchLayer2 0.35s steps(2) infinite 0.08s;
  clip-path: polygon(0 55%, 100% 55%, 100% 80%, 0 80%);
}

@keyframes glitchLayer1 {
  0%   { transform: translate(-4px, 0); }
  33%  { transform: translate(4px, 2px); }
  66%  { transform: translate(-2px, -2px); }
  100% { transform: translate(0, 0); }
}

@keyframes glitchLayer2 {
  0%   { transform: translate(4px, 0); }
  33%  { transform: translate(-4px, 1px); }
  66%  { transform: translate(2px, -1px); }
  100% { transform: translate(0, 0); }
}

/* ── VARIANTE AUTOMÁTICA (loop sin hover) ── */
.glitch.autoGlitch::before {
  color: var(--c-red);
  animation: glitchLayer1 0.35s steps(2) infinite;
  clip-path: polygon(0 20%, 100% 20%, 100% 45%, 0 45%);
  animation-delay: 0s;
  opacity: 0;
}

.glitch.autoGlitch::after {
  color: var(--c-cyan);
  animation: glitchLayer2 0.35s steps(2) infinite 0.1s;
  clip-path: polygon(0 60%, 100% 60%, 100% 85%, 0 85%);
  opacity: 0;
}

/* Cada 4s hay un "burst" de glitch */
@keyframes glitchBurst {
  0%, 85%  { opacity: 0; }
  86%, 95% { opacity: 1; }
  100%     { opacity: 0; }
}

.glitch.autoGlitch::before,
.glitch.autoGlitch::after {
  animation:
    glitchLayer1 0.35s steps(2) infinite,
    glitchBurst 4s ease-in-out infinite;
}
```

---

## ▸ 14. COMPONENTE: CURSOR CUSTOM

### `Cursor.module.css`
```css
.cursorDot {
  position: fixed;
  top: 0; left: 0;
  width: 6px;
  height: 6px;
  background: var(--c-acid);
  border-radius: 0; /* Brutalista: cuadrado */
  pointer-events: none;
  z-index: var(--z-cursor);
  transform: translate(-50%, -50%);
  transition: width 200ms ease, height 200ms ease;
}

.cursorRing {
  position: fixed;
  top: 0; left: 0;
  width: 28px;
  height: 28px;
  border: 1px solid var(--c-acid);
  border-radius: 0; /* Cuadrado brutalista */
  pointer-events: none;
  z-index: calc(var(--z-cursor) - 1);
  transform: translate(-50%, -50%);
  transition: width 250ms ease, height 250ms ease, border-color 250ms ease;
  mix-blend-mode: difference;
}

/* Estado hover */
.cursorDot.hover {
  width: 4px;
  height: 4px;
  background: var(--c-acid);
}

.cursorRing.hover {
  width: 48px;
  height: 48px;
  border-color: var(--c-acid);
}

/* Estado click */
.cursorDot.clicking {
  transform: translate(-50%, -50%) scale(0.6);
}

.cursorRing.clicking {
  width: 20px;
  height: 20px;
}
```

### `Cursor.tsx`
```tsx
import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './Cursor.module.css'

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35 })
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35 })
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 25 })
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const enter = () => setIsHovering(true)
    const leave = () => setIsHovering(false)
    const down  = () => setIsClicking(true)
    const up    = () => setIsClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [])

  const cls = (base: string, hover: string, click: string) =>
    [base, isHovering ? hover : '', isClicking ? click : ''].join(' ')

  return (
    <>
      <motion.div
        className={cls(styles.cursorDot, styles.hover, styles.clicking)}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className={cls(styles.cursorRing, styles.hover, styles.clicking)}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}
```

---

## ▸ 15. COMPONENTE: SCROLL REVEAL (Universal)

### `ScrollReveal.tsx`
```tsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate'

const getVariants = (direction: Direction, distance = 60) => ({
  hidden: {
    opacity: 0,
    y:       direction === 'up'    ? distance  : direction === 'down'  ? -distance : 0,
    x:       direction === 'left'  ? -distance : direction === 'right' ? distance  : 0,
    scale:   direction === 'scale' ? 0.85 : 1,
    rotate:  direction === 'rotate' ? -5 : 0,
  },
  visible: {
    opacity: 1,
    y: 0, x: 0, scale: 1, rotate: 0,
    transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
  },
})

interface Props {
  children: ReactNode
  direction?: Direction
  delay?: number
  distance?: number
  className?: string
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  distance,
  className,
}: Props) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const variants = getVariants(direction, distance)

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## ▸ 16. HOOK: SMOOTH SCROLL + GSAP

### `src/hooks/useSmoothScroll.ts`
```ts
import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    })

    lenisInstance = lenis

    // Sincronizar con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

// Helper para scroll programático
export const scrollTo = (target: string | number) => {
  if (lenisInstance) lenisInstance.scrollTo(target)
}
```

---

## ▸ 17. SECCIÓN: CONTACT (Formulario brutalista)

### `Contact.module.css`
```css
.contact { position: relative; overflow: hidden; }

/* ── HEADING GIGANTE ── */
.bigText {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3rem, 10vw, 9rem);
  text-transform: uppercase;
  letter-spacing: -0.04em;
  line-height: 0.9;
  -webkit-text-stroke: 1px var(--c-acid);
  color: transparent;
  user-select: none;
  pointer-events: none;
  position: absolute;
  top: var(--section-gap);
  left: var(--gutter);
  opacity: 0.06;
}

/* ── EMAIL ENLACE ── */
.emailLink {
  display: block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1.4rem, 4vw, 3.5rem);
  text-transform: uppercase;
  letter-spacing: -0.03em;
  color: var(--c-white);
  text-decoration: none;
  border-bottom: 2px solid var(--c-acid);
  padding-bottom: 8px;
  margin-bottom: 48px;
  transition: color 300ms ease, padding-left 300ms ease;
}

.emailLink:hover {
  color: var(--c-acid);
  padding-left: 20px;
}

/* ── FORM ── */
.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 680px;
}

.formFull { grid-column: 1 / -1; }

.field {
  position: relative;
}

.label {
  display: block;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--c-acid);
  margin-bottom: 8px;
}

.input,
.textarea {
  width: 100%;
  background: var(--c-card);
  border: 1px solid var(--c-border);
  color: var(--c-white);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  padding: 14px 16px;
  outline: none;
  transition: border-color 200ms ease, box-shadow 200ms ease;
  resize: none;
}

.input:focus,
.textarea:focus {
  border-color: var(--c-acid);
  box-shadow: 0 0 0 1px var(--c-acid);
}

.textarea { min-height: 140px; }

/* Error state */
.input.error,
.textarea.error {
  border-color: var(--c-red);
  box-shadow: 0 0 0 1px var(--c-red);
}

.errorMsg {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--c-red);
  margin-top: 6px;
  letter-spacing: 0.05em;
}

/* ── SOCIAL LINKS ── */
.socials {
  display: flex;
  gap: 12px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.socialLink {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-ash);
  text-decoration: none;
  border: 1px solid var(--c-border);
  padding: 10px 16px;
  transition: all 200ms ease;
}

.socialLink:hover {
  color: var(--c-acid);
  border-color: var(--c-acid);
  box-shadow: var(--shadow-acid);
  transform: translate(-2px, -2px);
}
```

---

## ▸ 18. NAVBAR INMERSIVA

### `Navbar.module.css`
```css
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: var(--z-nav);
  padding: 20px var(--gutter);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 400ms ease, border-bottom 400ms ease;
}

.nav.scrolled {
  background: rgba(8, 8, 8, 0.94);
  backdrop-filter: blur(20px) saturate(1.5);
  border-bottom: 1px solid var(--c-border);
}

/* Logo */
.logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  letter-spacing: -0.02em;
  color: var(--c-white);
  text-transform: uppercase;
  text-decoration: none;
}

.logoDot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--c-acid);
  margin-left: 2px;
  vertical-align: middle;
}

/* Links */
.links {
  display: flex;
  align-items: center;
  gap: 0;
}

.link {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-ash);
  text-decoration: none;
  padding: 8px 16px;
  transition: color 200ms ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.linkNum {
  color: var(--c-acid);
  opacity: 0.5;
  font-size: 0.55rem;
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 16px;
  right: 16px;
  height: 1px;
  background: var(--c-acid);
  transform: scaleX(0);
  transition: transform 250ms var(--ease-brutal);
}

.link:hover, .link.active {
  color: var(--c-acid);
}

.link:hover::after, .link.active::after {
  transform: scaleX(1);
}

/* CTA en navbar */
.navCta {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--c-void);
  background: var(--c-acid);
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 200ms ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 16px;
}

.navCta:hover { opacity: 0.85; }

/* Mobile menu icon */
.menuIcon {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
}

.menuIcon span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--c-acid);
  transition: transform 300ms ease, opacity 300ms ease;
}

@media (max-width: 768px) {
  .links { display: none; }
  .menuIcon { display: flex; }
}
```

---

## ▸ 19. SECCIÓN: TESTIMONIALS (Carrusel con Swiper)

### Concepto: "EVIDENCE BOARD"
Estilo "corkboard" brutalista. Las citas se presentan en cards inclinadas levemente.
El carrusel usa Swiper con efecto coverflow (3D).

### `Testimonials.module.css`
```css
.testimonials { overflow: hidden; }

/* Swiper overrides brutalistas */
:global(.swiper-slide) {
  height: auto !important;
}

.tCard {
  position: relative;
  background: var(--c-card);
  border: var(--border-acid);
  padding: 36px 32px;
  height: 100%;
  transition: box-shadow 300ms ease, transform 300ms ease;
}

.tCard:hover {
  box-shadow: var(--shadow-lg-acid);
  transform: translate(-3px, -3px);
}

/* Comillas decorativas */
.quote {
  font-family: var(--font-display);
  font-size: 5rem;
  color: var(--c-acid);
  line-height: 0.5;
  margin-bottom: 24px;
  opacity: 0.3;
  display: block;
}

.tText {
  font-size: 1rem;
  color: var(--c-white);
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 28px;
}

.tAuthor {
  display: flex;
  align-items: center;
  gap: 14px;
  border-top: 1px solid var(--c-border);
  padding-top: 20px;
}

.avatar {
  width: 44px;
  height: 44px;
  border: 2px solid var(--c-acid);
  object-fit: cover;
  filter: grayscale(100%);
  flex-shrink: 0;
}

.authorName {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
}

.authorRole {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--c-acid);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-top: 2px;
}
```

```tsx
// Testimonials.tsx — uso de Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'

<Swiper
  modules={[EffectCoverflow, Pagination, Autoplay]}
  effect="coverflow"
  grabCursor
  centeredSlides
  slidesPerView="auto"
  coverflowEffect={{ rotate: 0, stretch: 60, depth: 120, modifier: 1.5 }}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
>
  {testimonials.map(t => (
    <SwiperSlide key={t.id} style={{ width: '380px' }}>
      <TestimonialCard data={t} />
    </SwiperSlide>
  ))}
</Swiper>
```

---

## ▸ 20. DATA TYPES — TypeScript

```ts
// src/types/index.ts
export interface Project {
  id: string
  num: string             // '01', '02'...
  name: string
  description: string
  longDescription: string
  tech: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
  accent: string          // Color de acento de la card
  status: 'live' | 'wip' | 'archived'
  year: number
}

export interface Skill {
  name: string
  icon: React.ComponentType<any>
  category: 'frontend' | 'backend' | 'devops' | 'design'
  level: 'senior' | 'mid' | 'junior'
  color: string
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string          // '2022 — Presente'
  type: 'fulltime' | 'freelance' | 'contract'
  achievements: string[]
  tech?: string[]
}

export interface Testimonial {
  id: string
  text: string
  author: string
  role: string
  company: string
  avatarUrl?: string
}
```

---

## ▸ 21. APP.TSX — ESTRUCTURA FINAL

```tsx
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Toaster } from 'react-hot-toast'

// Hooks
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

// Layout
import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'

// UI Global
import { Cursor }         from '@/components/ui/Cursor'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

// Secciones
import { Hero }         from '@/components/sections/Hero'
import { About }        from '@/components/sections/About'
import { Skills }       from '@/components/sections/Skills'
import { Projects }     from '@/components/sections/Projects'
import { Experience }   from '@/components/sections/Experience'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact }      from '@/components/sections/Contact'

import '@/styles/globals.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useSmoothScroll()

  return (
    <>
      {/* Elementos globales */}
      <Cursor />
      <ScrollProgress />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--c-card)',
            color: 'var(--c-white)',
            border: '1px solid var(--c-acid)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
          },
        }}
      />

      <Navbar />

      <main>
        <Hero id="inicio" />
        <About id="sobre-mi" />
        <Skills id="skills" />
        <Projects id="proyectos" />
        <Experience id="experiencia" />
        <Testimonials id="testimonios" />
        <Contact id="contacto" />
      </main>

      <Footer />
    </>
  )
}

export default App
```

---

## ▸ 22. FUENTES — MEJOR COMBINACIÓN PARA NEO-BRUTALISMO

```html
<!-- index.html — Añadir en <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?
  family=Syne:wght@700;800&
  family=JetBrains+Mono:wght@400;500;700&
  family=DM+Sans:wght@400;500&
  family=Bebas+Neue
  &display=swap" rel="stylesheet">
```

| Fuente           | Uso                              | Peso   |
|------------------|----------------------------------|--------|
| Syne 800         | Headings (H1, H2, nombres)       | Ultra  |
| JetBrains Mono   | Tags, labels, código, nav links  | Técnico|
| DM Sans 400/500  | Párrafos y descripciones         | Clean  |
| Bebas Neue       | Números grandes, contadores      | Raw    |

---

## ▸ 23. CHECKLIST PRE-LAUNCH

### Animaciones
- [ ] Cursor cuadrado se mueve con spring physics
- [ ] Hero canvas 3D carga correctamente
- [ ] Texto del hero se revela con GSAP slideUp
- [ ] Scroll hace parallax en hero (opacity + translateY)
- [ ] ScrollReveal funciona en todas las secciones
- [ ] Carrusel de skills corre infinito y pausa en hover
- [ ] Cards de proyectos tienen hover con imagen scale
- [ ] Modal de proyecto abre con animación de scale
- [ ] Timeline de experiencia dibuja la línea progresivamente
- [ ] Números en About se animan con CountUp
- [ ] Marquee de texto corre infinito en Hero footer
- [ ] Botones tienen sombra dura + translate en hover/active
- [ ] Efecto glitch activo en nombre del hero
- [ ] Barra de progreso de scroll visible

### Performance
- [ ] Imágenes en formato WebP
- [ ] Fuentes con `display=swap`
- [ ] Canvas 3D con Suspense + loading fallback
- [ ] `prefers-reduced-motion` respetado
- [ ] Lenis se destruye en cleanup de useEffect

### CSS Modules
- [ ] Cada componente tiene su propio `.module.css`
- [ ] No hay estilos globales salvo en `styles/globals.css`
- [ ] Variables CSS usadas consistentemente
- [ ] No hay colores hardcodeados fuera de `variables.css`

---

> 🎯 CON ESTA ARQUITECTURA TIENES:
> — 20+ componentes con CSS encapsulado
> — 12+ librerías de animación integradas
> — Carruseles (Embla + Swiper)
> — Canvas 3D en el hero (Three.js)
> — Cursor custom brutalista
> — Smooth scroll inmersivo (Lenis)
> — Paleta acid + concrete definitiva
> — Fondo con noise + grid lines
> — TypeScript estricto en todo el proyecto