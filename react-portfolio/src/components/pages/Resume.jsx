import React from 'react';
import './Resume.css'; 

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <a href="../Resume_Sofia_Kaminski_code.docx" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
}


export default Resume;


