"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

export default function GuidesBanner() {
  const { language } = useI18n();

  const content = language === "en" ? {
    badge: "Free Resources",
    title1: "Everything You Need to Know About",
    title2: "Singapore Business",
    subtitle: "11 comprehensive guides covering company incorporation, tax benefits, grants, banking, work passes, and more.",
    cta: "Explore All Guides",
    features: [
      "Company Formation",
      "Tax & Banking",
      "Grants & Funding",
      "Work Passes"
    ]
  } : {
    badge: "Risorse Gratuite",
    title1: "Tutto Quello Che Devi Sapere su",
    title2: "Business a Singapore",
    subtitle: "11 guide complete che coprono incorporazione aziendale, benefici fiscali, grant, banche, permessi di lavoro e altro.",
    cta: "Esplora Tutte le Guide",
    features: [
      "Costituzione Azienda",
      "Tasse & Banche",
      "Grant & Finanziamenti",
      "Permessi di Lavoro"
    ]
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800/50 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-electric-500/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left content */}
            <div>
              <motion.span
                className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {content.badge}
              </motion.span>

              <motion.h2
                className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">{content.title1}</span>
                <br />
                <span className="text-gradient">{content.title2}</span>
              </motion.h2>

              <motion.p
                className="text-gray-400 text-sm sm:text-base mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {content.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 hover:bg-electric-400 text-white font-semibold rounded-full text-sm sm:text-base transition-colors shadow-lg shadow-electric-500/25"
                >
                  {content.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right content - Feature cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {content.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-xl p-4 sm:p-5 text-center hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-electric-500/20 flex items-center justify-center text-electric-400 mx-auto mb-3">
                    {index === 0 && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white text-xs sm:text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
