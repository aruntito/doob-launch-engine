"use client"

import { motion } from "framer-motion"

const roadmap = [
  {
    week: "Week 1",
    title: "Positioning & Audience Setup",
    tasks: [
      "Define launch positioning",
      "Optimize social profiles",
      "Create audience hooks",
    ],
  },
  {
    week: "Week 2",
    title: "Content Activation",
    tasks: [
      "Publish authority content",
      "Start short-form distribution",
      "Test engagement hooks",
    ],
  },
  {
    week: "Week 3",
    title: "Growth Acceleration",
    tasks: [
      "Collaborate with creators",
      "Push conversion CTA content",
      "Expand distribution channels",
    ],
  },
  {
    week: "Week 4",
    title: "Launch Conversion",
    tasks: [
      "Run final launch sequence",
      "Collect leads/users",
      "Optimize based on feedback",
    ],
  },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/60 mb-6"
        >
          Launch System Generated
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-6xl font-bold tracking-tight mb-6"
        >
          Your 30-Day AI Launch Roadmap
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-white/50 max-w-3xl mb-16"
        >
          Structured execution strategy generated for your launch goals,
          audience, and platform priorities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roadmap.map((section, index) => (
            <motion.div
              key={section.week}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.5,
              }}
              className="border border-white/10 rounded-[32px] p-8 bg-white/[0.02] hover:border-white/20 transition-all duration-300"
            >
              <p className="text-white/40 mb-4">
                {section.week}
              </p>

              <h2 className="text-4xl font-semibold mb-8">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.tasks.map((task) => (
                  <Task key={task} text={task} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

function Task({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 text-xl text-white/80">
      <div className="h-3 w-3 rounded-full bg-white" />
      {text}
    </div>
  )
}