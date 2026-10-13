import Link from "next/link";
import type { Project } from "@/lib/projects";
export function ProjectLinks({
  project,
  compact,
  caseStudy = true,
}: {
  project: Project;
  compact?: boolean;
  caseStudy?: boolean;
}) {
  return (
    <div className={compact ? "links links-compact" : "links"}>
      {caseStudy && (
        <Link
          className={compact ? "link" : "btn btn-primary"}
          href={`/projects/${project.slug}`}
        >
          Case study <span aria-hidden="true">→</span>
        </Link>
      )}
      {project.demo && (
        <a
          className={compact ? "link" : "btn btn-ghost"}
          href={project.demo}
          target="_blank"
          rel="noreferrer"
        >
          Live demo <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.source && (
        <a
          className={compact ? "link" : "btn btn-ghost"}
          href={project.source}
          target="_blank"
          rel="noreferrer"
        >
          Source <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}
