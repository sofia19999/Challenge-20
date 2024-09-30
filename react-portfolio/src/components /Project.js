import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { 
      title: 'Project 1', 
      image: '/path-to-image1.jpg', 
      deployedLink: 'http://project1.com', 
      githubLink: 'https://github.com/your-username/project1' 
    },
    { 
      title: 'Project 2', 
      image: '/path-to-image2.jpg', 
      deployedLink: 'http://project2.com', 
      githubLink: 'https://github.com/your-username/project2' 
    },
    // Add more projects here
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Projects</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

