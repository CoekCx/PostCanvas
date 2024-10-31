import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
    </button>
  );
}

export default ThemeToggle; 