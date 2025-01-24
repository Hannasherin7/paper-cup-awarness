import React, { useState } from "react";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const addPost = () => {
    if (input.trim()) {
      setPosts([...posts, input]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Community Discussions</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Share your thoughts..."
        style={{ padding: "10px", width: "80%" }}
      />
      <button onClick={addPost} style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none" }}>Post</button>
      <ul>
        {posts.map((post, index) => <li key={index}>{post}</li>)}
      </ul>
    </div>
  );
};

export default Community;
