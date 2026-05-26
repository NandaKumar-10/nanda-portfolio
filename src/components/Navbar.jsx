import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'glass' : ''}`}>
      <div className="container">
        <Link to="/" className="nav-logo">Nanda Kumar B Portfolio</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div className="nav-links">
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Projects</NavLink>
            <NavLink to="/certification" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Certifications</NavLink>
            <NavLink to="/skills" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Skills</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </div>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme" style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {theme === 'dark' ? <Sun size={20} color="var(--text-color)" /> : <Moon size={20} color="var(--text-color)" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;