import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-paper">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          That page has not arrived yet.
        </h1>
        <p className="mt-6 text-pretty text-lg text-muted">
          Head back for a first look at Jays Place.
        </p>
        <Link href="/" className="primary-button mt-8">
          Return home
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </main>
  );
}
