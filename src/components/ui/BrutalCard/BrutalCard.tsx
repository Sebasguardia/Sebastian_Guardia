import styles from './BrutalCard.module.css';
import { clsx } from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  accent?: 'acid' | 'red' | 'cyan';
  hoverable?: boolean;
}

export const BrutalCard = ({ children, className, accent = 'acid', hoverable = true }: Props) => {
  return (
    <div className={clsx(styles.card, styles[accent], hoverable && styles.hoverable, className)}>
      {/* PLUS: línea de acento superior en el color de variante */}
      <div className={styles.accentBar} />
      {children}
    </div>
  );
};
