import {
  SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiDocker, SiPostgresql, SiFigma,
  SiNextdotjs, SiGraphql, SiRedis, SiMongodb,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Tooltip } from '../../ui/Tooltip/Tooltip';
import styles from './Skills.module.css';

const techList = [
  { icon: SiReact, name: 'React', color: '#61DAFB', cat: 'frontend' as const, level: 'senior' as const },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', cat: 'frontend' as const, level: 'senior' as const },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933', cat: 'backend' as const, level: 'senior' as const },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', cat: 'frontend' as const, level: 'senior' as const },
  { icon: SiPython, name: 'Python', color: '#3776AB', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiDocker, name: 'Docker', color: '#2496ED', cat: 'devops' as const, level: 'mid' as const },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', cat: 'backend' as const, level: 'senior' as const },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E', cat: 'design' as const, level: 'senior' as const },
  { icon: FaAws, name: 'AWS', color: '#FF9900', cat: 'devops' as const, level: 'junior' as const },
  { icon: SiGraphql, name: 'GraphQL', color: '#E10098', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiRedis, name: 'Redis', color: '#DC382D', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248', cat: 'backend' as const, level: 'mid' as const },
];

// Duplicado para el efecto de scroll infinito
const doubled = [...techList, ...techList];

/**
 * SkillCarousel — Carrusel CSS infinito de logos de tecnologías.
 * Pausa en hover. Fade en los bordes laterales.
 */
export const SkillCarousel = () => (
  <div className={styles.carouselWrap}>
    <div className={styles.carouselTrack}>
      {doubled.map((tech, i) => (
        <Tooltip key={i} content={`${tech.cat.toUpperCase()} — ${tech.level.toUpperCase()}`} position="top">
          <div className={styles.logoItem}>
            <tech.icon className={styles.logoIcon} style={{ color: tech.color }} />
            <span className={styles.logoName}>{tech.name}</span>
          </div>
        </Tooltip>
      ))}
    </div>
  </div>
);
