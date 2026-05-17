import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">🌿</span>
          <span className="footer__name">GreenLoop</span>
          <p>Transform waste into growth,<br />one step at a time.</p>
        </div>

        <div className="footer__col">
          <h4>Navigate</h4>
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <h4>Features</h4>
          <span>Smart Tracking</span>
          <span>AI Insights</span>
          <span>Earn Rewards</span>
          <span>Community</span>
        </div>

        <div className="footer__col">
          <h4>Connect</h4>
          <span>🌱 Instagram</span>
          <span>🌍 Twitter</span>
          <span>♻️ Facebook</span>
          <span>📧 Newsletter</span>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2025 GreenLoop. Making the planet greener, one compost at a time. 🌍</p>
      </div>
    </footer>
  );
}
