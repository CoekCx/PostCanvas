# Blog Canvas

Blog Canvas is a modern, feature-rich text editor built with React that supports both light and dark themes. It provides a seamless writing experience with a robust formatting toolbar and keyboard shortcuts.

### Dark Mode
![Blog Canvas Dark Mode Screenshot 1](./assets/Dark%20Mode%201.png)
![Blog Canvas Dark Mode Screenshot 2](./assets/Dark%20Mode%202.png)

### Light Mode
![Blog Canvas Light Mode Screenshot 1](./assets/Light%20Mode%201.png)
![Blog Canvas Light Mode Screenshot 2](./assets/Light%20Mode%202.png)

## Features

### Rich Text Editing
- Full formatting toolbar with common text editing options
- Support for headings (H1, H2, H3)
- Text alignment controls
- Lists (ordered and unordered)
- Basic text formatting (bold, italic, underline)

### Dark Mode Support
- Elegant dark theme implementation
- Smooth transitions between themes
- Persistent theme selection

### Advanced Editor Features
- Line selection with gutter click-and-drag
- Keyboard shortcuts for common operations
- Undo/Redo functionality
- Clean, responsive interface

## Keyboard Shortcuts

| Action | Windows/Linux | Mac |
|--------|--------------|-----|
| Bold | Ctrl + B | ⌘ + B |
| Italic | Ctrl + I | ⌘ + I |
| Underline | Ctrl + U | ⌘ + U |
| Heading 1 | Ctrl + 1 | ⌘ + 1 |
| Heading 2 | Ctrl + 2 | ⌘ + 2 |
| Heading 3 | Ctrl + 3 | ⌘ + 3 |
| Paragraph | Ctrl + 0 | ⌘ + 0 |
| Align Left | Ctrl + L | ⌘ + L |
| Center | Ctrl + E | ⌘ + E |
| Align Right | Ctrl + R | ⌘ + R |
| Justify | Ctrl + J | ⌘ + J |
| Bullet List | Ctrl + . | ⌘ + . |
| Numbered List | Ctrl + , | ⌘ + , |
| Undo | Ctrl + Z | ⌘ + Z |
| Redo | Ctrl + Shift + Z | ⌘ + Shift + Z |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/CoekCx/PostCanvas
   cd PostCanvas
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## **Project Structure**
```
PostCanvas/
├── public/        # Static assets
├── src/           # Source code
├── .gitignore     # Ignored files
└── README.md      # Documentation
```

## **.gitignore Overview**
- `node_modules/` – Dependency files  
- `/build` – Production output  
- `.env` – Environment variables  
- Caches, logs, and editor configs

## **License**  
This project is licensed under the **MIT License**.
