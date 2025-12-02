"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const { t, language, setLanguage } = useI18n();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    setIsSubscribed(true);
    setEmail("");
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
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              {t.blog.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-white">{t.blog.title1} </span>
              <span className="text-gradient">{t.blog.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
              {t.blog.subtitle}
            </p>
          </motion.div>

          {/* Category Pills */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t.blog.categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-electric-500 text-white"
                    : "glass text-gray-300 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Coming Soon Card */}
          <motion.div
            className="glass-strong rounded-3xl p-8 sm:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Decorative Icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-electric-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
              {t.blog.comingSoon}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              {t.blog.comingSoonText}
            </p>

            {/* Email Subscription Form */}
            {isSubscribed ? (
              <motion.div
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 text-green-400 rounded-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">
                  {language === "en" ? "You're on the list!" : "Sei nella lista!"}
                </span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.blog.emailPlaceholder}
                  required
                  className="flex-1 bg-navy-900/50 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-3 bg-electric-500 text-white font-semibold rounded-full shadow-lg shadow-electric-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t.blog.notifyMe}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Preview Cards */}
          <motion.div
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 opacity-50"
              >
                <div className="w-full h-32 rounded-xl bg-white/5 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="h-4 w-1/3 bg-white/10 rounded mb-2"></div>
                <div className="h-6 w-full bg-white/10 rounded mb-2"></div>
                <div className="h-4 w-2/3 bg-white/10 rounded"></div>
              </div>
            ))}
          </motion.div>

          {/* Explore Other Resources */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-6">
              {language === "en" ? "In the meantime, explore these resources:" : "Nel frattempo, esplora queste risorse:"}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/singapore-guide"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t.footer.links.singaporeGuide}
              </Link>
              <a
                href="https://www.grantsg.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.footer.links.freeGrantTool}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
