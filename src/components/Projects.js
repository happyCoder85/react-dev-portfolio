import React, { useState } from 'react';
import MemBank from '../assets/memBank.png';
import FakeSites from '../assets/FakeSites.png';
import WeatherApp from '../assets/copy.png';
import Card from '../components/Card';

import HTML from '../assets/tech-stack/htmllogo.png';
import CSS from '../assets/tech-stack/csslogo.png';
import JS from '../assets/tech-stack/js-logo.png';
import PHP from '../assets/tech-stack/php.png';
import Python from '../assets/tech-stack/python.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  }

  return (
    <>
      <div data-aos="fade-up-left" className="main-container about">
        <div className="box-container">
          <div className="projects-container">
            <div className="projects-description">
              {selectedProject ? (
                <>
                  <Card />
                  <div className="outer-links">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                  </div>
                  <button onClick={() => setSelectedProject(null)}>Back to Projects</button>
                </>
              ) : (
              <div className="projects-project-container">
                <div className="projects-section">
                  <h1>Projects: My Creations</h1>

                    <div className="project-notes">
                      <p>Welcome to my digital workshop! This is where lines of code transform into websites, apps, and sometimes, even a chuckle or two. To your right, you'll find a curated collection of my proudest creations. Each project is a testament to my love for problem-solving, a sprinkle of creativity, and maybe even a dash of dad humor.</p>

                      <p>Click on a project to uncover the story behind it, peek at the code on GitHub (I promise, no spaghetti code here), or even explore the live website (if it's not just a figment of my "Fake Sites" imagination). Let's just say, not all code is created equal – some of it is just a bit more... punny.</p>

                      <p>So, grab a virtual seat, get comfortable, and let's dive into the world of code, creativity, and maybe even a groan-worthy dad joke or two. After all, why should kids have all the fun?</p>
                 </div>
               </div>
               <div className="projects-list">
                  <h2>Current</h2>
                  <div className="project-headings">
                    <h4>Title</h4>
                    <h4>Description</h4>
                    <h4 class="large-screen">Tech Stack</h4>
                  </div>
                  <div className="project" onClick={() => handleProjectClick(FakeSites)}>
                    <h3>Fake Sites</h3>
                    <p>A playground for Imaginary Clients</p>
                    <div className="tech-stack">
                      <img src={HTML} alt="HTML logo" />
                      <img src={CSS} alt="CSS logo" />
                      <img src={JS} alt="JavaScript logo" />
                    </div>
                  </div>
                  <div className="project" onClick={() => handleProjectClick(MemBank)}>
                    <h3>MemBank</h3>
                    <p>Memory App for the Digital Age</p>
                    <div className="tech-stack">
                      <img src={HTML} alt="HTML logo" />
                      <img src={CSS} alt="CSS logo" />
                      <img src={JS} alt="JavaScript logo" />
                      <img src={PHP} alt="PHP logo" />
                    </div>
                  </div>
                  <div className="project" onClick={() => handleProjectClick(WeatherApp)}>
                    <h3>Weather App</h3>
                    <p>Weather processing application with graphs</p>
                    <div className="tech-stack">
                      <img src={Python} alt="Python logo" />
                    </div>
                  </div>
                </div>
            </div>
              )
            }
          </div>
        </div>
        </div>
        </div>
      </>
  )};



export default Projects;