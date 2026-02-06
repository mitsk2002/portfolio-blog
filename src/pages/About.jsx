import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>

      <p className={styles.paragraph}>
        I’m a self-taught front-end web developer with a background in
        healthcare, training, and foreign languages. Since 2016, I’ve worked as
        a medical LMT in the U.S. healthcare system. While my passion is
        healing, I came to realize two important things: (A) financial security
        in healing work alone is difficult to achieve, and (B) I need a
        sustainable long-term path that doesn't rely on my body.
      </p>

      <p className={styles.paragraph}>
        I earned my BA in Foreign Languages (Japanese & Spanish) in 2009. I’ve
        always loved language — and computer languages feel like a natural
        extension of that interest. Although my first exposure to computer
        science in college was discouraging, I made the commitment in 2023 to
        teach myself web development. One of the things I love about tech is
        that it rewards self-motivation and continuous learning — especially
        with open resources and AI tools. Huge shoutout to FreeCodeCamp.org for
        helping me build my foundation.
      </p>

      <p className={styles.paragraph}>
        Since starting my tech journey, both my personal life and the industry
        have evolved rapidly. I relocated from Seattle to Dallas in May 2025,
        and I’ve continued sharpening my skills in HTML, CSS, JavaScript, and
        API integration.
      </p>

      <h2 className={styles.subheading}>What I’m Looking For</h2>
      <p className={styles.paragraph}>
        Open to immediate short-term or contract-to-hire roles.
        <br />
        I’m currently seeking a <strong>remote W2 contract role</strong> in web
        development where I can contribute to:
      </p>
      <ul className={styles.list}>
        <li>Website maintenance, debugging, or UI cleanup</li>
        <li>Front-end feature building with clear tasks and communication</li>
        <li>QA, accessibility testing, or documentation support</li>
      </ul>
      <p className={styles.paragraph}>
        My short-term goal is to become a reliable contributor on a
        collaborative dev team. Long-term, I’m exploring security, automation,
        and open-source contributions as areas to grow into.
      </p>

      <h2 className={styles.subheading}>My Values</h2>
      <p className={styles.paragraph}>
        I’ve done contract work for Amazon and other corporations that outsource
        heavily. I’ve seen the harm this can do to local economies. That’s why
        I’m committed to working with companies that prioritize community
        investment and local hiring. Just because something is legal doesn’t
        mean it’s ethical.
      </p>

      <h2 className={styles.subheading}>Beyond Tech</h2>
      <p className={styles.paragraph}>
        Some of my other passions and interests include:
      </p>
      <ul className={styles.list}>
        <li>Fitness (calisthenics & gymnastics)</li>
        <li>Health & nutrition</li>
        <li>Homesteading/gardening (adapting to apartment life for now)</li>
        <li>Manifesting, metaphysics, astrology, and spirituality</li>
        <li>Productivity & financial freedom</li>
        <li>Video games (PS5 owner)</li>
        <li>Travel</li>
        <li>Biracial identity & cultural awareness</li>
        <li>Local community enrichment</li>
        <li>Dogs (especially German Shepherds)</li>
      </ul>

      <p className={styles.paragraph}>
        I’ll be using this site not only as a portfolio, but also as a blog to
        document my journey. I’m not very materialistic, but I do enjoy sharing
        the things that bring value to my life — including tools, products, or
        resources I’ve personally vetted. Expect to see affiliate links and
        reviews woven into my posts.
      </p>

      <p className={styles.paragraph}>
        My hope is that others — especially career changers, creatives, and
        lifelong learners — will find motivation and guidance in my story.
      </p>
    </main>
  );
}
