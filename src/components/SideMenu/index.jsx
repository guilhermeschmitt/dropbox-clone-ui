import React, { useState, useEffect } from 'react';
import { Container } from '../SideMenu/styles';

const SideMenu = ({ children, isActive, setIsActive }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      // setIsActive(false);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  const cssClazz = [
    isActive ? 'open' : '',
    scrollY <= 200 ? 'scrollOpen' : ''
  ];

  return (
    <Container className={cssClazz.join(" ")}>
      {children}
    </Container>
  )
}

export default SideMenu;
