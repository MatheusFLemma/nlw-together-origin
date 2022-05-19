import styles from './DeskNavBar.module.css';

const links = {
  home: {
    reference: '#home',
    text: 'Início',
  },
  about: {
    reference: '#about',
    text: 'Sobre',
  },
  services: {
    reference: '#services',
    text: 'Serviços',
  },
  testimonials: {
    reference: '#testimonials',
    text: 'Depoimentos',
  },
  contact: {
    reference: '#contact',
    text: 'Contato',
  },
};

export default function DeskNavBar() {
  return (
    <div className={styles.menu} data-aos="fade-down" data-aos-duration="200">
      <ul>
        {Object.entries(links).map(([key, value]) => (
          <li key={key}>
            <a className={styles.title} href={value.reference}>
              {value.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
