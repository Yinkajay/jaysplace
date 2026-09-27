import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-paper">
      <div className="max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          This room is not ready yet.
        </h1>
        <p className="mt-6 text-pretty text-lg text-muted">
          The page may have moved, or it might still be waiting for its first commit.
        </p>
        <Link href="/" className="primary-button mt-8">
          Return home
          <span aria-hidden="true">ΓåÆ</span>
        </Link>
      </div>
    </main>
  );
}
