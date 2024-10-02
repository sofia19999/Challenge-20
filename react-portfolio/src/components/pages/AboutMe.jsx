import React from 'react';
import photo from '../../assets/photo.jpeg'; 
import './AboutMe.css'; 

function About() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src={photo} alt="My Avatar" />
      <p>About Me
Hi, I’m Sofia Kaminski, a passionate web developer with a strong foundation in front-end and back-end technologies. I specialize in creating responsive, user-friendly applications that solve real-world problems. With experience in frameworks like React and Node.js, I enjoy turning complex requirements into intuitive and engaging user experiences.

I’m always exploring new technologies and methodologies to stay current in the rapidly evolving tech landscape. When I’m not coding, you can find me  reading, creating digital art, or contributing to open-source projects.

Feel free to check out my work in the Portfolio section or get in touch through the Contact section below.

</p>
    </section>
  );
}

export default About;