import { GlitchText } from '../../ui/GlitchText/GlitchText';
import { scrollTo } from '../../../hooks/useSmoothScroll';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Botón camuflado brutalista de "Volver Arriba" usando GlitchText */}
      <div 
        className={styles.glitchWrap} 
        onClick={() => scrollTo('#inicio')}
        data-cursor-label="ARRIVA"
      >
        <GlitchText autoGlitch>Sebastian Guardia</GlitchText>
      </div>

      <div className={styles.links}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.link} data-hover>
          GITHUB
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link} data-hover>
          LINKEDIN
        </a>
        <a href="mailto:hola@ejemplo.com" className={styles.link} data-hover>
          EMAIL
        </a>
      </div>

      <div className={styles.copyright}>
        © {currentYear} SEBASTIAN GUARDIA. ALL SYSTEMS NOMINAL.
      </div>
    </footer>
  );
};
