import Link from "next/link";

export const metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink px-4 py-24 text-paper">
      <article className="mx-auto max-w-2xl">
        <Link href="/" className="footer-link inline-flex">ΓåÉ Back home</Link>
        <p className="eyebrow mt-16">Starter privacy notice</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight">Privacy</h1>
        <div className="mt-8 space-y-6 text-pretty text-lg text-muted">
          <p>This starter does not collect, store, or share personal information.</p>
          <p>Replace this notice before launch if you add analytics, accounts, forms, payments, or any service that processes visitor data.</p>
          <p>Last reviewed September 27, 2026.</p>
        </div>
      </article>
    </main>
  );
}
