import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  
  return <div>
    <header>
        <Link to="#" class="logo">PORTFOLIO</Link>

        <nav>
            <Link to="/Banner"> Home</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Education" >Education</Link>
            <Link to="/Experience" >Experience</Link>
            <Link to="/Contact" >Contact</Link>
        </nav>
    </header>
  </div>;
};

export default Header;
