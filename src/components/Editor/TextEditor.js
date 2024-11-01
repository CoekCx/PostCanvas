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
        switch(e.key.toLowerCase()) {
          // Existing shortcuts
          case 'z':
            e.preventDefault();
            if (e.shiftKey) {
              document.execCommand('redo');
            } else {
              document.execCommand('undo');
            }
            break;
          
          // Formatting shortcuts
          case 'b':
            e.preventDefault();
            handleFormat('bold');
            break;
          case 'i':
            e.preventDefault();
            handleFormat('italic');
            break;
          case 'u':
            e.preventDefault();
            handleFormat('underline');
            break;
          
          // Heading shortcuts
          case '1':
            e.preventDefault();
            handleFormat('formatBlock', 'h1');
            break;
          case '2':
            e.preventDefault();
            handleFormat('formatBlock', 'h2');
            break;
          case '3':
            e.preventDefault();
            handleFormat('formatBlock', 'h3');
            break;
          case '0':
            e.preventDefault();
            handleFormat('formatBlock', 'p');
            break;
          
          // Alignment shortcuts
          case 'l':
            e.preventDefault();
            handleFormat('justifyLeft');
            break;
          case 'e':
            e.preventDefault();
            handleFormat('justifyCenter');
            break;
          case 'r':
            e.preventDefault();
            handleFormat('justifyRight');
            break;
          case 'j':
            e.preventDefault();
            handleFormat('justifyFull');
            break;
          
          // List shortcuts
          case '.':
            e.preventDefault();
            handleFormat('insertUnorderedList');
            break;
          case ',':
            e.preventDefault();
            handleFormat('insertOrderedList');
            break;
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