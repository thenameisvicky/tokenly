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
          <div className="w-6 h-6 rounded bg-[#0F172A] flex items-center justify-center text-white font-bold text-sm">
            T
          </div>
          <span className="font-bold tracking-tight text-base text-[#0F172A]">Tokenly</span>
          <span className="text-[10px] font-semibold bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded-full border border-[#A3E635]/10">
            Air-Drop
          </span>
        </div>
        <nav className="flex items-center gap-4 sm:gap-6 text-sm text-[#64748B]">
          <a href="#scenario" className="hidden sm:inline-block hover:text-[#0F172A] transition-colors">Scenario</a>
          <a href="#how-it-works" className="hidden sm:inline-block hover:text-[#0F172A] transition-colors">How it works</a>
          <a href="#cli" className="hidden sm:inline-block hover:text-[#0F172A] transition-colors">Terminal CLI</a>
          <a href="#cta" className="px-3 py-1.5 bg-[#0F172A] text-white hover:bg-[#10B981] transition-all text-xs font-semibold rounded">
            Start Air-Dropping
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="py-24 md:py-36 flex flex-col items-center text-center border-b border-[#E2E8F0]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] max-w-3xl leading-[1.1] mb-8">
            Teammate hit a rate limit? Air-drop $10 of AI tokens instantly.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed mb-12">
            Stop sharing raw master keys, pasting session URLs in shared VMs, or risking multi-IP account bans. Generate a hard-capped proxy link in 3 seconds so your dev partner can keep coding without draining your balance.
          </p>

          <div className="w-full max-w-md" id="cta">
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

          <div className="mt-8 text-xs text-[#64748B] flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>Built for lean squads, indie hackers, and hackathon teams.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
            <span>Compatible with Claude Code, OpenAI, and DeepSeek CLIs.</span>
          </div>
        </section>


        {/* SECTION 2: THE 2 AM SCENARIO */}
        <section id="scenario" className="py-20 border-b border-[#E2E8F0] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Why We Exist</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              The Bootstrapped Squad Reality.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-0 items-stretch">
            {/* The Ban-Prone Hack */}
            <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 py-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-4">The Ban-Prone Hack</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  Your dev friend runs out of tokens mid-sprint. You share your account login, paste CLI URLs across a shared VM to avoid multi-IP ban algorithms, and stress out hoping they don't accidentally burn your entire $100 monthly budget.
                </p>
              </div>
              <div className="p-4 bg-[#FFF5F5] border border-[#FEB2B2] rounded font-mono text-xs text-[#C53030]">
                <span className="block font-bold mb-1">// Exposed Master Credentials</span>
                <span>risk: account ban | budget: unprotected</span>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden md:flex md:col-span-1 justify-center items-center">
              <div className="w-[1px] h-full bg-[#E2E8F0]" />
            </div>
            <div className="block md:hidden my-6 border-t border-[#E2E8F0]" />

            {/* The Tokenly Way */}
            <div className="md:col-span-5 flex flex-col justify-between pl-0 md:pl-8 py-2">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#10B981] mb-4">The $10 Kill-Switch</h3>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                  You generate an Air-Drop Link capped at exactly $10. Our backend routes their CLI through a single static egress IP (no ban flags) and instantly cuts off access the millisecond they hit the $10 limit. Zero risk, zero workflow stops.
                </p>
              </div>
              <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono text-xs text-[#166534] flex flex-col gap-1">
                <span className="block font-bold">// Safe Scoped Allowance</span>
                <span>egress: static IP | budget: capped at $10</span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 3: HOW IT WORKS */}
        <section id="how-it-works" className="py-20 border-b border-[#E2E8F0] scroll-mt-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Setup Process</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              How to unblock a teammate in 30 seconds.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col border border-[#E2E8F0] rounded p-6 bg-[#FFFFFF]">
              <span className="font-mono text-2xl font-bold text-[#10B981] mb-4">01</span>
              <h3 className="font-bold text-[#0F172A] text-base mb-2">Set the Limit</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Input your master API key into our local/encrypted vault and type the exact dollar amount you want to share (e.g., $10.00).
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col border border-[#E2E8F0] rounded p-6 bg-[#FFFFFF]">
              <span className="font-mono text-2xl font-bold text-[#10B981] mb-4">02</span>
              <h3 className="font-bold text-[#0F172A] text-base mb-2">Send the Air-Drop Link</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Copy the generated proxy endpoint (<code className="bg-[#F8FAFC] px-1 py-0.5 rounded text-xs font-mono text-[#0F172A]">https://api.tokenly.app/v1/drop/cl_992x</code>) and send it to your teammate.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col border border-[#E2E8F0] rounded p-6 bg-[#FFFFFF]">
              <span className="font-mono text-2xl font-bold text-[#10B981] mb-4">03</span>
              <h3 className="font-bold text-[#0F172A] text-base mb-2">Swap & Code</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                They run <code className="bg-[#F8FAFC] px-1 py-0.5 rounded text-xs font-mono text-[#0F172A]">export ANTHROPIC_BASE_URL="..."</code> in their terminal. They keep coding; our engine tracks usage to the cent.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 4: THE LIVE CLI EXAMPLE */}
        <section id="cli" className="py-20 scroll-mt-6 border-b border-[#E2E8F0]">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Terminal Integration</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              Zero codebase changes. Works in the terminal.
            </h2>
          </div>

          <div className="max-w-2xl mx-auto border border-[#E2E8F0] rounded overflow-hidden shadow-sm">
            {/* Terminal Header */}
            <div className="px-4 py-2 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2E8F0]" />
              </div>
              <span>bash</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(`export ANTHROPIC_BASE_URL="https://api.tokenly.app/v1/drop/cl_992x"`);
                  alert("CLI command copied!");
                }}
                className="hover:text-[#0F172A] transition-colors"
              >
                Copy
              </button>
            </div>
            {/* Terminal Body */}
            <pre className="p-6 bg-[#F1F5F9] text-xs sm:text-sm font-mono text-[#0F172A] overflow-x-auto leading-relaxed">
              <code>{`# Teammate hits rate limit on their own account:
$ claude "refactor the database schema"
Error: 429 Too Many Requests - Quota exceeded.

# They paste your $10 Tokenly Air-Drop link:
$ export ANTHROPIC_BASE_URL="https://api.tokenly.app/v1/drop/cl_992x"
$ claude "refactor the database schema"
⚡ Tokenly: Connected to Ash's Air-Drop Pool ($8.42 / $10.00 remaining)
> Refactoring schema now...`}</code>
            </pre>
          </div>
          <p className="text-center text-xs text-[#64748B] mt-6">
            Instantly restore productivity. No SDKs or codebase refactoring.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl px-6 py-12 text-xs text-[#64748B] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>&copy; {new Date().getFullYear()} Tokenly. All rights reserved.</span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <span className="cursor-default">Documentation (Coming Soon)</span>
          <a href="https://github.com/thenameisvicky/tokenly" className="hover:text-[#0F172A] transition-colors">GitHub</a>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>100% Uptime</span>
          </div>
          <a href="#" className="hover:text-[#0F172A] transition-colors">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
