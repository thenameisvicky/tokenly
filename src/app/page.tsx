"use client";

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F172A] selection:bg-[#10B981] selection:text-white antialiased font-sans flex flex-col items-center">
      {/* Navigation Header */}
      <header className="w-full max-w-5xl px-6 py-6 flex items-center justify-between border-b border-[#E2E8F0]">
        <div className="flex items-center gap-2.5">
          {/* Custom Sleek Wallet Logo */}
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H18C19.1 4 20 4.9 20 6V18C20 19.1 19.1 20 18 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="#0F172A" />
            <path d="M20 10H16C14.9 10 14 10.9 14 12C14 13.1 14.9 14 16 14H20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17.5" cy="12" r="1.5" fill="#10B981" />
            <path d="M8 8V12M6 8H10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-bold tracking-tight text-base text-[#0F172A]">Tokenly</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-[#64748B]">
          <a href="#story-flow" className="hover:text-[#0F172A] transition-colors">How it unblocks</a>
          <a href="#use-cases" className="hover:text-[#0F172A] transition-colors">Use cases</a>
          <a href="#cta" className="px-3 py-1.5 bg-[#0F172A] text-white hover:bg-[#10B981] transition-all text-xs font-semibold rounded">
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-28 flex flex-col items-center text-center border-b border-[#E2E8F0]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] max-w-3xl leading-[1.1] mb-8">
            Teammate rate-limited? Air-drop $10 of AI tokens instantly.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed mb-12">
            Stop sharing raw master keys, paying for idle enterprise seats, or getting banned for multi-IP account sharing. Tunnel developer compute through an anti-ban egress link with real-time hardware budget caps.
          </p>

          {/* Waitlist CTA Block */}
          <div className="w-full max-w-md mb-8" id="cta">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter GitHub Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-4 py-3 bg-[#FFFFFF] border border-[#E2E8F0] rounded text-sm focus:outline-none focus:border-[#10B981] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0F172A] text-[#FFFFFF] hover:bg-[#10B981] font-semibold text-sm rounded transition-colors whitespace-nowrap"
                >
                  Start Air-Dropping -&gt;
                </button>
              </form>
            ) : (
              <div className="p-4 border border-[#E2E8F0] rounded bg-[#F8FAFC] text-sm text-[#64748B] flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>Air-drop slot reserved for <strong>{email}</strong>. Check your inbox.</span>
              </div>
            )}
          </div>

          <div className="text-xs text-[#64748B] flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Built for lean squads, indie hackers, and hackathon teams.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
            <span>100% compliant with leading coding agents and CLIs.</span>
          </div>
        </section>

        {/* SECTION 2: STORY DOODLE FLOW */}
        <section id="story-flow" className="py-20 border-b border-[#E2E8F0] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Developer Flexibility</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              From Limit-Hit to Shipping in 30 Seconds.
            </h2>
            <p className="text-sm text-[#64748B] mt-4 max-w-lg mx-auto">
              Focus entirely on building features, not battling billing limits or API credentials.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Timeline Center Line */}
            <div className="absolute left-[18px] md:left-1/2 top-2 bottom-2 w-[1px] bg-[#E2E8F0] -translate-x-1/2 pointer-events-none" aria-hidden="true" />

            <div className="space-y-12 md:space-y-0 md:relative md:h-[580px]">
              
              {/* Step 1: Midnight Rate Limit */}
              <div className="relative w-full md:absolute md:top-0 md:left-0 md:h-[120px]">
                {/* Number Bubble on center line */}
                <div className="absolute left-[18px] md:left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFF5F5] border border-[#FEB2B2] flex items-center justify-center font-mono text-xs font-bold text-[#C53030] z-10 shadow-sm">
                  01
                </div>
                {/* Left Card */}
                <div className="pl-12 md:pl-0 md:absolute md:left-0 md:w-[44%]">
                  <div className="p-5 border border-[#E2E8F0] rounded bg-white hover:border-[#FEB2B2] transition-colors shadow-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C53030]">2:00 AM Rate Limit</span>
                    <h4 className="font-bold text-sm text-[#0F172A] mt-1 mb-2">Exhausted mid-sprint</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Your dev teammate is refining a database schema. Suddenly, the CLI agent hits a quota barrier: <code className="bg-[#FFF5F5] px-1 py-0.5 rounded text-[10px] font-mono text-[#C53030]">429 Too Many Requests</code>. Progress halts completely.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: The Request */}
              <div className="relative w-full md:absolute md:top-[145px] md:left-0 md:h-[120px]">
                {/* Number Bubble on center line */}
                <div className="absolute left-[18px] md:left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center font-mono text-xs font-bold text-[#0F172A] z-10 shadow-sm">
                  02
                </div>
                {/* Right Card */}
                <div className="pl-12 md:pl-0 md:absolute md:right-0 md:w-[44%]">
                  <div className="p-5 border border-[#E2E8F0] rounded bg-white hover:border-[#94A3B8] transition-colors shadow-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#64748B]">Immediate Help Ping</span>
                    <h4 className="font-bold text-sm text-[#0F172A] mt-1 mb-2">Request to CLI owner</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      No corporate credit card runs, no workspace invites. Teammate pings the account owner: <em>"Hey, out of tokens, add me to your Tokenly squad for a quick drop."</em>
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3: The Air-Drop */}
              <div className="relative w-full md:absolute md:top-[290px] md:left-0 md:h-[120px]">
                {/* Number Bubble on center line */}
                <div className="absolute left-[18px] md:left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center font-mono text-xs font-bold text-[#166534] z-10 shadow-sm">
                  03
                </div>
                {/* Left Card */}
                <div className="pl-12 md:pl-0 md:absolute md:left-0 md:w-[44%]">
                  <div className="p-5 border border-[#E2E8F0] rounded bg-white hover:border-[#BBF7D0] transition-colors shadow-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10B981]">Safe Scoped Budget</span>
                    <h4 className="font-bold text-sm text-[#0F172A] mt-1 mb-2">Owner shares a $10 drop</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      The owner logs in, registers the teammate's GitHub email, and allocates a $10.00 quota limit to their profile in 3 seconds. No credentials or keys are exposed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4: Back to Shipping */}
              <div className="relative w-full md:absolute md:top-[435px] md:left-0 md:h-[120px]">
                {/* Number Bubble on center line */}
                <div className="absolute left-[18px] md:left-1/2 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-center font-mono text-xs font-bold text-[#10B981] z-10 shadow-sm">
                  04
                </div>
                {/* Right Card */}
                <div className="pl-12 md:pl-0 md:absolute md:right-0 md:w-[44%]">
                  <div className="p-5 border border-[#E2E8F0] rounded bg-white hover:border-[#10B981] transition-colors shadow-sm">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#10B981]">Zero Friction</span>
                    <h4 className="font-bold text-sm text-[#0F172A] mt-1 mb-2">Utilizing the $10 drop</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      Teammate continues running their local CLI as usual. The allocation is resolved automatically on the backend. Developers focus on building, not credential plumbing.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: USE CASES */}
        <section id="use-cases" className="py-20 border-b border-[#E2E8F0] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Utility Matrix</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              Where Tokenly Keeps You Shipping.
            </h2>
            <p className="text-sm text-[#64748B] mt-3">
              Purpose-built peer-to-peer allocation for bootstrapped teams and developer sprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Use Case 1: P2P Quota Air-Drop */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">01 / Peer-to-Peer</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Temporary Quota Sharing</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Donate small compute margins ($5 or $10) to a teammate without adding them to corporate workspaces or giving away master credentials.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Active ledger termination
              </div>
            </div>

            {/* Use Case 2: Multi-IP Anti-Ban Guard */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">02 / Compliance</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Anti-Ban Egress Guard</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Avoid automated account bans from AI providers checking multi-IP concurrency. All teammate requests are funneled through a single static egress tunnel with desktop uTLS fingerprinting.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Static IP egress & uTLS spoofing
              </div>
            </div>

            {/* Use Case 3: Recursive Loop Breaker */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">03 / Protection</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Recursive Agent Loop-Breaker</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Never suffer from a surprise $300 bill when an AI agent gets stuck in a recursive loop. The real-time kill-switch severs the link the exact millisecond the limit is reached.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#C53030]">
                // Hard 402 Payment Required block
              </div>
            </div>

            {/* Use Case 4: Sovereign Token Pools */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">04 / Flexibility</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Wholesale Token Pools</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Buy pooled wholesale credits directly on Tokenly. Let teammates draw from a single shared credit account without needing to copy-paste or manage individual provider master keys.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // No master API key required
              </div>
            </div>

            {/* Use Case 5: High-Signal Telemetry */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">05 / Monitoring</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Real-time Telemetry</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Monitor latencies, active token burn rates, and specific team allocations through a clean light-mode dashboard designed for developers instead of heavy enterprise DevOps.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Low-latency Go ledger tracking
              </div>
            </div>

            {/* Use Case 6: Hackathon & Student Teams */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">06 / Cost Pooling</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Hackathons & Projects</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Instantly pool resources during high-velocity development sprints, allocating micro-budgets to collaborators without configuring complex enterprise permission systems.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Capped allocations for student teams
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl px-6 py-12 text-xs text-[#64748B] border-t border-[#E2E8F0] mt-16 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-bold text-[#0F172A] block">Tokenly</span>
            <span className="text-[#64748B]">Created by <a href="https://github.com/thenameisvicky" className="font-medium text-[#0F172A] hover:underline">thenameisvicky</a>.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://github.com/thenameisvicky/tokenly" className="font-medium text-[#0F172A] hover:underline flex items-center gap-1">
              <span>Open Source on GitHub</span>
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>
            <div className="flex items-center gap-1.5 text-[#10B981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>100% Uptime Status</span>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-[#E2E8F0]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#94A3B8]">
          <span>&copy; {new Date().getFullYear()} Tokenly. Released under the MIT License.</span>
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <span>html/js footprint: ~3.1KB</span>
            <span>&bull;</span>
            <span>css: utility modular</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
