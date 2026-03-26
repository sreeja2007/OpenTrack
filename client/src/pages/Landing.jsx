import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div style={{ background: '#0d1117', minHeight: '100vh', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Navbar */}
      <div style={{
        background: 'rgba(13,17,23,0.95)',
        borderBottom: '1px solid #21262d',
        padding: '0 48px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <svg width="36" height="36" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#388bfd"/>
        <stop offset="100%" stopColor="#1f6feb"/>
      </linearGradient>
    </defs>
    <rect width="44" height="44" rx="12" fill="url(#logoGrad)"/>
    <circle cx="19" cy="19" r="8" fill="none" stroke="white" strokeWidth="2.5"/>
    <line x1="25" y1="25" x2="35" y2="35" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="19" cy="19" r="3" fill="white" opacity="0.9"/>
    <path d="M19 11 L19 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M19 25 L19 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M11 19 L13 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M25 19 L27 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
  <span style={{ color: '#fff', fontWeight: '800', fontSize: '20px', letterSpacing: '-0.5px' }}>
    Open<span style={{ color: '#58a6ff' }}>Track</span>
  </span>
</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <span style={{ color: '#8b949e', fontSize: '14px', cursor: 'pointer' }}>Features</span>
          <span style={{ color: '#8b949e', fontSize: '14px', cursor: 'pointer' }}>Docs</span>
          <span style={{ color: '#8b949e', fontSize: '14px', cursor: 'pointer' }}>GitHub</span>
          <button onClick={handleLogin} style={{
            background: '#238636', color: '#fff',
            border: 'none', borderRadius: '8px',
            padding: '8px 18px', fontSize: '14px',
            fontWeight: '500', cursor: 'pointer'
          }}>
            Get Started Free
          </button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ textAlign: 'center', padding: '100px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(#21262d 1px, transparent 1px), linear-gradient(90deg, #21262d 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.3
        }} />
        {/* Glow */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: '600px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(31,111,235,0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        {/* Heading */}
        <h1 style={{
          fontSize: '56px', fontWeight: '800',
          color: '#fff', lineHeight: '1.1',
          letterSpacing: '-2px', marginBottom: '20px',
          position: 'relative'
        }}>
          The developer dashboard<br />
          you <span style={{ color: '#58a6ff' }}>always</span> <span style={{ color: '#3fb950' }}>needed</span>
        </h1>

        <p style={{
          fontSize: '18px', color: '#8b949e',
          maxWidth: '520px', margin: '0 auto 40px',
          lineHeight: '1.7', position: 'relative'
        }}>
          Stop switching between GitHub, Postman, and Stack Overflow.
          OpenTrack unifies your entire dev workflow in one powerful dashboard.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', position: 'relative' }}>
          <button onClick={handleLogin} style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: '#238636', color: '#fff',
            border: 'none', borderRadius: '8px',
            padding: '14px 24px', fontSize: '15px',
            fontWeight: '600', cursor: 'pointer'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            Login with GitHub
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', gap: '48px',
        padding: '40px 48px',
        borderTop: '1px solid #21262d',
        borderBottom: '1px solid #21262d',
        background: '#161b22'
      }}>
        {[
          { num: '3-in-1', label: 'Tools in one dashboard' },
          { num: '0ms', label: 'Context switching' },
          { num: 'AI', label: 'Powered debugging' },
          { num: 'Free', label: 'Open source' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
            {i > 0 && <div style={{ width: '1px', height: '40px', background: '#30363d' }} />}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff' }}>{stat.num}</div>
              <div style={{ fontSize: '13px', color: '#8b949e', marginTop: '2px' }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ padding: '80px 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', fontSize: '12px', color: '#58a6ff', fontWeight: '600', letterSpacing: '2px', marginBottom: '12px' }}>FEATURES</div>
        <div style={{ textAlign: 'center', fontSize: '36px', fontWeight: '700', color: '#fff', marginBottom: '12px', letterSpacing: '-1px' }}>Everything in one place</div>
        <div style={{ textAlign: 'center', fontSize: '16px', color: '#8b949e', marginBottom: '56px' }}>Built by a developer, for developers</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#58a6ff" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>,
              iconBg: '#0d419d', title: 'Repo Dashboard',
              desc: 'All your GitHub repos in one view. Track stars, forks, issues and PRs across every project instantly.',
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3fb950" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18"/></svg>,
              iconBg: '#0a3d1a', title: 'API Tester',
              desc: 'Test any REST endpoint with GET, POST, PUT, DELETE. See live responses formatted beautifully. No Postman needed.',
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a371f7" strokeWidth="2"><path d="M12 2a10 10 0 110 20 10 10 0 010-20z"/><path d="M12 8v4l3 3"/></svg>,
              iconBg: '#2d1a4d', title: 'AI Debugger',
              desc: 'Paste any stack trace or error message. Get an instant AI-powered explanation and step-by-step fix in seconds.',
            },
          ].map((f, i) => (
            <div key={i} style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '12px',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{
                  width: '40px', height: '40px',
                  background: f.iconBg, borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {f.icon}
                </div>
                <div style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>{f.title}</div>
              </div>
              <div style={{ color: '#8b949e', fontSize: '14px', lineHeight: '1.7' }}>{f.desc}</div>
              <div style={{
                display: 'inline-flex', marginTop: '16px',
                background: '#0d1117', border: '1px solid #30363d',
                borderRadius: '20px', padding: '3px 12px',
                fontSize: '11px', color: '#8b949e'
              }}>{f.tag}</div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA */}
      <div style={{
        textAlign: 'center', padding: '80px 48px',
        background: '#161b22',
        borderTop: '1px solid #21262d'
      }}>
        <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#fff', marginBottom: '12px', letterSpacing: '-1px' }}>
          Start building smarter today
        </h2>
        <p style={{ fontSize: '16px', color: '#8b949e', marginBottom: '32px' }}>
           Just login with GitHub.
        </p>
        <button onClick={handleLogin} style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: '#238636', color: '#fff',
          border: 'none', borderRadius: '8px',
          padding: '14px 28px', fontSize: '16px',
          fontWeight: '600', cursor: 'pointer'
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Login with GitHub — It's Free
        </button>
      </div>

      {/* Footer */}
      <div style={{
        padding: '24px 48px',
        borderTop: '1px solid #21262d',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ color: '#8b949e', fontSize: '13px' }}>© 2026 OpenTrack · Built with Love</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['GitHub', 'Docs', 'Contact'].map(link => (
            <span key={link} style={{ color: '#8b949e', fontSize: '13px', cursor: 'pointer' }}>{link}</span>
          ))}
        </div>
      </div>

    </div>
  );
}