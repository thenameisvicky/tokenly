import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Security",
      keys: "Exposed raw strings in local files or Slack.",
      tokenly: "Masked via low-latency secure proxy gateway.",
      isSafe: true
    },
    {
      feature: "Budget Control",
      keys: "Uncapped. A runaway loop can drain $10k in a night.",
      tokenly: "Strict limits (daily / monthly / custom allowances).",
      isSafe: true
    },
    {
      feature: "Usage Tracking",
      keys: "Combined bill. Impossible to see who spent what.",
      tokenly: "Real-time telemetry per individual developer.",
      isSafe: true
    },
    {
      feature: "Team Management",
      keys: "Rotating keys requires updating all local environments.",
      tokenly: "Invite or revoke developers instantly with one tap.",
      isSafe: true
    },
    {
      feature: "Temporary Access",
      keys: "Hard to share temporarily with contractors or partners.",
      tokenly: "Generate links that auto-expire after 24 hours.",
      isSafe: true
    },
    {
      feature: "Credit Allocation",
      keys: "Uncapped, all-or-nothing key sharing.",
      tokenly: "Distribute preset limits ($5, $20, $50) instantly.",
      isSafe: true
    },
    {
      feature: "Multiple Providers",
      keys: "Separate credit cards & dashboards for OpenAI, Claude, etc.",
      tokenly: "Single wallet proxy for all major LLM backends.",
      isSafe: true
    },
    {
      feature: "Analytics",
      keys: "Consolidated monthly billing statement only.",
      tokenly: "Real-time cost & model usage charts.",
      isSafe: true
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black relative" id="comparison">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-electric-glow blur-[140px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Competitive Analysis
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Better than sharing keys.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            Compare how Tokenly stacks up against traditional, risky developer workflows.
          </p>
        </div>

        {/* Desktop Table Mockup */}
        <div className="overflow-x-auto rounded-3xl border border-dark-border bg-dark-surface/10 shadow-2xl glass-panel">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-dark-border/60 bg-dark-surface/50 text-xs font-bold text-dark-muted uppercase tracking-wider">
                <th className="py-5 px-6">Feature</th>
                <th className="py-5 px-6">Shared API Keys</th>
                <th className="py-5 px-6 text-white">Tokenly Experience</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border/40 text-sm">
              {comparisonData.map((row, idx) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="hover:bg-dark-surface/20 transition-colors"
                >
                  {/* Feature */}
                  <td className="py-5 px-6 font-bold text-white leading-tight">
                    {row.feature}
                  </td>
                  {/* Shared API keys */}
                  <td className="py-5 px-6 text-dark-muted flex items-start gap-2.5">
                    <span className="text-red-400 font-bold text-base leading-none select-none shrink-0">&times;</span>
                    <span className="text-xs leading-relaxed">{row.keys}</span>
                  </td>
                  {/* Tokenly */}
                  <td className="py-5 px-6 text-white font-medium bg-electric/5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald/15 border border-emerald/20 text-emerald flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} />
                      </div>
                      <span className="text-xs leading-relaxed text-white/95">{row.tokenly}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
