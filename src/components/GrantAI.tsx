"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const sectors = {
  en: ["Fintech", "Blockchain", "AI & ML", "Deep Tech", "Green Energy", "Healthcare"],
  it: ["Fintech", "Blockchain", "AI & ML", "Deep Tech", "Green Energy", "Healthcare"]
};

export default function GrantAI() {
  const { language } = useI18n();
  const [currentSector, setCurrentSector] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const sectorList = sectors[language];
    const sector = sectorList[currentSector];
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
          setCurrentSector((prev) => (prev + 1) % sectorList.length);
          setIsTyping(true);
        }
      }, 50);
      return () => clearInterval(deletingInterval);
    }
  }, [currentSector, isTyping, language]);

  const content = language === "en" ? {
    badge: "AI-Powered Matching",
    title1: "Stop Searching for Grants.",
    title2: "Get Matched in 60 Seconds.",
    subtitle: "Our proprietary algorithm instantly matches your business profile with active Singaporean government grants, tax incentives, and private equity opportunities.",
    features: [
      "Match with SGD 700K+ in grants you actually qualify for",
      "Know your eligibility score before you waste weeks on applications",
      "Direct introductions to VCs who've funded 47+ Italian startups",
    ],
    cta: "Try Free Grant Tool",
    inputLabel: "Enter your startup sector...",
    matching: "Matching opportunities:",
    getFullAnalysis: "Get Full Analysis",
  } : {
    badge: "Matching Potenziato da AI",
    title1: "Smetti di Cercare Grant.",
    title2: "Trova Match in 60 Secondi.",
    subtitle: "Il nostro algoritmo proprietario abbina istantaneamente il tuo profilo aziendale con grant governativi singaporiani attivi, incentivi fiscali e opportunità di private equity.",
    features: [
      "Match con oltre 700K SGD in grant per cui sei effettivamente idoneo",
      "Conosci il tuo punteggio di idoneità prima di perdere settimane in domande",
      "Introduzioni dirette a VC che hanno finanziato 47+ startup italiane",
    ],
    cta: "Prova Grant Tool Gratis",
    inputLabel: "Inserisci il settore della tua startup...",
    matching: "Opportunità in matching:",
    getFullAnalysis: "Ottieni Analisi Completa",
  };

  return (
    <section id="grant-ai" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              {content.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
              <span className="text-white">{content.title1}</span>
              <br />
              <span className="text-gradient">{content.title2}</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              {content.subtitle}
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-electric-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-electric-500"
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
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://www.grantsg.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-electric-500 text-white font-semibold rounded-full text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta}
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
            className="relative order-1 lg:order-2"
          >
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 gradient-border">
              {/* Mock UI header */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                <span className="ml-2 sm:ml-4 text-gray-500 text-xs sm:text-sm truncate">grant-ai.issa.network</span>
              </div>

              {/* Search input */}
              <div className="mb-4 sm:mb-6">
                <label className="text-xs sm:text-sm text-gray-400 mb-2 block">
                  {content.inputLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={displayText}
                    readOnly
                    className="w-full bg-navy-900/50 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-3 sm:py-4 text-white text-base sm:text-lg focus:outline-none focus:border-electric-500 transition-colors"
                    placeholder="Your sector..."
                  />
                  <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-0.5 h-5 sm:h-6 bg-electric-500 animate-blink" />
                </div>
              </div>

              {/* Results preview */}
              <div className="space-y-2 sm:space-y-3">
                <div className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">{content.matching}</div>
                {[
                  { name: "EDB Startup SG Tech", amount: "Up to SGD 500K", match: "94%" },
                  { name: "Enterprise Singapore Grant", amount: "Up to SGD 200K", match: "87%" },
                  { name: "MAS FinTech Scheme", amount: "Equity Matching", match: "82%" },
                ].map((grant, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 sm:p-4 bg-navy-900/30 rounded-lg sm:rounded-xl border border-white/5"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="min-w-0 flex-1 mr-3">
                      <div className="text-white font-medium text-sm sm:text-base truncate">{grant.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{grant.amount}</div>
                    </div>
                    <div className="text-electric-400 font-bold text-sm sm:text-base flex-shrink-0">{grant.match}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="w-full mt-4 sm:mt-6 py-3 sm:py-4 bg-electric-500 text-white font-semibold rounded-lg sm:rounded-xl text-sm sm:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {content.getFullAnalysis}
              </motion.button>
            </div>

            {/* Decorative elements - hidden on mobile */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-electric-500/20 rounded-full blur-2xl hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-20 sm:w-32 h-20 sm:h-32 bg-electric-500/10 rounded-full blur-2xl hidden sm:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
