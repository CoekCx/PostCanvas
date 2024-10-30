import React, { useState } from 'react';
import './PostCanvas.css';

function PostCanvas() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  return (
    <div className="post-canvas">
      <form onSubmit={handleSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write your post here..."
        />
        <button type="submit">Post</button>
      </form>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCanvas; 