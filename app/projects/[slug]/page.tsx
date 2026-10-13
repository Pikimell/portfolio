import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectMedia } from "@/components/ProjectMedia";
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
    <main
      id="main"
      className="case container"
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <Link className="back" href="/#work">
        ← All projects
      </Link>
      <header className="case-head">
        <p className="kicker">
          {project.category} · {project.platforms.join(" · ")} ·{" "}
          {project.private ? "Private repo" : "Open source"}
        </p>
        <h1>{project.name}</h1>
        <p className="lead">{project.tagline}.</p>
        <p>{project.description}</p>
        <ProjectLinks project={project} caseStudy={false} />
      </header>
      <div className="case-media">
        <ProjectMedia
          project={project}
          sizes="(max-width: 1200px) 100vw, 1120px"
          preload
        />
      </div>
      <dl className="case-facts">
        <div>
          <dt>Stack</dt>
          <dd>
            <ul className="chips">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>Focus</dt>
          <dd>{project.focus}</dd>
        </div>
        <div>
          <dt>Platforms</dt>
          <dd>{project.platforms.join(" · ")}</dd>
        </div>
      </dl>
      <div className="case-body">
        <section>
          <p className="kicker">01 — Context</p>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <p className="kicker">02 — Decisions</p>
          <h2>The approach</h2>
          <p>{project.approach}</p>
        </section>
        <section>
          <p className="kicker">03 — What’s inside</p>
          <h2>Key features</h2>
          <ul className="checks">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
        <section className="note">
          <h2>Scope & constraints</h2>
          <p>{project.notes}</p>
          {project.private && (
            <p>
              The source is private. This overview shares the technical
              approach without publishing implementation code or user data.
            </p>
          )}
        </section>
      </div>
      <Link className="next" href={`/projects/${next.slug}`}>
        <span>Next project</span>
        <strong>
          {next.name} <b aria-hidden="true">→</b>
        </strong>
      </Link>
    </main>
  );
}
