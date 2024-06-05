import React from 'react';
import MyPortrait from '../assets/my-portrait.png';
import { HashLink as Link } from 'react-router-hash-link';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-content" data-aos="zoom-in"> 
        <div className="firstPanel"> 
          <h1>
            Hi!<br className='desktop'/> I'm<span className='name'>&nbsp; Jon</span>
          </h1>
          <Link smooth to="#projects" className="hero-cta-button desktop">See My Work</Link> 
        </div>

        <div className="hero-image-container"> 
          <img src={MyPortrait} alt="Jon Spurling aka Happy Coder" className="hero-image" />
        </div>

        <p className="hero_description">
          An ever evolving full-stack developer.
        </p>

        <Link smooth to="#projects" className="hero-cta-button mobile">See My Work</Link>
      </div>
    </section>
  );
};

export default Hero;