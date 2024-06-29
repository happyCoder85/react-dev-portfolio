import React, { useState } from 'react';
import projects from '../data/projectsData'; // Import the projects data
import Card from '../components/Card';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <>
      <div data-aos="fade-up-left" className="main-container about">
        <div className="box-container">
          <div className="projects-container">
            <div className="projects-description">
              {selectedProject ? (
                <div>
                  <Card project={selectedProject} />
                  <button onClick={() => setSelectedProject(null)} className="goBack">Back to Projects</button>
                </div>
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
                      <h4 className='small-screen'>Description</h4>
                      <h4 className="large-screen">Tech Stack</h4>
                    </div>
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="project"
                        onClick={() => handleProjectClick(project)}
                      >
                        <h3>{project.title}</h3>
                        <p className="description">{project.description[0].slice(0,100)} ...</p>
                        <div className="tech-stack">
                          {project.techStack.map((tech, index) => (
                            <img key={index} src={tech} alt={`${tech} logo`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;