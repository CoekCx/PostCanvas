import React from 'react';
import './EditorContent.css';

function EditorContent({ content, setContent }) {
  const handleInput = (e) => {
    setContent(e.target.innerHTML);
  };

  return (
    <div
      className="editor-content"
      contentEditable={true}
      onInput={handleInput}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default EditorContent; 