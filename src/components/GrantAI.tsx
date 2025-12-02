"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sectors = ["Fintech", "Blockchain", "AI & ML", "Deep Tech", "Green Energy", "Healthcare"];

export default function GrantAI() {
  const [currentSector, setCurrentSector] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const sector = sectors[currentSector];
    let charIndex = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (charIndex <= sector.length) {
          setDisplayText(sector.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setIsTyping(false), 1500);
        }
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      const deletingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setDisplayText(sector.slice(0, charIndex));
          charIndex--;
        } else {
          clearInterval(deletingInterval);
          setCurrentSector((prev) => (prev + 1) % sectors.length);
          setIsTyping(true);
        }
      }, 50);
      return () => clearInterval(deletingInterval);
    }
  }, [currentSector, isTyping]);

  return (
    <section id="grant-ai" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              AI-Powered Matching
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-white">Meet </span>
              <span className="text-gradient">Grant AI</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our proprietary algorithm instantly matches your business profile with active
              Singaporean government grants, tax incentives, and private equity opportunities.
              Stop searching. Start receiving.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Real-time matching with 200+ active grant programs",
                "Personalized eligibility assessment in seconds",
                "Direct connection to verified investment opportunities",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-electric-500/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-electric-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.grantsg.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 text-white font-semibold rounded-full animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Free Grant Tool
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right - Interactive demo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 gradient-border">
              {/* Mock UI header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-gray-500 text-sm">grant-ai.issa.network</span>
              </div>

              {/* Search input */}
              <div className="mb-6">
                <label className="text-sm text-gray-400 mb-2 block">
                  Enter your startup sector...
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={displayText}
                    readOnly
                    className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-4 text-white text-lg focus:outline-none focus:border-electric-500 transition-colors"
                    placeholder="Your sector..."
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-electric-500 animate-blink" />
                </div>
              </div>

              {/* Results preview */}
              <div className="space-y-3">
                <div className="text-sm text-gray-400 mb-3">Matching opportunities:</div>
                {[
                  { name: "EDB Startup SG Tech", amount: "Up to SGD 500K", match: "94%" },
                  { name: "Enterprise Singapore Grant", amount: "Up to SGD 200K", match: "87%" },
                  { name: "MAS FinTech Scheme", amount: "Equity Matching", match: "82%" },
                ].map((grant, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-navy-900/30 rounded-xl border border-white/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div>
                      <div className="text-white font-medium">{grant.name}</div>
                      <div className="text-sm text-gray-500">{grant.amount}</div>
                    </div>
                    <div className="text-electric-400 font-bold">{grant.match}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="w-full mt-6 py-4 bg-electric-500 text-white font-semibold rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Full Analysis
              </motion.button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-electric-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
