import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience" id='Experience'>
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="circle">
          <span className="tech-name">Python</span>
          <span className="experience-years">2 years</span>
        </div>
        <div className="circle">
          <span className="tech-name">Pandas</span>
          <span className="experience-years">1 year</span>
        </div>
        <div className="circle">
          <span className="tech-name">React</span>
          <span className="experience-years">6 months</span>
        </div>
        <div className="circle">
          <span className="tech-name">Django</span>
          <span className="experience-years">1 year</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
