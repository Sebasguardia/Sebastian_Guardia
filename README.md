# 🎨 Portfolio — Diseño & Desarrollo

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS_Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen.svg)](https://nodejs.org/)

</div>

---

## 📋 Descripción

Portfolio profesional desarrollado con **React 19 + TypeScript + Vite**, enfocado en un diseño **neo-brutalista** con animaciones inmersivas y experiencia de usuario optimizada. Implementa patrones modernos de componentes, hooks personalizados y gestión avanzada de animaciones con GSAP.

**Características principales:**
- ⚡ Rendimiento optimizado con Vite
- 🎭 Animaciones fluidas y interactivas
- 📱 Responsive design adaptable
- 🔧 TypeScript para mayor seguridad de tipos
- 🎯 CSS Modules para estilos encapsulados
- 🌌 Three.js para gráficos 3D
- ♿ Accesibilidad mejorada

---

## 🛠️ Stack Tecnológico

| Categoría | Tecnología |
|-----------|-----------|
| **Frontend Framework** | React 19 |
| **Lenguaje** | TypeScript 5.x |
| **Build Tool** | Vite 5.x |
| **Estilos** | CSS Modules + CSS3 |
| **Animaciones** | GSAP 3.x |
| **Gráficos 3D** | Three.js |
| **Linting** | ESLint 9.x |
| **Package Manager** | npm / yarn |

---

## 📦 Instalación & Configuración

### Requisitos Previos
- Node.js ≥ 16.0.0
- npm ≥ 8.0.0 o yarn ≥ 1.22.0

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo (hot reload)
npm run build    # Construye para producción
npm run preview  # Previsualiza la build de producción
npm run lint     # Ejecuta ESLint
```

---

## 📁 Estructura del Proyecto

```
portfolio/
├── public/                  # Archivos estáticos
├── src/
│   ├── components/          # Componentes React reutilizables
│   │   ├── animations/      # Wrappers de animaciones
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Secciones principales (Hero, About, Projects, etc.)
│   │   └── ui/              # Componentes UI (Button, Card, Cursor, etc.)
│   ├── data/                # Datos estáticos tipados
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Estilos globales y variables
│   ├── types/               # Tipos e interfaces TypeScript
│   ├── utils/               # Funciones utilitarias
│   ├── App.tsx              # Componente raíz
│   └── main.tsx             # Punto de entrada
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🎯 Características Principales

### Animaciones & Interactividad
- **GSAP 3.x** - Animaciones fluidas con ScrollTrigger
- **Three.js + React Three Fiber** - Gráficos 3D inmersivos en el Hero
- **Cursor personalizado** - Efectos magnéticos y parallax
- **Scroll suave** - Lenis para experiencia premium
- **Reveal animations** - Elementos que aparecen al scroll

### Diseño & Estilos
- **Neo-brutalismo** - Paleta de color audaz con acentos ácidos
- **CSS Modules** - Estilos encapsulados por componente
- **Responsive** - Mobile-first design con breakpoints fluidos
- **Dark mode nativo** - Optimizado para vista nocturna

### Rendimiento
- **Vite** - Bundler ultrarrápido (~100ms cold start)
- **Tree-shaking** - Elimina código muerto automáticamente
- **Code splitting** - Carga lazy de componentes
- **Optimización de imágenes** - WebP y formatos modernos

---

## 🔧 Configuración de Desarrollo

### Variables de Entorno (`.env.local`)
```env
VITE_API_URL=https://api.example.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Dependencias Principales
```json
{
  "react": "^19.0.0",
  "typescript": "^5.0.0",
  "gsap": "^3.12.0",
  "three": "^r160",
  "@react-three/fiber": "^8.x",
  "vite": "^5.0.0"
}
```

---

## 📖 Guía de Desarrollo

### Crear un Componente Nuevo
```bash
# Componentes en src/components/[categoria]/[nombre]/
src/components/sections/About/
├── About.tsx
└── About.module.css
```

### Agregar una Sección
1. Crear carpeta en `src/components/sections/[Nombre]/`
2. Crear archivo principal `[Nombre].tsx`
3. Crear estilos `[Nombre].module.css`
4. Importar en `App.tsx`

### Usar GSAP en Componentes
```typescript
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// En useEffect
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top 80%',
    end: 'top 20%',
  },
  duration: 1,
  opacity: 1,
});
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura 'dist' como rama de publicación en Settings
```

---

## 📊 Secciones del Portfolio

| Sección | Descripción | Tecnología |
|---------|-----------|-----------|
| **Hero** | Introducción inmersiva con 3D | Three.js + GSAP |
| **About** | Información personal y biografía | CounterNumber + ScrollReveal |
| **Skills** | Carrusel de habilidades | Embla Carousel |
| **Projects** | Galería de proyectos | ProjectModal + Carousel |
| **Experience** | Timeline de experiencia | GSAP Timeline |
| **Testimonials** | Carrusel de testimonios | Embla Carousel |
| **Contact** | Formulario con validación | React Hook Form + EmailJS |

---

## 🔗 Enlaces Útiles

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [GSAP Documentation](https://gsap.com)
- [Three.js Documentation](https://threejs.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 📝 Convenciones de Código

- **Nombres de componentes**: PascalCase (e.g., `ProjectCard`)
- **Nombres de archivos**: PascalCase para componentes, camelCase para hooks
- **Variables CSS**: `--c-primary`, `--sp-md`, `--dur-mid`
- **Props interface**: `[ComponentName]Props`

---

## 🤝 Contribuciones

Este proyecto es personal, pero siéntete libre de crear un fork y adaptarlo a tus necesidades.

---

## 📄 Licencia

MIT License - Ver LICENSE.md para más detalles

---

## 👨‍💻 Autor

**Sebastián Guardia** - Diseñador & Desarrollador Full Stack

- Portfolio: [sebastian-guardia.com](https://sebastian-guardia-t.vercel.app)
- GitHub: [@sebastianGuardia](https://github.com/Sebasguardia)
- LinkedIn: [Sebastián Guardia](https://www.linkedin.com/in/sebastian-guardia-64a865379)

---

<div align="center">

**Hecho con ❤️ y muchas tazas de café ☕**

</div>
