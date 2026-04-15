import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';

const getVariants = (direction: Direction, distance = 60) => ({
  hidden: {
    opacity: 0,
    y:      direction === 'up'    ? distance  : direction === 'down'  ? -distance : 0,
    x:      direction === 'left'  ? -distance : direction === 'right' ? distance  : 0,
    scale:  direction === 'scale' ? 0.85 : 1,
    rotate: direction === 'rotate' ? -5 : 0,
  },
  visible: {
    opacity: 1,
    y: 0, x: 0, scale: 1, rotate: 0,
    transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] as const },
  },
});

interface Props {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  className?: string;
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  distance,
  className,
  once = true,
}: Props) => {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.08 });
  const variants = getVariants(direction, distance);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
