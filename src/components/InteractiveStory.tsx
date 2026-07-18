"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Users, Send, Code, ShieldCheck, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';

export default function InteractiveStory() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Team creates wallet",
      desc: "The team logs into Tokenly and opens a fresh shared wallet in 10 seconds. No card required to start.",
      icon: <Plus size={18} />,
      badge: "Step 1",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 rounded-3xl bg-electric/10 border-2 border-dashed border-electric/40 flex items-center justify-center text-electric mb-4"
          >
            <Plus size={36} className="animate-pulse" />
          </motion.div>
          <span className="text-lg font-bold text-white mb-1">Create Hackathon Wallet</span>
          <span className="text-xs text-dark-muted">Initial Balance: $0.00</span>
        </div>
      )
    },
    {
      title: "Founder adds $100",
      desc: "The founder deposits $100 via card or Google Pay. This serves as the budget ceiling for the hackathon project.",
      icon: <Plus size={18} />,
      badge: "Step 2",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="px-6 py-4 rounded-2xl bg-dark-surface border border-dark-border flex flex-col items-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1.5 bg-electric" />
            <span className="text-[10px] text-dark-muted uppercase font-bold tracking-wider mb-1">Deposit Confirmed</span>
            <span className="text-3xl font-extrabold text-white">$100.00</span>
            <span className="text-[10px] text-emerald font-semibold mt-2">Funded by Founder</span>
          </motion.div>
          {/* Confetti particles */}
          <div className="flex gap-1.5 mt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-electric animate-ping" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
          </div>
        </div>
      )
    },
    {
      title: "Invites 4 teammates",
      desc: "Founder sends a single magical invite link to Sarah, Alex, Rahul, and Dave via Discord/Slack.",
      icon: <Users size={18} />,
      badge: "Step 3",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6">
          <span className="text-xs text-dark-muted mb-4 uppercase tracking-wider font-semibold">Teammates Joining</span>
          <div className="flex -space-x-3 mb-4">
            {['S', 'A', 'R', 'D'].map((initial, i) => (
              <motion.div
                key={initial}
                initial={{ scale: 0, x: -10 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`w-10 h-10 rounded-full border-2 border-black flex items-center justify-center text-xs font-bold text-white ${
                  i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-pink-500' : i === 2 ? 'bg-yellow-500' : 'bg-emerald-500'
                }`}
              >
                {initial}
              </motion.div>
            ))}
          </div>
          <span className="text-xs text-emerald font-semibold bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-full">
            4 Invites Claimed
          </span>
        </div>
      )
    },
    {
      title: "Everyone gets AI credits",
      desc: "Founder sets a maximum limit of $25 per developer. Credits appear instantly in their local Tokenly profiles.",
      icon: <Send size={18} />,
      badge: "Step 4",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center w-full">
          <span className="text-xs text-dark-muted mb-4 uppercase tracking-wider font-semibold">Credit Allocation</span>
          <div className="grid grid-cols-2 gap-3 w-full max-w-[240px]">
            {['Sarah', 'Alex', 'Rahul', 'Dave'].map((name, i) => (
              <motion.div
                key={name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.08 }}
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border flex flex-col items-center"
              >
                <span className="text-[10px] text-dark-muted font-medium">{name}</span>
                <span className="text-sm font-bold text-white">$25.00</span>
              </motion.div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Everyone codes & consumes models",
      desc: "Developers code in Cursor, VS Code, or Python. All API requests route securely through the Tokenly gateway.",
      icon: <Code size={18} />,
      badge: "Step 5",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center w-full">
          {/* Animated gateway nodes */}
          <div className="flex justify-between items-center w-full max-w-[260px] relative">
            <div className="flex flex-col items-center gap-1.5 z-10">
              <span className="text-[10px] text-dark-muted">Devs Coding</span>
              <div className="w-10 h-10 rounded-full bg-electric/15 border border-electric/30 flex items-center justify-center text-white">
                <Code size={16} />
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-dark-border -translate-y-1/2 -z-0" />
            
            {/* Pulsing proxy node */}
            <div className="flex flex-col items-center gap-1.5 z-10">
              <span className="text-[10px] text-emerald">Tokenly Proxy</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-10 h-10 rounded-full bg-emerald/25 border border-emerald/40 flex items-center justify-center text-white"
              >
                <ShieldCheck size={16} />
              </motion.div>
            </div>
            
            <div className="flex flex-col items-center gap-1.5 z-10">
              <span className="text-[10px] text-dark-muted">AI Models</span>
              <div className="w-10 h-10 rounded-full bg-indigo-950 border border-indigo-900 flex items-center justify-center text-white text-[10px] font-bold">
                Claude
              </div>
            </div>
          </div>
          <span className="text-[10px] text-emerald mt-4 font-semibold">Secure routing with 0.1ms overhead</span>
        </div>
      )
    },
    {
      title: "Tokenly tracks usage & limits",
      desc: "Tokenly counts tokens and debits balances. When Sarah hits $25, she stops safely without card billing errors.",
      icon: <CheckCircle2 size={18} />,
      badge: "Step 6",
      visual: (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center w-full">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-[240px] bg-dark-surface border border-dark-border rounded-xl p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center text-[10px]">
              <span className="text-white font-semibold">Sarah's Budget</span>
              <span className="text-red-400 font-bold">Limit Reached</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-black rounded-full overflow-hidden border border-dark-border">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-full bg-red-400"
              />
            </div>
            <div className="flex justify-between items-center text-[9px] text-dark-muted">
              <span>Spent: $25.00</span>
              <span>Allocated: $25.00</span>
            </div>
          </motion.div>
          <span className="text-[10px] text-dark-muted mt-3">Team budget remaining: $75.00</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black relative" id="interactive-story">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-electric-glow blur-[140px] rounded-full pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Hackathon Playbook
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Imagine your next hackathon.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            See how Tokenly completely eliminates API key leaks and credit card management on hackathon day.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Navigation Steps */}
          <div className="lg:col-span-6 flex flex-col gap-3 justify-center">
            {steps.map((step, idx) => (
              <button
                key={step.title}
                onClick={() => setCurrentStep(idx)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                  currentStep === idx
                    ? 'bg-dark-surface border-electric/30 shadow-lg shadow-electric/5'
                    : 'bg-black border-dark-border/40 hover:bg-dark-surface/40 hover:border-dark-muted'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl border transition-colors ${
                    currentStep === idx
                      ? 'bg-electric/10 border-electric/30 text-electric'
                      : 'bg-dark-surface border-dark-border text-dark-muted'
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-electric uppercase tracking-wider">{step.badge}</span>
                    <span className="text-xs text-dark-muted">•</span>
                    <span className="text-[10px] text-dark-muted font-medium">Click to view</span>
                  </div>
                  <h3 className={`text-base font-bold transition-colors ${currentStep === idx ? 'text-white' : 'text-white/80'}`}>
                    {step.title}
                  </h3>
                  {currentStep === idx && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-dark-muted mt-2 leading-relaxed"
                    >
                      {step.desc}
                    </motion.p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visual Demonstration Mockup */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full max-w-[450px] aspect-[4/3] rounded-3xl border border-dark-border glass-panel relative overflow-hidden flex items-center justify-center p-6 shadow-2xl">
              {/* Card headers */}
              <div className="absolute top-4 left-6 right-6 flex justify-between items-center text-[10px] text-dark-muted">
                <span className="font-semibold tracking-tight text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                  Tokenly Simulator
                </span>
                <span>Active</span>
              </div>

              {/* Render current step's visual */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex items-center justify-center pt-8 pb-4"
                >
                  {steps[currentStep].visual}
                </motion.div>
              </AnimatePresence>

              {/* Bottom controls */}
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
                  className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-white disabled:opacity-40 disabled:hover:text-dark-muted transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex gap-1.5">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        currentStep === idx ? 'w-4 bg-electric' : 'bg-dark-border'
                      }`}
                    />
                  ))}
                </div>
                <button
                  disabled={currentStep === steps.length - 1}
                  onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="p-1.5 rounded-lg border border-dark-border text-dark-muted hover:text-white disabled:opacity-40 disabled:hover:text-dark-muted transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
