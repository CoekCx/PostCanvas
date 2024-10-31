import React, { useEffect, useRef } from 'react';
import './EditorContent.css';

function EditorContent({ content, onInput }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  return (
    <div 
      ref={editorRef}
      className="editor-content"
      contentEditable={true}
      onInput={onInput}
    />
  );
}

export default EditorContent; 