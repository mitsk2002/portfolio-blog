import { healthcareProjects } from "../data/healthcareProjects";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { MosaicDivider } from "../components/Sigils";
import { parseSkills } from "../utils/parseSkills";
import styles from "./HealthcareProjects.module.css";

export default function HealthcareProjects() {
  return (
    <main className={styles.container}>
      <SectionHeader title="Selected Work" className={styles.pageHeader} />
      <MosaicDivider className={styles.mosaicDivider} />

      <div className={styles.projectList}>
        {healthcareProjects.map((project) => (
          <ProjectCard
            key={project.id}
            tags={["Healthcare Tech", "React"]}
            title={project.title}
            description={project.summary.impact}
            stack={parseSkills(project.summary.skills)}
            href={project.link || project.repo}
            repo={project.repo}
          />
        ))}
      </div>
    </main>
  );
}
