import { useState, useEffect } from 'react';

import NavBar from './NavBar';
import MenuToggle from './NavBar/menuToggle';
import DeskNavBar from './DeskNavBar';

export default function MenuMobile() {
  const [isMobile, setIsMobile] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleIsMobileScreen();
  }, []);

  function handleIsMobileScreen() {
    if (window.innerWidth > 1023) {
      setIsMobile(false);
    }
  }

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isMobile ? (
        <>
          {isOpen && (
            <NavBar handleToggleLink={handleMenu} data-aos="fade-down" data-aos-duration="300" />
          )}

          <MenuToggle isOpen={isOpen} menuToggle={handleMenu} />
        </>
      ) : (
        <DeskNavBar />
      )}
    </>
  );
}
