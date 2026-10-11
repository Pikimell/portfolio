import type { Project } from "@/lib/projects";

/** Illustrations explain the product; they are not product screenshots. */
export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual visual-${project.color}`}
      aria-hidden="true"
    >
      <span className="visual-index">{project.eyebrow}</span>
      {project.color === "fluent" ? (
        <div className="lesson-scene">
          <span className="lesson-bubble">FluentPath</span>
          <div className="lesson-card">
            <small>YOUR PERSONAL LEARNING ROUTE</small>
            <strong>
              Your materials.
              <br />A clearer path.
            </strong>
            <div className="lesson-progress">
              <span />
            </div>
            <span className="lesson-answer">PDF · NOTES · PROGRESS</span>
          </div>
          <span className="lesson-symbol">↗</span>
        </div>
      ) : project.color === "book" ? (
        <div className="book-scene">
          <div className="book-cover">
            <span>
              BOOK
              <br />
              LEAP<span className="book-star">✳</span>
            </span>
            <small>
              A little more
              <br />
              reading. Every day.
            </small>
          </div>
          <div className="reading-slip">
            <span>READING SESSION</span>
            <strong>
              One more
              <br />
              chapter.
            </strong>
            <div className="reading-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>Your reading, in rhythm.</small>
          </div>
        </div>
      ) : project.color === "dilo" ? (
        <div className="document-scene">
          <div className="data-slip">
            <small>YOUR DATA</small>
            <b>Excel records</b>
            {["Name", "Position", "Document role"].map((label) => (
              <div key={label}>
                <span>{label}</span>
                <i />
              </div>
            ))}
          </div>
          <span className="flow-arrow">↗</span>
          <div className="document-slip">
            <span className="file-label">.DOCX</span>
            <b>A perfect fit.</b>
            <i />
            <i />
            <i />
            <div className="document-check">✓ Ready to export</div>
          </div>
        </div>
      ) : project.color === "wave" ? (
        <>
          <svg
            className="wave-art"
            viewBox="0 0 600 300"
            preserveAspectRatio="none"
          >
            <path d="M0 90 Q150 250 300 120T600 100V300H0Z" fill="#cad7fb" />
            <path d="M0 150 Q140 20 300 170T600 140V300H0Z" fill="#a6b9f4" />
            <path d="M0 200 Q140 100 310 220T600 200V300H0Z" fill="#768ede" />
            <path d="M0 255 Q130 145 310 260T600 230V300H0Z" fill="#4f64aa" />
          </svg>
          <div className="wave-label">
            In good flow.<small>CREATE · COMPOSE · EXPORT</small>
          </div>
        </>
      ) : project.color === "mockup" ? (
        <div className="mockup-scene">
          <div className="mockup-phone">
            <span className="phone-island" />
            <div className="phone-screen">
              <small>YOUR NEXT IDEA</small>
              <strong>
                Make it
                <br />
                stand out.
              </strong>
              <span>↗</span>
            </div>
          </div>
          <div className="mockup-orbit" />
          <span className="mockup-label">A new perspective.</span>
        </div>
      ) : project.color === "tatty" ? (
        <div className="lesson-scene">
          <span className="lesson-bubble">Hello, world.</span>
          <div className="lesson-card">
            <small>STARTER · LESSON 01</small>
            <strong>
              Small steps.
              <br />
              Real progress.
            </strong>
            <div className="lesson-progress">
              <span />
            </div>
            <span className="lesson-answer">✓ My name is Anna.</span>
          </div>
          <span className="lesson-symbol">Aa</span>
        </div>
      ) : (
        <div className="console-scene">
          <div className="console-bar">
            <i />
            <i />
            <i />
            <span>
              {project.color === "play"
                ? "Release workspace"
                : "Localization workspace"}
            </span>
          </div>
          <div className="console-content">
            <small>
              {project.color === "play" ? "GOOGLE PLAY" : "APP STORE CONNECT"}
            </small>
            <strong>
              {project.color === "play"
                ? "Ready for what’s next."
                : "One app. Many languages."}
            </strong>
            <div className="console-rows">
              {(project.color === "play"
                ? ["Release tracks", "Store listing", "Localization"]
                : ["English", "Українська", "Deutsch"]
              ).map((label, index) => (
                <div key={label}>
                  <span>{label}</span>
                  <span>{index === 2 ? "→" : "✓"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <span className="illustration-label">CONCEPT ILLUSTRATION</span>
    </div>
  );
}
