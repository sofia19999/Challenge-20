import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', url: 'http://project1.com', github: 'https://github.com/project1' },
    { title: 'Project 2', url: 'http://project2.com', github: 'https://github.com/project2' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;