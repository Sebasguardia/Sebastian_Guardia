import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (threshold: number = 0.1, triggerOnce: boolean = true) => {
  const { ref, inView, entry } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView, entry };
};
