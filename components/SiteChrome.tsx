import Link from "next/link";
export function Header() {
  return (
    <header className="site-header">
      <Link
        href="/"
        className="wordmark"
        aria-label="Volodymyr Pashchenko home"
      >
        vp<span>.</span>
        <small>
          Volodymyr
          <br />
          Pashchenko
        </small>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact" className="nav-contact">
          Let’s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Volodymyr Pashchenko</span>
      <span>Built with Next.js. Made with care.</span>
      <a
        href="https://github.com/Pikimell/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        Site source ↗
      </a>
    </footer>
  );
}
