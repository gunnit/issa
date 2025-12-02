"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Animated connection lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Italy marker */}
          <motion.circle
            cx="300"
            cy="250"
            r="8"
            fill="#3b82f6"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          {/* Singapore marker */}
          <motion.circle
            cx="700"
            cy="350"
            r="8"
            fill="#3b82f6"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          {/* Connection line */}
          <motion.path
            d="M 300 250 Q 500 150 700 350"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          {/* Data packets */}
          <motion.circle
            r="4"
            fill="#60a5fa"
            initial={{ cx: 300, cy: 250 }}
            animate={{
              cx: [300, 400, 500, 600, 700],
              cy: [250, 200, 200, 275, 350]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Floating orbs - reduced on mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-electric-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-electric-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-[10px] sm:text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-white">{t.hero.title1}</span>
          <br />
          <span className="text-gradient glow-text">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t.hero.subtitle}{" "}
          <span className="text-white font-medium">{t.hero.italianExperts}</span>
        </motion.p>

        {/* Value stack */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {t.hero.valueProps.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-400 bg-white/5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-electric-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="/apply"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-electric-500 text-white font-semibold rounded-full text-base sm:text-lg shadow-lg shadow-electric-500/25 text-center"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.ctaPrimary}
          </motion.a>
          <motion.a
            href="#grant-ai"
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 glass text-white font-semibold rounded-full text-base sm:text-lg hover:bg-white/10 transition-colors text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.hero.ctaSecondary}
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center p-3 sm:p-4 glass rounded-xl sm:rounded-2xl">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-electric-400 mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-electric-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
