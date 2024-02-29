import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="skill-category">
        <h3>Languages</h3>
        <ul className="skill-list">
          <li>Python</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>C++</li>
          <li>C#</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Libraries</h3>
        <ul className="skill-list">
          <li>React.js</li>
          <li>Flask</li>
          <li>Express.js</li>
          <li>Spring</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Frameworks</h3>
        <ul className="skill-list">
          <li>FastAPI</li>
          <li>Node.js</li>
          <li>Spring Boot</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Platforms</h3>
        <ul className="skill-list">
          <li>AWS (Amazon Web Services)</li>
          <li>GCP (Google Cloud Platform)</li>
          <li>Docker</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
