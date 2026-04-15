import type { ReactNode } from 'react';
import styles from './SectionLabel.module.css';
import { clsx } from 'clsx';

interface Props {
  number?: string; // ej: '01', '02'
  children: ReactNode;
  className?: string;
}

export const SectionLabel = ({ number, children, className }: Props) => (
  <div className={clsx(styles.label, className)}>
    {number && <span className={styles.num}>{number}</span>}
    <span className={styles.text}>{children}</span>
    <span className={styles.line} aria-hidden="true" />
  </div>
);
