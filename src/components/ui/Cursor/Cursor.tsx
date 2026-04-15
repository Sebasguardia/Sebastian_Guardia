import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './Cursor.module.css';
import { clsx } from 'clsx';

export const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorLabel, setCursorLabel] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot: stiffness alta para respuesta instantánea
  const dotX = useSpring(cursorX, { stiffness: 800, damping: 35 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 35 });
  // Ring: sigue más lento — efecto cola
  const ringX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const enter = (e: Event) => {
      setIsHovering(true);
      const label = (e.currentTarget as HTMLElement)?.dataset.cursorLabel ?? '';
      setCursorLabel(label);
    };
    const leave = () => {
      setIsHovering(false);
      setCursorLabel('');
    };
    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    // Registra hover en todos los interactivos + data-hover
    const addListeners = () => {
      document.querySelectorAll('a, button, [data-hover], [data-cursor-label]').forEach((el) => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    addListeners();

    // MutationObserver para nuevos elementos dinámicos
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className={clsx(styles.cursorDot, isHovering && styles.hover, isClicking && styles.clicking)}
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className={clsx(styles.cursorRing, isHovering && styles.hover, isClicking && styles.clicking)}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
      {/* PLUS: etiqueta flotante si el elemento tiene data-cursor-label */}
      <motion.div
        className={clsx(styles.cursorLabel, cursorLabel && styles.visible)}
        style={{ x: dotX, y: dotY }}
      >
        {cursorLabel}
      </motion.div>
    </>
  );
};
