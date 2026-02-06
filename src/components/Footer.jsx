// Footer.jsx
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bg} />

      <div className={styles.contact}>
        <p>📫 Reach out directly at: <strong>mitsk2002@gmail.com</strong></p>
        <p>
          Connect with me on{' '}
          <a
            href="https://www.linkedin.com/in/mitsukubo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          or check out my{' '}
          <a
            href="https://github.com/mitsk2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>

      <p>&copy; {new Date().getFullYear()} Mitsu Kubo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
