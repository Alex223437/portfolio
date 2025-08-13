// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { applyTheme, initTheme } from './theme';

const options = ['auto','light','dark'];

export default function ThemeToggle() {
  const [value, setValue] = useState(() => localStorage.getItem('theme') || 'auto');

  useEffect(() => { initTheme(); }, []);

  const onChange = (next) => {
    setValue(next);
    applyTheme(next);
  };

  return (
    <div className="theme-toggle">
      {options.map(opt => (
        <button
          key={opt}
          className={`theme-toggle__btn ${value===opt ? 'is-active':''}`}
          onClick={() => onChange(opt)}
          aria-pressed={value===opt}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}