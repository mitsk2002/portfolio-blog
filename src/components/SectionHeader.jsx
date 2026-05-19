import styles from "./SectionHeader.module.css";

export default function SectionHeader({ title, id, className = "" }) {
  return (
    <div id={id} className={`${styles.sectionHeader} ${className}`.trim()}>
      <span className={styles.sectionTitle}>{title}</span>
    </div>
  );
}
