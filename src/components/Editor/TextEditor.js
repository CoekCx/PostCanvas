import React, { useState, useEffect } from 'react';
import './TextEditor.css';
import Toolbar from './Toolbar';
import EditorContent from './EditorContent';

function TextEditor() {
  const [content, setContent] = useState('');
  const maxHistoryCapacity = 100; // Define maximum history states to keep
  
  useEffect(() => {
    // Set up undo/redo keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') {
          e.preventDefault();
          if (e.shiftKey) {
            document.execCommand('redo');
          } else {
            document.execCommand('undo');
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleContentChange = (e) => {
    setContent(e.currentTarget.innerHTML);
  };

  return (
    <div className="text-editor">
      <Toolbar onFormat={handleFormat} />
      <EditorContent 
        content={content}
        onInput={handleContentChange}
      />
    </div>
  );
}

export default TextEditor; 