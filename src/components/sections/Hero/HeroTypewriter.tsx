import { useEffect, useRef, useState } from 'react';

interface Props {
  words: string[];
  speed?: number; // ms por carácter
  pauseMs?: number; // pausa entre palabras
  className?: string;
}

/**
 * HeroTypewriter — efecto typewriter brutalista.
 * Escribe y borra palabras en secuencia con cursor parpadeante.
 */
export const HeroTypewriter = ({ words, speed = 80, pauseMs = 1800, className }: Props) => {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const currentWord = words[wordIdx % words.length];

    const tick = () => {
      if (!isDeleting) {
        // Escribiendo
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          // Pausa al terminar de escribir
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
      } else {
        // Borrando
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIdx(i => i + 1);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? speed / 2 : speed);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, wordIdx, words, speed, pauseMs]);

  return (
    <span className={className} aria-live="polite">
      {displayed}
      {/* Cursor parpadeante brutalista (cuadrado, no barra) */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '0.55em',
          height: '1em',
          background: 'var(--c-acid)',
          marginLeft: '3px',
          verticalAlign: 'text-bottom',
          animation: 'cursorBlink 1s step-end infinite',
        }}
      />
      <style>{`@keyframes cursorBlink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
};
