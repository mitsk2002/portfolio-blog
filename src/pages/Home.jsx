import styles from './Home.module.css';

function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.geometryBackground}></div>
      <h1 className={styles.title}>Welcome to My Portfolio & Blog</h1>
      <h2 className={styles.subtitle}>
        Frontend Developer | JavaScript | React | API Integration | HTML | CSS | Git | Testing
      </h2>
      <p className={styles.intro}>
        This is where I’ll document my journey in web development, fitness, health, and more.
      </p>
      <section className={styles.homeIntro}>
        <h1>Hello, I'm Mitsu Kubo</h1>
        <p>
          I’m a self-taught front-end developer with a strong foundation in HTML, CSS, and JavaScript.
          I bring a calm, focused communication style and a background in healthcare and training that
          helps me collaborate clearly and thoughtfully with both technical and non-technical teams.
        </p>
        <p>
          I'm a fast learner with a growth mindset — I enjoy solving problems, refining existing code,
          and building clean, user-friendly interfaces. I thrive in environments that value curiosity,
          documentation, and team-oriented thinking.
        </p>
        <h2>What Sets Me Apart</h2>
          <ul>
            <li>🧠 Self-motivated & quick to learn — I’ve built my site and portfolio from scratch.</li>
            <li>💬 Strong communicator — comfortable in async, remote teams, and enjoy writing clear documentation.</li>
            <li>🧪 Detail-oriented — I’ve worked in roles requiring precision, such as QA and SOP writing.</li>
          </ul>
      </section>
    </main>
  );
}

export default Home;
