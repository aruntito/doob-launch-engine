export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">

        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60 backdrop-blur">
          AI Native Launch Infrastructure
        </div>

        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-7xl">
          Launch products with an AI growth operating system.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-white/60">
          DOOB Launch Engine helps creators, founders, and brands generate launch strategies, execution systems, and growth roadmaps in minutes.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90">
            Generate Launch Plan
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
            View Demo
          </button>
        </div>

      </div>
    </main>
  );
}