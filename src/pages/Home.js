import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const onboardingSteps = [
  {
    icon: 'recycling',
    emoji: '♻️',
    title: 'Smart Waste Tracking',
    desc: 'Transform your organic waste into valuable compost with AI-powered tracking and personalised insights.',
    color: '#d8f3dc',
  },
  {
    icon: 'analytics',
    emoji: '📊',
    title: 'AI-Powered Insights',
    desc: 'Get personalised recommendations and track your environmental impact with detailed analytics.',
    color: '#cce5ff',
  },
  {
    icon: 'emoji_events',
    emoji: '🏆',
    title: 'Earn & Celebrate',
    desc: 'Unlock achievements, earn points for sustainable actions, and redeem rewards while making an impact.',
    color: '#fff3cd',
  },
];

const stats = [
  { value: '12K+', label: 'Active Users', icon: 'groups' },
  { value: '48 T', label: 'Waste Diverted', icon: 'eco' },
  { value: '95%', label: 'Satisfaction Rate', icon: 'thumb_up' },
  { value: '3.2K', label: 'Gardens Connected', icon: 'yard' },
];

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
          <div className="hero__dots" />
        </div>

        <div className="hero__content">
          <span className="section-tag">
            <span className="material-icons-round" style={{ fontSize: '14px' }}>eco</span>
            Sustainable Living
          </span>
          <h1 className="hero__title">
            GreenLoop
            <span className="hero__emoji"> 🌿</span>
          </h1>
          <p className="hero__subtitle">
            Transform waste into growth, one step at a time.
            Join thousands making a real difference for the planet.
          </p>

          <div className="hero__pills">
            <div className="hero__pill">
              <span className="material-icons-round">recycling</span> Smart Tracking
            </div>
            <div className="hero__pill">
              <span className="material-icons-round">analytics</span> AI Insights
            </div>
            <div className="hero__pill">
              <span className="material-icons-round">emoji_events</span> Earn Rewards
            </div>
          </div>

          <div className="hero__cta">
            <Link to="/dashboard" className="btn-primary">
              <span className="material-icons-round">rocket_launch</span>
              Get Started
            </Link>
            <Link to="/features" className="btn-outline">
              Explore Features
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone">
            <div className="hero__phone-screen">
              <div className="hphone__topbar">
                <span className="material-icons-round" style={{ color: 'var(--green-700)' }}>eco</span>
                <strong>GreenLoop</strong>
              </div>
              <div className="hphone__stat-row">
                {[
                  { icon: 'inventory', val: '12', label: 'Items' },
                  { icon: 'eco', val: '3.2kg', label: 'Diverted' },
                  { icon: 'analytics', val: '85%', label: 'Rate' },
                ].map(s => (
                  <div key={s.label} className="hphone__stat">
                    <span className="material-icons-round">{s.icon}</span>
                    <strong>{s.val}</strong>
                    <small>{s.label}</small>
                  </div>
                ))}
              </div>
              <div className="hphone__activity">
                <p className="hphone__activity-title">Recent Activity</p>
                {[
                  { icon: 'recycling', text: 'Composted 2kg food waste', pts: '+50 pts', time: '2h ago' },
                  { icon: 'emoji_events', text: 'Earned "Eco Warrior" badge', pts: '+100 pts', time: 'Yesterday' },
                  { icon: 'trending_up', text: 'Compost rate improved 5%', pts: '+25 pts', time: '3d ago' },
                ].map((a, i) => (
                  <div key={i} className="hphone__activity-item">
                    <span className="material-icons-round act-icon">{a.icon}</span>
                    <div>
                      <p>{a.text}</p>
                      <small>{a.time}</small>
                    </div>
                    <span className="act-pts">{a.pts}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero__float hero__float--1">🌱</div>
          <div className="hero__float hero__float--2">🍃</div>
          <div className="hero__float hero__float--3">🌾</div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        {stats.map(s => (
          <div key={s.label} className="stats-bar__item">
            <span className="material-icons-round stats-bar__icon">{s.icon}</span>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Onboarding Cards ── */}
      <section className="onboarding">
        <div className="onboarding__header">
          <span className="section-tag">How it works</span>
          <h2>Getting Started is Easy</h2>
          <p>Three steps to a greener lifestyle</p>
        </div>
        <div className="onboarding__grid">
          {onboardingSteps.map((step, i) => (
            <div key={step.title} className="onboarding__card" style={{ '--card-bg': step.color }}>
              <div className="onboarding__card-num">0{i + 1}</div>
              <div className="onboarding__icon">
                <span className="material-icons-round">{step.icon}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <Link to="/features" className="onboarding__link">
                Learn more <span className="material-icons-round">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <span className="cta-banner__emoji">🌍</span>
          <div>
            <h2>Join thousands making a difference</h2>
            <p>Sign up today and start your sustainable journey with GreenLoop</p>
          </div>
          <div className="cta-banner__btns">
            <Link to="/dashboard" className="btn-primary">
              <span className="material-icons-round">login</span> Sign Up Free
            </Link>
            <Link to="/contact" className="btn-outline cta-banner__outline">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
