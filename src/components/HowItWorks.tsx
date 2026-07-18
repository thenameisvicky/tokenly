"use client";

import { motion } from 'framer-motion';
import { Wallet, UserPlus, Coins, Cpu } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create Wallet",
      desc: "Create one shared AI budget. Deposit initial credits safely and set up your core billing system.",
      icon: <Wallet className="text-electric" size={24} />,
      svg: (
        <svg className="w-full h-32 text-dark-muted" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wallet Base Outline */}
          <rect x="30" y="20" width="140" height="80" rx="16" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
          {/* Main Card Front */}
          <motion.rect
            initial={{ y: 5 }}
            animate={{ y: [5, -2, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            x="40" y="30" width="120" height="70" rx="12" fill="#0f1115" stroke="#3b82f6" strokeWidth="2"
          />
          {/* Chip */}
          <rect x="55" y="45" width="20" height="15" rx="3" fill="#1f242e" />
          <circle cx="130" cy="52" r="8" fill="#3b82f6" fillOpacity="0.2" />
          <circle cx="140" cy="52" r="8" fill="#10b981" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Invite Team",
      desc: "Generate secure invite links or send direct email invitations. Teammates join in one click.",
      icon: <UserPlus className="text-electric" size={24} />,
      svg: (
        <svg className="w-full h-32 text-dark-muted" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Link Connection Line */}
          <line x1="40" y1="60" x2="160" y2="60" stroke="#1f242e" strokeWidth="2" strokeDasharray="4 4" />
          {/* Invite Code Center Icon */}
          <rect x="80" y="45" width="40" height="30" rx="8" fill="#0f1115" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M92 60h16M100 52v16" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
          {/* Joining Teammates */}
          <motion.circle
            animate={{ scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            cx="40" cy="60" r="14" fill="#0f1115" stroke="currentColor" strokeWidth="1.5"
          />
          <motion.circle
            animate={{ scale: [1.1, 0.9, 1.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            cx="160" cy="60" r="14" fill="#0f1115" stroke="currentColor" strokeWidth="1.5"
          />
          <text x="36" y="64" fill="currentColor" fontSize="10" fontWeight="bold">T1</text>
          <text x="156" y="64" fill="currentColor" fontSize="10" fontWeight="bold">T2</text>
        </svg>
      )
    },
    {
      step: "03",
      title: "Give Credits",
      desc: "Allocate fixed or flexible allowances ($5, $20, $50) instantly. Pause or adjust anytime.",
      icon: <Coins className="text-electric" size={24} />,
      svg: (
        <svg className="w-full h-32 text-dark-muted" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Send credit path */}
          <path d="M40 70 C 80 20, 120 20, 160 70" stroke="#1f242e" strokeWidth="2" />
          <motion.path
            d="M40 70 C 80 20, 120 20, 160 70"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="10 120"
            animate={{ strokeDashoffset: [-130, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          {/* Start node */}
          <circle cx="40" cy="70" r="12" fill="#0f1115" stroke="currentColor" strokeWidth="1.5" />
          <text x="35" y="74" fill="currentColor" fontSize="10" fontWeight="bold">$</text>
          {/* End node */}
          <circle cx="160" cy="70" r="12" fill="#0f1115" stroke="#10b981" strokeWidth="1.5" />
          <text x="151" y="74" fill="#10b981" fontSize="9" fontWeight="bold">+$20</text>
        </svg>
      )
    },
    {
      step: "04",
      title: "Build With AI",
      desc: "Use AI normally in your stack. Tokenly automatically handles API key masking and cost logging.",
      icon: <Cpu className="text-electric" size={24} />,
      svg: (
        <svg className="w-full h-32 text-dark-muted" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Connected Gateway nodes */}
          <rect x="70" y="40" width="60" height="40" rx="8" fill="#0f1115" stroke="#3b82f6" strokeWidth="1.5" />
          <text x="82" y="64" fill="#3b82f6" fontSize="10" fontWeight="bold">Proxy API</text>
          {/* Left Model */}
          <circle cx="35" cy="60" r="10" fill="#0a0a0a" stroke="currentColor" strokeWidth="1" />
          <line x1="45" y1="60" x2="70" y2="60" stroke="#1f242e" strokeWidth="1.5" />
          {/* Right Model */}
          <circle cx="165" cy="60" r="10" fill="#0a0a0a" stroke="currentColor" strokeWidth="1" />
          <line x1="130" y1="60" x2="155" y2="60" stroke="#1f242e" strokeWidth="1.5" />
          {/* Glowing pulse indicator */}
          <motion.circle
            animate={{ r: [0, 8], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            cx="100" cy="60" r="8" fill="#10b981"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black border-t border-dark-border/40" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Simplifying Access
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            How Tokenly Works
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            Four simple steps to absolute control over your team's AI budgets and API security.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col rounded-3xl bg-dark-surface/30 border border-dark-border p-6 hover:border-electric/25 hover:bg-dark-surface/60 transition-all duration-300 relative group"
            >
              {/* Step number badge */}
              <span className="absolute top-4 right-6 text-3xl font-black text-dark-border/60 group-hover:text-electric/20 transition-colors select-none">
                {step.step}
              </span>

              {/* Graphic container */}
              <div className="mb-6 rounded-2xl bg-black/40 border border-dark-border/50 p-2 overflow-hidden flex items-center justify-center">
                {step.svg}
              </div>

              {/* Text */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-lg bg-electric/10 border border-electric/20 text-electric">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
              </div>
              
              <p className="text-xs text-dark-muted leading-relaxed flex-1">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
