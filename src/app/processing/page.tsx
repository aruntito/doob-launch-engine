"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

const steps = [
  "Analyzing audience vectors",
  "Mapping content pillars",
  "Generating launch sequence",
  "Structuring execution roadmap",
  "Optimizing growth strategy",
]

export default function ProcessingPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 4000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-6">
          <div className="h-full w-full bg-white rounded-full animate-pulse" />
        </div>

        <p className="text-white/40 text-sm mb-8">
          AI Launch Engine Processing
        </p>

        <h1 className="text-6xl font-bold tracking-tight mb-16">
          Building your launch system
        </h1>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step}
              className="border border-white/10 bg-white/[0.03] rounded-3xl px-8 py-8 text-2xl hover:border-white/20 transition-all duration-300"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}