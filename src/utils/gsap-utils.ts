import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registramos el plugin globales si estamos en entorno del navegador
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Helper para animaciones recurrentes de revelado.
 * Ideal para aplicar la estetica brutalista a elementos al scrollear.
 */
export const revealOnScroll = (element: Element | string, options?: gsap.TweenVars) => {
  // Manejar scrollTrigger de forma segura para TypeScript
  let scrollTriggerVars: ScrollTrigger.Vars = {
    trigger: element,
    start: 'top 85%',
    toggleActions: 'play none none reverse',
  };

  if (options?.scrollTrigger) {
    if (typeof options.scrollTrigger === 'object' && !('nodeType' in options.scrollTrigger)) {
      scrollTriggerVars = { ...scrollTriggerVars, ...options.scrollTrigger };
    } else {
      // Si options.scrollTrigger es string o Element (tiene nodeType)
      scrollTriggerVars.trigger = options.scrollTrigger as string | Element;
    }
  }

  // Quitar el scrollTrigger de options para que el desempaquetado final no lo sobreescriba de manera conflictiva
  const { scrollTrigger, ...restOptions } = options || {};

  return gsap.from(element, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: scrollTriggerVars,
    ...restOptions,
  });
};

export default gsap;
