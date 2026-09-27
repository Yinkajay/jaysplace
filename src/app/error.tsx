"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-paper">
      <div className="max-w-xl text-center">
        <p className="eyebrow">Connection interrupted</p>
        <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
          We could not load this page.
        </h1>
        <p className="mt-6 text-pretty text-lg text-muted">
          Try the request again. If it keeps failing, check the server output for the specific cause.
        </p>
        <button type="button" onClick={reset} className="primary-button mt-8">
          Try again
        </button>
      </div>
    </main>
  );
}
