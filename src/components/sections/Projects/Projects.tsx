import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { SplitTextReveal } from '../../animations/SplitTextReveal/SplitTextReveal';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ClientCarousel } from './ClientCarousel';
import { projects } from '../../../data/projects';
import type { Project } from '../../../types';
import styles from './Projects.module.css';

type Filter = 'all' | 'empresa' | 'emprendimiento' | 'personal';

const filters: { key: Filter; label: string }[] = [
  { key: 'all',            label: 'TODOS'    },
  { key: 'empresa',        label: 'EMPRESA'  },
  { key: 'emprendimiento', label: 'STARTUP'  },
  { key: 'personal',       label: 'PERSONAL' },
];

interface ProjectsProps { id?: string; }

export const Projects = ({ id = 'proyectos' }: ProjectsProps) => {
  const [selected, setSelected]   = useState<Project | null>(null);
  const [activeFilter, setFilter] = useState<Filter>('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.clientType === activeFilter);

  return (
    <section className={`${styles.projects} section`} id={id}>
      <NoiseOverlay />

      <div className="container">
        <ScrollReveal direction="up">
          <SectionLabel number="04">Work</SectionLabel>
          <h2 className={styles.sectionHeading}>
            <SplitTextReveal>GALLERY</SplitTextReveal>
            <SplitTextReveal delay={0.2} className={styles.acidWord}>WALL</SplitTextReveal>
          </h2>

          {/* Filtros */}
          <div className={styles.filterBar}>
            {filters.map(f => (
              <button
                key={f.key}
                className={`${styles.filterBtn} ${activeFilter === f.key ? styles.filterActive : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                {activeFilter === f.key && <span className={styles.filterUnderline} />}
              </button>
            ))}
            <span className={styles.filterCount}>{filtered.length} PROYECTOS</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Grid de proyectos */}
      <div className="container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className={styles.projectGrid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={project.featured && i === 0}
                onClick={() => setSelected(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carrusel de clientes */}
      <ClientCarousel />

      {/* Modal con navegación entre proyectos */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            allProjects={filtered}
            onClose={() => setSelected(null)}
            onNavigate={(p) => setSelected(p)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};
