import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { SplitTextReveal } from '../../animations/SplitTextReveal/SplitTextReveal';
import { SkillCarousel } from './SkillCarousel';
import styles from './Skills.module.css';

interface SkillsProps { id?: string; }

export const Skills = ({ id = 'skills' }: SkillsProps) => (
  <section className={`${styles.skills} section`} id={id}>
    <NoiseOverlay />
    <div className="container">
      <ScrollReveal direction="up">
        <SectionLabel number="03">Stack & Skills</SectionLabel>
        <h2 className={styles.heading}>
          <SplitTextReveal>COMMAND</SplitTextReveal>
          <SplitTextReveal delay={0.2} style={{ color: 'var(--c-acid)' }}>CENTER</SplitTextReveal>
        </h2>
      </ScrollReveal>
    </div>

    <ScrollReveal direction="up" delay={0.1}>
      <SkillCarousel />
    </ScrollReveal>
  </section>
);
