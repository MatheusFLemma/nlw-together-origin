import Link from 'next/link';

import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';

import styles from './SocialMedias.module.css';

const socialMediaLinks = {
  instagram: {
    icon: <FiInstagram />,
    link: 'https://instagram.com',
  },
  facebook: {
    icon: <FiFacebook />,
    link: 'https://fb.com',
  },
  youtube: {
    icon: <FiYoutube />,
    link: 'https://youtube.com',
  },
};

export default function SocialMedias() {
  return (
    <>
      {Object.entries(socialMediaLinks).map(([key, social]) => (
        <Link key={key} href={social.link} rel={'external'}>
          <a target={'_blank'} rel={'external'} className={styles.link}>
            <i>{social.icon}</i>
          </a>
        </Link>
      ))}
    </>
  );
}
