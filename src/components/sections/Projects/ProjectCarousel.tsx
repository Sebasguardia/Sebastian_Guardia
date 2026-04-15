import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types';
import styles from './Projects.module.css';

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectCarousel = ({ onSelectProject }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = () => { emblaApi?.scrollPrev(); setCurrentIndex(i => Math.max(0, i - 1)); };
  const scrollNext = () => { emblaApi?.scrollNext(); setCurrentIndex(i => Math.min(projects.length - 1, i + 1)); };

  return (
    <div className={styles.carouselOuter}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {projects.map((project, i) => (
            <div key={project.id} className={styles.emblaSlide}>
              <ProjectCard project={project} index={i} onClick={() => onSelectProject(project)} />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrowBtn} onClick={scrollPrev} aria-label="Proyecto anterior"><FiArrowLeft size={18} /></button>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${((currentIndex + 1) / projects.length) * 100}%` }}
          />
        </div>
        <button className={styles.arrowBtn} onClick={scrollNext} aria-label="Siguiente proyecto"><FiArrowRight size={18} /></button>
      </div>
    </div>
  );
};
