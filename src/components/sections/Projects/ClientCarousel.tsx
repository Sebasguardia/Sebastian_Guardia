import styles from './Projects.module.css';
import { clients } from '../../../data/clients';

export const ClientCarousel = () => {
  if (!clients || clients.length === 0) {
    return null;
  }

  const doubled = [...clients, ...clients];

  return (
    <div className={styles.clientSection}>
      <p className={styles.clientLabel}>
        <span className={styles.clientLabelLine} />
        EMPRESAS Y CLIENTES QUE HAN CONFIADO EN MI TRABAJO
        <span className={styles.clientLabelLine} />
      </p>

      <div className={styles.clientCarouselWrap}>
        <div className={styles.clientTrack}>
          {doubled.map((client, i) => (
            <div key={i} className={styles.clientItem}>
              <span className={styles.clientName}>{client.name}</span>
              <span className={styles.clientIndustry}>{client.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
