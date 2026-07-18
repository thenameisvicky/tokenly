"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-dark-border/60 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-left focus:outline-none group"
      >
        <span className="text-base font-bold text-white group-hover:text-electric transition-colors leading-tight">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-dark-muted group-hover:text-white shrink-0 ml-4"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-dark-muted leading-relaxed pb-4 pt-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Tokenly?",
      answer: "Tokenly is an AI credit wallet that lets small teams share and manage model spending without exposing cards or API keys. Think of it like Google Pay + Stripe but built specifically for AI developers and builders."
    },
    {
      question: "Who is Tokenly for?",
      answer: "Tokenly is perfect for hackathon groups, computer science students, startup teams, freelancers, AI agencies, and open-source projects where multiple people need access to foundation models without individual billing setups."
    },
    {
      question: "Do users share API keys?",
      answer: "No. Upstream API keys are stored securely in our encrypted vaults. Developers are issued scoped Tokenly credentials (or utilize our proxy client) which enforces limit thresholds without exposing raw secrets."
    },
    {
      question: "How are credits tracked?",
      answer: "When a developer sends a query through the Tokenly gateway proxy, we log the model, compute the input/output tokens in real-time, debit the user's specific allocation balance, and update the transaction timeline."
    },
    {
      question: "Can I set spending limits?",
      answer: "Yes, absolutely. Admins can configure precise allowances (e.g. $5, $20, $50) or set daily and monthly spending limits. Once a developer hits their limit, their queries stop until top-up approval."
    },
    {
      question: "Can I revoke access?",
      answer: "Yes. From your dashboard, you can instantly revoke credentials or remove team members with a single click. Their access through the gateway proxy is immediately disabled."
    },
    {
      question: "Which AI models work?",
      answer: "We support OpenAI (GPT models), Anthropic (Claude), Google (Gemini), Mistral, Groq, OpenRouter, Together AI, Cohere, DeepSeek, and custom API-compatible endpoints. One proxy gateway covers them all."
    },
    {
      question: "Can teams split costs?",
      answer: "Yes. Tokenly supports group sub-wallets where cost logs are aggregated. Members can contribute to a single pool, or founders can allocate isolated sub-allowances for project tracking."
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-black relative" id="faq">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-electric-glow blur-[120px] rounded-full pointer-events-none opacity-20" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-electric mb-3 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-dark-muted leading-relaxed">
            Everything you need to know about the Tokenly platform.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-dark-border/60">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
