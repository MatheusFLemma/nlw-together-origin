import { BsWhatsapp } from 'react-icons/bs';

import styles from './Contact.module.css';

import ContactLinks from './ContactLinks';
import ButtonWithIcon from '../Button/ButtonWithIcon';

const whatsappMessageApiLink =
  'https://api.whatsapp.com/send?phone=+5511998456754&text=Oi! Gostaria de agendar um horário';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={`${styles.contact} container`}>
        <div className={styles.text} data-aos="fade-down" data-aos-duration="700">
          <h2>Entre em contato com a gente</h2>
          <p>
            Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e
            sugestões.
          </p>

          <ButtonWithIcon reference={whatsappMessageApiLink} content="Entrar em contato">
            <BsWhatsapp />
          </ButtonWithIcon>
        </div>

        <div className={styles.links}>
          <ContactLinks />
        </div>
      </div>
    </section>
  );
}
