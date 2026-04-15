import { useState } from 'react';
import CountUpLib from 'react-countup';
const CountUp = (CountUpLib as any).default || CountUpLib;
import { useInView } from 'react-intersection-observer';
import styles from './CounterNumber.module.css';
import { cn } from '../../../utils/cn';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CounterNumber = ({ end, duration = 2.5, suffix = '', prefix = '', className }: CounterProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [complete, setComplete] = useState(false);

  return (
    // PLUS: Le agrego un data-attribute cuando termina de contar
    // para disparar una animación sutil de neón en CSS
    <div 
      ref={ref} 
      className={cn(styles.counterWrapper, className)}
      data-complete={complete}
    >
      {inView ? (
        <CountUp 
          start={0} 
          end={end} 
          duration={duration} 
          separator="," 
          prefix={prefix} 
          suffix={suffix} 
          useEasing 
          onEnd={() => setComplete(true)}
        />
      ) : (
        <span className={styles.hiddenStart}>0{suffix}</span>
      )}
      
      {/* Sombra proyectada falsa brutalista */}
      {inView && complete && (
        <span aria-hidden="true" className={styles.shadowClone}>
           {prefix}{end}{suffix}
        </span>
      )}
    </div>
  );
};
