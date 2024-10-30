import React, { useState } from 'react';
import './TextEditor.css';
import Toolbar from './Toolbar';
import EditorContent from './EditorContent';

function TextEditor() {
  const [content, setContent] = useState('');
  
  const handleFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="text-editor">
      <Toolbar onFormat={handleFormat} />
      <EditorContent 
        content={content} 
        setContent={setContent} 
      />
    </div>
  );
}

export default TextEditor; 