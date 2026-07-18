"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, Key, CreditCard, Landmark } from 'lucide-react';

export default function Problem() {
  const cards = [
    {
      title: "Sharing API Keys",
      subtitle: "The Developer Secret Leak",
      problems: [
        "No usage control / quota limit",
        "Hard to revoke without breaking apps",
        "Significant security risk if leaked",
        "Zero individual spending limit tracking"
      ],
      icon: <Key className="text-red-400" size={20} />,
      visual: (
        <div className="relative h-28 bg-black/40 border border-dark-border rounded-xl p-3 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-dark-muted border-b border-dark-border/40 pb-2">
            <span>sk-proj-492a...f92b</span>
            <span className="text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded font-mono font-bold">Unsecured</span>
          </div>
          <div className="flex gap-2 my-auto items-center justify-center">
            <span className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center text-[10px] font-bold">A</span>
            <span className="text-[10px] text-dark-muted font-bold">&rarr;</span>
            <span className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center text-[10px] font-bold">B</span>
            <span className="text-[10px] text-dark-muted font-bold">&rarr;</span>
            <span className="w-6 h-6 rounded-full bg-red-400/20 flex items-center justify-center text-[10px] font-bold">C</span>
          </div>
          <span className="text-[9px] text-center text-red-400/80 font-medium">"Shared in Discord / Slack channels"</span>
          <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
        </div>
      )
    },
    {
      title: "Sharing One Credit Card",
      subtitle: "The Billing Admin Nightmare",
      problems: [
        "No individual account ownership",
        "Zero live visibility of model spending",
        "Nightmare to reconcile card statements",
        "Constant card lockouts & safety holds"
      ],
      icon: <CreditCard className="text-red-400" size={20} />,
      visual: (
        <div className="relative h-28 bg-black/40 border border-dark-border rounded-xl p-3 flex flex-col justify-between overflow-hidden">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-dark-muted font-bold">Corporate Visa</span>
            <AlertTriangle size={12} className="text-red-400" />
          </div>
          <div className="font-mono text-xs tracking-wider text-center text-white/80 my-1">
            **** **** **** 8820
          </div>
          <div className="flex justify-between items-center text-[9px] text-dark-muted">
            <span>EXP 08/29</span>
            <span className="text-red-400 font-bold bg-red-400/10 px-1.5 py-0.5 rounded">6 Active Logins</span>
          </div>
          <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
        </div>
      )
    },
    {
      title: "Enterprise AI Plans",
      subtitle: "The Budget Drainer",
      problems: [
        "Prohibitively expensive seat licenses",
        "Complicated enterprise integration setup",
        "Built for fortune-500, not fast teams",
        "Slow contract negotiation & sales calls"
      ],
      icon: <Landmark className="text-red-400" size={20} />,
      visual: (
        <div className="relative h-28 bg-black/40 border border-dark-border rounded-xl p-3 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between text-[10px] text-dark-muted">
            <span>Enterprise SLA</span>
            <span className="text-red-400 font-bold">$12,000/yr</span>
          </div>
          {/* Complicated grid lines graph */}
          <div className="w-full h-8 flex gap-1 items-end mt-1 opacity-60">
            {[20, 45, 15, 60, 30, 80, 50, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-red-400/30 rounded-t" style={{ height: `${h}%` }} />
            ))}
          </div>
          <span className="text-[8px] text-center text-dark-muted">Requires 12-month commitment & sales demo</span>
          <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
        </div>
      )
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black bg-grid-pattern relative" id="problem">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3 block"
          >
            The Current Friction
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            AI access is still too complicated.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-dark-muted leading-relaxed"
          >
            Sharing AI resources shouldn't mean exposing passwords, risking high charges, or paying thousands of dollars for heavy enterprise tools.
          </motion.p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-dark-surface/50 border border-dark-border flex flex-col justify-between hover:border-red-500/20 hover:bg-dark-surface/80 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Alert indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-colors" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-red-950/30 border border-red-500/20">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{card.title}</h3>
                    <span className="text-xs text-dark-muted font-medium">{card.subtitle}</span>
                  </div>
                </div>

                {/* Simulated UI Visual */}
                <div className="mb-6">
                  {card.visual}
                </div>

                {/* Problem bullet points */}
                <ul className="space-y-3.5 mb-8">
                  {card.problems.map((prob) => (
                    <li key={prob} className="flex items-start gap-2.5 text-sm text-dark-muted">
                      <span className="text-red-400 font-bold text-base leading-none select-none mt-0.5">&times;</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-dark-border/40"
        >
          <p className="text-xl font-medium text-white flex items-center justify-center gap-2">
            <span>Small teams need a simple AI wallet.</span>
            <span className="inline-flex py-1 px-2 text-xs bg-emerald/10 border border-emerald/20 text-emerald rounded-lg">Enter Tokenly &rarr;</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
