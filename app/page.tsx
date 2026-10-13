import Image from "next/image";
import Link from "next/link";
import {
  featuredProjects,
  otherProjects,
  projects,
} from "@/lib/projects";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectMedia } from "@/components/ProjectMedia";
import { contacts } from "@/components/SiteChrome";
const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "AWS Lambda",
  "Supabase",
  "Zustand",
  "Three.js",
  "Swift / SwiftUI",
  "OpenAI API",
];
const skills = [
  {
    title: "Frontend",
    text: "Product interfaces, editors, and dashboards that stay fast as state grows.",
    items: ["React", "Next.js", "TypeScript", "Zustand", "Three.js / R3F", "SVG & Canvas", "Web Audio"],
  },
  {
    title: "Backend",
    text: "REST APIs with clear layers, secure auth, and data models that match the domain.",
    items: ["Node.js", "Express", "MongoDB / Mongoose", "OpenAPI", "JWT & OAuth", "Vitest"],
  },
  {
    title: "Cloud & integrations",
    text: "Serverless deployments and third-party APIs wired into real workflows.",
    items: ["AWS Lambda", "Serverless", "Vercel", "Supabase", "App Store Connect", "Google Play API", "OpenAI"],
  },
  {
    title: "Mobile",
    text: "Native iOS clients and cross-platform apps connected to my own backends.",
    items: ["Swift", "SwiftUI", "React Native", "Expo"],
  },
];
const experience = [
  {
    role: "Independent Full-stack Developer",
    place: "Freelance & own products",
    text: "Working directly with clients on requirements, architecture, and delivery: web products, REST APIs on AWS, store integrations, and iOS apps.",
  },
  {
    role: "Full-stack Developer",
    place: "KeyUA",
    text: "Full-stack development in a product team across React interfaces and Node.js services.",
  },
  {
    role: "Teacher & Mentor",
    place: "GoIT",
    text: "Teaching and mentoring developers. Explaining a technical decision clearly is part of building it well.",
  },
];
const heroShots = featuredProjects.filter((p) => p.image).slice(0, 3);
export default function Home() {
  const openSource = projects.filter((p) => !p.private).length;
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="status">
              <span className="pulse" />
              Open to full-time roles · Dnipro, Ukraine · Remote
            </p>
            <h1>
              I build products <em>end to end</em> — from interface to
              infrastructure.
            </h1>
            <p className="lead">
              Hi, I’m Volodymyr — a full-stack developer working with
              TypeScript, React, Next.js, Node.js, and AWS. I ship learning
              platforms, document automation, creative tools, and the APIs
              and iOS apps behind them.
            </p>
            <div className="hero-actions">
              <Link href="#work" className="btn btn-primary">
                View my work <span aria-hidden="true">↓</span>
              </Link>
              <a href={`mailto:${contacts.email}`} className="btn btn-ghost">
                {contacts.email}
              </a>
            </div>
            <dl className="stats">
              <div>
                <dt>Projects showcased</dt>
                <dd>{projects.length}</dd>
              </div>
              <div>
                <dt>Open-source repos</dt>
                <dd>{openSource}</dd>
              </div>
              <div>
                <dt>Platforms</dt>
                <dd>Web · API · iOS</dd>
              </div>
            </dl>
          </div>
          <div className="hero-stack" aria-hidden="true">
            {heroShots.map((p, i) => (
              <div key={p.slug} className={`shot shot-${i + 1}`}>
                <Image
                  src={p.image!}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 80vw, 560px"
                  preload={i === 0}
                />
                <span className="shot-label">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee" aria-label="Technologies I use">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} aria-hidden={i >= marquee.length}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <section id="work" className="section container">
        <header className="section-head">
          <p className="kicker">01 — Selected work</p>
          <h2>
            Products I’ve <em>designed, built, and shipped</em>
          </h2>
        </header>
        <div className="featured">
          {featuredProjects.map((project, i) => (
            <article
              key={project.slug}
              className="feature reveal"
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="feature-media"
                tabIndex={-1}
                aria-hidden="true"
              >
                <ProjectMedia
                  project={project}
                  sizes="(max-width: 1000px) 100vw, 680px"
                />
              </Link>
              <div className="feature-body">
                <p className="feature-index">
                  {String(i + 1).padStart(2, "0")} <span>/</span>{" "}
                  {project.category}
                </p>
                <h3>
                  <Link href={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h3>
                <p className="feature-tagline">{project.tagline}</p>
                <p>{project.description}</p>
                <ul className="checks">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Technologies">
                  {project.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section container">
        <header className="section-head section-head-row">
          <div>
            <p className="kicker">02 — More projects</p>
            <h2>
              Apps, APIs, and <em>tools</em>
            </h2>
          </div>
          <p>
            Live products, open-source repositories, and private work
            described by what it does and how it’s built.
          </p>
        </header>
        <ProjectGrid projects={otherProjects} />
      </section>

      <section id="skills" className="section container">
        <header className="section-head">
          <p className="kicker">03 — Skills</p>
          <h2>
            Comfortable <em>across the stack</em>
          </h2>
        </header>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill reveal" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="chips">
                {s.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section container split">
        <header className="section-head">
          <p className="kicker">04 — Experience</p>
          <h2>
            Close to the <em>problem</em>
          </h2>
          <p>
            I like understanding how the whole product fits together — from the
            first interaction to the data behind it. I keep domain logic
            separate from UI, make integration limits explicit, and choose
            architecture around the product’s real requirements.
          </p>
        </header>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.role} className="reveal">
              <div>
                <h3>{e.role}</h3>
                <span>{e.place}</span>
              </div>
              <p>{e.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="contact container">
        <div className="contact-card">
          <p className="kicker">05 — Contact</p>
          <h2>
            Let’s build something <em>useful</em> together.
          </h2>
          <p>
            Open to Full-stack, React / Next.js, and Node.js roles. The fastest
            way to reach me is email or LinkedIn.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${contacts.email}`} className="btn btn-primary">
              Email me <span aria-hidden="true">↗</span>
            </a>
            <a
              href={contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
