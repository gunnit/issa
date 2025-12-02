"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.howItWorks, href: "#process" },
    { name: t.nav.grantAI, href: "#grant-ai" },
    { name: t.nav.partners, href: "#partners" },
    { name: t.nav.apply, href: "/apply" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/ISSA_FULL_LOGO.png"
                  alt="ISSA - Italy Singapore Startup Agency"
                  width={140}
                  height={45}
                  className="h-8 sm:h-10 lg:h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Language Switcher */}
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 glass rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-base">{language === "en" ? "🇬🇧" : "🇮🇹"}</span>
                <span className="uppercase">{language}</span>
              </motion.button>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/apply"
                  className="px-5 lg:px-6 py-2 lg:py-2.5 bg-electric-500 hover:bg-electric-400 text-white font-semibold rounded-full text-sm transition-colors"
                >
                  {t.nav.getStarted}
                </Link>
              </motion.div>
            </div>

            {/* Mobile: Language + Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <motion.button
                onClick={toggleLanguage}
                className="flex items-center justify-center w-10 h-10 glass rounded-full text-sm font-medium"
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{language === "en" ? "🇬🇧" : "🇮🇹"}</span>
              </motion.button>

              <button
                className="relative w-10 h-10 flex items-center justify-center z-50"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 8 : 0,
                    }}
                    className="w-6 h-0.5 bg-white block origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="w-6 h-0.5 bg-white block"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -8 : 0,
                    }}
                    className="w-6 h-0.5 bg-white block origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-navy-900/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-2xl font-medium text-white hover:text-electric-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-2xl font-medium text-white hover:text-electric-400 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-electric-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-electric-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.nav.getStarted}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                className="mt-auto pt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-gray-500 text-sm mb-2">{t.nav.questions}</p>
                <a href="mailto:contact@is-sa.it" className="text-electric-400 text-sm">
                  contact@is-sa.it
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating CTA - visible on scroll (desktop only) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-6 right-6 z-40 hidden lg:block"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/apply"
              className="flex items-center gap-2 px-6 py-3 bg-electric-500 text-white font-semibold rounded-full shadow-lg shadow-electric-500/30 hover:shadow-electric-500/50 transition-shadow"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.hero.ctaPrimary}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
