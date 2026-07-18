"use client";

import { motion } from 'framer-motion';
import { Code2, GraduationCap, Trophy, Rocket, UserCheck, Users } from 'lucide-react';

export default function Trust() {
  const targets = [
    { icon: <Code2 size={24} />, name: 'Developers', desc: 'Code with Claude & GPT without personal cards' },
    { icon: <GraduationCap size={24} />, name: 'Students', desc: 'Learn and experiment with AI safely' },
    { icon: <Trophy size={24} />, name: 'Hackathons', desc: 'Spin up a team budget in less than 30 seconds' },
    { icon: <Rocket size={24} />, name: 'Startups', desc: 'Avoid leaking API keys across dev environments' },
    { icon: <UserCheck size={24} />, name: 'Freelancers', desc: 'Let clients fund exact AI model usage' },
    { icon: <Users size={24} />, name: 'AI Teams', desc: 'Distribute allowances with granular control' }
  ];

  return (
    <section className="py-20 border-y border-dark-border/40 bg-black" id="trust">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Headline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-widest text-electric mb-3"
        >
          Target Audience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-16"
        >
          Built for people who build with AI.
        </motion.h2>

        {/* Clean Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {targets.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 rounded-2xl glass-panel border border-dark-border/60 text-center hover:border-electric/30 hover:bg-dark-surface/40 transition-all duration-300 group"
            >
              <div className="mb-4 p-3.5 rounded-xl bg-dark-surface border border-dark-border text-dark-muted group-hover:text-electric group-hover:border-electric/20 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{item.name}</h3>
              <p className="text-[11px] text-dark-muted leading-relaxed max-w-[140px]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
