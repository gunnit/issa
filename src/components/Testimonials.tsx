"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

export default function Testimonials() {
  const { t, language } = useI18n();

  const testimonials = language === "en" ? [
    {
      quote: "ISSA handled our entire Singapore expansion. We got incorporated in 18 days and matched with a SGD 320K grant. This would have taken us a year on our own.",
      name: "Marco Bellini",
      title: "CEO, TechFlow AI",
      result: "SGD 320K Grant",
    },
    {
      quote: "The Grant AI tool found opportunities we didn't even know existed. Within 2 months of incorporation, we secured our first Singaporean enterprise client.",
      name: "Lucia Ferraro",
      title: "Founder, GreenVolt Energy",
      result: "3 Grants Secured",
    },
    {
      quote: "Having Italian-speaking support made all the difference. They understood our needs and navigated Singapore's regulations flawlessly.",
      name: "Antonio Ricci",
      title: "CTO, BlockFin Systems",
      result: "21-Day Setup",
    },
  ] : [
    {
      quote: "ISSA ha gestito tutta la nostra espansione a Singapore. Siamo stati incorporati in 18 giorni e abbinati a un grant di 320K SGD. Da soli ci avrebbe richiesto un anno.",
      name: "Marco Bellini",
      title: "CEO, TechFlow AI",
      result: "Grant 320K SGD",
    },
    {
      quote: "Il Grant AI ha trovato opportunità che non sapevamo esistessero. Entro 2 mesi dall'incorporazione, abbiamo ottenuto il nostro primo cliente enterprise singaporiano.",
      name: "Lucia Ferraro",
      title: "Founder, GreenVolt Energy",
      result: "3 Grant Ottenuti",
    },
    {
      quote: "Avere supporto in italiano ha fatto la differenza. Hanno capito le nostre esigenze e navigato le normative di Singapore impeccabilmente.",
      name: "Antonio Ricci",
      title: "CTO, BlockFin Systems",
      result: "Setup 21 Giorni",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.testimonials.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.testimonials.title1}</span>
            <br />
            <span className="text-gradient">{t.testimonials.title2}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="glass-strong rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Result badge */}
              <div className="absolute -top-3 right-4 sm:right-6 px-3 sm:px-4 py-1 bg-electric-500 text-white text-xs sm:text-sm font-semibold rounded-full">
                {testimonial.result}
              </div>

              {/* Quote icon */}
              <div className="text-electric-500/30 mb-4">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-electric-500/20 flex items-center justify-center text-electric-400 font-bold text-sm sm:text-base">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white font-medium text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs sm:text-sm">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-400 mb-4 text-sm sm:text-base">
            {language === "en"
              ? "Join 100+ Italian companies succeeding in Singapore"
              : "Unisciti a oltre 100 aziende italiane di successo a Singapore"
            }
          </p>
          <motion.a
            href="/apply"
            className="inline-flex items-center gap-2 px-6 py-3 bg-electric-500 text-white font-semibold rounded-full text-sm sm:text-base shadow-lg shadow-electric-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language === "en" ? "Start Your Success Story" : "Inizia la Tua Storia di Successo"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
