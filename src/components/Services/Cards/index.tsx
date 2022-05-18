import Image from 'next/image';

import styles from './Cards.module.css';

import womanHairIcon from '../../../../assets/woman-hair.svg';
import trimIcon from '../../../../assets/trim.svg';
import cosmeticIcon from '../../../../assets/cosmetic.svg';

const cardInfos = {
  hairTherapy: {
    title: 'Terapia capilar',
    paragraph:
      'Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.',
    image: {
      src: womanHairIcon,
      alt: 'Ícone referenciando uma mulher de cabelos ondulados e sorrindo',
    },
  },
  cuts: {
    title: 'Cortes',
    paragraph:
      'A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.',
    image: {
      src: trimIcon,
      alt: 'Ícone referenciando uma mulher de cabelos ondulados e sorrindo',
    },
  },
  treatments: {
    title: 'Tratamentos',
    paragraph:
      'O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.',
    image: {
      src: cosmeticIcon,
      alt: 'Ícone referenciando uma mulher de cabelos ondulados e sorrindo',
    },
  },
};

export default function Cards() {
  return (
    <div className={styles.cards}>
      {Object.entries(cardInfos).map(([key, card]) => (
        <div key={key} className={styles.card} data-aos="fade-down" data-aos-duration="800">
          <i>
            <Image src={card.image.src} alt={card.image.alt} />
          </i>
          <h3>{card.title}</h3>
          <p>{card.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
