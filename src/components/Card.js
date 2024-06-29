import React from 'react';

const Card = ({ project }) => {
  return (
    <div className="project-card">
        <h2>{project.title}</h2>
      <div className="card-header">
        <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
      </div>
      <div className="card-body">
        {project.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
            <img key={index} src={tech} alt={`${tech} logo`} className="tech-logo" />
        ))}
      </div>
      <div className="card-footer">
        {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">View Project</a>}
        {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">GitHub</a>}
      </div>
    </div>
  );
};

export default Card;