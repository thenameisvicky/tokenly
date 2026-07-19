"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Interactive Simulator States
  const [selectedLimit, setSelectedLimit] = useState(10);
  const [remainingBalance, setRemainingBalance] = useState(10);
  const [isHovered, setIsHovered] = useState(false);
  const [requestLog, setRequestLog] = useState<string[]>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && remainingBalance > 0.05) {
      interval = setInterval(() => {
        setRemainingBalance((prev) => {
          const next = Math.max(0, prev - 0.28);
          
          // Generate simulated terminal log
          if (next > 0) {
            const cost = 0.28;
            setRequestLog((logs) => [
              `[CLI] Tokenly routed request - Cost: $${cost.toFixed(2)} (Remaining: $${next.toFixed(2)})`,
              ...logs.slice(0, 2)
            ]);
          } else {
            setRequestLog((logs) => [
              `[Kill-Switch] Limit reached. Target access instantly revoked.`,
              ...logs.slice(0, 2)
            ]);
          }
          return next;
        });
      }, 350);
    } else if (!isHovered) {
      // Slow recovery when idle to simulate reset/ready state
      interval = setInterval(() => {
        setRemainingBalance((prev) => {
          if (prev < selectedLimit) {
            return Math.min(selectedLimit, prev + 0.5);
          }
          return prev;
        });
        setRequestLog([]);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isHovered, remainingBalance, selectedLimit]);

  const handleLimitChange = (limit: number) => {
    setSelectedLimit(limit);
    setRemainingBalance(limit);
    setRequestLog([]);
  };

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
          <a href="#use-cases" className="hover:text-[#0F172A] transition-colors">Use cases</a>
          <a href="#cta" className="px-3 py-1.5 bg-[#0F172A] text-white hover:bg-[#10B981] transition-all text-xs font-semibold rounded">
            Join Waitlist
          </a>
        </nav>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-5xl px-6 flex-grow">
        
        {/* SECTION 1: HERO */}
        <section className="py-20 md:py-32 flex flex-col items-center text-center border-b border-[#E2E8F0]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] max-w-3xl leading-[1.1] mb-8">
            Teammate hit a rate limit? Air-drop safe AI access instantly.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl leading-relaxed mb-12">
            Stop sharing raw production keys or pasting credentials in team chats. Instantly allocate restricted, auto-expiring credit limits so your partner can keep coding without draining your master account.
          </p>

          {/* INTERACTIVE HERO SIMULATOR */}
          <div className="w-full max-w-lg border border-[#E2E8F0] rounded p-6 bg-[#F8FAFC] text-left mb-12 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Live Sandbox Preview</span>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${isHovered ? 'bg-[#10B981] animate-ping' : 'bg-[#10B981]'}`} />
                <span className="text-[10px] font-mono text-[#64748B]">
                  {isHovered ? 'simulating request stream...' : 'idle (hover to simulate drain)'}
                </span>
              </div>
            </div>

            {/* Selector caps */}
            <div className="flex gap-2 mb-6">
              {[5, 10, 25, 50].map((val) => (
                <button
                  key={val}
                  onClick={() => handleLimitChange(val)}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-semibold border transition-all ${
                    selectedLimit === val
                      ? 'bg-[#0F172A] text-white border-[#0F172A]'
                      : 'bg-white text-[#64748B] border-[#E2E8F0] hover:border-[#64748B]'
                  }`}
                >
                  ${val}.00 cap
                </button>
              ))}
            </div>

            {/* Interactive container */}
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="p-5 bg-white border border-[#E2E8F0] rounded cursor-pointer transition-all hover:border-[#10B981] select-none"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-[#0F172A]">Allowance Allowance</span>
                <span className="font-mono text-sm font-semibold text-[#10B981]">
                  ${remainingBalance.toFixed(2)} / ${selectedLimit.toFixed(2)}
                </span>
              </div>

              {/* Progress gauge */}
              <div className="w-full h-2 bg-[#F1F5F9] rounded overflow-hidden">
                <div
                  className="h-full bg-[#10B981] transition-all duration-300 ease-out"
                  style={{ width: `${(remainingBalance / selectedLimit) * 100}%` }}
                />
              </div>

              {/* Dynamic live simulation output */}
              <div className="mt-4 pt-3 border-t border-[#F1F5F9] min-h-[50px] font-mono text-[10px] text-[#64748B] space-y-1">
                {requestLog.length > 0 ? (
                  requestLog.map((log, idx) => (
                    <div key={idx} className={idx === 0 ? 'text-[#0F172A] font-medium' : 'opacity-60'}>
                      {log}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-2 italic text-[#94A3B8]">
                    Hover over this box to simulate active CLI requests draining the drop pool.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Waitlist CTA Block */}
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
            <span>Compatible with leading developer environments and CLIs.</span>
          </div>
        </section>


        {/* SECTION 2: USE CASES */}
        <section id="use-cases" className="py-20 border-b border-[#E2E8F0] scroll-mt-6">
          <div className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#10B981]">Use Cases</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A] mt-2">
              The Bootstrapped Squad Reality.
            </h2>
          </div>

          <div className="space-y-20">
            {/* Scenario 1: Key Sharing / Ban Risk */}
            <div className="border-b border-[#E2E8F0]/60 pb-16">
              <span className="text-xs font-mono text-[#10B981] uppercase block mb-6">Case 01 / Key Sharing</span>
              <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-0 items-stretch">
                <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-4">The Ban-Prone Hack</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Your dev friend runs out of tokens mid-sprint. You share your account login, paste keys across shared environments, and stress out hoping they don't accidentally burn through your entire monthly computational budget.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FFF5F5] border border-[#FEB2B2] rounded font-mono text-xs text-[#C53030]">
                    <span className="block font-bold mb-1">// Exposed Master Credentials</span>
                    <span>risk: account ban | budget: unprotected</span>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center items-center">
                  <div className="w-[1px] h-full bg-[#E2E8F0]" />
                </div>
                <div className="block md:hidden my-6 border-t border-[#E2E8F0]" />

                <div className="md:col-span-5 flex flex-col justify-between pl-0 md:pl-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#10B981] mb-4">The $10 Kill-Switch</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Generate scoped token budgets capped at exactly $10. Centralized cost tracking, automated expense limits, and auto-expiry configurations ensure zero key exposure and zero financial runaway risk.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono text-xs text-[#166534] flex flex-col gap-1">
                    <span className="block font-bold">// Safe Scoped Allowance</span>
                    <span>credentials: protected | budget: capped at $10</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 2: Infinite Loop Bills */}
            <div className="border-b border-[#E2E8F0]/60 pb-16">
              <span className="text-xs font-mono text-[#10B981] uppercase block mb-6">Case 02 / Infinite Agent Loops</span>
              <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-0 items-stretch">
                <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-4">The Runaway Bill</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      A team member tests a new recursive AI agent loop on a master key. They step away for coffee, only to return to a surprise $300 bill because there was no consumption limit configured.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FFF5F5] border border-[#FEB2B2] rounded font-mono text-xs text-[#C53030]">
                    <span className="block font-bold mb-1">// Infinite Loop Shock</span>
                    <span>unbounded api access | cost: $300+ in minutes</span>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center items-center">
                  <div className="w-[1px] h-full bg-[#E2E8F0]" />
                </div>
                <div className="block md:hidden my-6 border-t border-[#E2E8F0]" />

                <div className="md:col-span-5 flex flex-col justify-between pl-0 md:pl-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#10B981] mb-4">Hard-Capped Bounds</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Configure a hard spending threshold on the shared credit drop. The exact millisecond the limit is reached, all loop requests are immediately shut off. No surprise charges, no exceptions.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono text-xs text-[#166534] flex flex-col gap-1">
                    <span className="block font-bold">// Budget Boundary Guard</span>
                    <span>cost: auto-stop at $10.00 | loops: safe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scenario 3: External Contributors */}
            <div className="pb-4">
              <span className="text-xs font-mono text-[#10B981] uppercase block mb-6">Case 03 / External Contributors</span>
              <div className="grid grid-cols-1 md:grid-cols-11 gap-8 md:gap-0 items-stretch">
                <div className="md:col-span-5 flex flex-col justify-between pr-0 md:pr-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#64748B] mb-4">The Trust Fall</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      You hire a freelancer or invite an open-source contributor to build a feature. To unblock them, you paste your raw Claude/OpenAI key in a private message, hoping they don't abuse it or leak it.
                    </p>
                  </div>
                  <div className="p-4 bg-[#FFF5F5] border border-[#FEB2B2] rounded font-mono text-xs text-[#C53030]">
                    <span className="block font-bold mb-1">// Exposed Key Secrets</span>
                    <span>status: unencrypted | control: zero revocation</span>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-center items-center">
                  <div className="w-[1px] h-full bg-[#E2E8F0]" />
                </div>
                <div className="block md:hidden my-6 border-t border-[#E2E8F0]" />

                <div className="md:col-span-5 flex flex-col justify-between pl-0 md:pl-8 py-2">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#10B981] mb-4">Temporary Expiry Drops</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Provide a temporary credit allocation that automatically expires in 24 hours. The contributor finishes their tasks, your wallet auto-locks, and your master credentials remain safely encrypted.
                    </p>
                  </div>
                  <div className="p-4 bg-[#F0FDF4] border border-[#BBF7D0] rounded font-mono text-xs text-[#166534] flex flex-col gap-1">
                    <span className="block font-bold">// Autonomic Lifetime Bounds</span>
                    <span>lifetime: 24h limit | master keys: invisible</span>
                  </div>
                </div>
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
