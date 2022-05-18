import TestimonialsCards from './TestimonialsCards';

import styles from './Testimonials.module.css';

export default function Testimonials() {
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
