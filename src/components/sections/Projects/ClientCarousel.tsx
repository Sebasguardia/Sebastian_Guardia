import styles from './Projects.module.css';

const clients = [
  { name: 'TechCorp Lima',    industry: 'FINTECH'     },
  { name: 'Startup Hub PE',   industry: 'ACELERADORA' },
  { name: 'Nexus Digital',    industry: 'AGENCIA'     },
  { name: 'DataWave',         industry: 'ANALYTICS'   },
  { name: 'BuildFast Co.',    industry: 'SAAS'        },
  { name: 'CreativeAI',       industry: 'DISEÑO'      },
  { name: 'MercadoTech',      industry: 'E-COMMERCE'  },
  { name: 'CloudNine Dev',    industry: 'CLOUD'       },
];

const doubled = [...clients, ...clients];

export const ClientCarousel = () => (
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
