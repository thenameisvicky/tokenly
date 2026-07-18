"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [role, setRole] = useState('developer');
  const [waitlistNumber, setWaitlistNumber] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API registration
    // Generate a random waitlist number between 300 and 1500
    setWaitlistNumber(Math.floor(Math.random() * 1200) + 342);
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl glass-panel border border-dark-border p-8 text-left shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 rounded-full border border-dark-border text-dark-muted hover:text-white hover:bg-dark-surfaceHover transition-colors"
              aria-label="Close modal"
              id="close-modal-btn"
            >
              <X size={16} />
            </button>

            {!submitted ? (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-electric/10 border border-electric/20 text-electric">
                    <Sparkles size={20} className="animate-pulse" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-electric">Early Access</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-snug">
                  Join the Tokenly Waitlist
                </h3>
                <p className="text-sm text-dark-muted mb-6">
                  Get early access to the AI credit wallet. Share credits, limit usage, and keep your API keys secure.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-dark-muted uppercase tracking-wider mb-2">
                      I am a...
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'developer', label: 'Developer' },
                        { id: 'student', label: 'Student / Hackathon' },
                        { id: 'founder', label: 'Founder / Team' },
                        { id: 'freelancer', label: 'Freelancer / Agency' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setRole(item.id)}
                          className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                            role === item.id
                              ? 'bg-electric/15 border-electric text-white'
                              : 'bg-dark-surface border-dark-border text-dark-muted hover:border-dark-muted hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-medium text-dark-muted uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="modal-email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-black border border-dark-border rounded-xl text-white placeholder-dark-muted focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-electric hover:bg-electric-hover text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-electric/25"
                    id="modal-submit-btn"
                  >
                    <span>Reserve My Spot</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <div className="inline-flex p-3 rounded-full bg-emerald/10 border border-emerald/20 text-emerald mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-sm text-dark-muted mb-6">
                  Thanks for signing up! We've reserved your spot. We'll reach out as soon as Tokenly is ready for your team.
                </p>

                <div className="p-4 rounded-xl bg-dark-surface border border-dark-border mb-6">
                  <span className="block text-xs text-dark-muted uppercase tracking-wider mb-1">Your Position</span>
                  <span className="text-3xl font-extrabold text-white">#{waitlistNumber}</span>
                  <span className="block text-[10px] text-emerald mt-1 font-medium">Top 5% of early applicants</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`https://tokenly.app/?ref=${waitlistNumber}`);
                      alert('Referral link copied to clipboard!');
                    }}
                    className="flex-1 py-2.5 px-4 bg-dark-surface border border-dark-border hover:border-dark-muted text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Copy Referral Link
                  </button>
                  <button
                    onClick={onClose}
                    className="py-2.5 px-4 bg-electric hover:bg-electric-hover text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
