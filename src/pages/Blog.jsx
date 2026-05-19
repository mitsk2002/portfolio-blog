import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import styles from "./Blog.module.css";

function Blog() {
  const [posts, setPosts] = useState([
    { id: 1, title: "My first blog post", content: "Hello world!" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    const newPost = {
      id: Date.now(),
      title: newTitle,
      content: newContent,
    };

    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <main className={styles.container}>
      <SectionHeader title="Blog" className={styles.pageHeader} />

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Post title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className={styles.input}
        />
        <textarea
          placeholder="Write your post..."
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          Add Post
        </button>
      </form>

      {posts.map((post) => (
        <article key={post.id} className={styles.post}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.content}>{post.content}</p>
        </article>
      ))}
    </main>
  );
}

export default Blog;
