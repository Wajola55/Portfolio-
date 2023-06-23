
import React from 'react';
import './Skills.css';
import Card from '../Card/Card';
import django from '../../img/django.png';
import dashboard from '../../img/dashboard.png';
import booking from '../../img/booking.png';
import {themeContext} from '../../Context';
import { useContext } from 'react';
import ResumeEnglish from './CV_English.Wioletta_Koczor.pdf';
import ResumePolish from './CV_Polish.Wioletta_Koczor.pdf';



const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="skills" id='Skills'>
      {/* left side */}
      <div className="i-name">
        <span style = {{color: darkMode? 'white': ''}}>My Technical</span>
        <span>Skills</span>
        <div class="narrow-text">
        <span>
        As a Junior Developer, my main focus is on building web applications using Python and Django. I am particularly skilled in utilizing Streamlit and Pandas to dive deep into data analysis and visualization to bring insights to life. My ultimate goal is to create applications that are both user-friendly and visually appealing, while maintaining high functionality.
        <br />
        <br />
        I am always eager to learn and expand my skillset, which allows me to explore new technologies and implement them in my work. I believe in the power of collaboration and enjoy working with teams to bring ideas to life.
        <br />
        <br />
        So, if you're looking for a passionate and driven Junior Developer to work with, then look no further! Let's work together to create something truly amazing.
        </span>
        </div> 
        <a href={ResumeEnglish} download>
          <button className="button s-button">Download CV (English)</button>
        </a>
        <a href={ResumePolish} download>
          <button className="button s-button">Download CV (Polish)</button>
        </a>
      </div>

      <div className="i-right">
        {/* right side */}
        <div className="cards">
          <div style={{ position: 'absolute', left: '20rem', top:'-25rem'}}>
            <Card
              django={django}
              title="Django Web Development"
              detail="Experience in building web applications using the Django framework."
            />
          </div>

          {/* second card */}
          <div style={{ position: 'absolute', top: '0rem', left: '25rem' }}>
            <Card
              django={dashboard}
              title="Data Visualization & Analysis"
              detail="Experience in data visualization and analysis using Python libraries such as Pandas and Matplotlib. Proficient in creating interactive dashboards for better data insights and decision-making. Familiar with data science concepts and techniques."
            />
          </div>
          {/* 3rd card */}
          <div style={{ position: 'absolute', top: "-3rem", left: "5rem" }}>
            <Card
              django={booking}
              title="Mobile App Development"
              detail="Experience in creating mobile applications for various purposes, such as calculators and video apps. Proficient in designing user interfaces and implementing app functionality."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
