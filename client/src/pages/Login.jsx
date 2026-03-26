export default function Login() {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/github';
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0d1117'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '48px',
        border: '1px solid #30363d',
        borderRadius: '12px',
        background: '#161b22',
        width: '100%',
        maxWidth: '400px'
      }}>
        {/* Logo */}
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔭</div>

        {/* Title */}
        <h1 style={{ color: '#fff', fontSize: '28px', marginBottom: '8px' }}>
          OpenTrack
        </h1>
        <p style={{ color: '#8b949e', marginBottom: '32px', fontSize: '15px' }}>
          Your all-in-one developer dashboard
        </p>

        {/* Features list */}
        <div style={{ textAlign: 'left', marginBottom: '32px' }}>
          {[
            '📦 Track all your GitHub repos',
            '🧪 Test APIs without Postman',
            '🤖 AI-powered error explainer',
          ].map((feature, i) => (
            <div key={i} style={{
              padding: '10px 16px',
              marginBottom: '8px',
              background: '#0d1117',
              borderRadius: '6px',
              color: '#8b949e',
              fontSize: '14px'
            }}>
              {feature}
            </div>
          ))}
        </div>

        {/* Login Button */}
        <button onClick={handleLogin} style={{
          width: '100%',
          padding: '12px',
          background: '#238636',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500'
        }}>
          Login with GitHub
        </button>

        <p style={{ color: '#8b949e', fontSize: '12px', marginTop: '16px' }}>
          Only public repo access required
        </p>
      </div>
    </div>
  );
}