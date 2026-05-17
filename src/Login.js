import { Link } from 'react-router-dom'
import './auth.css'

export default function Login() {
  return (
    <div className="auth-page">
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />

      <nav className="navbar">
        <Link to="/" className="nav-logo">silent hawk</Link>
        <ul className="nav-links">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/#about">About</a></li>
        </ul>
        <div className="nav-auth-links">
          <Link to="/login" className="nav-link-active">Log in</Link>
          <Link to="/register" className="nav-cta">Get Started</Link>
        </div>
      </nav>

      <div className="auth-container">
        <div className="auth-card glass">
          <div className="auth-header">
            <div className="auth-logo">silent hawk</div>
            <h1>Welcome back</h1>
            <p>Sign in to your account to continue</p>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <a href="#forgot" className="forgot-link">Forgot password?</a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="btn-auth">Sign in</button>
          </form>

          <p className="auth-switch">
            Don't have an account?{' '}
            <Link to="/register">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
