"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Footer from "@/components/Footer";

export default function SingaporeGuidePage() {
  const { t, language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  return (
    <main className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
              <span className="text-white">IS</span>
              <span className="text-electric-500">SA</span>
            </Link>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base">{language === "en" ? "🇬🇧" : "🇮🇹"}</span>
                <span className="uppercase hidden sm:inline">{language}</span>
              </motion.button>
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="hidden sm:inline">{t.apply.backToHome}</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              {t.singaporeGuide.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-white">{t.singaporeGuide.title1}</span>
              <br />
              <span className="text-gradient">{t.singaporeGuide.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
              {t.singaporeGuide.subtitle}
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            className="glass rounded-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-4">
              {language === "en" ? "Table of Contents" : "Indice"}
            </h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {t.singaporeGuide.sections.map((section, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-gray-400 hover:text-electric-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-6 h-6 rounded-full bg-electric-500/10 text-electric-400 text-xs flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {t.singaporeGuide.sections.map((section, index) => (
              <motion.div
                key={index}
                id={`section-${index}`}
                className="glass-strong rounded-3xl p-6 sm:p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-electric-500/20 text-electric-400 font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 ml-14">
                  {section.content}
                </p>
                {section.items && section.items.length > 0 && (
                  <ul className="ml-14 space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-gray-300">
                        <svg className="w-5 h-5 text-electric-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                {t.singaporeGuide.ctaTitle}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {t.singaporeGuide.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-electric-500/25"
                  >
                    {t.singaporeGuide.ctaButton}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
                <motion.a
                  href="https://www.grantsg.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 glass text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.footer.ctaSecondary}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
