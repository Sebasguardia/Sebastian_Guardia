import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import type { Project } from '../../../types';
import styles from './Projects.module.css';

const clientLabels: Record<string, string> = {
  empresa:       'EMPRESA',
  emprendimiento:'STARTUP',
  personal:      'PERSONAL',
};

const clientColors: Record<string, string> = {
  empresa:       'var(--c-cyan)',
  emprendimiento:'var(--c-acid)',
  personal:      'var(--c-ash)',
};

/** Gradientes monocromáticos para mantener el estilo brutalista */
const cardGradients = [
  'linear-gradient(135deg, #0a0a0a 0%, #111 40%, #080808 100%)',
  'linear-gradient(135deg, #0d0d0d 0%, #141414 50%, #0a0a0a 100%)',
  'linear-gradient(135deg, #050505 0%, #0f0f0f 60%, #000000 100%)',
];

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
  featured?: boolean;
}

export const ProjectCard = ({ project, index, onClick, featured }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);
  const catColor  = project.clientType ? clientColors[project.clientType] : 'var(--c-acid)';
  const catLabel  = project.clientType ? clientLabels[project.clientType] : 'PROYECTO';
  const gradient  = cardGradients[index % cardGradients.length];
  const accent    = 'var(--c-acid)';

  return (
    <motion.div
      className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
      onClick={onClick}
      data-cursor-label="VER"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ '--card-accent': accent } as React.CSSProperties}
    >
      {/* Fondo: imagen real o gradiente */}
      {project.image ? (
        <div
          className={styles.cardImage}
          style={{ backgroundImage: `url(${project.image})` }}
        />
      ) : (
        <div className={styles.cardGradient} style={{ background: gradient }}>
          {/* Patrón de grid decorativo */}
          <div className={styles.cardGrid} />
          {/* Círculo de acento */}
          <div
            className={styles.cardGlow}
            style={{ background: `radial-gradient(circle at 70% 30%, ${accent}18 0%, transparent 65%)` }}
          />
        </div>
      )}

      {/* Overlay degradado inferior */}
      <div className={styles.cardOverlay} />

      {/* Barra de acento superior izquierda */}
      <div className={styles.cardAccentBar} style={{ background: accent }} />

      {/* Scan-line que sube en hover */}
      <motion.div
        className={styles.scanLine}
        animate={{ y: hovered ? '-110%' : '110%' }}
        transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
        style={{ background: `linear-gradient(transparent, ${accent}20, transparent)` }}
      />

      {/* Número decorativo */}
      <span className={styles.cardNum}>{String(index + 1).padStart(2, '0')}</span>

      {/* Badge tipo cliente — aparece al hover */}
      <motion.div
        className={styles.clientBadge}
        style={{ color: catColor, borderColor: catColor } as React.CSSProperties}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : -10 }}
        transition={{ duration: 0.25 }}
      >
        <span className={styles.clientDot} style={{ background: catColor }} />
        {catLabel}
      </motion.div>

      {/* Año */}
      {project.year && (
        <span className={styles.cardYear}>{project.year}</span>
      )}

      {/* Contenido inferior */}
      <div className={styles.cardContent}>
        {/* Tags de tecnología */}
        <div className={styles.cardTagRow}>
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className={styles.techTag}>{t}</span>
          ))}
          {project.tags.length > 3 && (
            <span className={styles.techTag} style={{ opacity: 0.5 }}>+{project.tags.length - 3}</span>
          )}
        </div>

        <h3 className={styles.cardTitle}>{project.title}</h3>

        {/* Descripción — solo visible al hover */}
        <motion.p
          className={styles.cardDesc}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: hovered ? 0.06 : 0 }}
        >
          {project.description}
        </motion.p>

        {/* Links en card */}
        <motion.div
          className={styles.cardLinks}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: hovered ? 0.1 : 0 }}
        >
          {project.link && (
            <button
              className={styles.cardLinkBtn}
              style={{ '--btn-accent': accent } as React.CSSProperties}
              onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
            >
              <FiArrowUpRight size={13} /> DEMO
            </button>
          )}
          {project.github && (
            <button
              className={styles.cardLinkBtn}
              onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
            >
              <FiGithub size={13} /> CODE
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
