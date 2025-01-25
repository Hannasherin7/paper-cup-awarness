import React, { useState } from "react";

const Community = () => {
  // ✅ State for storing posts
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Function to add posts
  const addPost = () => {
    if (input.trim()) {
      const newPost = {
        text: input,
        timestamp: new Date().toLocaleString()
      };
      setPosts([newPost, ...posts]); // Add new post at the top
      setInput("");
    }
  };

  // ✅ Function to delete a post
  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
    }}>
      {/* Title */}
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>🌍 Community Discussions</h2>

      {/* Input Box */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share your thoughts..."
          style={{
            flex: "1",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />
        <button
          onClick={addPost}
          style={{
            padding: "10px 15px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px"
          }}>
          Post
        </button>
      </div>

      {/* Posts Section */}
      <ul style={{
        listStyle: "none",
        padding: 0,
        maxHeight: "300px",
        overflowY: "auto"
      }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>No discussions yet. Start the conversation! 💬</p>
        ) : (
          posts.map((post, index) => (
            <li key={index} style={{
              backgroundColor: "#fff",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
              position: "relative"
            }}>
              <p style={{ margin: "0 0 5px", fontSize: "16px", color: "#333" }}>{post.text}</p>
              <small style={{ color: "#888" }}>📅 {post.timestamp}</small>
              <button
                onClick={() => deletePost(index)}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "12px"
                }}>
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Community;
