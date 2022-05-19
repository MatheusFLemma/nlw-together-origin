import TestimonialsCards from './TestimonialsCards';

import styles from './Testimonials.module.css';
import dynamic from 'next/dynamic';

export default function Testimonials() {
  const TestimonialsCards = dynamic(() => import('./TestimonialsCards'), { ssr: false });

  return (
    <section id="testimonials" className={`${styles.testimonials} section`}>
      <div className="container">
        <header className={styles.header} data-aos="fade-down" data-aos-duration="700">
          <h2>Depoimentos de quem já passou por aqui</h2>
        </header>

        <TestimonialsCards />
      </div>
    </section>
  );
}
