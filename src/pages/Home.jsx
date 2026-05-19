import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import ProjectCard from "../components/ProjectCard";
import { HeroSigil, MosaicDivider } from "../components/Sigils";
import { healthcareProjects } from "../data/healthcareProjects";
import { disciplines, skillsGroups } from "../data/homeContent";
import { parseSkills } from "../utils/parseSkills";
import styles from "./Home.module.css";

const portfolioYear = new Date().getFullYear();

function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <HeroSigil className={styles.heroSigil} />
        <p className={styles.heroEyebrow}>Portfolio · {portfolioYear}</p>
        <h1 className={styles.heroName}>Mitsu Kubo</h1>
        <p className={styles.heroTitle}>
          Web Developer · Healthcare Specialist · Linguist
        </p>
        <div className={styles.heroRule} />
        <p className={styles.heroBio}>
          A multidisciplinary builder bridging healthcare domain knowledge, language, and
          emerging technology. Focused on purposeful, human-centered applications.
        </p>
      </section>

      <SectionHeader title="Disciplines" id="disciplines" />

      <div className={styles.disciplinesGrid}>
        {disciplines.map((item) => (
          <div key={item.label} className={styles.disciplineCell}>
            <p className={styles.disciplineLabel}>{item.label}</p>
            <p className={styles.disciplineDesc}>{item.description}</p>
          </div>
        ))}
      </div>

      <SectionHeader title="Selected Work" id="selected-work" className={styles.compactHeader} />

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
        <Link to="/mini-projects" className={styles.viewAllLink}>
          View all mini projects →
        </Link>
      </div>

      <SectionHeader title="Knowledge" id="knowledge" />

      <div className={styles.skillsGrid}>
        {skillsGroups.map((group) => (
          <div key={group.title} className={styles.skillsGroup}>
            <p className={styles.skillsGroupTitle}>{group.title}</p>
            <ul className={styles.skillsList}>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;
