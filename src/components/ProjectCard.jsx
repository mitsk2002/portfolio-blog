import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  tags = [],
  title,
  description,
  stack = [],
  href,
  repo,
  className = "",
}) {
  const link = href || repo;
  const Wrapper = link ? "a" : "article";
  const wrapperProps = link
    ? {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      className={`${styles.projectCard} ${className}`.trim()}
      {...wrapperProps}
    >
      {link && <span className={styles.projectArrow} aria-hidden="true">↗</span>}

      {tags.length > 0 && (
        <div className={styles.projectMeta}>
          {tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDesc}>{description}</p>

      {stack.length > 0 && (
        <div className={styles.projectStack}>
          {stack.map((item) => (
            <span key={item} className={styles.stackChip}>
              {item}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
}
