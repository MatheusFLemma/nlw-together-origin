import Image from 'next/image';

import styles from './TestimonialsCard.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import womanOne from '../../../../assets/56.jpg';
import womanTwo from '../../../../assets/12.jpg';
import manOne from '../../../../assets/87.jpg';

const localTestimonials = {
  user1: {
    name: 'Wanessa Souza',
    image: {
      src: womanOne,
      alt: 'Foto de perfil da Wanessa Souza, cliente BeautySalon',
    },
    comment:
      'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
  },
  user2: {
    name: 'Marta Perkins',
    image: {
      src: womanTwo,
      alt: 'Foto de perfil da Marta Perkins, cliente BeautySalon',
    },
    comment:
      'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
  },
  user3: {
    name: 'Samuel Han',
    image: {
      src: manOne,
      alt: 'Foto de perfil da Samuel Han, cliente BeautySalon',
    },
    comment:
      'Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.',
  },
};

SwiperCore.use([Pagination]);

export default function TestimonialsCards() {
  return (
    <Swiper
      className={styles.testimonial}
      slidesPerView={1}
      spaceBetween={32}
      mousewheel={{ forceToAxis: true }}
      keyboard={{ enabled: true }}
      pagination={{ clickable: true }}
      loop={true}
      tag={'div'}
      wrapperTag={'div'}
      breakpoints={{
        767: {
          slidesPerView: 2,
          setWrapperSize: true,
        },
      }}
    >
      {Object.entries(localTestimonials).map(([key, testimonial]) => (
        <SwiperSlide style={{ height: 'auto', padding: '4rem 1rem', width: '100%' }} key={key}>
          <blockquote data-aos="fade-down" data-aos-duration="800">
            <p>
              <span>&ldquo;</span>
              {testimonial.comment}
            </p>
            <cite>
              <Image
                width={32}
                height={32}
                src={testimonial.image.src}
                alt={testimonial.image.alt}
              />
              {testimonial.name}
            </cite>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
