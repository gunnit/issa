"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";

const governmentPartners = [
  {
    name: "Invitalia",
    description: { en: "National Agency for Inward Investment", it: "Agenzia Nazionale per gli Investimenti" },
    logo: "INV",
    url: "https://www.invitalia.it",
  },
  {
    name: "MISE/MIMIT",
    description: { en: "Ministry of Enterprise and Made in Italy", it: "Ministero delle Imprese e del Made in Italy" },
    logo: "MIMIT",
    url: "https://www.mimit.gov.it",
  },
  {
    name: "ICE",
    description: { en: "Italian Trade Agency", it: "Agenzia per il Commercio Estero" },
    logo: "ICE",
    url: "https://www.ice.it",
  },
  {
    name: "Italia Startup Visa",
    description: { en: "Startup Visa Program", it: "Programma Visa per Startup" },
    logo: "ISV",
    url: "https://italiastartupvisa.mise.gov.it",
  },
];

const accelerators = [
  {
    name: "CDP Venture Capital",
    description: { en: "National VC Fund for Innovation", it: "Fondo VC Nazionale per l'Innovazione" },
    logo: "CDP",
    url: "https://www.cdp.it",
  },
  {
    name: "LUISS EnLabs",
    description: { en: "Leading Startup Accelerator", it: "Acceleratore Startup Leader" },
    logo: "LE",
    url: "https://luissenlabs.com",
  },
  {
    name: "Plug and Play Italy",
    description: { en: "Global Innovation Platform", it: "Piattaforma Innovazione Globale" },
    logo: "P&P",
    url: "https://www.plugandplaytechcenter.com/italy",
  },
  {
    name: "PoliHub",
    description: { en: "Politecnico di Milano Innovation Hub", it: "Hub Innovazione Politecnico Milano" },
    logo: "PH",
    url: "https://www.polihub.it",
  },
];

const regionalPrograms = [
  {
    name: "Smart&Start Italia",
    description: { en: "Up to €1.5M for innovative startups", it: "Fino a €1.5M per startup innovative" },
    logo: "S&S",
    regions: ["Campania", "Calabria", "Sicilia", "Puglia"],
    url: "https://www.invitalia.it/cosa-facciamo/creiamo-nuove-aziende/smartstart-italia",
  },
  {
    name: "Resto al Sud",
    description: { en: "Incentives for Southern entrepreneurs", it: "Incentivi per imprenditori del Sud" },
    logo: "RAS",
    regions: ["Mezzogiorno"],
    url: "https://www.invitalia.it/cosa-facciamo/creiamo-nuove-aziende/resto-al-sud",
  },
  {
    name: "SPIN Invitalia",
    description: { en: "Scaleup Program for SMEs", it: "Programma Scaleup per PMI" },
    logo: "SPIN",
    regions: ["Calabria", "Campania", "Puglia", "Sicilia", "Basilicata"],
    url: "https://www.invitalia.it",
  },
  {
    name: "The Qube",
    description: { en: "Sicily Mediterranean Hub", it: "Hub Mediterraneo Sicilia" },
    logo: "TQ",
    regions: ["Sicily"],
    url: "https://theqube.eu",
  },
];

export default function LocalPartners() {
  const { t, language } = useI18n();

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-4 sm:mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            {t.localPartners.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.localPartners.title1}</span>
            <br />
            <span className="text-gradient">{t.localPartners.title2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 px-2">
            {t.localPartners.subtitle}
          </p>
        </motion.div>

        {/* Government Programs */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-electric-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-electric-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            {t.localPartners.categories.government}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {governmentPartners.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/[0.08] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 flex items-center justify-center group-hover:from-electric-500/30 group-hover:to-electric-500/10 transition-all">
                  <span className="text-sm sm:text-base font-bold text-electric-400">{partner.logo}</span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-electric-400 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {partner.description[language]}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Accelerators */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            {t.localPartners.categories.accelerators}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {accelerators.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-white/[0.08] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-purple-500/10 transition-all">
                  <span className="text-sm sm:text-base font-bold text-purple-400">{partner.logo}</span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  {partner.description[language]}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Regional Programs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            {t.localPartners.categories.regional}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {regionalPrograms.map((program, index) => (
              <motion.a
                key={program.name}
                href={program.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/[0.08] transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/5 flex items-center justify-center flex-shrink-0 group-hover:from-green-500/30 group-hover:to-green-500/10 transition-all">
                    <span className="text-xs sm:text-sm font-bold text-green-400">{program.logo}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-green-400 transition-colors truncate">
                      {program.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2">
                      {program.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {program.regions.slice(0, 3).map((region) => (
                        <span
                          key={region}
                          className="px-2 py-0.5 text-[10px] sm:text-xs bg-green-500/10 text-green-400 rounded-full"
                        >
                          {region}
                        </span>
                      ))}
                      {program.regions.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] sm:text-xs bg-green-500/10 text-green-400 rounded-full">
                          +{program.regions.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-gray-500 text-xs sm:text-sm mt-10 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {language === "en"
            ? "We actively collaborate with these organizations to maximize opportunities for Italian startups."
            : "Collaboriamo attivamente con queste organizzazioni per massimizzare le opportunità per le startup italiane."
          }
        </motion.p>
      </div>
    </section>
  );
}
