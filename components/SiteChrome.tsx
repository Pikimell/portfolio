import Link from "next/link";
export const contacts = {
  email: "volodkaposhta@gmail.com",
  linkedin: "https://www.linkedin.com/in/pashchenko-v-r",
  github: "https://github.com/Pikimell",
  telegram: "https://t.me/pikimel",
};
export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Volodymyr Pashchenko, home">
          <span className="logo-mark">VP</span>
          <span className="logo-text">Volodymyr Pashchenko</span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#experience">Experience</Link>
        </nav>
        <Link href="/#contact" className="btn btn-primary btn-sm">
          Contact
        </Link>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Volodymyr Pashchenko</span>
      <div>
        <a href={contacts.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={contacts.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={contacts.telegram} target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a
          href="https://github.com/Pikimell/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Site source
        </a>
      </div>
    </footer>
  );
}
