import { useState } from 'react';
import axios from 'axios';

export default function ApiTester() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    setResponse(null);
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('https://opentrack-4my2.onrender.com/api-tester',
        { url, method },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || { error: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      background: '#161b22',
      border: '1px solid #30363d',
      borderRadius: '10px',
      padding: '24px'
    }}>
      {/* URL and Method Row */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <select
          value={method}
          onChange={e => setMethod(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '6px',
            background: '#0d1117',
            color: '#fff',
            border: '1px solid #30363d',
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>

        <input
          type="text"
          placeholder="https://api.example.com/users"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '6px',
            background: '#0d1117',
            color: '#fff',
            border: '1px solid #30363d',
            fontSize: '14px'
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading || !url}
          style={{
            padding: '10px 20px',
            background: '#238636',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>

      {/* Response */}
      {response && (
        <div style={{
          background: '#0d1117',
          padding: '16px',
          borderRadius: '6px',
          border: '1px solid #30363d'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px'
          }}>
            <span style={{ color: '#8b949e', fontSize: '13px' }}>Status:</span>
            <span style={{
              background: response.status >= 200 && response.status < 300 ? '#1a4731' : '#4a1515',
              color: response.status >= 200 && response.status < 300 ? '#3fb950' : '#f85149',
              padding: '2px 10px',
              borderRadius: '12px',
              fontSize: '13px',
              fontWeight: '600'
            }}>
              {response.status}
            </span>
          </div>
          <pre style={{
            color: '#c9d1d9',
            overflow: 'auto',
            maxHeight: '400px',
            fontSize: '13px',
            lineHeight: '1.6'
          }}>
            {JSON.stringify(response.data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}