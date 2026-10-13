import Image from "next/image";
import type { Project } from "@/lib/projects";
function hostOf(url?: string) {
  return url ? new URL(url).host : "localhost";
}
export function ProjectMedia({
  project,
  sizes,
  preload,
}: {
  project: Project;
  sizes: string;
  preload?: boolean;
}) {
  const style = { "--accent": project.accent } as React.CSSProperties;
  if (!project.image) {
    return (
      <div className="cover" style={style} aria-hidden="true">
        <div className="cover-glow" />
        <div className="cover-grid" />
        <div className="cover-top">
          {project.platforms.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
        <strong className="cover-name">{project.name}</strong>
        <code className="cover-code">
          {project.stack.slice(0, 3).join(" · ")}
        </code>
      </div>
    );
  }
  return (
    <div className="browser" style={style}>
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{hostOf(project.demo)}</span>
      </div>
      <div className="browser-screen">
        <Image
          src={project.image}
          alt={`${project.name} interface screenshot`}
          fill
          sizes={sizes}
          preload={preload}
        />
      </div>
    </div>
  );
}
