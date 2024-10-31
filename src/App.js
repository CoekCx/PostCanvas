import React from 'react';
import './App.css';
import TextEditor from './components/Editor/TextEditor';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';

// Create a separate component to use the hook
function AppContent() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <h1>Blog Canvas</h1>
        <ThemeToggle />
      </header>
      <main>
        <TextEditor />
      </main>
    </div>
  );
}

// Main App component that provides the context
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 