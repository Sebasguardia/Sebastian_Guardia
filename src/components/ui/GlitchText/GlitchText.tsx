import { useState } from 'react';
import type { ElementType } from 'react';
import { clsx } from 'clsx';
import styles from './GlitchText.module.css';

interface Props {
  children: string; // solo texto plano para que data-text funcione
  as?: ElementType;
  autoGlitch?: boolean; // loop automático
  className?: string;
}

export const GlitchText = ({ children, as: Tag = 'span', autoGlitch = false, className }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const Component = Tag as any;

  const cls = clsx(
    styles.glitch,
    isHovering && styles.active,
    autoGlitch && styles.autoGlitch,
    className,
  );

  return (
    <Component
      className={cls}
      data-text={children}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
    </Component>
  );
};
