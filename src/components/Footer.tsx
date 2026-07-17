import { Wallet, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: 'Product', href: '#product' },
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Docs', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-dark-border/40 py-16 text-dark-muted">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2.5">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-electric/20 to-electric border border-electric/30 text-white shadow-lg overflow-hidden">
              <Wallet size={14} className="absolute z-10" />
              <Sparkles size={8} className="absolute top-1 right-1 text-emerald animate-pulse" />
            </div>
            <span className="text-base font-bold tracking-tight text-white group-hover:text-electric transition-colors">
              Tokenly
            </span>
          </a>
          <span className="text-xs text-dark-muted font-medium text-center md:text-left max-w-xs leading-relaxed">
            An AI credit wallet for short / smart teams.
          </span>
        </div>

        {/* Links Column */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-dark-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <span className="text-[10px] block font-mono">
            &copy; {currentYear} Tokenly Inc. All rights reserved.
          </span>
          <span className="text-[9px] block text-dark-muted/60 mt-1 font-mono">
            Low-latency proxy gateway. Designed in California.
          </span>
        </div>

      </div>
    </footer>
  );
}
