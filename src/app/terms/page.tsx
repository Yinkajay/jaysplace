import Link from "next/link";

export const metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-paper">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="footer-link inline-flex">&larr; Back home</Link>
        <p className="eyebrow mt-16">Site terms</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">Terms</h1>
        <div className="mt-8 space-y-6 text-pretty text-lg text-muted">
          <p>This preview does not offer bookings, accounts, or purchases.</p>
          <p>Full service terms will be published before those features become available.</p>
          <p>Last updated September 27, 2026.</p>
        </div>
      </article>
    </main>
  );
}
