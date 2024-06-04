import React from 'react';
import MyPortrait from '../assets/my-portrait.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-content" data-aos="zoom-in"> {/* Wrapper for content */}
        <div className="firstPanel">  {/* Wrapper for text */}
          <h1>
            Hi!<br className='desktop'/> I'm<span className='name'>&nbsp; Jon</span>
          </h1>
          <button className="hero-cta-button desktop">See My Work</button>
        </div>
        <div className="hero-image-container">  {/* Separate container for image */}
          <img src={MyPortrait} alt="Jon Spurling aka Happy Coder"  className="hero-image" />
        </div>
        <p className="hero_description">
          An ever evolving full-stack developer.
        </p>
        <button className="hero-cta-button mobile">See My Work</button>
      </div>
    </section>
  );
};

export default Hero;