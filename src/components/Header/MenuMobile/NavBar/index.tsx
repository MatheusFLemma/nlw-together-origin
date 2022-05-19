import styles from './NavBar.module.css';

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

interface NavBarProps {
  handleToggleLink: () => void;
}

export default function NavBar({ handleToggleLink }: NavBarProps) {
  return (
    <div className={styles.menu} data-aos="fade-down" data-aos-duration="200">
      <ul className={styles['list-grid']}>
        {Object.entries(links).map(([key, value]) => (
          <li key={key}>
            <a className={styles.title} onClick={handleToggleLink} href={value.reference}>
              {value.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
