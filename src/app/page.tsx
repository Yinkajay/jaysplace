import Image from "next/image";
import Link from "next/link";
import { Reveal, TaglineReveal } from "@/components/reveal";

const themes = [
  {
    number: "01",
    title: "Move",
    description:
      "Make space for the kind of movement that leaves you feeling like yourself again.",
  },
  {
    number: "02",
    title: "Reset",
    description:
      "Take a breath, change the pace, and give your everyday a little more balance.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Find more reasons to spend good time with the people who make it count.",
  },
];

const questions = [
  {
    question: "What is Jays Place?",
    answer:
      "Jays Place is an upcoming wellness and recreational center. This page is a first look at the feeling behind it.",
  },
  {
    question: "Is Jays Place open yet?",
    answer:
      "Not yet. We are getting ready to share more as the place comes together.",
  },
  {
    question: "When is the opening?",
    answer:
      "An opening date has not been announced. We will add confirmed details here when they are ready.",
  },
  {
    question: "Where will it be?",
    answer:
      "Location details will be shared with the full launch information.",
  },
  {
    question: "What will be available there?",
    answer:
      "The full offering has not been announced yet. Expect more about wellness and recreation as plans are finalized.",
  },
  {
    question: "Can I book or join now?",
    answer:
      "Bookings and membership information are not available yet. Check back for updates.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <main id="main-content">
        <section id="top" className="hero-frame" aria-labelledby="hero-title">
          <Image
            src="/Exterior.webp"
            alt="Exterior view of the Jays Place building"
            fill
            priority
            sizes="100vw"
            className="hero-photo"
          />
          <div className="hero-tint" aria-hidden="true" />
          <p className="hero-giant" aria-hidden="true">
            JAYS PLACE
          </p>
          <Image
            src="/Exterior.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="hero-photo hero-foreground"
          />

          <header className="hero-header">
            <Link href="/" aria-current="page" className="brand-mark">
              <span className="brand-symbol" aria-hidden="true">J.</span>
              <span>Jays Place</span>
            </Link>

            <nav className="hero-nav" aria-label="Main navigation">
              <a href="#vision">The vision</a>
              <a href="#questions">Questions</a>
            </nav>

            <a href="#vision" className="header-link">
              Explore the vision
              <span aria-hidden="true">&#8599;</span>
            </a>
          </header>

          <div className="hero-index" aria-hidden="true">
            WELLNESS <span>/</span> RECREATION <span>/</span> CONNECTION
          </div>

          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">Coming soon</p>
              <h1 id="hero-title">
                A new place to feel more alive.
              </h1>
              <p className="hero-description">
                Wellness, recreation, and time together. Jays Place is coming
                soon.
              </p>
              <a href="#vision" className="primary-link">
                Explore the vision
                <span aria-hidden="true">&#8599;</span>
              </a>
            </div>
          </div>
        </section>

        <section id="vision" className="vision-section" aria-labelledby="vision-title">
          <div className="section-container">
            <Reveal className="vision-intro">
              <p className="eyebrow">A place for more</p>
              <h2 id="vision-title">
                Make room for what makes you feel good.
              </h2>
              <p>
                Jays Place is taking shape as a home for wellness, recreation,
                and the simple joy of showing up together.
              </p>
            </Reveal>

            <TaglineReveal text="More room to move. More space to breathe. More moments together." />

            <div className="theme-grid" aria-label="What Jays Place is about">
              {themes.map((theme, index) => (
                <Reveal key={theme.title} delay={index * 100}>
                  <article className="theme-card">
                    <span className="theme-number">{theme.number}</span>
                    <div>
                      <h3>{theme.title}</h3>
                      <p>{theme.description}</p>
                    </div>
                    <span className="theme-icon" aria-hidden="true">&#8599;</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="questions" className="questions-section" aria-labelledby="questions-title">
          <div className="section-container questions-grid">
            <Reveal className="questions-intro">
              <p className="eyebrow">Good things take shape</p>
              <h2 id="questions-title">Curious already?</h2>
              <p>
                We are at the beginning. Here is what we can share for now.
              </p>
            </Reveal>

            <Reveal className="questions-list" delay={100}>
              {questions.map(({ question, answer }) => (
                <details key={question} className="question-item">
                  <summary>
                    <span>{question}</span>
                    <span className="question-plus" aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <div>
            <p className="footer-brand">Jays Place<span>.</span></p>
            <p>Wellness and recreation, coming soon.</p>
          </div>
          <nav aria-label="Footer navigation">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#top">Back to top</a>
          </nav>
          <p className="footer-copyright">Jays Place</p>
        </div>
      </footer>
    </div>
  );
}
