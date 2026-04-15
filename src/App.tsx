import { Toaster } from 'react-hot-toast';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useSmoothScroll } from './hooks/useSmoothScroll';

// Layout
import { Navbar }   from './components/layout/Navbar/Navbar';
import { Footer }   from './components/layout/Footer/Footer';

// UI Global
import { Cursor }          from './components/ui/Cursor/Cursor';
import { ScrollProgress }  from './components/ui/ScrollProgress/ScrollProgress';

// Secciones
import { Hero }         from './components/sections/Hero/Hero';
import { About }        from './components/sections/About/About';
import { Skills }       from './components/sections/Skills/Skills';
import { Projects }     from './components/sections/Projects/Projects';

import { Contact }      from './components/sections/Contact/Contact';

import './styles/globals.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useSmoothScroll();

  return (
    <>
      {/* Elementos globales pintados encima de todo */}
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

        <Contact id="contacto" />
      </main>

      <Footer />
    </>
  );
}

export default App;
