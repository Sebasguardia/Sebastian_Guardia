import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';
import { BrutalButton } from '../../ui/BrutalButton/BrutalButton';
import { clsx } from 'clsx';
import styles from './Contact.module.css';

const schema = z.object({
  name:    z.string().min(2, 'Mínimo 2 caracteres'),
  email:   z.string().email('Email inválido'),
  subject: z.string().min(5, 'Mínimo 5 caracteres'),
  message: z.string().min(20, 'Mínimo 20 caracteres'),
});

type FormData = z.infer<typeof schema>;

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    // TODO: Integrar emailjs-com con tus credenciales
    await new Promise(r => setTimeout(r, 1000));
    toast.success('¡Mensaje enviado! Te respondo pronto.', { icon: '⚡' });
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-name">Nombre</label>
        <input
          id="contact-name"
          {...register('name')}
          className={clsx(styles.input, errors.name && styles.error)}
          placeholder="JOHN DOE"
          autoComplete="name"
        />
        {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          {...register('email')}
          className={clsx(styles.input, errors.email && styles.error)}
          placeholder="JOHN@EJEMPLO.COM"
          autoComplete="email"
        />
        {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
      </div>

      <div className={clsx(styles.field, styles.formFull)}>
        <label className={styles.label} htmlFor="contact-subject">Asunto</label>
        <input
          id="contact-subject"
          {...register('subject')}
          className={clsx(styles.input, errors.subject && styles.error)}
          placeholder="PROYECTO / COLABORACIÓN / CONSULTA"
        />
        {errors.subject && <span className={styles.errorMsg}>{errors.subject.message}</span>}
      </div>

      <div className={clsx(styles.field, styles.formFull)}>
        <label className={styles.label} htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          {...register('message')}
          className={clsx(styles.textarea, errors.message && styles.error)}
          placeholder="CUÉNTAME SOBRE TU PROYECTO..."
        />
        {errors.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
      </div>

      <div className={styles.formFull}>
        <BrutalButton variant="acid" disabled={isSubmitting} showArrow={false}>
          {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'} <FiSend size={14} />
        </BrutalButton>
      </div>
    </form>
  );
};
