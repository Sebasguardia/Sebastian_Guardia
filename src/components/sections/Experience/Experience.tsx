import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { SplitTextReveal } from '../../animations/SplitTextReveal/SplitTextReveal';
import { experience } from '../../../data/experience';
import styles from './Experience.module.css';

import { TimelineItem } from './TimelineItem';

interface ExperienceProps { id?: string; }

export const Experience = ({ id = 'experiencia' }: ExperienceProps) => (
  <section className={`section`} id={id}>
    <NoiseOverlay />
    <div className="container">
      <ScrollReveal direction="up">
        <SectionLabel number="05">Trayectoria</SectionLabel>
        <h2 className={styles.sectionHeading}>
          <SplitTextReveal>MISSION</SplitTextReveal>
          <SplitTextReveal delay={0.2} className={styles.acidWord}>LOG</SplitTextReveal>
        </h2>
      </ScrollReveal>

      <div className={styles.timeline}>
        {experience.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);
