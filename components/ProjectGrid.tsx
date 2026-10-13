"use client";
import { useState } from "react";
import Link from "next/link";
import { categories, type Category, type Project } from "@/lib/projects";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectLinks } from "./ProjectLinks";
type Filter = "All" | Category;
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filters: Filter[] = [
    "All",
    ...categories.filter((c) => projects.some((p) => p.category === c)),
  ];
  const selected = projects.filter(
    (p) => filter === "All" || p.category === filter,
  );
  return (
    <>
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            type="button"
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
            <span>
              {f === "All"
                ? projects.length
                : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>
      <div className="grid" aria-live="polite">
        {selected.map((project) => (
          <article className="card reveal" key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="card-media"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectMedia
                project={project}
                sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 400px"
              />
            </Link>
            <div className="card-body">
              <div className="meta">
                <span>{project.category}</span>
                <span>{project.private ? "Private repo" : "Open source"}</span>
              </div>
              <h3>
                <Link href={`/projects/${project.slug}`}>{project.name}</Link>
              </h3>
              <p>{project.description}</p>
              <ul className="chips" aria-label="Technologies">
                {project.stack.slice(0, 4).map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ProjectLinks project={project} compact />
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
