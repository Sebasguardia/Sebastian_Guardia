import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { FiDownload, FiEye } from 'react-icons/fi';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { AboutStats } from './AboutStats';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { MagneticElement } from '../../animations/MagneticElement/MagneticElement';
import styles from './About.module.css';

interface AboutProps { id?: string; }

export const About = ({ id = 'sobre-mi' }: AboutProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={`${styles.about} section`} id={id}>
      <NoiseOverlay />
      <span className={styles.sectionBg} aria-hidden="true">02</span>

      <div className="container">
        <div className={styles.grid}>
          {/* ── Columna Texto ── */}
          <div className={styles.textCol}>
            <ScrollReveal direction="left">
              <SectionLabel number="02" className={styles.centeredLabel}>Sobre mí</SectionLabel>
              <div className={styles.sectionTag}>
                <span>◈</span> Blueprint
              </div>

              <h2 className={styles.headline}>
                CONSTRUYO<br />
                EL FUTURO<br />
                <span className={styles.headlineAccent}>DIGITAL</span>
              </h2>

              <p className={styles.body}>
                Soy un <span className={styles.bodyHighlight}>Full-Stack Developer</span> con pasión
                por las interfaces que rompen lo convencional. Combino ingeniería de alto rendimiento
                con diseño brutal para crear experiencias que las personas no pueden ignorar.
                <br /><br />
                Cada proyecto es un reto de crear algo que{' '}
                <span className={styles.bodyHighlight}>nadie haya visto antes</span>.
              </p>

              <div className={styles.actionRow}>
                <MagneticElement>
                  <div className={styles.splitButton}>
                    {/* Parte Izquierda - Descargar */}
                    <a 
                      href="/CV_Sebastian_Guardia.pdf"
                      download="CV_Sebastian_Guardia.pdf"
                      className={styles.downloadPart}
                      title="Descargar CV"
                    >
                      <FiDownload size={24} />
                    </a>
                    
                    {/* Parte Derecha - Ver CV */}
                    <a 
                      href="/CV_Sebastian_Guardia.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewPart}
                      title="Ver CV en nueva pestaña"
                    >
                      VER CV
                    </a>
                  </div>
                </MagneticElement>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={0.2}>
              <AboutStats />
            </ScrollReveal>
          </div>

          {/* ── Columna Imagen ── */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrap}>
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={800}
                  glareEnable
                  glareMaxOpacity={0.08}
                  glareColor="#E8FF00"
                >
                  <div className={styles.imageFrame}>
                    {/* Placeholder brutalista si no hay foto */}
                    <div className={styles.avatarPlaceholder}>SG</div>
                  </div>
                </Tilt>
                <span className={styles.imageTag}>Lima, Perú — 2025</span>
                <span className={styles.cross} aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <span className={styles.vertLine} aria-hidden="true" />
    </section>
  );
};
