import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navigation fixed w-[100%]">
        <h2 className="headname md:text-2xl text-4xl font-bold">Portfolio</h2>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={() => scrollToSection('hero')}>Home</NavLink>
            </li>
             <li>
              <NavLink to="/" exact activeClassName="active" onClick={() => scrollToSection('skills')}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={() => scrollToSection('projects')}>Projects</NavLink>
            </li>
            <a href="#footer"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
