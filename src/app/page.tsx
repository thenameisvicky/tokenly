"use client";

import { useState } from 'react';

export default function Home() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroEmail.trim()) {
      setHeroSubmitted(true);
    }
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaEmail.trim()) {
      setCtaSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#18181B] selection:bg-[#4F46E5] selection:text-white antialiased font-sans flex flex-col items-center">
      {/* Top Navigation bar */}
      <header className="w-full max-w-5xl px-6 py-6 flex items-center justify-between border-b border-[#E4E4E7]">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-[#18181B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="font-bold tracking-tight text-lg text-[#18181B]">Tokenly</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-[#71717A]">
          <a href="#governance" className="hover:text-[#18181B] transition-colors">Governance</a>
          <a href="#features" className="hover:text-[#18181B] transition-colors">Features</a>
          <a href="#cta" className="px-3 py-1.5 border border-[#18181B] text-[#18181B] hover:bg-[#18181B] hover:text-white transition-all text-xs font-medium rounded">
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="py-24 md:py-36 flex flex-col items-center text-center border-b border-[#E4E4E7]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#18181B] max-w-3xl leading-[1.1] mb-8">
            The minimal wallet for team AI tokens.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#71717A] max-w-2xl leading-relaxed mb-12">
            Stop exposing raw OpenAI or Claude keys. Allocate credit balances, split project expenses, and route requests through a secure wallet interface. Engineered for developers, hackathons, and lean squads.
          </p>

          <div className="w-full max-w-md">
            {!heroSubmitted ? (
              <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={heroEmail}
                  onChange={(e) => setHeroEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-[#FFFFFF] border border-[#E4E4E7] rounded text-sm focus:outline-none focus:border-[#4F46E5] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#000000] text-[#FFFFFF] hover:bg-[#18181B] font-semibold text-sm rounded transition-colors whitespace-nowrap"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="p-4 border border-[#E4E4E7] rounded bg-[#F9F9FB] text-sm text-[#71717A] flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-[#4F46E5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>You're on the list! We've saved <strong>{heroEmail}</strong> for early access.</span>
              </div>
            )}
          </div>

          <div className="mt-8 text-xs text-[#71717A] flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Static HTML export compatible.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4E4E7]" />
            <span>Built for OpenAI, Anthropic, and DeepSeek.</span>
          </div>
        </section>


        {/* SECTION 2: THE CONTRAST */}
        <section id="governance" className="py-20 border-b border-[#E4E4E7] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">Governance</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] mt-2">
              Simplified Key Governance.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-0 items-stretch">
            {/* The Old Way */}
            <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 py-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#71717A] mb-4">The Old Way</h3>
                <p className="text-sm text-[#71717A] leading-relaxed mb-6">
                  Sharing corporate credit cards across multiple developers, dropping raw `.env` API keys in GitHub repositories, and manually tracking runaway API bills at the end of the month. High risk, zero access limits, and constant risk of credit shock.
                </p>
              </div>
              <div className="p-4 bg-[#FFF5F5] border border-[#FEB2B2] rounded font-mono text-xs text-[#C53030]">
                <span className="block font-bold mb-1">// Exposed credentials risk</span>
                <span>Unauthorized access & zero spend limits</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center">
              <div className="w-[1px] h-full bg-[#E4E4E7]" />
            </div>

            {/* The Tokenly Way */}
            <div className="md:col-span-5 flex flex-col justify-between pl-0 md:pl-8 py-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#4F46E5] mb-4">The Tokenly Way</h3>
                <p className="text-sm text-[#71717A] leading-relaxed mb-6">
                  Generate scoped token allowances tied to hard caps and custom expiry dates. Instantly allocate specific budgets to individuals, projects, or branches without sharing key secrets or company cards.
                </p>
              </div>
              <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono text-xs text-[#166534] flex flex-col gap-1">
                <span className="block font-bold">// Scoped AI wallets</span>
                <span>Centralized governance & real-time cost limits</span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: THE UTILITY SUITE */}
        <section id="features" className="py-20 border-b border-[#E4E4E7] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5]">Capabilities</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] mt-2">
              Features built for workflows.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Feature 1 */}
            <div className="flex gap-4 border-b border-[#F4F4F5] pb-6">
              <span className="font-mono text-xl font-bold text-[#4F46E5]">01</span>
              <div>
                <h3 className="font-bold text-[#18181B] text-base mb-1">Instant Allowances</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  Send a specific token budget limit directly to a teammate via a simple link copy. No credit card sharing or corporate logins needed.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 border-b border-[#F4F4F5] pb-6">
              <span className="font-mono text-xl font-bold text-[#4F46E5]">02</span>
              <div>
                <h3 className="font-bold text-[#18181B] text-base mb-1">Shared Group Pools</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  Drop a set amount into a master project wallet and let multiple developer nodes consume it concurrently while keeping total spend bounded.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 border-b border-[#F4F4F5] pb-6">
              <span className="font-mono text-xl font-bold text-[#4F46E5]">03</span>
              <div>
                <h3 className="font-bold text-[#18181B] text-base mb-1">Expense Splitting</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  Track exactly which team member or service is consuming computational tokens down to individual prompt queries and models.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 border-b border-[#F4F4F5] pb-6">
              <span className="font-mono text-xl font-bold text-[#4F46E5]">04</span>
              <div>
                <h3 className="font-bold text-[#18181B] text-base mb-1">In-Memory Ledger</h3>
                <p className="text-sm text-[#71717A] leading-relaxed">
                  A high-performance routing layer that verifies budgets and streams responses with under 5ms latency overhead.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: FINAL CALL TO ACTION */}
        <section id="cta" className="py-24 flex flex-col items-center">
          <div className="w-full max-w-2xl border border-[#E4E4E7] p-8 md:p-12 rounded text-center bg-[#FFFFFF]">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#18181B] mb-4">
              Start managing your token footprint.
            </h2>
            <p className="text-sm text-[#71717A] max-w-md mx-auto mb-8">
              Join the waitlist to secure early access and build your first shared developer wallet.
            </p>

            <div className="max-w-md mx-auto">
              {!ctaSubmitted ? (
                <form onSubmit={handleCtaSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={ctaEmail}
                    onChange={(e) => setCtaEmail(e.target.value)}
                    className="flex-grow px-4 py-3 bg-[#FFFFFF] border border-[#E4E4E7] rounded text-sm focus:outline-none focus:border-[#4F46E5] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#000000] text-[#FFFFFF] hover:bg-[#18181B] font-semibold text-sm rounded transition-colors whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </form>
              ) : (
                <div className="p-4 border border-[#E4E4E7] rounded bg-[#F9F9FB] text-sm text-[#71717A]">
                  Thanks for signing up! We've saved <strong>{ctaEmail}</strong> for early access.
                </div>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl px-6 py-12 border-t border-[#E4E4E7] text-xs text-[#71717A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>&copy; {new Date().getFullYear()} Tokenly. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="hover:text-[#18181B] cursor-default">Documentation (Coming Soon)</span>
          <a href="https://github.com/thenameisvicky/tokenly" className="hover:text-[#18181B] transition-colors">GitHub</a>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#166534]" />
            <span>100% Uptime</span>
          </div>
          <a href="#" className="hover:text-[#18181B] transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
