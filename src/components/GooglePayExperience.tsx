"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';

const teammates = [
  { id: 'sarah', name: 'Sarah Chen', role: 'Frontend Engineer', initial: 'SC', color: 'bg-indigo-500' },
  { id: 'alex', name: 'Alex Rivera', role: 'Backend Engineer', initial: 'AR', color: 'bg-pink-500' },
  { id: 'rahul', name: 'Rahul Nair', role: 'AI Researcher', initial: 'RN', color: 'bg-yellow-500' }
];

export default function GooglePayExperience() {
  const [selectedTeammate, setSelectedTeammate] = useState(teammates[0]);
  const [amount, setAmount] = useState('25');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSend = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
    }, 1800);
  };

  const handleReset = () => {
    setStatus('idle');
  };

  return (
    <section className="py-24 md:py-36 bg-black relative" id="google-pay-experience">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-glow blur-[140px] rounded-full pointer-events-none opacity-20" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-electric-glow blur-[120px] rounded-full pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Headline and Description */}
        <div className="lg:col-span-6 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald mb-3 block">
            Frictionless Design
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Sending AI credits should feel this easy.
          </h2>
          <p className="text-lg text-dark-muted mb-8 leading-relaxed">
            Distribute resources as easily as text message transactions. With Tokenly, adding, adjusting, or revoking a developer's allowance takes less than three taps.
          </p>

          <div className="space-y-4">
            {[
              "Select teammate, specify amount, tap send.",
              "Gateway updates and binds new permissions instantly.",
              "Detailed logs update live on both dashboards.",
              "Optional auto-recharges when user balance dips below $5."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald/15 border border-emerald/20 flex items-center justify-center text-emerald">
                  <CheckCircle2 size={12} />
                </div>
                <span className="text-sm text-white/95">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Phone Widget Mockup */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="w-full max-w-[340px] aspect-[9/18] rounded-[44px] bg-black border-[8px] border-dark-surface shadow-2xl overflow-hidden flex flex-col glass-panel relative">
            
            {/* Top notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark-surface rounded-b-2xl z-20 flex justify-center items-center">
              <div className="w-12 h-1 bg-black rounded-full" />
            </div>

            <AnimatePresence mode="wait">
              {status === 'idle' && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col justify-between pt-10 pb-6 px-5"
                >
                  <div>
                    {/* Header */}
                    <div className="text-center mb-6">
                      <span className="text-[10px] text-dark-muted uppercase font-bold tracking-wider">Send Allowance</span>
                      <h3 className="text-sm font-bold text-white mt-1">Select Teammate</h3>
                    </div>

                    {/* Teammates List */}
                    <div className="space-y-2 mb-6">
                      {teammates.map((member) => (
                        <button
                          key={member.id}
                          onClick={() => setSelectedTeammate(member)}
                          className={`w-full flex items-center justify-between p-2.5 rounded-xl border transition-all ${
                            selectedTeammate.id === member.id
                              ? 'bg-emerald/10 border-emerald/40'
                              : 'bg-dark-surface/40 border-dark-border hover:bg-dark-surface/60'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 text-left">
                            <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-xs font-bold text-white shadow`}>
                              {member.initial}
                            </div>
                            <div>
                              <span className="block text-xs font-bold text-white leading-tight">{member.name}</span>
                              <span className="block text-[9px] text-dark-muted leading-tight">{member.role}</span>
                            </div>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedTeammate.id === member.id ? 'border-emerald text-emerald bg-emerald/10' : 'border-dark-border'
                          }`}>
                            {selectedTeammate.id === member.id && <div className="w-2 h-2 rounded-full bg-emerald" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Amount Input */}
                    <div className="text-center mb-6">
                      <span className="text-[10px] text-dark-muted uppercase font-bold tracking-wider block mb-1">Enter Amount</span>
                      <div className="flex items-baseline justify-center gap-0.5">
                        <span className="text-3xl font-extrabold text-white">$</span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-24 text-3xl font-extrabold text-white bg-transparent border-b border-dark-border text-center focus:outline-none focus:border-emerald pb-1 font-mono"
                          placeholder="0"
                          min="1"
                        />
                      </div>

                      {/* Preset Amounts */}
                      <div className="flex justify-center gap-2 mt-3.5">
                        {['5', '25', '50'].map((preset) => (
                          <button
                            key={preset}
                            onClick={() => setAmount(preset)}
                            className={`py-1.5 px-3.5 rounded-lg border text-xs font-bold transition-all ${
                              amount === preset
                                ? 'bg-emerald/20 border-emerald text-emerald'
                                : 'bg-dark-surface border-dark-border text-dark-muted hover:text-white'
                            }`}
                          >
                            ${preset}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    onClick={handleSend}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-emerald hover:bg-emerald/90 text-black font-bold text-xs rounded-xl shadow-lg shadow-emerald/10 active:scale-98 transition-all disabled:opacity-40"
                    id="phone-send-btn"
                  >
                    <Send size={12} className="fill-black" />
                    <span>Send Credits</span>
                  </button>
                </motion.div>
              )}

              {status === 'sending' && (
                <motion.div
                  key="sending"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col items-center justify-center p-6 text-center"
                >
                  {/* Glowing spinner */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-dark-border" />
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border-4 border-t-emerald border-r-transparent border-b-transparent border-l-transparent"
                    />
                  </div>
                  <h4 className="text-sm font-bold text-white">Authorizing Request...</h4>
                  <p className="text-xs text-dark-muted mt-2">Routing credit allocation to secure gateway.</p>
                </motion.div>
              )}

              {status === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex-1 flex flex-col justify-between pt-10 pb-6 px-6 text-center"
                >
                  <div className="my-auto flex flex-col items-center">
                    {/* Bouncing success check */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                      className="w-16 h-16 rounded-full bg-emerald/15 border border-emerald/30 text-emerald flex items-center justify-center mb-6"
                    >
                      <CheckCircle2 size={32} />
                    </motion.div>

                    <h4 className="text-base font-extrabold text-white">Allocation Sent</h4>
                    <p className="text-xs text-dark-muted mt-2 max-w-[200px]">
                      Successfully allocated <span className="text-emerald font-bold">${amount}</span> of credits to {selectedTeammate.name}.
                    </p>

                    <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-surface border border-dark-border">
                      <Sparkles size={10} className="text-emerald" />
                      <span className="text-[9px] text-dark-muted uppercase font-bold tracking-wider">Masked key updated</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-2.5 bg-dark-surface hover:bg-dark-surfaceHover border border-dark-border text-white text-xs font-semibold rounded-lg transition-colors"
                    id="phone-reset-btn"
                  >
                    Send to Someone Else
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
