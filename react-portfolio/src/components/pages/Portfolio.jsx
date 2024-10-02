// Portfolio.jsx
import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: "XOXO Flights",
    description: "The Flight Availability and Weather Tracker is a tool designed to help users find available flights and obtain weather information for their destination. By entering the origin, destination, and date of travel, users can access a list of available flights for their specified route and date. Additionally, the tool provides the weather conditions at the destination, allowing users to better plan their trips.",
    
    liveDemo: "https://tatiana-vel.github.io/CBPROJECT1/",
    githubRepo: "https://github.com/tatiana-vel/CBPROJECT1"
  },
  {
    title: "Power_Bundle",
    description: "The Power Bundle Web page is a eCommerce web page that focuses on healthy sports nutrition. It provides a log-in and logout, sign up option. The user can only add when logged in. When the product is chosen a modal opens and you see the product chosen. You can add and subtract product and this is handled also in the backend in a virtual shopping cart.",
   
    liveDemo: "https://power-bundle-gh9r.onrender.com/",
    githubRepo: "https://github.com/Flo2009/Power_Bundle"
  },
  {
    title: "SVG Logo Maker",
    description: "The SVG Logo Maker is a command-line application that allows users to generate simple logos in SVG format. This tool is especially useful for developers who need quick, customizable logos without hiring a graphic designer. Users can input custom text, choose text and shape colors, and select from predefined shapes to generate an SVG file that matches their specifications.",
    liveDemo: "https://drive.google.com/file/d/1wFQzXbwvh56yqIMp7QtIAxIPKoW9w1Ac/view",
    githubRepo: "https://github.com/sofia19999/Challenge-10"
  },
  {
    title: "Work portfolio",
    description: "As an aspiring app developer, I created my portfolio to showcase my skills and projects as well as to provide contact information",
    githubRepo: "https://github.com/sofia19999/Challenge2"
  },
  {
    title: "Social Network API",
    description: "This project is a Social Network API built using Express.js, MongoDB, and Mongoose. It allows users to create a social network where they can share their thoughts, react to friends' thoughts, and manage a friend list. This API is designed to handle large amounts of unstructured data using a NoSQL database.",
    liveDemo: "https://drive.google.com/file/d/1wYvioV4N54PDGp_iP7yFv4wh7XDEGbXO/view",
    githubRepo: "https://github.com/sofia19999/Challenge-18"
  },
  {
    title: "E-commerce Back End Starter Code",
    description: "This project involves building the back end for an e-commerce site using modern technologies. The challenge is to take a working Express.js API and configure it to use Sequelize to interact with a PostgreSQL database. The application will allow the management of products, categories, and tags within an e-commerce platform, providing functionality for CRUD (Create, Read, Update, Delete) operations via RESTful API routes.",
    liveDemo: "https://drive.google.com/file/d/109ukyrtpe286_d_Q3m7Z1lAA-KjCyYYO/view",
    githubRepo: "https://github.com/sofia19999/Challenge-13-"
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
        
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;