"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function ApplyPage() {
  const { t, language, setLanguage } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError(language === "en" ? "Something went wrong. Please try again." : "Qualcosa è andato storto. Riprova.");
      }
    } catch {
      setError(language === "en" ? "Network error. Please check your connection and try again." : "Errore di rete. Controlla la connessione e riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "it" : "en");
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
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
              {t.apply.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              <span className="text-white">{t.apply.title1}</span>
              <br />
              <span className="text-gradient">{t.apply.title2}</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400">
              {t.apply.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Application Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="glass-strong rounded-3xl p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">{t.apply.success.title}</h2>
                  <p className="text-gray-400 mb-6">
                    {t.apply.success.message}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-electric-400 hover:text-electric-300 font-medium"
                  >
                    {t.apply.success.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 lg:p-10">
                  <input type="hidden" name="access_key" value="ec400d14-8b4d-4d56-8707-ab1629ebf7e2" />
                  <input type="hidden" name="subject" value="New ISSA Application" />
                  <input type="hidden" name="from_name" value="ISSA Website Application" />
                  <input type="checkbox" name="botcheck" className="hidden" />

                  <div className="space-y-5 sm:space-y-6">
                    {/* Name Fields */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.firstName} *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="Marco"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.lastName} *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="Rossi"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.email} *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="marco@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.phone}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="+39 333 123 4567"
                        />
                      </div>
                    </div>

                    {/* Company & Website */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.company} *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="TechStartup S.r.l."
                        />
                      </div>
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.website}
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                          placeholder="https://example.com"
                        />
                      </div>
                    </div>

                    {/* Sector & Stage */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="sector" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.sector} *
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-gray-500">{t.apply.form.selectSector}</option>
                          <option value="Fintech">{t.apply.form.sectors.fintech}</option>
                          <option value="Blockchain/Web3">{t.apply.form.sectors.blockchain}</option>
                          <option value="AI/ML">{t.apply.form.sectors.ai}</option>
                          <option value="DeepTech">{t.apply.form.sectors.deeptech}</option>
                          <option value="GreenEnergy">{t.apply.form.sectors.greenEnergy}</option>
                          <option value="Healthcare">{t.apply.form.sectors.healthcare}</option>
                          <option value="SaaS">{t.apply.form.sectors.saas}</option>
                          <option value="Ecommerce">{t.apply.form.sectors.ecommerce}</option>
                          <option value="Other">{t.apply.form.sectors.other}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="stage" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.stage} *
                        </label>
                        <select
                          id="stage"
                          name="stage"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-gray-500">{t.apply.form.selectStage}</option>
                          <option value="Idea">{t.apply.form.stages.idea}</option>
                          <option value="MVP">{t.apply.form.stages.mvp}</option>
                          <option value="Revenue">{t.apply.form.stages.revenue}</option>
                          <option value="Scaling">{t.apply.form.stages.scaling}</option>
                          <option value="Established">{t.apply.form.stages.established}</option>
                        </select>
                      </div>
                    </div>

                    {/* Funding & Interest */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="funding" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.funding} *
                        </label>
                        <select
                          id="funding"
                          name="funding"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-gray-500">{t.apply.form.selectFunding}</option>
                          <option value="None">{t.apply.form.fundingOptions.none}</option>
                          <option value="PreSeed">{t.apply.form.fundingOptions.pre_seed}</option>
                          <option value="Seed">{t.apply.form.fundingOptions.seed}</option>
                          <option value="SeriesA">{t.apply.form.fundingOptions.series_a}</option>
                          <option value="SeriesB+">{t.apply.form.fundingOptions.series_b_plus}</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-2">
                          {t.apply.form.interest} *
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          required
                          className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
                          defaultValue=""
                        >
                          <option value="" disabled className="text-gray-500">{t.apply.form.selectInterest}</option>
                          <option value="Incorporation">{t.apply.form.interests.incorporation}</option>
                          <option value="Grants">{t.apply.form.interests.grants}</option>
                          <option value="Investors">{t.apply.form.interests.investors}</option>
                          <option value="FullPackage">{t.apply.form.interests.fullPackage}</option>
                          <option value="Consultation">{t.apply.form.interests.consultation}</option>
                        </select>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.apply.form.timeline} *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        required
                        className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-gray-500">{t.apply.form.selectTimeline}</option>
                        <option value="Immediately">{t.apply.form.timelines.immediately}</option>
                        <option value="1-3months">{t.apply.form.timelines.one_three}</option>
                        <option value="3-6months">{t.apply.form.timelines.three_six}</option>
                        <option value="Exploring">{t.apply.form.timelines.exploring}</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        {t.apply.form.message} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-navy-900/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors resize-none"
                        placeholder={t.apply.form.messagePlaceholder}
                      />
                    </div>

                    {/* Error Message */}
                    {error && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-electric-500 text-white font-semibold rounded-xl text-lg shadow-lg shadow-electric-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          {t.apply.form.submitting}
                        </span>
                      ) : (
                        t.apply.form.submit
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-500 text-center">
                      {t.apply.form.privacyNote}{" "}
                      <Link href="/privacy-policy" className="text-electric-400 hover:underline">{t.footer.links.privacyPolicy}</Link>.{" "}
                      {t.apply.form.responseTime}
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Direct Contact */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t.apply.sidebar.directContact}</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:contact@is-sa.it"
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-electric-500/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm">contact@is-sa.it</span>
                  </a>
                </div>
              </div>

              {/* Offices */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t.apply.sidebar.offices}</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🇸🇬</span>
                      <span className="text-white font-medium">{t.apply.sidebar.singapore}</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      One Raffles Place<br />
                      Tower 2, #20-61<br />
                      Singapore 048616
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🇮🇹</span>
                      <span className="text-white font-medium">{t.apply.sidebar.italy}</span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      Via Roma 123<br />
                      Milan, 20121<br />
                      Italy
                    </p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">{t.apply.sidebar.whatToExpect}</h3>
                <ul className="space-y-3">
                  {t.apply.sidebar.expectations.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-400 text-sm">
                      <svg className="w-4 h-4 text-electric-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2">
                {["GDPR Compliant", "ISO 27001", "Singapore MAS"].map((badge) => (
                  <span key={badge} className="px-3 py-1.5 border border-white/10 rounded-lg text-xs text-gray-500">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">
            {t.apply.bottomCta.text}
          </p>
          <Link
            href="https://www.grantsg.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium"
          >
            {t.apply.bottomCta.link}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
