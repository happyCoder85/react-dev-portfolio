import { React, useEffect } from 'react'

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
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
            <li><a href='http://localhost:3000'>Home</a></li>
            <li><a href='http://localhost:3000'>About</a></li>
            <li><a href='http://localhost:3000'>Projects</a></li>
            <li><a href='http://localhost:3000'>Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header