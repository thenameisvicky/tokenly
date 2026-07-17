import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Wallet, Calendar, UserPlus, CreditCard } from 'lucide-react';

type ChartTab = 'usage' | 'providers' | 'team';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<ChartTab>('usage');
  const [balance, setBalance] = useState(482.50);
  const [hasDeposited, setHasDeposited] = useState(false);

  const transactions = [
    { name: "Sarah Chen", provider: "Claude", amount: -0.42, time: "Just now", model: "Claude 3.5 Sonnet", initial: "SC", color: "bg-indigo-500" },
    { name: "Alex Rivera", provider: "GPT", amount: -1.20, time: "3 mins ago", model: "GPT-4o", initial: "AR", color: "bg-pink-500" },
    { name: "Rahul Nair", provider: "Gemini", amount: -0.31, time: "14 mins ago", model: "Gemini 1.5 Pro", initial: "RN", color: "bg-yellow-500" },
    { name: "Dave Miller", provider: "Claude", amount: -0.85, time: "1 hour ago", model: "Claude 3 Haiku", initial: "DM", color: "bg-emerald-500" }
  ];

  const handleDepositMock = () => {
    setBalance(prev => prev + 50);
    setHasDeposited(true);
    setTimeout(() => {
      setHasDeposited(false);
    }, 2500);
  };

  return (
    <section className="py-24 md:py-36 bg-black relative bg-dot-pattern" id="dashboard">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-glow blur-[150px] rounded-full pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Product Interface
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            The Tokenly Dashboard
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            A command center for all your AI team resources. View live telemetry, adjust individual allowances, and trace model queries in real-time.
          </p>
        </div>

        {/* Dashboard Shell Container */}
        <div className="w-full rounded-3xl border border-dark-border bg-dark-surface/30 p-6 md:p-8 shadow-2xl relative overflow-hidden glass-panel">
          
          {/* Header Action row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-dark-border/40 pb-6">
            <div>
              <span className="text-xs text-dark-muted uppercase font-bold tracking-wider">Workspace</span>
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
                <span>Hackathon Build Co.</span>
                <span className="text-[10px] bg-emerald/10 border border-emerald/20 text-emerald py-0.5 px-2 rounded-full font-semibold">Active</span>
              </h3>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleDepositMock}
                className="flex items-center gap-1.5 px-4 py-2 border border-dark-border hover:border-dark-muted text-white text-xs font-semibold rounded-xl bg-dark-surface hover:bg-dark-surfaceHover transition-colors relative"
                id="deposit-demo-btn"
              >
                <CreditCard size={14} />
                <span>Quick Deposit $50</span>
                <AnimatePresence>
                  {hasDeposited && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald whitespace-nowrap"
                    >
                      +$50.00 Added!
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-white text-black hover:bg-white/90 text-xs font-semibold rounded-xl transition-all" id="add-member-demo-btn">
                <UserPlus size={14} />
                <span>Invite Developer</span>
              </button>
            </div>
          </div>

          {/* Core Telemetry Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Stat 1: Wallet Balance */}
            <div className="p-6 rounded-2xl bg-black/40 border border-dark-border flex items-center justify-between">
              <div>
                <span className="text-xs text-dark-muted uppercase tracking-wider font-semibold">Wallet Balance</span>
                <div className="flex items-baseline gap-0.5 mt-2">
                  <span className="text-3xl font-extrabold text-white">${balance.toFixed(2)}</span>
                </div>
                <span className="text-[10px] text-emerald mt-1 font-medium flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald" /> Auto-recharge Enabled
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-electric/10 border border-electric/20 text-electric">
                <Wallet size={20} />
              </div>
            </div>

            {/* Stat 2: Team Members */}
            <div className="p-6 rounded-2xl bg-black/40 border border-dark-border flex items-center justify-between">
              <div>
                <span className="text-xs text-dark-muted uppercase tracking-wider font-semibold">Active Developers</span>
                <div className="text-3xl font-extrabold text-white mt-2">12</div>
                <span className="text-[10px] text-dark-muted mt-1 font-medium block">
                  4 invitations pending
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-electric/10 border border-electric/20 text-electric">
                <Users size={20} />
              </div>
            </div>

            {/* Stat 3: Month Consumption */}
            <div className="p-6 rounded-2xl bg-black/40 border border-dark-border flex items-center justify-between">
              <div>
                <span className="text-xs text-dark-muted uppercase tracking-wider font-semibold">Usage This Month</span>
                <div className="text-3xl font-extrabold text-white mt-2">$17.42</div>
                <span className="text-[10px] text-emerald mt-1 font-medium flex items-center gap-0.5">
                  <TrendingUp size={12} className="inline" /> 12% lower than budget target
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald/10 border border-emerald/20 text-emerald">
                <Calendar size={20} />
              </div>
            </div>
          </div>

          {/* Grid: Charts + Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Charts panel (7 columns) */}
            <div className="lg:col-span-7 flex flex-col rounded-2xl border border-dark-border bg-black/30 p-6">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-sm font-bold text-white">Consumption Metrics</h4>
                {/* Tabs */}
                <div className="flex gap-1.5 p-1 rounded-lg bg-dark-surface border border-dark-border">
                  {[
                    { id: 'usage', label: 'Usage' },
                    { id: 'providers', label: 'Providers' },
                    { id: 'team', label: 'Team' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as ChartTab)}
                      className={`px-2.5 py-1 text-[10px] font-bold rounded-md transition-all ${
                        activeTab === tab.id
                          ? 'bg-black text-white border border-dark-border'
                          : 'text-dark-muted hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Render */}
              <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-dark-border/40 relative">
                
                {/* Usage Chart View */}
                {activeTab === 'usage' && (
                  <>
                    {[
                      { label: "Mon", value: 30 },
                      { label: "Tue", value: 45 },
                      { label: "Wed", value: 85 },
                      { label: "Thu", value: 60 },
                      { label: "Fri", value: 120 },
                      { label: "Sat", value: 40 },
                      { label: "Sun", value: 95 }
                    ].map((bar) => (
                      <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                        <div className="text-[9px] text-dark-muted opacity-0 group-hover:opacity-100 transition-opacity font-mono font-bold mb-1">${(bar.value/50).toFixed(2)}</div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${(bar.value / 120) * 100}%` }}
                          transition={{ type: 'spring', damping: 15 }}
                          className="w-full bg-electric rounded-t-md hover:bg-electric-bright transition-colors cursor-pointer"
                        />
                        <span className="text-[10px] text-dark-muted mt-1">{bar.label}</span>
                      </div>
                    ))}
                  </>
                )}

                {/* Providers Chart View */}
                {activeTab === 'providers' && (
                  <>
                    {[
                      { label: "OpenAI", value: 65, color: "bg-emerald" },
                      { label: "Claude", value: 110, color: "bg-amber-500" },
                      { label: "Gemini", value: 45, color: "bg-indigo-500" },
                      { label: "Others", value: 20, color: "bg-purple-500" }
                    ].map((bar) => (
                      <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                        <div className="text-[9px] text-dark-muted opacity-0 group-hover:opacity-100 transition-opacity font-mono font-bold mb-1">${(bar.value/10).toFixed(2)}</div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${(bar.value / 120) * 100}%` }}
                          transition={{ type: 'spring', damping: 15 }}
                          className={`w-10 ${bar.color} rounded-t-md cursor-pointer`}
                        />
                        <span className="text-[10px] text-dark-muted mt-1">{bar.label}</span>
                      </div>
                    ))}
                  </>
                )}

                {/* Team Chart View */}
                {activeTab === 'team' && (
                  <>
                    {[
                      { label: "Sarah", value: 90 },
                      { label: "Alex", value: 50 },
                      { label: "Rahul", value: 75 },
                      { label: "Dave", value: 35 },
                      { label: "Others", value: 40 }
                    ].map((bar) => (
                      <div key={bar.label} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                        <div className="text-[9px] text-dark-muted opacity-0 group-hover:opacity-100 transition-opacity font-mono font-bold mb-1">${(bar.value/5).toFixed(2)}</div>
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${(bar.value / 120) * 100}%` }}
                          transition={{ type: 'spring', damping: 15 }}
                          className="w-8 bg-electric rounded-t-md hover:bg-electric-bright transition-colors cursor-pointer"
                        />
                        <span className="text-[10px] text-dark-muted mt-1">{bar.label}</span>
                      </div>
                    ))}
                  </>
                )}

              </div>
              <span className="text-[10px] text-dark-muted mt-4">Showing aggregated team usage log for this week</span>
            </div>

            {/* Right: Recent Transactions (5 columns) */}
            <div className="lg:col-span-5 flex flex-col rounded-2xl border border-dark-border bg-black/30 p-6 h-full justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-bold text-white">Live Transactions</h4>
                  <span className="text-[9px] text-emerald font-semibold uppercase tracking-wider bg-emerald/10 border border-emerald/20 px-2 py-0.5 rounded-md flex items-center gap-1 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald" /> Stream
                  </span>
                </div>

                <div className="space-y-3.5">
                  {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-dark-border/40 bg-dark-surface/10 hover:bg-dark-surface/40 hover:border-dark-border transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full ${tx.color} flex items-center justify-center text-xs font-bold text-white shadow`}>
                          {tx.initial}
                        </div>
                        <div className="text-left">
                          <span className="block text-xs font-bold text-white leading-tight">{tx.name}</span>
                          <span className="block text-[9px] text-dark-muted leading-tight mt-0.5">{tx.model} • {tx.time}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-red-400 font-mono">
                        {tx.amount.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
