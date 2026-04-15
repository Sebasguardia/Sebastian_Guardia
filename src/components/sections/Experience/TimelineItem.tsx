import { useInView } from 'react-intersection-observer';
import { type Experience } from '../../../types';
import styles from './Experience.module.css';

interface TimelineItemProps {
  item: Experience;
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${styles.item} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className={styles.dot} />
      <div className={styles.period}>
        <span>{item.startDate} — {item.endDate}</span>
        {item.endDate === 'ACTUALIDAD' && <span className={styles.periodBadge}>ACTUAL</span>}
      </div>
      <h3 className={styles.company}>{item.company}</h3>
      <div className={styles.role}>{item.role}</div>
      <ul className={styles.achievements}>
        {item.description.map((d, i) => (
          <li key={i} className={styles.achievement}>{d}</li>
        ))}
      </ul>
    </div>
  );
};
