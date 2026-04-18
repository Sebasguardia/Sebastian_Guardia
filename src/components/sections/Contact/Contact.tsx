import { FiGithub, FiLinkedin, FiMessageCircle } from 'react-icons/fi';
import { SectionLabel } from '../../ui/SectionLabel/SectionLabel';
import { ScrollReveal } from '../../ui/ScrollReveal/ScrollReveal';
import { NoiseOverlay } from '../../ui/NoiseOverlay/NoiseOverlay';
import { ContactForm } from './ContactForm';
import { BrutalButton } from '../../ui/BrutalButton/BrutalButton';
import styles from './Contact.module.css';

interface ContactProps { id?: string; }

export const Contact = ({ id = 'contacto' }: ContactProps) => (
  <section className={`${styles.contact} section`} id={id}>
    <NoiseOverlay />
    <span className={styles.bigText} aria-hidden="true">CONTACTO</span>

    <div className={`container`}>
      <ScrollReveal direction="up">
        <SectionLabel number="07">Hablemos</SectionLabel>

        {/* CORREO GIGANTE COMO TÍTULO */}
        <div className={styles.topEmailWrapper}>
          <a href="sebastianguardiaticlla@gmail.com" className={styles.emailLink} data-hover>
            hola@sebastianguardia.com
          </a>
        </div>
      </ScrollReveal>

      <div className={styles.contactGrid}>
        {/* COLUMNA IZQUIERDA: Textos y Botones */}
        <div className={styles.contactLeft}>
          <ScrollReveal direction="up" delay={0.15}>
            <h2 className={styles.contactTitle}>
              ¿Tienes un proyecto en mente? <br />
              <span className={styles.acidWord}>Hagámoslo realidad.</span>
            </h2>
            <p className={styles.contactSubtitle}>
              Estoy disponible para trabajos freelance y nuevas oportunidades.
              Escríbeme al correo, completa el formulario o mándame un WhatsApp directo.
            </p>

            <div className={styles.contactActions}>
              <BrutalButton variant="acid" href="https://wa.me/954001722" showArrow={false}>
                ENVIAR WHATSAPP <FiMessageCircle size={16} />
              </BrutalButton>

              <div className={styles.socials}>
                <a href="https://github.com/Sebasguardia" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub" title="GitHub" data-hover>
                  <FiGithub size={18} /> GITHUB
                </a>
                <a href="https://www.linkedin.com/in/sebastian-guardia-64a865379" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn" title="LinkedIn" data-hover>
                  <FiLinkedin size={18} /> LINKEDIN
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div className={styles.contactRight}>
          <ScrollReveal direction="left" delay={0.3}>
            <div className={styles.formContainer}>
              <div className={styles.formDecoration}></div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);
