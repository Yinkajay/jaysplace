import Link from "next/link";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-paper">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="footer-link inline-flex">ΓåÉ Back home</Link>
        <p className="eyebrow mt-16">Starter terms</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">Terms</h1>
        <div className="mt-8 space-y-6 text-pretty text-lg text-muted">
          <p>This page is a project placeholder, not a legal agreement for a live service.</p>
          <p>Replace it with terms that accurately describe your product, its acceptable use, and the laws that govern it before launch.</p>
          <p>Last reviewed September 27, 2026.</p>
        </div>
      </article>
    </main>
  );
}
