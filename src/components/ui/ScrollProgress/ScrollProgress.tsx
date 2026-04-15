import { useScroll, useSpring, motion } from 'framer-motion';
import styles from './ScrollProgress.module.css';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  // Spring para suavizar el movimiento de la barra
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX, transformOrigin: '0%' }}
    />
  );
};
