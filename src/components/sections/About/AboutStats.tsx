import { CounterNumber } from '../../animations/CounterNumber/CounterNumber';
import styles from './About.module.css';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

interface Props {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: 1, suffix: '+', label: 'Años XP' },
  { value: 5, suffix: '+', label: 'Proyectos' },
  { value: 0, suffix: '+', label: 'Clientes' },
];

/**
 * AboutStats — Grid de estadísticas numéricas animadas.
 * Usa CounterNumber para el efecto de conteo al entrar en viewport.
 */
export const AboutStats = ({ stats = defaultStats }: Props) => (
  <div className={styles.statsRow}>
    {stats.map((s) => (
      <div key={s.label} className={styles.statItem}>
        <span className={styles.statNumber}>
          <CounterNumber end={s.value} suffix={s.suffix ?? ''} />
        </span>
        <span className={styles.statLabel}>{s.label}</span>
      </div>
    ))}
  </div>
);
