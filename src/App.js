import React from 'react';
import './App.css';
import TextEditor from './components/Editor/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PostCanvas</h1>
      </header>
      <main>
        <TextEditor />
      </main>
    </div>
  );
}

export default App; 