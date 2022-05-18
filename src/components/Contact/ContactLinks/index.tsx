import { BiPhone } from 'react-icons/bi';
import { FiMapPin, FiMail } from 'react-icons/fi';

import styles from './ContactLinks.module.css';

const ContactAnchorLinks = {
  Phone: {
    icon: <BiPhone />,
    content: '11 99845-6754',
  },
  Location: {
    icon: <FiMapPin />,
    content: 'R. Amauri Souza, 346',
  },
  Mail: {
    icon: <FiMail />,
    content: 'contato@beautysalon.com',
  },
};

export default function ContactLinks() {
  return (
    <ul className={styles.links} data-aos="fade-down" data-aos-duration="800">
      {Object.entries(ContactAnchorLinks).map(([key, link]) => (
        <li key={key}>
          <i>{link.icon}</i>
          {link.content}
        </li>
      ))}
    </ul>
  );
}
