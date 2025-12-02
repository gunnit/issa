"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { guides } from "@/lib/guides-data";
import Footer from "@/components/Footer";

const iconMap: Record<string, React.ReactNode> = {
  building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  calculator: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  gift: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  bank: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l9-4 9 4v2H3V6zm0 4h18v2H3v-2zm2 4h2v6H5v-6zm4 0h2v6H9v-6zm4 0h2v6h-2v-6zm4 0h2v6h-2v-6zM3 22h18" />
    </svg>
  ),
  visa: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    </svg>
  ),
  office: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  compliance: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ip: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  checklist: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
};

export default function GuidesPage() {
  const { t, language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  const content = language === "en" ? {
    badge: "Free Resources",
    title1: "Singapore Business",
    title2: "Guides for Italians",
    subtitle: "Comprehensive, SEO-optimized guides covering everything you need to know about starting and running a business in Singapore.",
    readTime: "read",
    viewGuide: "Read Guide",
    categories: {
      all: "All Guides",
      setup: "Company Setup",
      finance: "Finance & Tax",
      legal: "Legal & Compliance",
      growth: "Growth & Expansion"
    },
    ctaTitle: "Need Personalized Help?",
    ctaSubtitle: "Our Italian-speaking experts can guide you through every step of your Singapore expansion.",
    ctaButton: "Book Free Consultation"
  } : {
    badge: "Risorse Gratuite",
    title1: "Guide Business Singapore",
    title2: "per Italiani",
    subtitle: "Guide complete e ottimizzate SEO che coprono tutto quello che devi sapere per avviare e gestire un'azienda a Singapore.",
    readTime: "lettura",
    viewGuide: "Leggi Guida",
    categories: {
      all: "Tutte le Guide",
      setup: "Setup Aziendale",
      finance: "Finanza & Tasse",
      legal: "Legale & Compliance",
      growth: "Crescita & Espansione"
    },
    ctaTitle: "Hai Bisogno di Aiuto Personalizzato?",
    ctaSubtitle: "I nostri esperti italiani possono guidarti in ogni fase della tua espansione a Singapore.",
    ctaButton: "Prenota Consulenza Gratuita"
  };

  return (
    <main className="min-h-screen bg-navy-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/ISSA_FULL_LOGO.png"
                alt="ISSA - Italy Singapore Startup Agency"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
                priority
              />
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              {content.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-white">{content.title1}</span>
              <br />
              <span className="text-gradient">{content.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
              {content.subtitle}
            </p>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={guide.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block h-full glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Category badge */}
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-electric-400 bg-electric-500/10 rounded-full">
                    {language === "en" ? guide.category : guide.categoryIt}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center text-electric-400 mb-4">
                    {iconMap[guide.icon] || iconMap.building}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-electric-400 transition-colors">
                    {language === "en" ? guide.title : guide.titleIt}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {language === "en" ? guide.description : guide.descriptionIt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500">
                      {guide.readTime} {content.readTime}
                    </span>
                    <span className="text-sm font-medium text-electric-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                      {content.viewGuide}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                {content.ctaTitle}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                {content.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/apply"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-electric-500/25"
                  >
                    {content.ctaButton}
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
