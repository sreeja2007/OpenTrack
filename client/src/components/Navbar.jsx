export default function Navbar({ user, onLogout }) {
  return (
    <nav style={{
      background: '#161b22',
      borderBottom: '1px solid #30363d',
      padding: '0 32px',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '20px' }}></span>
        <span style={{ color: '#fff', fontWeight: '600', fontSize: '18px' }}></span>
      </div>

      {/* User Info */}
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={user.avatar} alt="avatar" width={32} style={{ borderRadius: '50%' }} />
          <span style={{ color: '#c9d1d9', fontSize: '14px' }}>{user.username}</span>
          <button onClick={onLogout} style={{
            padding: '6px 14px',
            background: 'transparent',
            color: '#8b949e',
            border: '1px solid #30363d',
            borderRadius: '6px',
            fontSize: '13px'
          }}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}