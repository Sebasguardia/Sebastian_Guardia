import { useRef } from 'react';
import type { MouseEvent } from 'react';

/**
 * Efecto magnético simple para elementos en hover sin necesidad de framer-motion estricto
 * Si se usa `MagneticElement`, se puede usar también este hook para la interactividad.
 */
export const useMagneticEffect = (strength: number = 20) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * strength / 100}px, ${y * strength / 100}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `translate(0px, 0px)`;
    ref.current.style.transition = `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`;
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    ref.current.style.transition = `none`;
  };

  return { ref, handleMouseMove, handleMouseLeave, handleMouseEnter };
};
