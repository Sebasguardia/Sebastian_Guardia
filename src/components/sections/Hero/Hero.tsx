import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { HeroCanvas } from './HeroCanvas';
import { HeroTypewriter } from './HeroTypewriter';
import { GlitchText } from '../../ui/GlitchText/GlitchText';
import { MagneticElement } from '../../animations/MagneticElement/MagneticElement';
import { BrutalButton } from '../../ui/BrutalButton/BrutalButton';
import { ParallaxText } from '../../animations/ParallaxText/ParallaxText';
import { scrollTo } from '../../../hooks/useSmoothScroll';
import styles from './Hero.module.css';



interface HeroProps {
  id?: string;
}

export const Hero = ({ id = 'inicio' }: HeroProps) => {
  const heroRef = useRef<HTMLElement>(null);
  const [animate] = useState(true);
  const { scrollYProgress } = useScroll({ target: heroRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={heroRef} className={`${styles.hero} section`} id={id}>
      {/* Canvas 3D de fondo */}
      <div className={styles.canvas}>
        <HeroCanvas />
      </div>
      <div className={styles.overlay} />

      <motion.div style={{ y, opacity }} className={styles.content}>
        {/* Eyebrow */}
        <div className={`${styles.eyebrow} ${animate ? styles.animate : ''}`}>
          <span className={styles.statusDot} />
          <span>Disponible para proyectos</span>
          <span>—</span>
          <span>Lima, Perú</span>
          <span>—</span>
          <span>{new Date().getFullYear()}</span>
        </div>

        {/* Nombre con GlitchText */}
        <div className={styles.nameWrap}>
          <GlitchText as="span" className={`${styles.name} ${animate ? styles.animate : ''}`}>
            SEBASTIAN
          </GlitchText>
        </div>
        <div className={styles.nameWrap}>
          <GlitchText
            as="span"
            autoGlitch
            className={`${styles.name} ${styles.nameStroke} ${animate ? styles.nameStroke : ''} ${animate ? styles.animate : ''}`}
          >
            GUARDIA
          </GlitchText>
        </div>

        <div className={`${styles.divider} ${animate ? styles.animate : ''}`} />

        <div className={`${styles.bottomRow} ${animate ? styles.animate : ''}`}>
          <div className={styles.role}>
            <HeroTypewriter 
              words={['FULL-STACK DEVELOPER', 'CREATIVE CODER', 'UI ENTHUSIAST']} 
              className={styles.roleHighlight} 
            />
            <br />
            DISEÑANDO EXPERIENCIAS QUE ROMPEN
            <br />
            LO CONVENCIONAL
          </div>

          <div className={styles.ctaRow}>
            <MagneticElement>
              <BrutalButton variant="acid" onClick={() => scrollTo('#proyectos')} data-cursor-label="WORK">
                VER TRABAJO
              </BrutalButton>
            </MagneticElement>
            <MagneticElement>
              <BrutalButton variant="outline" onClick={() => scrollTo('#contacto')}>
                CONTACTAR
              </BrutalButton>
            </MagneticElement>
          </div>

          <div
            className={styles.scrollIndicator}
            onClick={() => scrollTo('#sobre-mi')}
            data-cursor-label="SCROLL"
          >
            <span className={styles.scrollLine} />
            <span>SCROLL</span>
          </div>
        </div>
      </motion.div>

      {/* Número decorativo */}
      <span className={styles.heroNum} aria-hidden="true">01</span>

      {/* Marquee en la base */}
      <div className={styles.marqueeWrap}>
        <ParallaxText baseVelocity={-3} direction="left">
          FULL-STACK DEVELOPER ★ REACT ★ NODE.JS ★ UI/UX ★ TYPESCRIPT ★
        </ParallaxText>
      </div>
    </section>
  );
};
