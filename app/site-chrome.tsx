type ActivePage = "home" | "work" | "about" | "contact";

const navItems: readonly { label: string; href: string; page: ActivePage }[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "Work", href: "/work/", page: "work" },
  { label: "About", href: "/about/", page: "about" },
  { label: "Contact", href: "/contact/", page: "contact" },
];

export function SiteHeader({ active }: { active: ActivePage }) {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="mark" href="/" aria-label="Meherwer Ali, home">
          &lt;meherwer <span>/&gt;</span>
        </a>
        <nav aria-label="Primary navigation" className="nav-links">
          {navItems.map((item) => (
            <a
              className={active === item.page ? "active" : undefined}
              href={item.href}
              aria-current={active === item.page ? "page" : undefined}
              key={item.page}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function MediumIcon() {
  return (
    <img
      className="medium-brand-icon"
      src="/medium-icon-white.svg"
      alt=""
      width="22"
      height="22"
      aria-hidden="true"
    />
  );
}

function FooterIcon({ name }: { name: "github" | "linkedin" | "medium" | "email" }) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 5.5h18v13H3z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 9v10M5 5.5v.1M10 19v-6c0-2 1.2-3.5 3.4-3.5 2.1 0 3.6 1.3 3.6 4V19M10 10v9" />
      </svg>
    );
  }
  if (name === "medium") {
    return <MediumIcon />;
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 19c-4 1.2-4-2-5-2.5M13.5 21v-3.1c0-1 .1-1.5-.5-2 2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.4c.1-.3.6-1.6-.1-3.3 0 0-1.1-.3-3.5 1.3a12 12 0 0 0-6.3 0C5.2 2.7 4.1 3 4.1 3c-.7 1.7-.2 3-.1 3.3a4.8 4.8 0 0 0-1.3 3.4c0 4.8 3 5.9 5.8 6.2-.5.5-.6 1.3-.6 2V21" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p><span>//</span> © 2026 Meherwer Ali</p>
        <a className="footer-center" href="/work/">Selected systems</a>
        <div className="footer-icons" aria-label="Contact links">
          <a href="https://github.com/MeherwerAli" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FooterIcon name="github" />
          </a>
          <a href="https://www.linkedin.com/in/meherwer-ali" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FooterIcon name="linkedin" />
          </a>
          <a href="https://medium.com/@meherwer_ali" target="_blank" rel="noreferrer" aria-label="Medium">
            <FooterIcon name="medium" />
          </a>
          <a href="mailto:meherwer.09@gmail.com" aria-label="Email">
            <FooterIcon name="email" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export function SectionRule({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-rule" aria-hidden="true">
      <span>//</span>
      <strong>{children}</strong>
      <i />
    </div>
  );
}
