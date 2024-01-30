import React from 'react';
import './App.css';
import profile_picture from './profile_picture.jpeg';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <section className="profile-section">
          <img src={ profile_picture } alt="Profile" className="profile-image" />
          <h1>John Doe</h1>
          <p className="title">Full Stack Developer</p>
          <p>New York, USA</p>
          <div className="social-links">
            {/* Social icons here */}
          </div>
        </section>

        <section className="about-section">
          <h2>About</h2>
          <p>
            Enthusiastic full stack developer with a passion for building scalable web applications and working on innovative projects. Skilled in React, Node.js, and Python.
          </p>
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>
          <div className="job">
            <h3>Senior Developer - AmazingTech</h3>
            <p>2021 - Present</p>
            <p>Leading the development team, focusing on backend solutions and improving system performance.</p>
          </div>
          {/* More job experiences */}
        </section>

        <section className="education-section">
          <h2>Education</h2>
          <p>B.Sc. in Computer Science - Tech University</p>
          <p>2015 - 2019</p>
          {/* More education entries */}
        </section>

        <section className="skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            {/* More skills */}
          </ul>
        </section>

        <section className="projects-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project Name</h3>
            <p>Description of the project...</p>
          </div>
          {/* More projects */}
        </section>
      </div>
    </div>
  );
}

export default App;