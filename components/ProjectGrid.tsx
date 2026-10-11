"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, type Category } from "@/lib/projects";
import { ProjectVisual } from "./ProjectVisual";
const categories: Category[] = [
  "All work",
  "Full-stack",
  "Frontend",
  "Integrations",
];
export function ProjectGrid() {
  const [category, setCategory] = useState<Category>("All work");
  const selected = projects.filter(
    (p) => category === "All work" || p.category === category,
  );
  return (
    <>
      <div className="work-toolbar">
        <div className="project-filters" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {selected.length} projects
        </span>
      </div>
      <div className="project-grid">
        {selected.map((project, index) => (
          <article className="project-card" key={project.slug}>
            <Link
              className="visual-link"
              href={`/projects/${project.slug}`}
              aria-label={`Explore ${project.name}`}
            >
              <ProjectVisual project={project} />
            </Link>
            <div className="project-info">
              <div className="project-meta">
                <span>{project.category}</span>
                <span>
                  {project.private ? "Private source" : "Public source"}
                </span>
              </div>
              <Link
                href={`/projects/${project.slug}`}
                className="project-title"
              >
                <h3>{project.name}</h3>
                <span aria-hidden="true">↗</span>
              </Link>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technology stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-bottom">
                <Link href={`/projects/${project.slug}`}>
                  Explore project <span aria-hidden="true">→</span>
                </Link>
                <small>{String(index + 1).padStart(2, "0")}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
