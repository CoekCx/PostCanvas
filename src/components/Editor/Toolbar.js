import React from 'react';
import './Toolbar.css';

function Toolbar({ onFormat }) {
  const headings = [
    { label: 'H1', command: 'formatBlock', value: 'h1' },
    { label: 'H2', command: 'formatBlock', value: 'h2' },
    { label: 'H3', command: 'formatBlock', value: 'h3' },
  ];

  return (
    <div className="editor-toolbar">
      <div className="toolbar-group">
        {headings.map((heading) => (
          <button
            key={heading.label}
            onClick={() => onFormat(heading.command, heading.value)}
            className="toolbar-button"
          >
            {heading.label}
          </button>
        ))}
        <button
          onClick={() => onFormat('formatBlock', 'p')}
          className="toolbar-button"
        >
          P
        </button>
      </div>
      
      <div className="toolbar-group">
        <button
          onClick={() => onFormat('bold')}
          className="toolbar-button"
        >
          <i className="fas fa-bold"></i>
        </button>
        <button
          onClick={() => onFormat('italic')}
          className="toolbar-button"
        >
          <i className="fas fa-italic"></i>
        </button>
        <button
          onClick={() => onFormat('underline')}
          className="toolbar-button"
        >
          <i className="fas fa-underline"></i>
        </button>
      </div>
    </div>
  );
}

export default Toolbar; 