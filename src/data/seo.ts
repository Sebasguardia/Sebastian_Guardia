// ============================================================
//  SEO & METADATA CONFIG — Sebastian Guardia Portfolio
//  Edita este archivo para actualizar toda la informacion
//  del portfolio sin tocar el HTML directamente.
// ============================================================

export const SEO = {
  // ── Identidad personal ─────────────────────────────────────
  person: {
    firstName: 'Sebastian',
    lastName: 'Guardia',
    fullName: 'Sebastian Guardia',
    title: 'Full Stack Developer & UI/UX Engineer',
    shortBio:
      'Full Stack Developer especializado en React, Next.js, Node.js y TypeScript. Apasionado por crear experiencias digitales inmersivas y de alto rendimiento.',
    longBio:
      'Desarrollador Full Stack con sólida experiencia en el ecosistema JavaScript/TypeScript moderno. Especializado en construir aplicaciones SaaS escalables, portafolios interactivos y plataformas web de alto impacto visual utilizando React, Next.js, Node.js, NestJS, PostgreSQL y tecnologías de animación avanzadas como GSAP y Three.js.',
    nationality: 'Ecuadorian',
    location: 'Ecuador',
    yearsOfExperience: 5,
    projectsCompleted: 7,
    clientsSatisfied: 10,
  },

  // ── Sitio web ───────────────────────────────────────────────
  site: {
    url: 'https://sebastian-guardia-t.vercel.app',
    name: 'Sebastian Guardia — Portfolio',
    shortName: 'Sebastian Guardia',
    description:
      'Portfolio de Sebastian Guardia — Full Stack Developer especializado en React, Next.js, TypeScript, NestJS y animaciones web inmersivas con GSAP y Three.js.',
    keywords: [
      'Sebastian Guardia',
      'Full Stack Developer',
      'React Developer',
      'Next.js Developer',
      'TypeScript',
      'NestJS',
      'Node.js',
      'PostgreSQL',
      'GSAP',
      'Three.js',
      'Portfolio',
      'Frontend Engineer',
      'Backend Developer',
      'UI/UX',
      'SaaS',
      'Web Developer Ecuador',
      'Desarrollador Web',
      'Vite',
      'TailwindCSS',
    ],
    language: 'es',
    locale: 'es_EC',
    themeColor: '#0a0a0a',
    backgroundColor: '#0a0a0a',
  },

  // ── Open Graph / Social ────────────────────────────────────
  openGraph: {
    type: 'website',
    image: 'https://sebastian-guardia-t.vercel.app/og-image.png',
    imageAlt: 'Sebastian Guardia — Full Stack Developer Portfolio',
    imageWidth: 1200,
    imageHeight: 630,
    twitterCard: 'summary_large_image',
    twitterSite: '@SebastianG_dev', // actualiza si tienes Twitter/X
  },

  // ── Redes sociales & contacto ──────────────────────────────
  social: {
    github: 'https://github.com/Sebasguardia',
    githubUsername: 'Sebasguardia',
    linkedin: 'https://www.linkedin.com/in/sebastian-guardia',
    linkedinUsername: 'sebastian-guardia',
    email: 'sebastianguardiaticlla@gmail.com', // actualiza con tu correo real
    // twitter: 'https://twitter.com/SebastianG_dev',
  },

  // ── Schema.org ─────────────────────────────────────────────
  schema: {
    jobTitle: 'Full Stack Developer',
    worksFor: 'Freelance',
    alumniOf: 'SENATI', // actualiza con tu institución
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Redis',
      'GSAP',
      'Three.js',
      'Docker',
      'Prisma',
      'Supabase',
    ],
  },

  // ── Verificación de motores de búsqueda ───────────────────
  verification: {
    google: '',      // Google Search Console verification token
    bing: '',        // Bing Webmaster Tools verification token
  },
} as const;

export type SEOConfig = typeof SEO;
