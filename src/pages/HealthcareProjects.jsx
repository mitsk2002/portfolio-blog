import { healthcareProjects } from "../data/healthcareProjects";
import styles from "./HealthcareProjects.module.css";

export default function HealthcareProjects() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Healthcare Projects</h1>
      
      <div className={styles.projectsGrid}>
        {healthcareProjects.map((project) => (
          <article key={project.id} className={styles.projectCard}>
            <img 
              src={project.image} 
              alt={project.title}
              className={styles.projectImage}
            />
            
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              
              <div className={styles.summary}>
                <div className={styles.summarySection}>
                  <strong>Who it's for:</strong> {project.summary.who}
                </div>
                
                <div className={styles.summarySection}>
                  <strong>Problem:</strong> {project.summary.problem}
                </div>
                
                <div className={styles.summarySection}>
                  <strong>Why it matters:</strong> {project.summary.impact}
                </div>
                
                <div className={styles.summarySection}>
                  <strong>Key decisions:</strong> {project.summary.decisions}
                </div>
                
                <div className={styles.summarySection}>
                  <strong>Skills demonstrated:</strong> {project.summary.skills}
                </div>
              </div>
              
              <div className={styles.links}>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Project →
                  </a>
                )}
                {project.repo && (
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    View Code →
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}