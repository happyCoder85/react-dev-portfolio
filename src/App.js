// src/App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import About from './components/About';
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
    <div className="App">
      <Hero />
      <About />
    </div>
  );
};

export default App;