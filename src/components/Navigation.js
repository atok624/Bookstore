import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdPerson } from 'react-icons/md';

function Navigation() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="navbar">
          <NavLink to="/" className="logo">BOOKSTORE CMS</NavLink>
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>BOOKS</NavLink></li>
          <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link' : 'nav-link')}>CATEGORIES</NavLink></li>
        </ul>
        <div className="oval">
          <MdPerson className="profile" />
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
