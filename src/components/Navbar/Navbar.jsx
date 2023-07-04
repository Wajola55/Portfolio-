import React from 'react';
import Toggle from '../Toggle/Toggle';
import '/home/wiola/Desktop/Portfolio/src/components/Navbar/Navbar.css';
import { Link } from 'react-scroll';

import ukFlag from '../../img//UK.png';
import polandFlag from '../../img//Poland.png';

const Navbar = () => {
  const redirectToPolishSite = () => {
    window.open('https://wkoczor.pl/PL', '_blank');
  };

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Wioletta</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to="Navbar" smooth={true} activateClass="activeClass">
              <li>Home</li>
            </Link>
            <Link spy={true} to="Skills" smooth={true}>
              <li>Skills</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Projects" smooth={true}>
              <li>Projects</li>
            </Link>
            <li>
              <button className="flag-button" onClick={() => console.log('Switch to EN')}>
                <img src={ukFlag} alt="English Flag" className="flag-img" />
              </button>
            </li>
            <li>
            <button className="flag-button" onClick={redirectToPolishSite}>
                <img src={polandFlag} alt="Polish Flag" className="flag-img" />
              </button>
            </li>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

