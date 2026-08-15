import { SiteFooter, SiteHeader } from "./site-chrome";

export default function NotFound() {
  return (
    <>
      <SiteHeader active="home" />
      <main className="shell not-found">
        <p className="code-label">/* 404 */</p>
        <h1>Page not found.</h1>
        <p>The route does not exist, but the selected systems are still one step away.</p>
        <a className="primary-button" href="/work/">View Work <span aria-hidden="true">→</span></a>
      </main>
      <SiteFooter />
    </>
  );
}
