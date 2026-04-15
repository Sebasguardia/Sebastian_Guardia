import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { SplitTextReveal } from '../../animations/SplitTextReveal/SplitTextReveal';
import { TestimonialCarousel } from './TestimonialCarousel';
import styles from './Testimonials.module.css';

interface TestimonialsProps { id?: string; }

export const Testimonials = ({ id = 'testimonios' }: TestimonialsProps) => (
  <section className={`section`} id={id} style={{ overflow: 'hidden' }}>
    <NoiseOverlay />
    <div className="container">
      <ScrollReveal direction="up">
        <SectionLabel number="06">Evidencias</SectionLabel>
        <h2 className={styles.sectionHeading}>
          <SplitTextReveal>EVIDENCE</SplitTextReveal>
          <SplitTextReveal delay={0.2} className={styles.acidWord}>BOARD</SplitTextReveal>
        </h2>
      </ScrollReveal>
    </div>

    <TestimonialCarousel />
  </section>
);
