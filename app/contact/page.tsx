import type { Metadata } from "next";
import { SectionRule, SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = {
  title: "Contact — Meherwer Ali",
  description: "Contact Meherwer Ali by email, LinkedIn, Medium, or GitHub.",
};

const contacts = [
  { label: "Email", value: "meherwer.09@gmail.com", href: "mailto:meherwer.09@gmail.com", icon: "@" },
  { label: "LinkedIn", value: "linkedin.com/in/meherwer-ali", href: "https://www.linkedin.com/in/meherwer-ali", icon: "in" },
  { label: "Medium", value: "medium.com/@meherwer_ali", href: "https://medium.com/@meherwer_ali", icon: "M" },
  { label: "GitHub", value: "github.com/MeherwerAli", href: "https://github.com/MeherwerAli", icon: "gh" },
] as const;

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader active="contact" />
      <main id="main-content" className="page-main">
        <header className="shell page-intro contact-intro">
          <h1>Contact</h1>
          <p>
            Whether it&apos;s distributed systems architecture, an event-driven platform, or a reliable AI boundary, I&apos;m open to thoughtful engineering conversations.
          </p>
        </header>

        <section className="shell contact-layout" aria-label="Send a message or connect">
          <div>
            <SectionRule>Send a Message</SectionRule>
            <form className="contact-form" action="mailto:meherwer.09@gmail.com" method="post" encType="text/plain">
              <label htmlFor="name"><span>//</span> Name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" required />

              <label htmlFor="email"><span>//</span> Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@email.com" required />

              <label htmlFor="message"><span>//</span> Message</label>
              <textarea id="message" name="message" placeholder="Tell me about the system you are building..." required />

              <button className="primary-button" type="submit">Send Message <span aria-hidden="true">↗</span></button>
              <p className="form-note">This opens your email application. No message data is stored by this site.</p>
            </form>
          </div>

          <div>
            <SectionRule>Connect</SectionRule>
            <div className="contact-cards">
              {contacts.map((contact) => (
                <a
                  className="contact-card"
                  href={contact.href}
                  {...(contact.href.startsWith("https://") ? { target: "_blank", rel: "noreferrer" } : {})}
                  key={contact.label}
                >
                  <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
                  <span><strong>{contact.label}</strong><small>{contact.value}</small></span>
                  <i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
            <div className="availability-card">
              <p><span>/*</span> Availability <span>*/</span></p>
              <strong>Open to senior software engineering, tech lead, and architecture conversations.</strong>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
