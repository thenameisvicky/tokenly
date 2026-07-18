"use client";

import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Rocket, Briefcase, Building2, Globe } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      title: "Hackathons",
      tagline: "One AI budget for the whole team.",
      desc: "Distribute a single deposit across developers in seconds. Never run out of tokens or hit rate limits on presentation day.",
      icon: <Trophy className="text-electric" size={22} />
    },
    {
      title: "Students",
      tagline: "Learn AI without managing billing.",
      desc: "Get school or club allocations safely. Learn AI models without link cards, overdraft risks, or complex token bills.",
      icon: <GraduationCap className="text-electric" size={22} />
    },
    {
      title: "Startups",
      tagline: "Give every developer controlled access.",
      desc: "Equip your engineering squad with controlled models. Scale limits up or down according to environment variables and tasks.",
      icon: <Rocket className="text-electric" size={22} />
    },
    {
      title: "Freelancers",
      tagline: "Let clients fund AI usage.",
      desc: "Create an isolated wallet for each client project. Let clients deposit funds directly, ensuring you never pay for their AI usage.",
      icon: <Briefcase className="text-electric" size={22} />
    },
    {
      title: "Agencies",
      tagline: "Manage AI costs across projects.",
      desc: "Structure separate sub-wallets for various client contracts. Track developer consumption per project for accurate billing.",
      icon: <Building2 className="text-electric" size={22} />
    },
    {
      title: "Open Source",
      tagline: "Fund contributors with AI credits.",
      desc: "Reward project contributors by gifting them AI tokens. Set expiry limits to manage community grant usage effectively.",
      icon: <Globe className="text-electric" size={22} />
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black border-t border-dark-border/40" id="use-cases">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Flexible Applications
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Designed for every builder setup.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            Whether you are building open-source plugins, hacking at a weekend event, or scaling a tech startup, Tokenly keeps things clean.
          </p>
        </div>

        {/* Use Case Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-dark-surface/30 border border-dark-border/60 hover:border-electric/30 hover:bg-dark-surface/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-xl bg-dark-surface border border-dark-border text-electric group-hover:bg-electric/10 group-hover:border-electric/25 transition-all">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">{useCase.title}</h3>
                </div>
                <h4 className="text-sm font-semibold text-white/90 mb-3">{useCase.tagline}</h4>
                <p className="text-xs text-dark-muted leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
