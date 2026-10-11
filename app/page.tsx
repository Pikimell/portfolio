import Link from "next/link";
import { ProjectGrid } from "@/components/ProjectGrid";
export default function Home() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-content">
          <div className="availability">
            <span />
            Open to new opportunities
          </div>
          <p className="eyebrow hero-eyebrow">
            FULL-STACK DEVELOPER · DNIPRO, UKRAINE
          </p>
          <h1>
            Thoughtful interfaces.
            <br />
            <span>Connected systems.</span>
          </h1>
          <p className="hero-description">
            I’m Volodymyr. I turn ideas into web applications, backend services,
            and tools that make everyday work a little easier.
          </p>
          <div className="hero-actions">
            <Link href="#work" className="button button-dark">
              Explore my work <span aria-hidden="true">↘</span>
            </Link>
            <a
              href="https://www.linkedin.com/in/pashchenko-v-r"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Find me on LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-grid" />
          <span className="art-caption">IDEA → INTERFACE → SYSTEM</span>
          <div className="system-orbit orbit-one" />
          <div className="system-orbit orbit-two" />
          <div className="system-node node-ui">
            <small>01 / INTERFACE</small>
            <strong>React + Next.js</strong>
            <span>Designed for people.</span>
          </div>
          <div className="system-node node-api">
            <small>02 / BACKEND</small>
            <strong>Node.js + AWS</strong>
            <span>Built to connect.</span>
          </div>
          <div className="art-spark">✳</div>
          <span className="art-bottom">
            FROM FIRST IDEA TO THE DETAILS THAT MATTER.
          </span>
        </div>
      </section>
      <div className="stack-strip">
        <span>MY EVERYDAY TOOLKIT</span>
        <p>
          TypeScript <b>·</b> React <b>·</b> Next.js <b>·</b> Node.js <b>·</b>{" "}
          Express <b>·</b> AWS
        </p>
      </div>
      <section id="work" className="work-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Ideas, made tangible<span>.</span>
            </h2>
          </div>
          <p>
            A selection of products and tools.
            <br />
            Different problems. Practical solutions.
          </p>
        </div>
        <ProjectGrid />
      </section>
      <section id="about" className="about-section">
        <div>
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2>
            Across the stack.
            <br />
            Close to the problem.
          </h2>
          <p className="about-lead">
            I like understanding how the whole product fits together — from the
            first interaction to the data behind it.
          </p>
        </div>
        <div className="about-copy">
          <p>
            I’m an independent developer working directly with clients on
            requirements, implementation, and integrations. My work spans React
            and Next.js interfaces, Node.js services, MongoDB data models, and
            AWS deployments.
          </p>
          <p>
            I’ve also worked in full-stack development at KeyUA and teach and
            mentor at GoIT. Explaining a technical decision clearly is part of
            building it well.
          </p>
          <div className="practice-list">
            <div>
              <span>01</span>
              <p>
                <strong>Understand the workflow</strong>Start with the task
                people actually need to complete.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Connect the pieces</strong>Keep interfaces, APIs, and
                domain logic working together.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Make the details count</strong>Document constraints and
                choose architecture deliberately.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">03 / NEXT CHAPTER</p>
          <h2>
            Let’s build
            <br />
            something useful<span>↗</span>
          </h2>
          <p>
            Open to Full-stack, React / Next.js frontend,
            <br />
            and Node.js backend roles.
          </p>
        </div>
        <div className="contact-links">
          <a className="email-link" href="mailto:volodkaposhta@gmail.com">
            Say hello by email <span>↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pashchenko-v-r"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span>↗</span>
          </a>
          <a
            href="https://github.com/Pikimell"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span>↗</span>
          </a>
          <a href="https://t.me/pikimel" target="_blank" rel="noreferrer">
            Telegram <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
