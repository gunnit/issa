"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Physical Presence",
    description: "Your desk in Singapore. Immediate business address and full office utility access.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    span: "col-span-1",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "Corporate Setup",
    description: "Full support in incorporating your Pte. Ltd. entity with all legal requirements handled.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    span: "col-span-1",
    gradient: "from-purple-600/20 to-pink-600/20",
  },
  {
    title: "Network Access",
    description: "Direct entry into our curated network of 500+ Asian Investors & VCs ready to fund Italian innovation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    span: "col-span-1 md:col-span-2",
    gradient: "from-green-600/20 to-emerald-600/20",
  },
  {
    title: "Blockchain Trust",
    description: "All operations secured by blockchain traceability for maximum transparency and audit compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    span: "col-span-1 md:col-span-2",
    gradient: "from-orange-600/20 to-amber-600/20",
  },
  {
    title: "Legal & Tax",
    description: "Navigate Singapore's favorable tax framework with expert Italian-speaking consultants.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    span: "col-span-1",
    gradient: "from-indigo-600/20 to-violet-600/20",
  },
  {
    title: "Grant Matching",
    description: "AI-powered matching with active Singapore government grants tailored to your sector.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    span: "col-span-1",
    gradient: "from-rose-600/20 to-red-600/20",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-white">Everything You Need to</span>
            <br />
            <span className="text-gradient">Launch in Asia</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A complete infrastructure for Italian companies entering the Singapore market,
            backed by three established tech leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`${feature.span} group relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`h-full glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.08] gradient-border`}>
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-electric-500/10 flex items-center justify-center text-electric-400 mb-6 group-hover:bg-electric-500/20 transition-colors">
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
