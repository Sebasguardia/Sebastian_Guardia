import { GlitchText } from '../../ui/GlitchText/GlitchText';
import { scrollTo } from '../../../hooks/useSmoothScroll';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { MagneticElement } from '../../animations/MagneticElement/MagneticElement';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.brand}>
          <GlitchText autoGlitch>SEBASTIAN GUARDIA</GlitchText>
          <div className={styles.statusBox}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>ALL SYSTEMS NOMINAL</span>
          </div>
        </div>

        <MagneticElement strength={0.4}>
          <button
            className={styles.upBtn}
            onClick={() => scrollTo('#inicio')}
            data-cursor-label="ARRIBA"
            aria-label="Volver arriba"
          >
            <FiArrowUp size={24} />
          </button>
        </MagneticElement>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.links}>
          <MagneticElement strength={0.2}>
            <a href="https://github.com/Sebasguardia" target="_blank" rel="noopener noreferrer" className={styles.link} data-hover>
              <FiGithub size={16} /> GITHUB
            </a>
          </MagneticElement>
          <MagneticElement strength={0.2}>
            <a href="https://www.linkedin.com/in/sebastian-guardia-64a865379" target="_blank" rel="noopener noreferrer" className={styles.link} data-hover>
              <FiLinkedin size={16} /> LINKEDIN
            </a>
          </MagneticElement>
          <MagneticElement strength={0.2}>
            <a href="mailto:sebastianguardiaticlla@gmail.com" className={styles.link} data-hover>
              <FiMail size={16} /> EMAIL
            </a>
          </MagneticElement>
        </div>

        <div className={styles.copyright}>
          © {currentYear} — CREATED WITH ACID & COFFEE.
        </div>
      </div>
    </footer>
  );
};
