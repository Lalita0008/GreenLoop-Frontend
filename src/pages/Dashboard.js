import React, { useState } from 'react';
import './Dashboard.css';

const quickActions = [
  { icon: 'yard',      label: 'Garden Planner',      sub: 'Plan your garden' },
  { icon: 'trending_up', label: 'Growth Tracker',    sub: 'Monitor plant growth' },
  { icon: 'smart_toy', label: 'AI Assistant',         sub: 'Get gardening help' },
  { icon: 'forum',     label: 'Community Forum',      sub: 'Connect & discuss' },
  { icon: 'map',       label: 'Nearby Gardens',       sub: 'Find local gardens' },
  { icon: 'event',     label: 'Events & Workshops',   sub: 'Learn & connect' },
  { icon: 'eco',       label: 'Compost Guide',        sub: 'Learn composting' },
];

const activity = [
  { icon: 'recycling',    text: 'Composted 2kg of food waste', time: '2 hours ago',  pts: '+50 pts'  },
  { icon: 'emoji_events', text: 'Earned "Eco Warrior" badge',  time: 'Yesterday',    pts: '+100 pts' },
  { icon: 'trending_up',  text: 'Compost rate improved by 5%', time: '3 days ago',   pts: '+25 pts'  },
];

const rewards = [
  { icon: 'local_offer', title: 'Compost Bin Discount', pts: '500 pts', value: '20% off' },
  { icon: 'eco',         title: 'Seed Packets',         pts: '300 pts', value: 'Free shipping' },
];

export default function Dashboard() {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your AI composting assistant. Ask me anything about your compost pile." },
  ]);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = { from: 'user', text: chatInput };
    setMessages(m => [...m, userMsg, {
      from: 'bot',
      text: "Great question! For best results, keep your pile moist and turn it every 2–3 days. Add brown materials if it smells.",
    }]);
    setChatInput('');
  };

  return (
    <div className="dashboard">
      {/* Greeting */}
      <div className="dashboard__header">
        <div className="dashboard__greeting">
          <span className="dashboard__wave">👋</span>
          <div>
            <h1>Good Morning!</h1>
            <p>Ready to make a difference today?</p>
          </div>
        </div>
        <div className="dashboard__header-icons">
          <button className="db-icon-btn">
            <span className="material-icons-round">notifications</span>
            <span className="db-badge">3</span>
          </button>
          <button className="db-icon-btn">
            <span className="material-icons-round">person</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="db-stats">
        {[
          { icon: 'inventory',   val: '12',    label: 'Items Tracked',   trend: '+2 this week' },
          { icon: 'eco',         val: '3.2kg', label: 'Waste Diverted',  trend: '+0.5kg today' },
          { icon: 'analytics',   val: '85%',   label: 'Compost Rate',    trend: '+5% this month' },
          { icon: 'emoji_events',val: '1,250', label: 'Points Earned',   trend: '+175 today' },
        ].map(s => (
          <div key={s.label} className="db-stat-card">
            <div className="db-stat-card__icon">
              <span className="material-icons-round">{s.icon}</span>
            </div>
            <div>
              <strong>{s.val}</strong>
              <span>{s.label}</span>
            </div>
            <div className="db-stat-card__trend">
              <span className="material-icons-round">trending_up</span>
              {s.trend}
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard__body">
        {/* Left column */}
        <div className="dashboard__col dashboard__col--main">
          {/* Quick actions */}
          <section className="db-section">
            <h2 className="db-section__title">Quick Actions</h2>
            <div className="db-actions">
              {quickActions.map(a => (
                <button key={a.label} className="db-action">
                  <span className="material-icons-round db-action__icon">{a.icon}</span>
                  <span className="db-action__label">{a.label}</span>
                  <span className="db-action__sub">{a.sub}</span>
                  <span className="material-icons-round db-action__arrow">arrow_forward</span>
                </button>
              ))}
            </div>
          </section>

          {/* Progress tracker */}
          <section className="db-section">
            <h2 className="db-section__title">Compost Progress</h2>
            <div className="db-progress">
              <div className="db-progress__header">
                <span className="db-progress__status active">Active</span>
                <span className="db-progress__eta">Ready in 3 weeks</span>
              </div>
              <div className="db-progress__bar-wrap">
                <div className="db-progress__bar" style={{ width: '65%' }} />
              </div>
              <p className="db-progress__pct">65% Complete</p>

              <div className="db-progress__metrics">
                {[
                  { icon: 'thermostat', label: 'Temperature', val: '42°C', note: 'Optimal' },
                  { icon: 'water_drop', label: 'Moisture',    val: '60%',  note: 'Good' },
                ].map(m => (
                  <div key={m.label} className="db-metric">
                    <span className="material-icons-round">{m.icon}</span>
                    <div>
                      <strong>{m.val}</strong>
                      <span>{m.label}</span>
                    </div>
                    <span className="db-metric__note">{m.note}</span>
                  </div>
                ))}
              </div>

              <div className="db-progress__balance">
                <div>
                  <span>Green Materials</span>
                  <div className="db-mini-bar"><div style={{ width: '40%', background: 'var(--green-500)' }} /></div>
                  <span>40%</span>
                </div>
                <div>
                  <span>Brown Materials</span>
                  <div className="db-mini-bar"><div style={{ width: '60%', background: '#d97706' }} /></div>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="dashboard__col dashboard__col--side">
          {/* Activity */}
          <section className="db-section">
            <h2 className="db-section__title">Recent Activity</h2>
            <div className="db-activity">
              {activity.map((a, i) => (
                <div key={i} className="db-activity__item">
                  <span className="material-icons-round db-activity__icon">{a.icon}</span>
                  <div>
                    <p>{a.text}</p>
                    <small>{a.time}</small>
                  </div>
                  <span className="db-activity__pts">{a.pts}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Rewards */}
          <section className="db-section">
            <h2 className="db-section__title">
              Rewards
              <span className="db-points-badge">
                <span className="material-icons-round">account_balance_wallet</span>
                1,250 pts
              </span>
            </h2>
            <div className="db-rewards">
              {rewards.map(r => (
                <div key={r.title} className="db-reward">
                  <span className="material-icons-round db-reward__icon">{r.icon}</span>
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.pts} · {r.value}</span>
                  </div>
                  <button className="btn-primary db-reward__btn">Redeem</button>
                </div>
              ))}
            </div>
          </section>

          {/* AI Chat */}
          <section className="db-section">
            <h2 className="db-section__title">
              <span className="material-icons-round" style={{ color: 'var(--green-600)' }}>smart_toy</span>
              CompostBot
            </h2>
            <div className="db-chat">
              <div className="db-chat__messages">
                {messages.map((m, i) => (
                  <div key={i} className={`db-chat__msg db-chat__msg--${m.from}`}>
                    {m.from === 'bot' && <span className="material-icons-round">psychology</span>}
                    <p>{m.text}</p>
                  </div>
                ))}
              </div>
              <div className="db-chat__input">
                <input
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask about your compost…"
                />
                <button onClick={sendMessage}>
                  <span className="material-icons-round">send</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
