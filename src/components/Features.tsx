import { motion } from 'framer-motion';
import { 
  Wallet, GraduationCap, BarChart3, Send, Cpu, Code2, Settings, BellRing 
} from 'lucide-react';

export default function Features() {
  const featureGroups = [
    {
      title: "AI Credit Wallets",
      desc: "Flexible wallet configurations to mirror your team structure.",
      icon: <Wallet size={20} className="text-electric" />,
      bullets: ["Team & Shared Wallets", "Personal Member Budgets", "Isolated Project Allocations", "Group Cost Splitting"]
    },
    {
      title: "Smart Allowances",
      desc: "Dynamic parameters to control how and when credits are used.",
      icon: <GraduationCap size={20} className="text-electric" />,
      bullets: ["Student Allowances", "Contractor Credits", "Hackathon Budgets", "Temporary Access Invites"]
    },
    {
      title: "Real-time Tracking",
      desc: "Live cost logging with immediate feedback loop.",
      icon: <BarChart3 size={20} className="text-electric" />,
      bullets: ["Live Token Counter", "Real-time Balance Deductions", "Daily & Monthly Limits", "Custom Spending Alerts"]
    },
    {
      title: "Approval Flow",
      desc: "Empower devs to request extra credits smoothly.",
      icon: <Send size={20} className="text-electric" />,
      bullets: ["Credit Top-up Requests", "One-click Admin Approval", "Detailed Transaction History", "Auto-recharge Thresholds"]
    },
    {
      title: "Unified Gateway Proxy",
      desc: "A single gateway for all major foundation models.",
      icon: <Cpu size={20} className="text-electric" />,
      bullets: ["OpenAI, Claude & Gemini", "Mistral, Groq & OpenRouter", "Unified API Endpoint", "No Shared Secret Exposure"]
    },
    {
      title: "Developer First",
      desc: "Native tools for seamless developer workflows.",
      icon: <Code2 size={20} className="text-electric" />,
      bullets: ["Official Tokenly SDKs", "Robust Developer API", "Full CLI & Webhook Support", "Exportable Cost Reports"]
    },
    {
      title: "Admin Controls",
      desc: "Granular permissions and system parameters.",
      icon: <Settings size={20} className="text-electric" />,
      bullets: ["Granular Team Permissions", "Instant Quota Revocation", "Invite Expiry Limits", "Audit Logs & Security Paths"]
    },
    {
      title: "Connected Experience",
      desc: "Stay aligned across all interfaces and tools.",
      icon: <BellRing size={20} className="text-electric" />,
      bullets: ["Slack & Discord Alerts", "Responsive Mobile Dashboard", "Native Dark-Mode UI", "Weekly Budget Analytics"]
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Powerful Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Everything you need to manage AI spending.
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            From instant credit allocation to secure proxy routes, Tokenly gives engineering managers and founders total peace of mind.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-6 rounded-3xl bg-dark-surface/40 border border-dark-border hover:border-electric/30 hover:bg-dark-surface/75 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-dark-surface border border-dark-border text-electric group-hover:bg-electric/10 group-hover:border-electric/25 transition-all">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-bold text-white leading-tight">{group.title}</h3>
                </div>
                
                <p className="text-xs text-dark-muted mb-6 leading-relaxed">
                  {group.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {group.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-xs text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric/80" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
