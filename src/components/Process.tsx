"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const stepIcons = [
  <svg key="call" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>,
  <svg key="doc" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>,
  <svg key="building" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>,
  <svg key="money" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="rocket" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
];

export default function Process() {
  const { t, language } = useI18n();

  const steps = language === "en" ? [
    { step: 1, title: "Free Strategy Call", duration: "30 min", description: "We assess your needs, check grant eligibility, and map your Singapore timeline." },
    { step: 2, title: "Documentation", duration: "Days 1-5", description: "We prepare incorporation papers. You just sign - we handle everything else." },
    { step: 3, title: "Incorporation", duration: "Days 6-14", description: "ACRA registration, corporate bank account, registered office address." },
    { step: 4, title: "Grant Matching", duration: "Days 15-25", description: "AI-matched grant applications submitted. Average match: SGD 280K." },
    { step: 5, title: "Launch", duration: "Day 30", description: "You're live in Singapore with funding pipeline active." },
  ] : [
    { step: 1, title: "Chiamata Strategica", duration: "30 min", description: "Valutiamo le tue esigenze, verifichiamo l'idoneità ai grant e pianifichiamo la tua timeline per Singapore." },
    { step: 2, title: "Documentazione", duration: "Giorni 1-5", description: "Prepariamo le pratiche di incorporazione. Tu firmi - noi gestiamo tutto il resto." },
    { step: 3, title: "Incorporazione", duration: "Giorni 6-14", description: "Registrazione ACRA, conto bancario corporate, indirizzo sede legale." },
    { step: 4, title: "Grant Matching", duration: "Giorni 15-25", description: "Domande grant abbinate con AI inviate. Media match: SGD 280K." },
    { step: 5, title: "Lancio", duration: "Giorno 30", description: "Sei operativo a Singapore con pipeline di finanziamento attiva." },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-navy-800" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.process.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.process.title1}</span>
            <br />
            <span className="text-gradient">{t.process.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400">
            {t.process.subtitle}
          </p>
        </motion.div>

        {/* Mobile: Vertical Timeline */}
        <div className="relative">
          {/* Vertical line - hidden on smallest screens */}
          <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500 via-electric-500/50 to-transparent hidden sm:block" />

          <div className="space-y-4 sm:space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative flex gap-4 sm:gap-6 lg:gap-8 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Step number circle */}
                <div className="relative z-10 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-navy-900 border-2 border-electric-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-electric-500/20">
                  <span className="text-electric-400 font-bold text-sm sm:text-xl">{step.step}</span>
                </div>

                {/* Content card */}
                <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex-1 group hover:bg-white/[0.06] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2 sm:mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-electric-500/10 flex items-center justify-center text-electric-400 group-hover:bg-electric-500/20 transition-colors">
                        {stepIcons[index]}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">{step.title}</h3>
                    </div>
                    <span className="inline-flex self-start sm:self-auto px-2.5 sm:px-3 py-0.5 sm:py-1 bg-electric-500/10 text-electric-400 text-xs sm:text-sm rounded-full font-medium">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-0 sm:pl-[52px]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 inline-block">
            <p className="text-white text-base sm:text-lg font-medium mb-4">
              {language === "en" ? "Ready to start your 30-day journey?" : "Pronto per iniziare il tuo percorso di 30 giorni?"}
            </p>
            <motion.a
              href="/apply"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-electric-500 text-white font-semibold rounded-full text-sm sm:text-base shadow-lg shadow-electric-500/25 animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.ctaPrimary}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
