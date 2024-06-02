import React from 'react';
import { motion } from 'framer-motion';
import MyPortrait from '../assets/my-portrait.png';
import Header from './Header';

const Hero = () => {
  const text = "A passionate full-stack developer.".split(" ");

  return (
    <section className="hero">  {/* Semantic element for the hero section */}
        <Header />
      <div className="hero-content">  {/* Wrapper for content */}
        <div className="firstPanel">  {/* Wrapper for text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi!<br className='desktop'/> I'm<span className='name'>&nbsp; Jon</span>
          
        </motion.h1>
        <button className="hero-cta-button desktop">See My Work</button>
        </div>
        <div className="hero-image-container">  {/* Separate container for image */}
            <motion.img 
                src={MyPortrait} 
                alt="Jon Spurling aka Happy Coder" 
                className="hero-image" 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            />
        </div>

        <motion.p 
          className="hero_description"
          initial={{ opacity: 0 }}
          animate={{ opacity: .7 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {text.map((el, i) => (
            <span key={i}>{el} </span>
          ))}
        </motion.p>
        <button className="hero-cta-button mobile">See My Work</button>
      </div>
      
    </section>
  );
};

export default Hero;