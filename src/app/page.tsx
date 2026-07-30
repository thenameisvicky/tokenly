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
      <header className="w-full max-w-5xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Custom Sleek Wallet Logo */}
          <img src="logo.png" alt="Tokenly Logo" className="w-10 h-10 object-contain" />
          <span className="font-bold tracking-tight text-lg text-[#0F172A]">Tokenly</span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-[#64748B]">
          <a href="#story-flow" className="hover:text-[#0F172A] transition-colors">How it unblocks</a>
          <a href="#security" className="hover:text-[#0F172A] transition-colors">Security</a>
          <a href="#use-cases" className="hover:text-[#0F172A] transition-colors">Use cases</a>
          <a href="#cta" className="px-3 py-1.5 bg-[#0F172A] text-white hover:bg-[#10B981] transition-all text-xs font-semibold rounded">
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="py-40 md:py-38 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F1F5F9] text-xs font-semibold tracking-wide text-[#0F172A] mb-8 border border-[#E2E8F0]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
            Secure AI Agent Infrastructure Platform
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] max-w-6xl leading-[1.1] mb-8">
            Teammate rate-limited? Air-drop $10 of AI tokens instantly
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed mb-12">
            An AI Agent Identity & Access Gateway built for secure developer collaboration. Stop sharing raw master keys, paying for idle enterprise seats, or risking account bans. Instantly allocate safe, hard-capped token allowances to teammates so your squad can keep shipping without exposing provider API credentials.
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
        </section>

        {/* SECTION 2: STORY DOODLE FLOW */}
        <section id="story-flow" className="py-20 scroll-mt-6">
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

        {/* SECTION: SECURITY ARCHITECTURE */}
        <section id="security" className="py-20 scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Security Architecture</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              Engineered for Key Secrecy.
            </h2>
            <p className="text-sm text-[#64748B] mt-4 max-w-xl mx-auto">
              Tokenly is designed as a secure proxy gateway. Your master keys are shielded centrally, never touching developer machines or local environment files.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* The Security Principle Callout */}
            <div className="p-8 border border-[#E2E8F0] rounded bg-[#F8FAFC] flex flex-col justify-between md:col-span-2">
              <div>
                <span className="text-xs font-mono text-[#10B981] uppercase tracking-wider block mb-3">Core Cryptographic Principle</span>
                <p className="text-sm font-medium italic text-[#0F172A] leading-relaxed">
                  "A secret must exist somewhere to be used. The goal is not pretending secrets disappear — the goal is ensuring they are encrypted at rest, protected in transit, and exposed only for the shortest possible time during authorized execution."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                You cannot use a secret without, at some point, possessing the secret. Tokenly is designed around minimizing where and how long secrets exist.
              </div>
            </div>

            {/* Credential Handling Grid */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white">
              <h3 className="font-bold text-sm text-[#0F172A] mb-3">Zero Keys Distributed</h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Users never need to distribute API keys among teammates. Master users securely connect their AI provider credentials once in a centralized panel.
              </p>
              <ul className="text-xs text-[#64748B] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Plaintext API keys are never stored in databases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Tokenly encrypts provider credentials before storing them.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border border-[#E2E8F0] rounded bg-white">
              <h3 className="font-bold text-sm text-[#0F172A] mb-3">Ephemeral Decryption</h3>
              <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                Credentials are decrypted only when required to make an authorized request. Decrypted credentials exist only temporarily in protected memory.
              </p>
              <ul className="text-xs text-[#64748B] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Exist only temporarily in protected memory during request execution.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>Requests are routed through a secure gateway with authentication, authorization, quotas, and audit logs.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION: DEVELOPER TRUST */}
        <section id="trust" className="py-20 scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Developer Trust</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              Isolated Agent Execution.
            </h2>
            <p className="text-sm text-[#64748B] mt-4 max-w-xl mx-auto">
              How developers and local AI coding agents securely authenticate and interact with Tokenly's systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-[#E2E8F0] rounded bg-white">
              <h3 className="font-bold text-sm text-[#0F172A] mb-2">Tokenly CLI Identity</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                The Tokenly CLI authenticates using a secure Tokenly identity token linked to the teammate's GitHub email. Developers never have direct access to, or visibility of, master API keys.
              </p>
            </div>

            <div className="p-6 border border-[#E2E8F0] rounded bg-white">
              <h3 className="font-bold text-sm text-[#0F172A] mb-2">Secure Gateway Communication</h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                AI coding agents and developer environments communicate exclusively through the Tokenly Gateway. The gateway verifies quotas, processes requests, and appends credentials on-the-fly.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: USE CASES */}
        <section id="use-cases" className="py-20 scroll-mt-6">
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

            {/* Use Case 2: Squad Cost Containment */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">02 / Billing</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Squad Cost Containment</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Consolidate individual billing overheads. Avoid paying for idle seats or managing multiple invoices across your squad. Allocate quotas to active builders dynamically.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Consolidated billing overhead
              </div>
            </div>

            {/* Use Case 3: Recursive Loop Breaker */}
            <div className="p-6 border border-[#E2E8F0] rounded bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#10B981] block mb-2">03 / Protection</span>
                <h3 className="font-bold text-sm text-[#0F172A] mb-3">Recursive Agent Loop-Breaker</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Never suffer from a surprise $300 bill when an AI agent gets stuck in a recursive loop. The real-time kill-switch automatically terminates access the exact millisecond the quota is exhausted.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#C53030]">
                // Real-time threshold shutdown
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
                  Monitor active token burn rates and specific team allocations through a clean light-mode dashboard designed for developers instead of heavy enterprise DevOps.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-[10px] font-mono text-[#166534]">
                // Real-time quota database
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
      <footer className="w-full max-w-5xl px-6 py-12 text-xs text-[#64748B] mt-16 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-bold text-[#0F172A] block">Tokenly</span>
            <span className="text-[#64748B]">Created by <a href="https://github.com/thenameisvicky" className="font-medium text-[#0F172A] hover:underline">thenameisvicky</a>.</span>
          </div>
        </div>
        
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#94A3B8]">
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
