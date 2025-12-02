"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function FAQ() {
  const { t } = useI18n();

  return (
    <section id="faq" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.faq.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.faq.title1}</span>
            <br />
            <span className="text-gradient">{t.faq.title2}</span>
          </h2>
        </motion.div>

        <div className="space-y-3 sm:space-y-4">
          {t.faq.questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <details className="group glass rounded-xl sm:rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 sm:p-6 text-white font-medium hover:bg-white/5 transition-colors list-none">
                  <span className="pr-4 sm:pr-8 text-sm sm:text-base">{faq.question}</span>
                  <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-electric-500/10 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-electric-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            {t.faq.stillQuestions}
          </p>
          <a
            href="/apply"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-medium text-sm sm:text-base"
          >
            {t.faq.getInTouch}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
