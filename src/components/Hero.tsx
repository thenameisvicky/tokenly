"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play, Wallet, Cpu } from 'lucide-react';

interface HeroProps {
  onJoinWaitlist: () => void;
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  // Animation variants for floating cards
  const floatVariants = (delay: number) => ({
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
        delay: delay,
      }
    }
  });

  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 bg-black overflow-hidden bg-dot-pattern" id="product">
      {/* Background radial gradient overlay for premium look */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-electric-glow blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute top-40 right-10 w-[300px] h-[300px] bg-emerald-glow blur-[100px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs text-dark-muted mb-6 hover:border-electric/30 hover:text-white transition-colors"
          >
            <Sparkles size={12} className="text-electric" />
            <span className="font-semibold text-white">Tokenly v1.0</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-ping" />
            <span>Share AI usage like sending money</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.08] text-gradient-blue"
          >
            Your team's AI credits,<br />
            in one smart wallet.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-dark-muted max-w-xl mb-10 leading-relaxed"
          >
            Tokenly helps small teams manage, share, and control AI credits without sharing API keys, company cards, or dealing with complicated billing platforms.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16"
          >
            <button
              onClick={onJoinWaitlist}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 active:scale-98 font-bold rounded-xl transition-all shadow-lg hover:shadow-electric/15"
              id="hero-join-waitlist-btn"
            >
              <span>Join Waitlist</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-dark-surface border border-dark-border text-white hover:border-dark-muted active:scale-98 font-bold rounded-xl transition-all"
            >
              <Play size={16} className="fill-white" />
              <span>See How It Works</span>
            </a>
          </motion.div>

          {/* Micro Stats / Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-dark-border/60 max-w-lg"
          >
            <div>
              <span className="block text-2xl font-bold text-white">0%</span>
              <span className="text-xs text-dark-muted">Shared Keys</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="text-xs text-dark-muted">Spending Control</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-emerald">&lt;10ms</span>
              <span className="text-xs text-dark-muted">Proxy Overhead</span>
            </div>
          </motion.div>
        </div>

        {/* Right Interactive Animation (Google Pay style SVG + HTML UI) */}
        <div className="lg:col-span-5 relative flex justify-center items-center py-10">
          {/* Main Simulated Phone Wallet Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-[340px] aspect-[9/18] rounded-[40px] bg-black border-[6px] border-dark-surface shadow-2xl overflow-hidden flex flex-col glass-panel"
          >
            {/* Top Speaker Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-surface rounded-b-2xl z-20 flex justify-center items-center">
              <div className="w-12 h-1 bg-black rounded-full" />
            </div>

            {/* Wallet App Header */}
            <div className="pt-8 px-5 pb-4 flex items-center justify-between border-b border-dark-border/40 bg-dark-surface/50">
              <div className="flex items-center gap-1.5">
                <Wallet size={14} className="text-electric" />
                <span className="text-xs font-bold tracking-tight">Tokenly Wallet</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald" />
            </div>

            {/* Wallet Balance Card */}
            <div className="p-5 flex flex-col gap-1.5 bg-gradient-to-br from-dark-surface to-black border-b border-dark-border/40 relative overflow-hidden">
              <span className="text-[10px] uppercase font-bold tracking-wider text-dark-muted">Shared Balance</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">$500</span>
                <span className="text-sm font-semibold text-dark-muted">.00</span>
              </div>
              <span className="text-[10px] text-emerald font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Active Budget
              </span>

              {/* Decorative credit card glow */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-electric/10 rounded-full blur-xl" />
            </div>

            {/* Interactive Flow Demonstration Screen */}
            <div className="flex-1 p-4 flex flex-col justify-between relative bg-black/40 overflow-hidden">
              {/* Send Animation elements */}
              <div className="flex flex-col gap-4 items-center justify-center my-auto w-full relative">
                {/* Sender node */}
                <div className="flex items-center justify-between w-full bg-dark-surface/60 border border-dark-border rounded-xl p-2.5 z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-electric/20 border border-electric/30 flex items-center justify-center text-[10px] font-bold text-white">
                      PM
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">Main Team Wallet</span>
                      <span className="text-[9px] text-dark-muted">Allocating credits</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white">-$25</span>
                </div>

                {/* Animated Send Path */}
                <div className="relative w-full h-12 flex justify-center items-center">
                  <svg className="absolute w-full h-full" fill="none">
                    <motion.path
                      d="M 148 0 L 148 48"
                      stroke="url(#electric-grad)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      animate={{ strokeDashoffset: [-20, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    <defs>
                      <linearGradient id="electric-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {/* Floating dollar coins */}
                  <motion.div
                    animate={{
                      y: [-12, 16],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-5 h-5 rounded-full bg-electric border border-electric-bright flex items-center justify-center text-[9px] font-bold text-white z-10 shadow-lg shadow-electric/50"
                  >
                    $
                  </motion.div>
                </div>

                {/* Receiver node */}
                <div className="flex items-center justify-between w-full bg-dark-surface/60 border border-emerald/20 rounded-xl p-2.5 z-10 shadow-lg shadow-emerald/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-emerald/20 border border-emerald/30 flex items-center justify-center text-[10px] font-bold text-white">
                      AL
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold">Alex (Developer)</span>
                      <span className="text-[9px] text-emerald">Received $25 limit</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald">+$25</span>
                </div>

                {/* Animated Model Connection */}
                <div className="relative w-full h-8 flex justify-center items-center">
                  <svg className="absolute w-full h-full" fill="none">
                    <motion.path
                      d="M 148 0 L 148 32"
                      stroke="#10b981"
                      strokeWidth="1.5"
                      animate={{ opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </svg>
                </div>

                {/* AI Model request tracking */}
                <div className="w-full bg-dark-surface/30 border border-dark-border rounded-xl p-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Cpu size={12} className="text-emerald animate-pulse" />
                    <span className="text-[9px] text-dark-muted">Claude 3.5 Sonnet request</span>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-light">-$0.42</span>
                </div>
              </div>
            </div>

            {/* Bottom mini card bar */}
            <div className="px-5 py-3 border-t border-dark-border/40 bg-dark-surface/50 flex justify-between items-center text-[10px] text-dark-muted">
              <span>Tokenly proxy v1.2</span>
              <span className="text-emerald font-bold">Online</span>
            </div>
          </motion.div>

          {/* Floating Pill Notifications */}
          <AnimatePresence>
            {/* Alex received $20 */}
            <motion.div
              variants={floatVariants(0.5)}
              animate="animate"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute top-10 -left-6 md:-left-12 py-2 px-3 rounded-xl glass-panel border border-dark-border flex items-center gap-2.5 shadow-xl pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald" />
              <span className="text-xs font-semibold text-white whitespace-nowrap">Alex received $20</span>
            </motion.div>

            {/* Claude usage: -$0.42 */}
            <motion.div
              variants={floatVariants(1.2)}
              animate="animate"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute top-36 -right-6 md:-right-12 py-2 px-3 rounded-xl glass-panel border border-dark-border flex items-center gap-2.5 shadow-xl pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-electric" />
              <span className="text-xs font-semibold text-white whitespace-nowrap">Claude usage: -$0.42</span>
            </motion.div>

            {/* Weekly limit reached */}
            <motion.div
              variants={floatVariants(1.8)}
              animate="animate"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-24 -left-8 md:-left-16 py-2 px-3 rounded-xl glass-panel border border-red-500/20 bg-red-950/20 flex items-center gap-2.5 shadow-xl pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <span className="text-xs font-semibold text-white whitespace-nowrap">Weekly limit reached</span>
            </motion.div>

            {/* Balance remaining: $342 */}
            <motion.div
              variants={floatVariants(2.4)}
              animate="animate"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-12 -right-8 md:-right-16 py-2 px-3 rounded-xl glass-panel border border-dark-border flex items-center gap-2.5 shadow-xl pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald" />
              <span className="text-xs font-semibold text-white whitespace-nowrap">Balance remaining: $342</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
