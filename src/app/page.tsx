"use client"

import { useRouter } from "next/navigation"

const launchTypes = [
  "SaaS",
  "Creator Brand",
  "Agency",
  "Music Project",
  "E-commerce",
  "Community",
]

const platforms = [
  "Instagram",
  "LinkedIn",
  "TikTok",
  "X / Twitter",
  "YouTube",
]

const goals = [
  "Get first users",
  "Increase engagement",
  "Launch a product",
  "Grow audience",
  "Build authority",
]

const timelines = [
  "7 Days",
  "30 Days",
  "90 Days",
]

export default function HomePage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 mb-8">
          AI Native Launch Infrastructure
        </div>

        <h1 className="max-w-6xl text-7xl font-bold tracking-tight leading-none mb-8">
          Launch products with an AI growth operating system.
        </h1>

        <p className="max-w-3xl text-xl text-white/50 mb-12">
          DOOB Launch Engine helps creators, founders, and brands
          generate launch strategies, execution systems, and growth
          roadmaps in minutes.
        </p>

        <button
          onClick={() => {
            document
              .getElementById("step-1")
              ?.scrollIntoView({ behavior: "smooth" })
          }}
          className="rounded-2xl bg-white text-black px-8 py-4 text-lg font-medium hover:scale-[1.02] transition-all duration-300"
        >
          Generate Launch Plan
        </button>
      </section>

      <Step
        id="step-1"
        step="Step 1 of 4"
        title="What are you launching?"
        options={launchTypes}
      />

      <Step
        id="step-2"
        step="Step 2 of 4"
        title="Which platform matters most?"
        options={platforms}
      />

      <Step
        id="step-3"
        step="Step 3 of 4"
        title="What is your primary goal?"
        options={goals}
      />

      <section
        id="step-4"
        className="min-h-screen flex items-center px-6"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
            <div className="h-full w-full bg-white rounded-full" />
          </div>

          <p className="text-white/40 text-sm mb-8">
            Step 4 of 4
          </p>

          <h2 className="text-6xl font-bold tracking-tight mb-16">
            What timeline are you targeting?
          </h2>

          <div className="space-y-6">
            {timelines.map((item) => (
              <button
                key={item}
                onClick={() => router.push("/processing")}
                className="w-full text-left border border-white/10 bg-white/[0.03] rounded-3xl px-8 py-8 text-2xl hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Step({
  id,
  step,
  title,
  options,
}: {
  id: string
  step: string
  title: string
  options: string[]
}) {
  return (
    <section id={id} className="min-h-screen flex items-center px-6">
      <div className="max-w-5xl mx-auto w-full">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
          <div className="h-full w-1/2 bg-white rounded-full" />
        </div>

        <p className="text-white/40 text-sm mb-8">
          {step}
        </p>

        <h2 className="text-6xl font-bold tracking-tight mb-16">
          {title}
        </h2>

        <div className="space-y-6">
          {options.map((item) => (
            <button
              key={item}
              className="w-full text-left border border-white/10 bg-white/[0.03] rounded-3xl px-8 py-8 text-2xl hover:border-white/30 hover:bg-white/[0.05] transition-all duration-300 cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}