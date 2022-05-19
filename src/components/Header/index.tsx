import Link from 'next/link';
import { useState, useEffect } from 'react';

import MenuMobile from './MenuMobile';

import styles from './Header.module.css';

export default function Header() {
  const [headerOffset, setHeaderOffset] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderOffset);
  }, []);

  function handleHeaderOffset() {
    if (window.scrollY >= 72) {
      setHeaderOffset(true);
    } else {
      setHeaderOffset(false);
    }
  }

  return (
    <header className={`${styles.header} ${headerOffset ? `${styles.active}` : ''}`}>
      <nav className={styles.container}>
        <h1>
          <Link href="/">
            <a className={styles.logo}>
              beauty<span>salon</span>.
            </a>
          </Link>
        </h1>

        <MenuMobile />
      </nav>
    </header>
  );
}
