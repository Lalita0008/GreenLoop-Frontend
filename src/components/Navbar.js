import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo">🌿</span>
          <span className="navbar__name">GreenLoop</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__links">
          <NavLink to="/"          end  className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/features"       className={({ isActive }) => isActive ? 'active' : ''}>Features</NavLink>
          <NavLink to="/dashboard"      className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
          <NavLink to="/contact"        className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>

        {/* CTA */}
        <div className="navbar__actions">
          <Link to="/dashboard" className="btn-primary navbar__cta">
            <span className="material-icons-round">rocket_launch</span>
            Get Started
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer${menuOpen ? ' drawer--open' : ''}`}>
        <NavLink to="/"          end  onClick={closeMenu}>Home</NavLink>
        <NavLink to="/features"       onClick={closeMenu}>Features</NavLink>
        <NavLink to="/dashboard"      onClick={closeMenu}>Dashboard</NavLink>
        <NavLink to="/contact"        onClick={closeMenu}>Contact</NavLink>
        <Link to="/dashboard" className="btn-primary" onClick={closeMenu}>
          Get Started
        </Link>
      </div>
    </header>
  );
}
