import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './BrutalButton.module.css';

type Variant = 'acid' | 'outline' | 'red' | 'ghost';

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  download?: boolean | string;
  target?: string;
  rel?: string;
}

export const BrutalButton = ({
  children,
  variant = 'acid',
  href,
  onClick,
  showArrow = true,
  className,
  disabled,
  download,
  target,
  rel,
}: Props) => {
  const cls = clsx(styles.btn, styles[variant], className);

  if (href) {
    return (
      <a href={href} className={cls} download={download} target={target} rel={rel}>
        {children}
        {showArrow && <ArrowRight size={14} className={styles.arrow} />}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} disabled={disabled}>
      {children}
      {showArrow && <ArrowRight size={14} className={styles.arrow} />}
    </button>
  );
};
