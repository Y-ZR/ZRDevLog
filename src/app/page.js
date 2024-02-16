import React from "react";
import Image from 'next/image';
import profilePicture from "../../public/profile_picture.jpeg";
import MVPStudio_logo from '../../public/MVP_Studio_logo.png';
import BeamTech_logo from '../../public/Beam_Tech_logo.jpeg';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="App flex justify-center items-center min-h-screen">
      <div className="main-container card max-w-5xl mx-auto p-8 m-2">

        <section className="profile-section">
          <Avatar className="avatar">
            <Image src={profilePicture} alt="Zhong Rong"/>
            <AvatarFallback>ZR</AvatarFallback>
          </Avatar>
          <h1>Yong Zhong Rong</h1>
          <p>Software Engineer</p>
          <p>San Francisco, USA</p>
          <div className="social-links">
            <a href="mailto:zr@beamcomfort.com" aria-label="Email"><FaEnvelope /></a>
            <a href="tel:+15105880426" aria-label="Phone"><FaPhone /></a>
            <a href="https://github.com/Y-ZR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/zhong-rong-yong-10b0a122b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </section>

        <section className="about-section">
          <h2>About</h2>
          <p>
            Enthusiastic developer with a passion for building scalable products and working on innovative projects. Skilled in React, Node.js, and Python.
          </p>
        </section>

        <section className="experience-section">
          <h2>Work Experience</h2>
          <div className="job">
            <Image src={BeamTech_logo} alt="Beam Tech Inc Logo" className="company-logo" />
            <div>
              <h3>Software Engineer - Beam Tech Inc</h3>
              <p>Jan 2024 - Present</p>
              <ul>
                <li>Leading the development team, focusing on backend solutions and improving system performance.</li>
                <li>Leading the development team, focusing on backend solutions and improving system performance.</li>
              </ul>
            </div>
          </div>
          <div className="job">
            <Image src={MVPStudio_logo} alt="MVP Studio Logo" className="company-logo" />
            <div>
              <h3>Software Engineer Intern - MVP Studios</h3>
              <p>Aug 2023 - Dec 2023</p>
              <ul>
                <li>Leading the development team, focusing on backend solutions and improving system performance.</li>
                <li>Leading the development team, focusing on backend solutions and improving system performance.</li>
              </ul>            
            </div>
          </div>
          {/* More job experiences */}
        </section>

        <section className="education-section">
          <h2>Education</h2>
          <p>B.Sc. in Business Analytics - National University of Singapore</p>
          <p>Aug 2022 - May 2026</p>
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
            <h3>FocusFlow</h3>
            <p>Description of the project...</p>
          </div>
          <div className="project">
            <h3>ZRDevLog</h3>
            <p>Description of the project...</p>
          </div>
          {/* More projects */}
        </section>
      </div>
    </main>
  );
}
