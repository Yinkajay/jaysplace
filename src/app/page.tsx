import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Reveal, TaglineReveal } from "@/components/reveal";

const benefits = [
  {
    number: "01",
    title: "Move from idea to interface quickly",
    copy: "A focused App Router structure keeps your first feature close and your next refactor straightforward.",
  },
  {
    number: "02",
    title: "Keep the defaults you can trust",
    copy: "TypeScript, ESLint, Tailwind, and optimized fonts arrive configured and ready for real work.",
  },
  {
    number: "03",
    title: "Build for every screen from day one",
    copy: "Responsive layouts, visible focus states, and reduced motion support are part of the foundation.",
  },
];

const steps = [
  {
    title: "Shape the experience",
    copy: "Start in page.tsx and turn this clear visual system into the product your audience needs.",
  },
  {
    title: "Connect real data",
    copy: "Add server components, route handlers, or your preferred data layer without restructuring the app.",
  },
  {
    title: "Ship with confidence",
    copy: "Run the built in checks, create a production build, and deploy wherever Node can run.",
  },
];

const questions = [
  {
    question: "Where should I start editing?",
    answer:
      "Open src/app/page.tsx for this screen. Shared styles live in src/app/globals.css, while small interactive pieces live in src/components.",
  },
  {
    question: "How is styling configured?",
    answer:
      "Tailwind CSS is loaded through PostCSS, with the design tokens and global behavior defined in globals.css.",
  },
  {
    question: "How do I add another page?",
    answer:
      "Create a folder inside src/app and add a page.tsx file. The folder name becomes the route automatically.",
  },
  {
    question: "Where does search metadata live?",
    answer:
      "Global title, description, and social metadata live in src/app/layout.tsx. A route can export its own metadata when it needs a unique result.",
  },
  {
    question: "Which checks should I run before a release?",
    answer:
      "Run npm run lint, then npm run build. The first checks the source and the second verifies the production output.",
  },
  {
    question: "Can I deploy somewhere other than Vercel?",
    answer:
      "Yes. This is a standard Next.js application and can run on any compatible Node hosting platform.",
  },
];

const stack = ["Next 16", "React 19", "TypeScript", "Tailwind 4"];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-paper px-3 py-2 text-sm font-semibold text-ink transition-all duration-700 ease-fluid focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-signal focus:ring-offset-2 focus:ring-offset-ink"
      >
        Skip to content
      </a>

      <header className="relative z-50 px-4">
        <nav
          aria-label="Primary navigation"
          className="mx-auto mt-6 flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-panel/80 px-4 py-2 backdrop-blur-xl"
        >
          <Link
            href="/"
            aria-current="page"
            className="group flex items-center gap-2 rounded-full pr-3 text-sm font-semibold outline-none transition-all duration-700 ease-fluid hover:text-white focus-visible:ring-2 focus-visible:ring-signal active:scale-[0.98]"
          >
            <span className="grid size-8 place-items-center rounded-full bg-signal text-xs font-bold text-ink transition-all duration-700 ease-fluid group-hover:rotate-6">
              J
            </span>
            Jaysplace
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <a className="nav-link" href="#foundation">
              Foundation
            </a>
            <a className="nav-link" href="#steps">
              Steps
            </a>
            <a className="nav-link" href="#questions">
              Questions
            </a>
          </div>

          <a
            href="#foundation"
            className="hidden rounded-full bg-paper px-3 py-2 text-sm font-semibold text-ink outline-none transition-all duration-700 ease-fluid hover:scale-[1.02] hover:bg-white focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-panel active:scale-[0.98] md:inline-flex"
          >
            Explore the foundation
          </a>

          <MobileNav />
        </nav>
      </header>

      <main id="main-content">
        <section className="relative px-4 pb-20 pt-24 sm:pb-24 sm:pt-24">
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="reveal-on-load">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel px-3 py-2 text-sm text-muted">
                <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
                Your workspace is ready
              </p>
              <h1 className="hero-heading max-w-[680px] text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Your next idea has a proper place
                <span className="block">to start.</span>
              </h1>
              <p className="mt-6 max-w-[680px] text-pretty text-lg text-muted sm:text-xl">
                A considered Next.js foundation for turning the first sketch into a fast, accessible product without fighting the setup.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#foundation" className="primary-button">
                  Explore the foundation
                  <span aria-hidden="true">ΓåÆ</span>
                </a>
                <span className="text-sm text-muted">
                  No extra configuration required
                </span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-3" aria-label="Configured technologies">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <Reveal className="relative lg:pl-8" delay={120}>
              <div className="workspace-card rounded-3xl border border-white/10 bg-panel p-2 shadow-2xl shadow-black/30">
                <div className="overflow-hidden rounded-2xl bg-soft">
                  <div className="flex items-center justify-between border border-transparent px-4 py-3">
                    <div className="flex items-center gap-2" aria-hidden="true">
                      <span className="size-2 rounded-full bg-[#f06d5f]" />
                      <span className="size-2 rounded-full bg-[#e6b44a]" />
                      <span className="size-2 rounded-full bg-[#63b66f]" />
                    </div>
                    <span className="text-xs text-muted">jaysplace</span>
                    <span className="size-6" aria-hidden="true" />
                  </div>
                  <div className="grid min-h-[400px] grid-cols-[112px_1fr] border border-white/10 bg-ink sm:grid-cols-[144px_1fr]">
                    <aside className="border border-transparent bg-panel p-3" aria-label="Project structure preview">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">Explorer</p>
                      <ul className="space-y-3 font-mono text-xs text-muted">
                        <li className="text-paper">Γû╛ src</li>
                        <li className="pl-3 text-paper">Γû╛ app</li>
                        <li className="pl-6">layout.tsx</li>
                        <li className="rounded-md bg-white/5 py-1 pl-6 text-paper">page.tsx</li>
                        <li className="pl-6">globals.css</li>
                        <li className="pl-3 text-paper">Γû╛ components</li>
                        <li className="pl-6">reveal.tsx</li>
                      </ul>
                    </aside>
                    <div className="overflow-hidden px-4 py-6 font-mono text-xs leading-6 text-muted sm:px-6">
                      <p><span className="text-[#d4a6ff]">export default</span> <span className="text-[#f5d68a]">function</span> Page() &#123;</p>
                      <p className="pl-4"><span className="text-[#d4a6ff]">return</span> (</p>
                      <p className="pl-8 text-[#8dc9ff]">&lt;main&gt;</p>
                      <p className="pl-12 text-paper">Your idea belongs here.</p>
                      <p className="pl-8 text-[#8dc9ff]">&lt;/main&gt;</p>
                      <p className="pl-4">)</p>
                      <p>&#125;</p>
                      <div className="mt-16 rounded-xl border border-white/10 bg-panel p-4 font-sans">
                        <div className="mb-3 flex items-center justify-between">
                          <span className="text-xs font-semibold text-paper">Build status</span>
                          <span className="rounded-full bg-signal/15 px-2 py-1 text-xs font-semibold text-signal">Ready</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/5">
                          <div className="h-full w-full rounded-full bg-signal" />
                        </div>
                        <p className="mt-3 text-pretty text-xs text-muted">Routes generated and types checked.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 rounded-2xl border border-white/10 bg-panel px-4 py-3 shadow-xl shadow-black/20 sm:left-0">
                <p className="text-xs text-muted">Production checks</p>
                <p className="mt-1 text-sm font-semibold text-paper">Configured and ready</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="foundation" className="scroll-mt-24 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="max-w-2xl">
              <p className="eyebrow">A useful foundation</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Spend your time on the idea, not the opening chores.
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted">
                The common decisions are already made, but the structure stays light enough to become yours.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 100}>
                  <article className="group flex h-full min-h-64 flex-col rounded-2xl border border-white/10 bg-panel p-6 transition-all duration-700 ease-fluid hover:-translate-y-2 hover:bg-soft">
                    <span className="font-mono text-xs text-signal">{benefit.number}</span>
                    <h3 className="mt-auto text-balance text-2xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-pretty text-base text-muted">
                      {benefit.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <TaglineReveal text="A clear foundation turns the blank page into a place where good work can begin." />

        <section id="steps" className="scroll-mt-24 px-4 py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="eyebrow">From here to shipped</p>
                <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Three deliberate steps.
                </h2>
              </div>
              <ol className="space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="grid gap-4 rounded-2xl border border-white/10 bg-panel p-6 sm:grid-cols-[48px_1fr]">
                    <span className="grid size-12 place-items-center rounded-full bg-signal text-sm font-bold text-ink">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="mt-2 text-pretty text-base text-muted">{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section id="questions" className="scroll-mt-24 px-4 py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow">Good to know</p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                Answers for the first few moves.
              </h2>
              <p className="mt-6 max-w-md text-pretty text-lg text-muted">
                Everything here is intentionally conventional, so the project stays easy to understand.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-3">
                {questions.map((item) => (
                  <details key={item.question} className="faq-item group rounded-2xl border border-white/10 bg-panel">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-base font-semibold outline-none transition-all duration-700 ease-fluid hover:bg-soft focus-visible:ring-2 focus-visible:ring-signal active:scale-[0.99]">
                      <span>{item.question}</span>
                      <span className="faq-plus text-2xl font-normal text-signal" aria-hidden="true">+</span>
                    </summary>
                    <p className="px-6 pb-6 text-pretty text-base text-muted">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-4 py-24">
          <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-paper p-8 text-ink sm:p-12 lg:p-16">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold text-rust">The setup is done</p>
                <h2 className="mt-4 max-w-[680px] text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Make the next commit about your product.
                </h2>
                <p className="mt-6 max-w-2xl text-pretty text-lg text-ink/65">
                  Replace the starter copy, connect the first real feature, and keep moving.
                </p>
              </div>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-3 py-2 text-base font-semibold text-paper outline-none transition-all duration-700 ease-fluid hover:scale-[1.02] hover:bg-panel focus-visible:ring-2 focus-visible:ring-rust focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-[0.98]"
              >
                Read the Next.js docs
                <span aria-hidden="true">Γåù</span>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="px-4 pb-8 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 border border-white/10 bg-panel p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Jaysplace</p>
            <p className="mt-1 text-sm text-muted">A thoughtful place to begin.</p>
          </div>
          <nav aria-label="Legal navigation" className="flex flex-wrap gap-4 text-sm text-muted">
            <Link className="footer-link" href="/privacy">Privacy</Link>
            <Link className="footer-link" href="/terms">Terms</Link>
            <a className="footer-link" href="https://nextjs.org/docs" target="_blank" rel="noreferrer">Documentation</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
