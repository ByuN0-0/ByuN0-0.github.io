import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img
        src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"
        alt="react"
      />
      <img
        src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=Python&logoColor=white"
        alt="python"
      />
      <img
        src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white"
        alt="javascript"
      />
      <img
        src="https://img.shields.io/badge/NodeJS-339933?style=flat&logo=nodedotjs&logoColor=white"
        alt="nodejs"
      />
      <img
        src="https://img.shields.io/badge/cpp-00599C?style=flat&logo=cplusplus&logoColor=white"
        alt="cpp"
      />
      <img
        src="https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white"
        alt="flask"
      />
      <img
        src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white"
        alt="aws"
      />
      <img
        src="https://img.shields.io/badge/docker-2496ED?style=flat&logo=docker&logoColor=white"
        alt="docker"
      />
      <img
        src="https://img.shields.io/badge/git-F05032?style=flat&logo=git&logoColor=white"
        alt="git"
      />
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
