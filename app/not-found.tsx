import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <p className="eyebrow">404 / A SMALL DETOUR</p>
      <h1>
        This page took
        <br />a different path.
      </h1>
      <p>Let’s get back to the work.</p>
      <Link className="button button-dark" href="/">
        Back to portfolio ↗
      </Link>
    </main>
  );
}
