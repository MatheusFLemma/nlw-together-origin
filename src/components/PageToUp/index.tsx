import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

import styles from './PageToUp.module.css';

export default function PageToUp() {
  const [pageToTopOffset, setPageToTopOffset] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handlePageToTopOffset);
  }, []);

  function handlePageToTopOffset() {
    if (window.scrollY >= 560) {
      setPageToTopOffset(true);
    } else {
      setPageToTopOffset(false);
    }
  }

  return (
    <a
      className={`${styles['back-to-top']} ${pageToTopOffset ? `${styles.show}` : ''}`}
      href="#home"
    >
      <FiArrowUp />
    </a>
  );
}
