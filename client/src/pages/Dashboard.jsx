import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
   LogOut, GitBranch, 
  Star, Lock, Globe, FlaskConical, Bot
} from 'lucide-react';
import ApiTester from '../components/ApiTester';
import ErrorExplainer from '../components/ErrorExplainer';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('repos');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, '', '/dashboard');
    }

    const stored = localStorage.getItem('token');
    if (!stored) { setLoading(false); return navigate('/'); }

    let payload;
    try {
      payload = JSON.parse(atob(stored.split('.')[1]));
      setUser(payload);
    } catch {
      localStorage.removeItem('token');
      setLoading(false);
      return navigate('/');
    }

    axios.get('https://opentrack-4my2.onrender.com/repos', {
      headers: { Authorization: `Bearer ${stored}` }
    })
    .then(res => {
      setRepos(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <p style={{ color: '#8b949e' }}>Loading your workspace...</p>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#0d1117' }}>

      {/* Navbar */}
      <div style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <svg width="32" height="32" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
  <defs>
    <linearGradient id="dashLogo" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#388bfd"/>
      <stop offset="100%" stopColor="#1f6feb"/>
    </linearGradient>
  </defs>
  <rect width="44" height="44" rx="12" fill="url(#dashLogo)"/>
  <circle cx="19" cy="19" r="8" fill="none" stroke="white" strokeWidth="2.5"/>
  <line x1="25" y1="25" x2="35" y2="35" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
  <circle cx="19" cy="19" r="3" fill="white" opacity="0.9"/>
  <path d="M19 11 L19 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  <path d="M19 25 L19 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  <path d="M11 19 L13 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  <path d="M25 19 L27 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
</svg>
<span style={{ color: '#fff', fontWeight: '800', fontSize: '18px', flex: 1, letterSpacing: '-0.5px' }}>
  Open<span style={{ color: '#58a6ff' }}>Track</span>
</span>
        <span style={{ color: '#fff', fontWeight: '600', fontSize: '18px', flex: 1 }}></span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src={user.avatar} alt="avatar" width={32} style={{ borderRadius: '50%' }} />
          <span style={{ color: '#c9d1d9', fontSize: '14px' }}>{user.username}</span>
          <button onClick={handleLogout} style={{
            padding: '6px 12px',
            background: 'transparent',
            color: '#8b949e',
            border: '1px solid #30363d',
            borderRadius: '6px',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        background: '#161b22',
        borderBottom: '1px solid #30363d',
        padding: '0 32px',
        display: 'flex',
        gap: '24px'
      }}>
        {[
          { id: 'repos', label: 'Repositories', icon: <GitBranch size={15} /> },
          { id: 'api', label: 'API Tester', icon: <FlaskConical size={15} /> },
          { id: 'ai', label: 'AI Debugger', icon: <Bot size={15} /> },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '12px 0',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #58a6ff' : '2px solid transparent',
              color: activeTab === tab.id ? '#58a6ff' : '#8b949e',
              fontSize: '14px',
              fontWeight: activeTab === tab.id ? '600' : '400',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Repos Tab */}
        {activeTab === 'repos' && (
          <>
            <h2 style={{ color: '#fff', marginBottom: '8px' }}>Your Repositories</h2>
            <p style={{ color: '#8b949e', marginBottom: '24px' }}>{repos.length} repositories found</p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '16px'
            }}>
              {repos.map(repo => (
                <div key={repo.id} style={{
                  border: '1px solid #30363d',
                  borderRadius: '10px',
                  padding: '20px',
                  background: '#161b22',
                }}>
                  <h3 style={{ margin: '0 0 8px' }}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer"
                      style={{ color: '#58a6ff', fontSize: '16px' }}>
                      {repo.name}
                    </a>
                  </h3>
                  <p style={{ color: '#8b949e', fontSize: '13px', margin: '0 0 16px', minHeight: '20px' }}>
                    {repo.description || 'No description'}
                  </p>
                  {/* 👇 Repo stats with Lucide icons */}
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#8b949e' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <GitBranch size={12} /> {repo.forks_count}
                    </span>
                    <span style={{
                      background: '#0d1117',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      border: '1px solid #30363d'
                    }}>
                      {repo.language || 'N/A'}
                    </span>
                    <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {repo.private ? <><Lock size={12} /> Private</> : <><Globe size={12} /> Public</>}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* API Tester Tab */}
        {activeTab === 'api' && (
          <>
            <h2 style={{ color: '#fff', marginBottom: '8px' }}>API Tester</h2>
            <p style={{ color: '#8b949e', marginBottom: '24px' }}>Test any API endpoint without leaving your dashboard</p>
            <ApiTester />
          </>
        )}

        {/* AI Debugger Tab */}
        {activeTab === 'ai' && (
          <>
            <h2 style={{ color: '#fff', marginBottom: '8px' }}>AI Error Debugger</h2>
            <p style={{ color: '#8b949e', marginBottom: '24px' }}>Paste any error or stack trace and get an instant AI explanation</p>
            <ErrorExplainer />
          </>
        )}

      </div>
    </div>
  );
}