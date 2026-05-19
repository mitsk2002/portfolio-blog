import projects from "../data/projects";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import styles from "./MiniProjects.module.css";

function MiniProjects() {
  return (
    <main className={styles.container}>
      <SectionHeader title="Mini Projects" className={styles.pageHeader} />

      <div className={styles.projectList}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            tags={project.tech?.slice(0, 2) || ["API"]}
            title={project.title}
            description={project.description}
            stack={project.tech || []}
            href={project.live}
            repo={project.repo}
          />
        ))}
      </div>
    </main>
  );
}

export default MiniProjects;
