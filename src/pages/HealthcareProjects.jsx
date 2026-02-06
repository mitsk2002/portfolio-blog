import React from "react";
import { healthcareProjects } from "../data/healthcareProjects";
import styles from "./HealthcareProjects.module.css";

function HealthcareProjects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Healthcare Projects</h1>
      <div className={styles.grid}>
        {healthcareProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <img
              src={project.image}
              alt={project.title}
              className={styles.thumbnail}
            />
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default HealthcareProjects;
