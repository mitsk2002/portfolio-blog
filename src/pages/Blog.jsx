import { useState } from "react";

function Blog() {
  // Step 1: Set up state for blog posts
  const [posts, setPosts] = useState([
    { id: 1, title: "My first blog post", content: "Hello world!" }
  ]);

  // Step 2: Set up state for new post form
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      content: newContent
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <main style={{ padding: "1rem" }}>
      <h1>📝 Blog</h1>

      {/* Form to add new blog post */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem", width: "100%" }}
        />
        <textarea
          placeholder="Write your post..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          style={{ display: "block", marginBottom: "0.5rem", width: "100%", height: "100px" }}
        />
        <button type="submit">Add Post</button>
      </form>

      {/* Render blog posts */}
      {posts.map((post) => (
        <article key={post.id} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}

export default Blog;
