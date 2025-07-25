import { useState } from "react";
import projectsData from "../data/projects.js";


function Projects() {
  const [projects] = useState(projectsData);

  return (
    <main style={{ padding: "1rem" }}>
      <h1>💻 Projects</h1>
      {projects.map((project) => (
        <article key={project.id} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #ccc" }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p>
            <strong>Tech:</strong> {project.tech.join(", ")}
          </p>
          <p>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            {project.live && (
              <>
                {" | "}
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Site</a>
              </>
            )}
          </p>
        </article>
      ))}
    </main>
  );
}

export default Projects;
