import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found container">
      <p className="kicker">404 — A small detour</p>
      <h1>
        This page took <em>a different path.</em>
      </h1>
      <Link className="btn btn-primary" href="/">
        Back to portfolio
      </Link>
    </main>
  );
}
