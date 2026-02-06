// Header.jsx
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaBlog, FaProjectDiagram } from 'react-icons/fa';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bg} />
      <h2 className={styles.logo}>🌱 Mitsu Kubo</h2>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <FaHome /> Home
        </Link>
        <Link to="/about" className={styles.link}>
          <FaUserAlt /> About
        </Link>
        <Link to="/blog" className={styles.link}>
          <FaBlog /> Blog
        </Link>
        <Link to="/mini-projects" className={styles.link}>
          <FaProjectDiagram /> Mini Projects
        </Link>
        <Link to="/healthcare-projects" className={styles.link}>
          <FaProjectDiagram /> Healthcare Projects
        </Link>
      </nav>
    </header>
  );
}

export default Header;