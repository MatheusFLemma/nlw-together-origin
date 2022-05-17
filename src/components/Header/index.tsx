import Link from 'next/link';
import { useState, useEffect } from 'react';

import styles from './Header.module.css';

import NavBar from './NavBar';
import MenuToggle from './NavBar/menuToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderOffset);
  }, []);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

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

        {isOpen && <NavBar handleToggleLink={handleMenu} data-aos="fade-down" />}

        <MenuToggle isOpen={isOpen} menuToggle={handleMenu} />
      </nav>
    </header>
  );
}
