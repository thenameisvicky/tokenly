import { useState, useEffect } from 'react';
import { Sparkles, Wallet, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onJoinWaitlist: () => void;
}

export default function Navbar({ onJoinWaitlist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Product', href: '#product' },
    { name: 'Features', href: '#features' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Security', href: '#security' },
    { name: 'Use cases', href: '#use-cases' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/75 backdrop-blur-md border-b border-dark-border py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-electric/20 to-electric border border-electric/30 text-white shadow-lg overflow-hidden">
              <Wallet size={18} className="absolute z-10 transition-transform group-hover:scale-110" />
              <Sparkles size={10} className="absolute top-1.5 right-1.5 text-emerald animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-electric-bright/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-electric transition-colors">
              Tokenly
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-dark-muted hover:text-white transition-colors relative group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-electric transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onJoinWaitlist}
              className="relative px-5 py-2.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-white/90 active:scale-95 transition-all shadow-md"
              id="nav-waitlist-btn"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-dark-muted hover:text-white rounded-lg border border-dark-border hover:bg-dark-surface"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-30 bg-black/95 backdrop-blur-lg border-b border-dark-border py-6 px-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-dark-muted hover:text-white transition-colors py-2 border-b border-dark-border/40"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onJoinWaitlist();
              }}
              className="w-full py-3.5 bg-electric hover:bg-electric-hover text-white font-semibold text-center rounded-xl transition-all shadow-lg"
              id="mobile-nav-waitlist-btn"
            >
              Join Waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
