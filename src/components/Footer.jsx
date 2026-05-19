import { ContactSigil, FooterSigil } from "./Sigils";
import styles from "./Footer.module.css";

function Footer() {
  const year = new Date().getFullYear();
  const romanYear = year === 2025 ? "MMXXV" : year === 2026 ? "MMXXVI" : String(year);

  return (
    <footer className={styles.footer}>
      <section id="contact" className={styles.contactSection}>
        <ContactSigil className={styles.contactSigil} />
        <p className={styles.contactIntro}>
          Available for remote part-time roles in healthcare tech, content, translation
          &amp; localization.
        </p>
        <div className={styles.contactLinks}>
          <a
            className={styles.contactLink}
            href="https://github.com/mitsk2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className={styles.contactLink}
            href="https://www.linkedin.com/in/mitsukubo"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className={styles.contactLink} href="mailto:mitsk2002@gmail.com">
            Email
          </a>
          <a
            className={styles.contactLink}
            href="https://mitsukubo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </section>

      <div className={styles.footerBar}>
        <FooterSigil />
        <p className={styles.footerCopy}>Mitsu Kubo · {romanYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
