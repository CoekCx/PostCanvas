import React, { useEffect, useRef } from 'react';
import './EditorContent.css';

function EditorContent({ content, onInput }) {
  const editorRef = useRef(null);
  const dragStartRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && content !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  const getLineElements = (startY, endY) => {
    const children = Array.from(editorRef.current.children);
    if (children.length === 0) return [editorRef.current];

    return children.filter(child => {
      const rect = child.getBoundingClientRect();
      return (
        (rect.top >= Math.min(startY, endY) && rect.top <= Math.max(startY, endY)) ||
        (rect.bottom >= Math.min(startY, endY) && rect.bottom <= Math.max(startY, endY)) ||
        (rect.top <= Math.min(startY, endY) && rect.bottom >= Math.max(startY, endY))
      );
    });
  };

  const handleMouseDown = (e) => {
    const rect = editorRef.current.getBoundingClientRect();
    const isInSelectionZone = e.clientX - rect.left <= 20;
    
    if (isInSelectionZone) {
      e.preventDefault();
      dragStartRef.current = e.clientY;
      
      const lines = getLineElements(e.clientY, e.clientY);
      if (lines.length > 0) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(lines[0]);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  const handleMouseMove = (e) => {
    if (e.buttons === 1 && dragStartRef.current !== null) {
      const rect = editorRef.current.getBoundingClientRect();
      const isInSelectionZone = e.clientX - rect.left <= 20;
      
      if (isInSelectionZone) {
        e.preventDefault();
        
        const lines = getLineElements(dragStartRef.current, e.clientY);
        if (lines.length > 0) {
          const selection = window.getSelection();
          const range = document.createRange();
          
          range.setStartBefore(lines[0]);
          range.setEndAfter(lines[lines.length - 1]);
          
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    }
  };

  const handleMouseUp = () => {
    dragStartRef.current = null;
  };

  return (
    <div 
      ref={editorRef}
      className="editor-content"
      contentEditable={true}
      onInput={onInput}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}

export default EditorContent; 