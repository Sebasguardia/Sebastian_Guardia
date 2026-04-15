import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import styles from "./ParallaxText.module.css";
import { cn } from '../../../utils/cn';

// Utilidad nativa de envoltura
function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 'left' | 'right';
  className?: string;
  outlineColor?: string; // PLUS: opción para hacerlo texto stroke!
}

export const ParallaxText = ({ 
  children, 
  baseVelocity = -3, 
  direction = 'left',
  className,
  outlineColor
}: ParallaxProps) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const finalDirection = direction === 'left' ? 1 : -1;
  const initialVelocity = baseVelocity * finalDirection;

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * initialVelocity * (delta / 1000);

    // Ajusta base a la velocidad de scroll
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={cn(styles.parallax, className)}>
      <motion.div className={styles.scroller} style={{ x }}>
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className={outlineColor ? styles.outlined : undefined}
            style={outlineColor ? { WebkitTextStroke: `1px ${outlineColor}` } : {}}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
