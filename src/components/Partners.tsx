"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Partners() {
  const { t } = useI18n();

  return (
    <section id="partners" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.partners.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.partners.title1}</span>
            <br />
            <span className="text-gradient">{t.partners.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 px-2">
            {t.partners.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {t.partners.founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center h-full transition-all duration-300 hover:bg-white/[0.08] gradient-border">
                {/* Logo placeholder */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-400">
                    {founder.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>

                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium text-electric-400 bg-electric-500/10 rounded-full">
                  {founder.role}
                </span>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                  {founder.name}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-10 sm:mt-16 flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {["ISO 27001", "GDPR Compliant", "Singapore MAS", "Italy CONSOB"].map((badge) => (
            <div
              key={badge}
              className="px-3 sm:px-4 py-1.5 sm:py-2 border border-white/10 rounded-lg text-xs sm:text-sm text-gray-500"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
