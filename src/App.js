import './App.css'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimized for speed so your users get instant responses and a snappy experience every time.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'End-to-end encryption and role-based access control built in from day one.',
  },
  {
    icon: '🧩',
    title: 'Modular Design',
    description:
      'Pick only what you need. Every component is independently replaceable and composable.',
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description:
      'Monitor everything that matters with live dashboards and instant alerting.',
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description:
      'Deploy to any region and let automatic load balancing handle the rest.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Built-in workflows for reviews, approvals, and async communication.',
  },
]

export default function App() {
  return (
    <>
      {/* Ambient background blobs */}
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">Recycle Bin</div>
        <ul className="nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <button className="nav-cta">Get Started</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Now in public beta</div>
          <h1>
            Build products your
            <br />
            users <span>actually love</span>
          </h1>
          <p>
            The all-in-one platform that turns your ideas into production-ready
            experiences — without the complexity.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Start for free</button>
            <button className="btn-secondary">See how it works →</button>
          </div>

          {/* Stats card */}
          <div className="hero-card glass">
            <div className="hero-stat">
              <strong>10k+</strong>
              <span>Active users</span>
            </div>
            <div className="hero-stat">
              <strong>99.9%</strong>
              <span>Uptime SLA</span>
            </div>
            <div className="hero-stat">
              <strong>4.9★</strong>
              <span>Average rating</span>
            </div>
            <div className="hero-stat">
              <strong>&lt; 50ms</strong>
              <span>Response time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section">
        <p className="section-label">Why choose us</p>
        <h2 className="section-title">
          Everything you need, nothing you don't
        </h2>
        <p className="section-sub">
          We stripped away the bloat so you can focus on shipping — not on
          configuring infrastructure.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card glass">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to get started?</h2>
          <p>
            Join thousands of teams already building with Silent Hawk. No credit
            card required.
          </p>
          <div className="cta-input-row">
            <input
              className="cta-input"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn-primary">Get early access</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Silent Hawk LDA. All rights reserved.</p>
      </footer>
    </>
  )
}
