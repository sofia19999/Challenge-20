import React from 'react';

function Project({ project }) {
  return (
    <div className="project">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>
        <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">Live Demo</a> | 
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </div>
  );
}

export default Project;