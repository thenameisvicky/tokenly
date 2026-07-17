import { Sparkles, ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onJoinWaitlist: () => void;
}

export default function FinalCTA({ onJoinWaitlist }: FinalCTAProps) {
  return (
    <section className="py-24 md:py-36 bg-black relative overflow-hidden" id="final-cta">
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-electric-glow blur-[150px] rounded-full pointer-events-none opacity-40 animate-pulse-slow" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emerald-glow blur-[100px] rounded-full pointer-events-none opacity-20" />

      {/* Floating credits background decoration */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="p-8 md:p-16 rounded-[40px] border border-dark-border bg-dark-surface/30 text-center glass-panel relative overflow-hidden">
          
          {/* Glowing border effects */}
          <div className="absolute inset-0 bg-gradient-to-tr from-electric/5 via-transparent to-emerald/5 pointer-events-none" />
          
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-surface border border-dark-border text-xs text-dark-muted mb-6">
              <Sparkles size={12} className="text-electric" />
              <span className="font-semibold text-white">Instant Setup</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald" />
              <span>No credit card required</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Your AI team deserves a smarter wallet.
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-dark-muted mb-10 leading-relaxed">
              Stop sharing unsafe API keys or corporate credit cards. Give every developer their own bounded AI credits in less than 30 seconds.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full justify-center">
              <button
                onClick={onJoinWaitlist}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-white/90 active:scale-98 font-bold rounded-xl transition-all shadow-lg shadow-electric/15"
                id="cta-join-btn"
              >
                <span>Join Tokenly</span>
                <ArrowRight size={18} />
              </button>
              <button
                onClick={onJoinWaitlist}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-dark-surface border border-dark-border text-white hover:border-dark-muted active:scale-98 font-bold rounded-xl transition-all"
                id="cta-early-access-btn"
              >
                <span>Get Early Access</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
