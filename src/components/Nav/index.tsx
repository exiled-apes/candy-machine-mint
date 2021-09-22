import React from "react";
import './styles.css';
import Logo from '../../images/logo.svg';
const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link nav-link--active"> Home</a>
        </li>
        <li>
          <a href="/" className="nav-link">Collection</a>
        </li>
        <li>
          <a href="/" className="nav-link">About</a>
        </li>
        <li>
          <a href="/" className="nav-link">Rarity Check</a>
        </li>
        <li>
          <a href="/" className="nav-link">RoadMap</a>
        </li>
        <li>
          <a href="/" className="nav-link">Social</a>
        </li>
        
      </ul>
    </div>
  );
};

export default Nav;
