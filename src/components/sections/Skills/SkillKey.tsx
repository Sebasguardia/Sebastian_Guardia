import { Tooltip } from '../../ui/Tooltip/Tooltip';
import styles from './Skills.module.css';

const catColors: Record<string, string> = {
  frontend: 'var(--c-cyan)',
  backend:  'var(--c-red)',
  devops:   'var(--c-purple)',
  design:   'var(--c-acid)',
};

const levelColors: Record<string, string> = {
  senior: 'var(--c-acid)',
  mid:    'var(--c-cyan)',
  junior: 'var(--c-red)',
};

interface SkillKeyProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  name: string;
  color: string;
  cat: 'frontend' | 'backend' | 'devops' | 'design';
  level: 'senior' | 'mid' | 'junior';
}

/**
 * SkillKey — Componente individual de tecla para el grid de habilidades.
 * Simula el efecto de presionar una tecla de teclado mecánico.
 */
export const SkillKey = ({ icon: Icon, name, color, cat, level }: SkillKeyProps) => (
  <Tooltip content={`${cat.toUpperCase()} — ${level.toUpperCase()}`} position="top">
    <div
      className={styles.key}
      data-cat={cat}
      style={{ '--key-color': catColors[cat] } as React.CSSProperties}
    >
      <span
        className={styles.keyLevel}
        style={{ background: levelColors[level] }}
        title={level}
      />
      <Icon className={styles.keyIcon} style={{ color }} />
      <span className={styles.keyName}>{name}</span>
    </div>
  </Tooltip>
);
