import React from 'react';
import me from '../assets/hi.png';

const About = () => {
  return (
    <div data-aos="fade-up-left" className="main-container">
      <img src={me} alt="Jon Spurling aka Happy Coder" className="me" />
      <div className="box-container">
        <h1>Full-Stack Developer: Where Code Meets Caffeine (and Dad Jokes)</h1>
        <p>Hi, I'm Jonathan, a tech-loving dad who thrives on turning caffeine (strictly tea!) into code. My passion for IT has led me down a winding path of exploration, from building websites and tinkering with IoT devices to delving into the world of 3D printing. I'm constantly seeking out new challenges and knowledge, always eager to see what I can create next.</p>

        <p>Currently, I'm channeling my creativity into "Fake Sites," a personal project where I design and develop websites for imaginary clients. It's my way of sharpening my full-stack development skills while flexing my problem-solving muscles in a variety of scenarios. I'm starting with simpler sites, but I have big plans to tackle more complex projects like forums and interactive dashboards in the near future.</p>

        <p>When I'm not immersed in the digital world, you'll find me enjoying the great outdoors with my family, sharing a dad joke or two, or brewing the perfect cup of tea. Feel free to reach out if you'd like to collaborate on a project, chat about tech, or simply swap some puns!</p>
      </div>
    </div>
  );
};

export default About;