export default function Loading() {
  return (
    <main
      className="min-h-screen bg-ink px-4 py-24 text-paper"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="mx-auto max-w-6xl animate-pulse">
        <div className="h-8 w-32 rounded-full bg-white/10" />
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <div className="h-12 max-w-xl rounded-xl bg-white/10 sm:h-16" />
            <div className="mt-4 h-12 max-w-md rounded-xl bg-white/10" />
            <div className="mt-8 h-6 max-w-lg rounded-lg bg-white/5" />
            <div className="mt-3 h-6 max-w-sm rounded-lg bg-white/5" />
            <div className="mt-8 h-10 w-48 rounded-full bg-signal/20" />
          </div>
          <div className="h-96 rounded-3xl bg-white/5" />
        </div>
      </div>
    </main>
  );
}
