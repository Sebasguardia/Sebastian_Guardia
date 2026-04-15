import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
    })

    lenisInstance = lenis

    // Sincronizar con GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

// Helper para scroll programático
export const scrollTo = (target: string | number) => {
  if (lenisInstance) lenisInstance.scrollTo(target)
}

export const stopScroll = () => {
  if (lenisInstance) lenisInstance.stop()
}

export const startScroll = () => {
  if (lenisInstance) lenisInstance.start()
}
