import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiCalendar, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { BrutalButton } from '../../ui/BrutalButton/BrutalButton';
import { stopScroll, startScroll } from '../../../hooks/useSmoothScroll';
import type { Project } from '../../../types';
import styles from './Projects.module.css';

const clientLabels: Record<string, string> = {
  empresa:        'EMPRESA',
  emprendimiento: 'STARTUP',
  personal:       'PERSONAL',
};

const clientColors: Record<string, string> = {
  empresa:        'var(--c-cyan)',
  emprendimiento: 'var(--c-acid)',
  personal:       'var(--c-ash)',
};

interface ProjectModalProps {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

export const ProjectModal = ({ project, allProjects, onClose, onNavigate }: ProjectModalProps) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject  = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject  = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const catColor  = project.clientType ? clientColors[project.clientType] : 'var(--c-acid)';
  const catLabel  = project.clientType ? clientLabels[project.clientType] : 'PROYECTO';
  const accent    = 'var(--c-acid)';

  // Resetear la imagen cada vez que cambie de proyecto
  useEffect(() => {
    setCurrentImageIdx(0);
  }, [project.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevProject) onNavigate(prevProject);
      if (e.key === 'ArrowRight' && nextProject) onNavigate(nextProject);
    };
    
    window.addEventListener('keydown', onKey);
    stopScroll();
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', onKey);
      startScroll();
      document.body.style.overflow = '';
    };
  }, [onClose, prevProject, nextProject, onNavigate]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery) {
      setCurrentImageIdx((prev) => (prev + 1) % project.gallery!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gallery) {
      setCurrentImageIdx((prev) => (prev - 1 + project.gallery!.length) % project.gallery!.length);
    }
  };

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Backdrop puro, cerrar modal al clickear */}
      <div
        className={styles.modalBackdrop}
        onClick={onClose}
      />

        {/* Galería inmersiva (Lado Izquierdo) */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div
            className={styles.modalGalleryContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            key={`gallery-${project.id}`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`${project.id}-img-${currentImageIdx}`}
                src={project.gallery[currentImageIdx]}
                alt={`${project.title} screenshot ${currentImageIdx + 1}`}
                className={styles.modalGalleryImage}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </AnimatePresence>

            {/* Zonas de clic para navegar */}
            {project.gallery.length > 1 && (
              <>
                <div 
                  className={styles.carouselHitAreaLeft} 
                  onClick={prevImage}
                  title="Imagen Anterior"
                >
                  <FiArrowLeft className={styles.subtleArrow} />
                </div>
                <div 
                  className={styles.carouselHitAreaRight} 
                  onClick={nextImage}
                  title="Siguiente Imagen"
                >
                  <FiArrowRight className={styles.subtleArrow} />
                </div>
                
                {/* Contador minimalista flotante */}
                <span className={styles.galleryFloatingCounter}>
                  {String(currentImageIdx + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
                </span>
              </>
            )}
          </motion.div>
        )}

      {/* Panel lateral */}
      <motion.div
        className={styles.modalContent}
        key={project.id}
        data-lenis-prevent
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
      >
        {/* Barra de acento superior */}
        <div className={styles.modalAccentBar} style={{ background: accent }} />

        {/* Header del modal */}
        <div className={styles.modalHeader}>
          {/* Navegación prev/next */}
          <div className={styles.modalNav}>
            <button
              className={styles.modalNavBtn}
              onClick={() => prevProject && onNavigate(prevProject)}
              disabled={!prevProject}
              aria-label="Proyecto anterior"
            >
              <FiArrowLeft size={14} />
            </button>
            <span className={styles.modalNavCount}>
              {String(currentIndex + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
            </span>
            <button
              className={styles.modalNavBtn}
              onClick={() => nextProject && onNavigate(nextProject)}
              disabled={!nextProject}
              aria-label="Siguiente proyecto"
            >
              <FiArrowRight size={14} />
            </button>
          </div>

          <button className={styles.modalClose} onClick={onClose} aria-label="Cerrar modal">
            <FiX size={18} />
          </button>
        </div>

        {/* Hero número + título */}
        <div className={styles.modalHeroSection} style={{ '--modal-accent': accent } as React.CSSProperties}>
          <span className={styles.modalNum}>{String(parseInt(project.id)).padStart(2, '0')}</span>
          <div className={styles.modalMeta}>
            {project.clientType && (
              <span
                className={styles.modalClientBadge}
                style={{ color: catColor, borderColor: catColor } as React.CSSProperties}
              >
                <span className={styles.clientDot} style={{ background: catColor }} />
                {catLabel}
              </span>
            )}
            {project.year && (
              <span className={styles.modalYear}>
                <FiCalendar size={11} /> {project.year}
              </span>
            )}
          </div>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <div className={styles.modalAccentLine} style={{ background: accent }} />
        </div>

        {/* Cuerpo */}
        <div className={styles.modalBody}>
          <p className={styles.modalDescription}>{project.description}</p>

          {/* Detalles adicionales */}
          {(project.role || project.challenge || project.result) && (
            <div className={styles.detailSection}>
              {project.role && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 className={styles.modalSectionTitle}>MI ROL</h4>
                  <p className={styles.modalSectionText}>{project.role}</p>
                </div>
              )}
              {project.challenge && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 className={styles.modalSectionTitle}>EL RETO</h4>
                  <p className={styles.modalSectionText}>{project.challenge}</p>
                </div>
              )}
              {project.result && (
                <div style={{ marginBottom: '24px' }}>
                  <h4 className={styles.modalSectionTitle}>EL RESULTADO</h4>
                  <p className={styles.modalSectionText}>{project.result}</p>
                </div>
              )}
            </div>
          )}

          {/* Stack técnico */}
          <p className={styles.modalTagsLabel}>STACK TÉCNICO</p>
          <div className={styles.techRow}>
            {project.tags.map((t) => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
          </div>

          {/* Separador */}
          <div className={styles.modalBodyDivider} />

          {/* CTAs */}
          <div className={styles.modalCtas}>
            {project.link && (
              <BrutalButton variant="acid" href={project.link}>
                VER DEMO <FiExternalLink size={13} />
              </BrutalButton>
            )}
            {project.github && (
              <BrutalButton variant="outline" href={project.github} showArrow={false}>
                CÓDIGO FUENTE <FiGithub size={13} />
              </BrutalButton>
            )}
          </div>

          {/* Hint teclado */}
          <p className={styles.modalHint}>
            Usa ← → para navegar · ESC para cerrar
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
