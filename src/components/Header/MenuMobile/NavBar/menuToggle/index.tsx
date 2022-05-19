import { FiX } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';

import styles from './MenuToggle.module.css';

interface MenuToggleProps {
  isOpen: boolean;
  menuToggle: any;
}

export default function MenuToggle({ menuToggle, isOpen }: MenuToggleProps) {
  return (
    <button
      className={isOpen ? `${styles.menuButton} ${styles.close}` : `${styles.menuButton}`}
      type="button"
      onClick={menuToggle}
    >
      {isOpen ? <FiX className={styles.close} data-aos="fade-down" /> : <FiMenu />}
    </button>
  );
}
