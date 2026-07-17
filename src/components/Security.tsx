import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Check } from 'lucide-react';

export default function Security() {
  const safetyFeatures = [
    { name: "Secure API routing", desc: "Requests route through our low-latency edge proxy, removing direct key URLs." },
    { name: "Encrypted storage", desc: "API keys are fully encrypted at rest with AES-256 and stored in secure enclaves." },
    { name: "Access control", desc: "Enforce multi-factor authorization and token scopes for all developers." },
    { name: "Usage logs", desc: "Audit every prompt token, cost log, and HTTP status code in real-time." },
    { name: "Spending limits", desc: "Rigid spending rules protect your company cards from runaway model runs." },
    { name: "Instant revocation", desc: "Instantly lock or delete team access in one tap from your dashboard." },
    { name: "No shared secrets", desc: "Teammates never see, copy, or paste the primary company API secrets." },
    { name: "No leaked keys", desc: "Zero API keys in codebases, environment variables, or local developer configs." }
  ];

  return (
    <section className="py-24 md:py-36 bg-black relative" id="security">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-electric-glow blur-[140px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Shield + Wallet Vector SVG Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[340px] aspect-square rounded-[36px] border border-dark-border bg-dark-surface/30 flex items-center justify-center shadow-2xl overflow-hidden group">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/5 to-transparent pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-40 h-40 bg-electric/10 rounded-full blur-3xl group-hover:bg-electric/15 transition-colors" />

              {/* Secure Graphic */}
              <div className="relative flex items-center justify-center">
                <svg className="w-56 h-56 text-dark-muted" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer security shield */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M30 40 C 70 20, 130 20, 170 40 C 170 120, 100 175, 100 175 C 100 175, 30 120, 30 40 Z"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Shield glow fill */}
                  <path
                    d="M32 42 C 70 23, 130 23, 168 42 C 168 118, 100 172, 100 172 C 100 172, 32 118, 32 42 Z"
                    fill="url(#shield-grad)"
                    fillOpacity="0.05"
                  />
                  {/* Inside Wallet */}
                  <g transform="translate(68, 70)">
                    <rect x="0" y="10" width="64" height="44" rx="8" stroke="#10b981" strokeWidth="2" fill="#0f1115" />
                    <rect x="12" y="0" width="40" height="20" rx="4" stroke="#10b981" strokeWidth="2" strokeDasharray="2 2" />
                    <circle cx="48" cy="32" r="5" fill="#3b82f6" />
                    {/* Sparkle */}
                    <path d="M50 20l2 2-2 2-2-2z" fill="#10b981" />
                  </g>
                  <defs>
                    <linearGradient id="shield-grad" x1="100" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating lock key badges */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 p-2 rounded-xl glass-panel border border-dark-border text-electric"
                >
                  <Lock size={16} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 right-6 p-2 rounded-xl glass-panel border border-dark-border text-emerald"
                >
                  <ShieldCheck size={16} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right: Security list */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
              Fortified Proxy
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Your keys stay private.
            </h2>
            <p className="text-lg text-dark-muted mb-12 leading-relaxed">
              Tokenly acts as an intelligent intermediary. By generating ephemeral tokens for your developers, they can run AI queries normally while your actual upstream keys stay under lock and key.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {safetyFeatures.map((feat) => (
                <div key={feat.name} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald/10 border border-emerald/20 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 leading-tight">{feat.name}</h4>
                    <p className="text-xs text-dark-muted leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
