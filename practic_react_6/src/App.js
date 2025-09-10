import React, { createContext, useContext, useEffect, useState } from 'react';
import './index.css';

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch { return 'light'; }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header">
      <h1>Мій сайт</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  );
}

function Content() {
  const { theme } = useTheme();
  return (
    <main className="content">
      <p>Поточна тема: <strong>{theme}</strong></p>
    </main>
  );
}

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="footer">
      <small>Footer — тема: {theme}</small>
    </footer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
