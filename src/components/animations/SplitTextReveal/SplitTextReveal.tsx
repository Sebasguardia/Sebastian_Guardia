import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../../../utils/cn';
import styles from './SplitTextReveal.module.css';

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string; // Requiere texto plano para que funcion SplitType
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const SplitTextReveal = ({ children, className, style, delay = 0 }: SplitTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    
    // Reseteo para evitar layouts rotos con re-renders
    const splitText = new SplitType(textRef.current, { types: 'chars,words,lines' });
    
    // PLUS Brutalista (+): 
    // En lugar de hacer un desvanecimiento opaco plano, las letras caen agresivamente rotando 3D desde arriba,
    // con un stagger rápido que parece matriz de código decodificándose
    gsap.from(splitText.chars, {
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: 30, // Viene de abajo sutilmente
      opacity: 0,
      rotationX: -45, // Rotación más suave
      filter: 'blur(5px)',
      stagger: 0.02,
      ease: 'power3.out',
      duration: 0.8,
      delay: delay,
    });

    return () => splitText.revert();
  }, [children, delay]);

  return (
    <div ref={textRef} className={cn(styles.splitWrap, className)} style={style}>
      {children}
    </div>
  );
};
