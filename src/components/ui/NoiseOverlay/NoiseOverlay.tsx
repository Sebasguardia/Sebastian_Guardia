import styles from './NoiseOverlay.module.css';

/**
 * NoiseOverlay — capa semitransparente con textura SVG de ruido
 * Se coloca sobre cualquier sección para añadir la textura "Concrete" del diseño Neo-Brutalista.
 */
export const NoiseOverlay = () => (
  <div className={styles.noise} aria-hidden="true" />
);
