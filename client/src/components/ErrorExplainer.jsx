import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function ErrorExplainer() {
  const [error, setError] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    setExplanation('');
    const token = localStorage.getItem('token');
    try {
      const res = await axios.post('http://localhost:5000/ai',
        { error },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setExplanation(res.data.explanation);
    } catch (err) {
      setExplanation('Something went wrong. Please try again.');
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
      {/* Error Input */}
      <textarea
        placeholder="Paste your error or stack trace here..."
        value={error}
        onChange={e => setError(e.target.value)}
        rows={8}
        style={{
          width: '100%',
          padding: '12px',
          borderRadius: '6px',
          background: '#0d1117',
          color: '#c9d1d9',
          border: '1px solid #30363d',
          fontSize: '13px',
          fontFamily: 'monospace',
          marginBottom: '12px',
          boxSizing: 'border-box',
          resize: 'vertical',
          lineHeight: '1.6'
        }}
      />

      {/* Button */}
      <button
        onClick={handleExplain}
        disabled={loading || !error}
        style={{
          padding: '10px 20px',
          background: '#238636',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: '500',
          marginBottom: '16px'
        }}
      >
        {loading ? 'Analyzing...' : 'Explain Error'}
      </button>

      {/* AI Response */}
      {explanation && (
        <div style={{
          background: '#0d1117',
          padding: '20px',
          borderRadius: '6px',
          border: '1px solid #30363d',
          color: '#c9d1d9',
          fontSize: '14px',
          lineHeight: '1.8'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            paddingBottom: '12px',
            borderBottom: '1px solid #30363d'
          }}>
            <span style={{ color: '#58a6ff', fontWeight: '600' }}>AI Explanation</span>
          </div>
          <ReactMarkdown>{explanation}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}