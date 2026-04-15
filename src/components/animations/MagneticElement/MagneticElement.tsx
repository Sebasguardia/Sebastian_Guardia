import { useRef, useState } from 'react';
import type { ReactElement } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
  children: ReactElement;
  strength?: number;
}

export const MagneticElement = ({ children, strength = 0.25 }: MagneticProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  // EL PLUS: Agregué una física de "spring" muy ajustada que da una sensación mecánica.
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      style={{ display: 'inline-block', position: 'relative', zIndex: 10 }}
    >
      {/* Al hacer hover, da una pequeña escalada */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
