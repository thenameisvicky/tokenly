"use client";

import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

export default function Providers() {

  return (
    <section className="py-24 md:py-36 bg-black relative overflow-hidden" id="providers">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-electric-glow blur-[150px] rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Infinite Integrations
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            One wallet.<br />Every AI model.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            No need to configure individual accounts, billing cards, and workspace organizations. Connect Tokenly once, and get unified access to every major LLM provider.
          </p>
        </div>

        {/* Connected Node Visual Map */}
        <div className="relative w-full max-w-3xl mx-auto aspect-[16/9] border border-dark-border rounded-3xl bg-dark-surface/10 flex items-center justify-center p-8 overflow-hidden">
          
          {/* Animated background grid lines */}
          <div className="absolute inset-0 bg-dot-pattern opacity-60" />

          {/* Connected SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" fill="none">
            {/* We will draw lines from the center (x=50%, y=50%) to 8 peripheral locations */}
            <g opacity="0.45">
              <motion.line x1="50%" y1="50%" x2="15%" y2="20%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="85%" y2="20%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="15%" y2="80%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="85%" y2="80%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
              <motion.line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
            </g>

            {/* Glowing active query pulses moving outward from center */}
            {[0, 1.5, 3].map((delay, index) => (
              <Fragment key={index}>
                <motion.circle
                  r="4"
                  fill="#10b981"
                  animate={{
                    cx: ["50%", "15%"],
                    cy: ["50%", "20%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
                />
                <motion.circle
                  r="4"
                  fill="#3b82f6"
                  animate={{
                    cx: ["50%", "85%"],
                    cy: ["50%", "80%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
                />
                <motion.circle
                  r="4"
                  fill="#8b5cf6"
                  animate={{
                    cx: ["50%", "50%"],
                    cy: ["50%", "15%"],
                    opacity: [0, 1, 1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
                />
              </Fragment>
            ))}
          </svg>

          {/* Central Hub Node */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-black border-2 border-electric flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)]">
            <Cpu size={24} className="text-electric animate-spin-slow mb-1" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Tokenly</span>
          </div>

          {/* Peripheral Provider Nodes */}
          {/* Node 1: Top Left */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[12%] left-[8%] md:left-[12%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-white">OpenAI</span>
          </motion.div>

          {/* Node 2: Top Center */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[8%] left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <span className="text-xs font-semibold text-white">Claude</span>
          </motion.div>

          {/* Node 3: Top Right */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[12%] right-[8%] md:right-[12%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-white">Gemini</span>
          </motion.div>

          {/* Node 4: Center Left */}
          <motion.div
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 left-[4%] md:left-[8%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="text-xs font-semibold text-white">Mistral</span>
          </motion.div>

          {/* Node 5: Center Right */}
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute top-1/2 -translate-y-1/2 right-[4%] md:right-[8%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="text-xs font-semibold text-white">DeepSeek</span>
          </motion.div>

          {/* Node 6: Bottom Left */}
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-[12%] left-[8%] md:left-[12%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="text-xs font-semibold text-white">Groq</span>
          </motion.div>

          {/* Node 7: Bottom Center */}
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-teal-500" />
            <span className="text-xs font-semibold text-white">OpenRouter</span>
          </motion.div>

          {/* Node 8: Bottom Right */}
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute bottom-[12%] right-[8%] md:right-[12%] z-10 px-3 py-1.5 rounded-xl glass-panel border border-dark-border flex items-center gap-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-pink-500" />
            <span className="text-xs font-semibold text-white">Together AI</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
