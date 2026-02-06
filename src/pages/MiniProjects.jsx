import React from "react";
import projects from "../data/projects";
import styles from "./MiniProjects.module.css";

function MiniProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Mini Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            {/* ✅ Only render the image if it exists */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={styles.thumbnail}
              />
            )}

            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.links}>
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Repo
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MiniProjects;
