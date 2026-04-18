import {
  SiReact, SiTypescript, SiNodedotjs, SiPython,
  SiPostgresql, SiFigma,
  SiNextdotjs, SiExpress, SiFastapi, SiTailwindcss, SiNestjs, SiSupabase, SiVercel, SiGit,
  SiJavascript, SiMysql, SiOpenai, SiRender, SiHtml5, SiCss
} from 'react-icons/si';
import { Tooltip } from '../../ui/Tooltip/Tooltip';
import styles from './Skills.module.css';

const SiAntigravity = (props: any) => (
  <svg
    width="1em"
    height="1em"
    viewBox="-2 -2 28 28"
    preserveAspectRatio="xMidYMid meet"
    {...props}
    fill="none"
  >
    <defs>
      <linearGradient id="ag-grad" x1="12" y1="4" x2="12" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#F59E0B" />   {/* Orange at peak */}
        <stop offset="50%" stopColor="#EF4444" />  {/* Red in middle */}
        <stop offset="100%" stopColor="#3B82F6" /> {/* Blue at base */}
      </linearGradient>
    </defs>
    <path
      d="M3 19 C 8 19 8 5 12 5 C 16 5 16 19 21 19"
      stroke="url(#ag-grad)"
      strokeWidth="3.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

const techList = [
  { icon: SiReact, name: 'React', color: '#61DAFB', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiPython, name: 'Python', color: '#3776AB', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E', cat: 'design' as const, level: 'mid' as const },
  { icon: SiNestjs, name: 'NestJS', color: '#EA284E', cat: 'backend' as const, level: 'junior' as const },
  { icon: SiOpenai, name: 'AI Solutions', color: '#412991', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiFastapi, name: 'FastAPI', color: '#05998B', cat: 'backend' as const, level: 'junior' as const },
  { icon: SiExpress, name: 'Express', color: '#000000', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiCss, name: 'CSS3', color: '#1572B6', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiTailwindcss, name: 'TailwindCSS', color: '#06B6D4', cat: 'frontend' as const, level: 'mid' as const },
  { icon: SiSupabase, name: 'Supabase', color: '#3ECF8E', cat: 'backend' as const, level: 'mid' as const },
  { icon: SiRender, name: 'Render', color: '#ffffff', cat: 'tools' as const, level: 'mid' as const },
  { icon: SiVercel, name: 'Vercel', color: '#ffffff', cat: 'tools' as const, level: 'mid' as const },
  { icon: SiGit, name: 'Git', color: '#F05032', cat: 'tools' as const, level: 'mid' as const },
  { icon: SiAntigravity, name: 'Antigravity IDE', color: 'transparent', cat: 'tools' as const, level: 'mid' as const },
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
