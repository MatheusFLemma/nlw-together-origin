import { useState } from 'react';

import styles from './Header.module.css';

import NavBar from '../NavBar';
import MenuToggle from '../NavBar/menuToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.container}>
        <h1>
          <a href="#" className={styles.logo}>
            beauty<span>salon</span>.
          </a>
        </h1>

        {isOpen && <NavBar handleToggleLink={handleMenu} />}

        <MenuToggle isOpen={isOpen} menuToggle={handleMenu} />
      </nav>
    </header>
  );
}
