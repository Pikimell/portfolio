import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.name ?? "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="case-study">
      <Link className="back-link" href="/#work">
        ← All projects
      </Link>
      <div className="case-heading">
        <div>
          <p className="eyebrow">
            {project.category} /{" "}
            {project.private ? "PRIVATE SOURCE" : "PUBLIC SOURCE"}
          </p>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p>{project.description}</p>
        </div>
        <div className="case-actions">
          {project.demo && (
            <a
              className="button button-dark"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Visit product ↗
            </a>
          )}
          {project.source && (
            <a
              className="button button-outline"
              href={project.source}
              target="_blank"
              rel="noreferrer"
            >
              View source ↗
            </a>
          )}
          {!project.demo && !project.source && (
            <span className="private-label">
              Private source · Product overview
            </span>
          )}
        </div>
      </div>
      <ProjectVisual project={project} />
      <div className="case-overview">
        <div>
          <small>TECHNOLOGIES</small>
          <ul className="tags">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <small>ENGINEERING FOCUS</small>
          <p>{project.focus}</p>
        </div>
      </div>
      <div className="case-body">
        <aside>
          <span className="eyebrow">PROJECT NOTES</span>
          <a href="#problem">The problem</a>
          <a href="#approach">The approach</a>
          <a href="#implementation">Implementation</a>
          <a href="#scope">Scope & constraints</a>
        </aside>
        <div>
          <section id="problem">
            <p className="eyebrow">01 / CONTEXT</p>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
          <section id="approach">
            <p className="eyebrow">02 / DECISIONS</p>
            <h2>The approach</h2>
            <p>{project.approach}</p>
          </section>
          <section id="implementation">
            <p className="eyebrow">03 / WHAT’S INSIDE</p>
            <h2>Implementation</h2>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>
                  <span>↗</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>
          <section id="scope" className="scope-note">
            <h3>Scope & constraints</h3>
            <p>{project.notes}</p>
            {project.private && (
              <p>
                The source remains private. This overview shares the technical
                approach without publishing implementation code or user data.
              </p>
            )}
          </section>
        </div>
      </div>
      <Link className="next-project" href={`/projects/${next.slug}`}>
        <span>KEEP EXPLORING</span>
        <strong>{next.name}</strong>
        <b aria-hidden="true">↗</b>
      </Link>
    </main>
  );
}
