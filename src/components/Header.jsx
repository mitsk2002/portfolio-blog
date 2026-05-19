import { Link, useLocation } from "react-router-dom";
import { NavSigil } from "./Sigils";
import styles from "./Header.module.css";

const navItems = [
  { label: "Work", to: "/#selected-work" },
  { label: "Skills", to: "/#knowledge" },
  { label: "Contact", to: "/#contact" },
  { label: "Blog", to: "/blog" },
];

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <NavSigil className={styles.sigil} />
        <span className={styles.wordmark}>Mitsu Kubo</span>
      </Link>

      <nav className={styles.nav} aria-label="Main">
        <ul className={styles.navLinks}>
          {navItems.map(({ label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className={styles.navLink}
                onClick={(e) => {
                  if (to.startsWith("/#") && location.pathname === "/") {
                    e.preventDefault();
                    document.querySelector(to.slice(1))?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
