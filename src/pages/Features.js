import React, { useState } from 'react';
import './Features.css';

const features = [
  {
    id: 'tracking',
    icon: 'recycling',
    emoji: '♻️',
    title: 'Smart Waste Tracking',
    short: 'Log and classify your waste with AI in seconds.',
    desc: 'Take a photo or log manually — our AI instantly classifies your waste and suggests the best composting method. Track every item and watch your impact grow.',
    highlights: ['AI photo classification', 'Voice note logging', 'Weekly reports', 'Compost readiness alerts'],
  },
  {
    id: 'insights',
    icon: 'analytics',
    emoji: '📊',
    title: 'AI-Powered Insights',
    short: 'Personalised tips driven by your own data.',
    desc: 'Our model analyses your composting patterns and generates actionable recommendations — from moisture levels to pile temperature — tailored to your garden.',
    highlights: ['Compost health score', 'Temperature monitoring', 'Moisture alerts', 'Seasonal planning'],
  },
  {
    id: 'rewards',
    icon: 'emoji_events',
    emoji: '🏆',
    title: 'Earn Rewards',
    short: 'Get real perks for greener choices.',
    desc: 'Every sustainable action earns points. Redeem them for compost bins, seed packets, eco-friendly products, and more through our growing rewards catalogue.',
    highlights: ['Points for every action', 'Milestone badges', 'Redeemable rewards', 'Leaderboards'],
  },
  {
    id: 'garden',
    icon: 'yard',
    emoji: '🌻',
    title: 'Garden Planner',
    short: 'Design and schedule your perfect garden.',
    desc: 'Plan plant layouts, set watering schedules, and get smart planting calendar suggestions based on your climate zone and compost availability.',
    highlights: ['Drag-and-drop layout', 'Planting calendar', 'Weather integration', 'Harvest tracker'],
  },
  {
    id: 'community',
    icon: 'groups',
    emoji: '👥',
    title: 'Community Forum',
    short: 'Learn from thousands of green-fingered members.',
    desc: 'Ask questions, share harvests, attend local workshops, and connect with nearby gardens. The GreenLoop community is friendly, expert, and always growing.',
    highlights: ['Q&A forum', 'Social wall', 'Events & workshops', 'Nearby gardens map'],
  },
  {
    id: 'ai',
    icon: 'smart_toy',
    emoji: '🤖',
    title: 'AI Assistant',
    short: 'Your always-on composting & gardening expert.',
    desc: 'CompostBot and GardenBot answer your questions instantly, diagnose problems from photos, and proactively remind you when your pile needs attention.',
    highlights: ['Natural language chat', 'Photo diagnosis', 'Care reminders', 'Plant library'],
  },
];

export default function Features() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find(f => f.id === active);

  return (
    <div className="features-page">
      {/* Header */}
      <section className="features-hero">
        <span className="section-tag">
          <span className="material-icons-round" style={{ fontSize: '14px' }}>stars</span>
          Everything you need
        </span>
        <h1>Powerful Features for<br />Sustainable Living</h1>
        <p>From AI waste classification to community workshops — GreenLoop has it all.</p>
      </section>

      {/* Tab selector */}
      <section className="features-tabs">
        <div className="features-tabs__inner">
          {features.map(f => (
            <button
              key={f.id}
              className={`features-tab${active === f.id ? ' active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              <span className="material-icons-round">{f.icon}</span>
              <span>{f.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Feature detail */}
      <section className="feature-detail">
        <div className="feature-detail__inner" key={current.id}>
          <div className="feature-detail__content">
            <div className="feature-detail__emoji">{current.emoji}</div>
            <h2>{current.title}</h2>
            <p>{current.desc}</p>
            <ul className="feature-detail__highlights">
              {current.highlights.map(h => (
                <li key={h}>
                  <span className="material-icons-round">check_circle</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="feature-detail__card">
            <div className="feature-detail__card-header">
              <span className="material-icons-round">{current.icon}</span>
              <strong>{current.title}</strong>
            </div>
            <p className="feature-detail__card-sub">{current.short}</p>
            <div className="feature-detail__card-dots">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="fdot" style={{ animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid overview */}
      <section className="features-grid-section">
        <h2 className="features-grid-section__title">At a Glance</h2>
        <div className="features-grid">
          {features.map(f => (
            <div
              key={f.id}
              className={`feature-card${active === f.id ? ' feature-card--active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              <span className="feature-card__emoji">{f.emoji}</span>
              <h3>{f.title}</h3>
              <p>{f.short}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compost guide */}
      <section className="compost-guide">
        <div className="compost-guide__inner">
          <div className="compost-guide__header">
            <span className="section-tag">Built-in guide</span>
            <h2>Master the Art of Composting</h2>
            <p>Transform kitchen waste into nutrient-rich soil</p>
          </div>
          <div className="compost-guide__steps">
            {[
              { n: '1', title: 'Choose Your Method', desc: 'Hot composting, cold composting, or vermicomposting — pick what works for you' },
              { n: '2', title: 'Balance Green & Brown', desc: 'Mix 2 parts brown (leaves, paper) with 1 part green (food scraps) for best results' },
              { n: '3', title: 'Maintain Moisture', desc: 'Keep it as moist as a wrung-out sponge for optimal decomposition' },
            ].map(s => (
              <div key={s.n} className="compost-step">
                <div className="compost-step__num">{s.n}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="compost-guide__lists">
            <div className="compost-list compost-list--green">
              <h4><span className="material-icons-round">check_circle</span> Green Materials</h4>
              {['Fruit scraps', 'Vegetable peels', 'Coffee grounds', 'Grass clippings'].map(i => <span key={i}>{i}</span>)}
            </div>
            <div className="compost-list compost-list--brown">
              <h4><span className="material-icons-round">check_circle</span> Brown Materials</h4>
              {['Dry leaves', 'Cardboard', 'Newspaper', 'Wood chips'].map(i => <span key={i}>{i}</span>)}
            </div>
            <div className="compost-list compost-list--red">
              <h4><span className="material-icons-round">cancel</span> Avoid These</h4>
              {['Meat & dairy', 'Oily foods', 'Diseased plants', 'Pet waste'].map(i => <span key={i}>{i}</span>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
