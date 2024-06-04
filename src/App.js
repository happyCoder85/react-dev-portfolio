import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      once: false, // Allow repeated animations
      delay: 300,
      duration: 2000,
    });

    const handleScroll = () => {
      AOS.refresh(); // Refresh AOS on scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;