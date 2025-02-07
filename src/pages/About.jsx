import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About Todo List App</h1>
      <p>A simple React application for managing tasks.</p>
      <h2>Team Members</h2>
      <div className="team-members">
        <div className="team-member">
          <h3>Telmo and Lucas</h3>
          <p>Developer</p>
          <div className="social-links">
            <a href="https://github.com/Shabcode" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/Telmo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;