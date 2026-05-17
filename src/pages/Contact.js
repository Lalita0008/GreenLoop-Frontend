import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Enquiry', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  const faq = [
    { q: 'How does AI waste classification work?', a: 'Simply take or upload a photo of your waste. Our model analyses it and suggests the best composting method in seconds.' },
    { q: 'Can I use GreenLoop without a garden?', a: 'Absolutely! Many users compost on balconies or in small indoor spaces. The app adapts to your setup.' },
    { q: 'How do I redeem my reward points?', a: 'Head to the Rewards section in your dashboard. Points can be redeemed for eco-products, discounts, and free shipping.' },
    { q: 'Is my data kept private?', a: 'Yes. We never sell your data. All composting and garden data is stored securely and used only to improve your experience.' },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <span className="section-tag">
          <span className="material-icons-round" style={{ fontSize: '14px' }}>chat</span>
          Get in touch
        </span>
        <h1>We'd Love to Hear from You</h1>
        <p>Questions, feedback, or just want to say hello? Drop us a message.</p>
      </section>

      <div className="contact-body">
        {/* Form */}
        <div className="contact-form-wrap">
          {sent ? (
            <div className="contact-success">
              <span className="contact-success__icon">🌱</span>
              <h2>Message Sent!</h2>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <div className="cf-field">
                <label>Full Name</label>
                <div className="cf-input-wrap">
                  <span className="material-icons-round">person</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>

              <div className="cf-field">
                <label>Email Address</label>
                <div className="cf-input-wrap">
                  <span className="material-icons-round">email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="cf-field">
                <label>Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange}>
                  {['General Enquiry', 'Technical Support', 'Feature Request', 'Partnership', 'Bug Report'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="cf-field">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us how we can help…"
                  required
                />
              </div>

              <button type="submit" className="btn-primary cf-submit">
                <span className="material-icons-round">send</span>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Info column */}
        <div className="contact-info">
          <div className="contact-info__cards">
            {[
              { icon: 'email',        title: 'Email Us',       val: 'hello@greenloop.app',    sub: 'Reply within 24h' },
              { icon: 'chat_bubble',  title: 'Live Chat',      val: 'Available in app',       sub: 'Mon–Fri, 9am–6pm' },
              { icon: 'location_on',  title: 'Head Office',    val: 'Green District, London', sub: 'UK 🇬🇧' },
            ].map(c => (
              <div key={c.title} className="contact-info__card">
                <div className="contact-info__card-icon">
                  <span className="material-icons-round">{c.icon}</span>
                </div>
                <div>
                  <strong>{c.title}</strong>
                  <p>{c.val}</p>
                  <small>{c.sub}</small>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="contact-faq">
            <h3>
              <span className="material-icons-round">help_outline</span>
              Frequently Asked
            </h3>
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(v => !v)}>
        {q}
        <span className="material-icons-round">{open ? 'expand_less' : 'expand_more'}</span>
      </button>
      {open && <p className="faq-item__a">{a}</p>}
    </div>
  );
}
