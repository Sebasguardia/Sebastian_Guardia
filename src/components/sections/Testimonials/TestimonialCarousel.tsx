import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { testimonials } from '../../../data/testimonials';
import styles from './Testimonials.module.css';

export const TestimonialCarousel = () => (
  <Swiper
    modules={[EffectCoverflow, Pagination, Autoplay]}
    effect="coverflow"
    grabCursor
    centeredSlides
    slidesPerView="auto"
    coverflowEffect={{ rotate: 0, stretch: 60, depth: 120, modifier: 1.5 }}
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    style={{ paddingBottom: '48px' }}
  >
    {testimonials.map((t) => (
      <SwiperSlide key={t.id} style={{ width: '380px' }}>
        <div className={styles.tCard}>
          <span className={styles.quote}>"</span>
          <p className={styles.tText}>{t.text}</p>
          <div className={styles.tAuthor}>
            <div className={styles.avatar}>{t.name[0]}</div>
            <div>
              <div className={styles.authorName}>{t.name}</div>
              <div className={styles.authorRole}>{t.role} — {t.company}</div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
