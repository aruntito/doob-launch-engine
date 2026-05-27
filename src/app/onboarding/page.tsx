"use client";

import { useState } from "react";

const steps = [
  {
    title: "What are you launching?",
    options: [
      "SaaS",
      "Creator Brand",
      "Agency",
      "Music Project",
      "E-commerce",
      "Community",
    ],
  },
  {
    title: "Which platform matters most?",
    options: [
      "Instagram",
      "LinkedIn",
      "TikTok",
      "X / Twitter",
      "YouTube",
    ],
  },
  {
    title: "What is your primary goal?",
    options: [
      "Get first users",
      "Increase engagement",
      "Launch a product",
      "Grow audience",
      "Build authority",
    ],
  },
  {
    title: "What timeline are you targeting?",
    options: [
      "7 Days",
      "30 Days",
      "90 Days",
    ],
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6">

        <div className="mb-10">
          <div className="mb-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white transition-all"
              style={{
                width: `${((currentStep + 1) / steps.length) * 100}%`,
              }}
            />
          </div>

          <p className="text-sm text-white/40">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        <h1 className="mb-10 text-4xl font-semibold tracking-tight sm:text-5xl">
          {step.title}
        </h1>

        <div className="grid gap-4">
          {step.options.map((option) => (
            <button
              key={option}
              onClick={() => {
                if (currentStep < steps.length - 1) {
                  setCurrentStep(currentStep + 1);
                }
              }}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-left text-lg transition hover:border-white/20 hover:bg-white/10"
            >
              {option}
            </button>
          ))}
        </div>

      </div>
    </main>
  );
}
