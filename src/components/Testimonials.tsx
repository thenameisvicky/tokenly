import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Tokenly made our hackathon team setup instant. We deposited $100 and invited everyone via Discord. Zero key management overhead and we won the track!",
      author: "Marcus Aurelius",
      role: "Student & Hackathon Lead",
      avatar: "MA",
      color: "bg-indigo-500"
    },
    {
      quote: "Finally I can give AI access without exposing my keys. I gave my offshore frontend contractor a $30 limit. He got to code and I got peace of mind.",
      author: "Jane Foster",
      role: "SaaS Founder",
      avatar: "JF",
      color: "bg-pink-500"
    },
    {
      quote: "Perfect for small AI-first teams. We used to share a single credit card across 5 OpenAI developer accounts. Tokenly saved us at least 4 hours of statement reconciliation every month.",
      author: "Vikram Nair",
      role: "AI Agency Director",
      avatar: "VN",
      color: "bg-yellow-500"
    },
    {
      quote: "No enterprise contracts or heavy billing setups. We are 4 open-source developers building a new IDE. Tokenly is exactly what we needed to share API credit pools.",
      author: "Sarah Jenkins",
      role: "Core Contributor",
      avatar: "SJ",
      color: "bg-emerald-500"
    },
    {
      quote: "I teach LLM classes. Tokenly lets me give $5 allowances to students. I don't have to worry about anyone running up heavy charges on my credit cards.",
      author: "Professor Lee",
      role: "Computer Science Dept",
      avatar: "PL",
      color: "bg-purple-500"
    },
    {
      quote: "Setting up a proxy wrapper used to take a afternoon of work. With Tokenly, we connected our API keys and got developer-level logging in 10 seconds flat.",
      author: "Rahul Varma",
      role: "Backend Architect",
      avatar: "RV",
      color: "bg-blue-500"
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black border-t border-dark-border/40" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Client Success
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Loved by developers.<br />Trusted by founders.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            See what students, software creators, and startup builders are saying about Tokenly.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="p-8 rounded-3xl bg-dark-surface/30 border border-dark-border/60 hover:border-electric/30 hover:bg-dark-surface/60 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-8 text-dark-border/40 group-hover:text-electric/10 transition-colors" size={32} />
              
              <div>
                <p className="text-sm text-white/90 leading-relaxed mb-8 relative z-10 italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-dark-border/40 pt-4">
                <div className={`w-8.5 h-8.5 rounded-full ${test.color} flex items-center justify-center text-xs font-bold text-white shadow`}>
                  {test.avatar}
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white leading-tight">{test.author}</span>
                  <span className="block text-[10px] text-dark-muted leading-tight mt-0.5">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
