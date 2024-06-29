import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const header = document.querySelector('.header');
      if (scrollTop > 0) {
        header.classList.add('scrolling');
      } else {
        header.classList.remove('scrolling');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='header'>
      <nav>
        <ul>
          <li><Link smooth to="#home">Home</Link></li>
          <li><Link smooth to="#about">About</Link></li>
          <li><Link smooth to="#causes">Causes</Link></li>
          <li><Link smooth to="#projects">Projects</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;