import Link from 'next/link';

import SocialMedias from './SocialMedias';

import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} section`}>
      <div className="container grid">
        <div className={styles.brand} data-aos="fade-down" data-aos-duration="700">
          <Link href="/">
            <a className={styles.logo}>
              beauty<span>salon</span>.
            </a>
          </Link>

          <p>&copy;2021 Beautysalon.</p>
          <p>Todos os direitos reservados.</p>
        </div>

        <div className={styles.social} data-aos="fade-down" data-aos-duration="800">
          <SocialMedias />
        </div>
      </div>
    </footer>
  );
}
