import React from 'react';
import basil from '../assets/images/Basil.svg';
import Nav1 from '../assets/images/1.svg';
import Nav2 from '../assets/images/2.svg';
import Nav3 from '../assets/images/3.svg';
import Nav4 from '../assets/images/4.svg';
import Nav5 from '../assets/images/5.svg';
import Nav6 from '../assets/images/6.svg';
import Nav7 from '../assets/images/7.svg';
import Nav8 from '../assets/images/8.svg';
import Nav9 from '../assets/images/9.svg';

import './SideNav.css';

const SideNav: React.FC = () => {
  return (
    <nav className="side-nav">
      <ul className="side-nav-list-heading">
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={basil} alt="basil logo" />
          </a>
        </li>
      </ul>
      <ul className="side-nav-list">
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav1} alt="Nav1" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav2} alt="Nav2" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav3} alt="Nav3" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav4} alt="Nav4" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav5} alt="Nav5" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav6} alt="Nav6" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav7} alt="Nav7" />
          </a>
        </li>
      </ul>
      <ul className="side-nav-list-footer">
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav8} alt="Nav8" />
          </a>
        </li>
        <li className="side-nav-item">
          <a href="#" className="side-nav-link">
            <img src={Nav9} alt="Nav9" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
