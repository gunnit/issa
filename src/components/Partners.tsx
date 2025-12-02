"use client";

import { motion } from "framer-motion";

const founders = [
  {
    name: "BCC Studio",
    description: "Digital Innovation & AI Solutions",
    role: "Technology Partner",
  },
  {
    name: "Allix",
    description: "International Business Development",
    role: "Strategy Partner",
  },
  {
    name: "PugliAI",
    description: "AI Research & Implementation",
    role: "AI Partner",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-800 to-navy-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            Network Contract
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-white">Powered by the</span>
            <br />
            <span className="text-gradient">GSPIVSGP Network</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400">
            A formal alliance of three established Italian tech companies,
            combining decades of experience in innovation, strategy, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="glass-strong rounded-3xl p-8 text-center h-full transition-all duration-300 hover:bg-white/[0.08] gradient-border">
                {/* Logo placeholder */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-electric-500/20 to-electric-500/5 flex items-center justify-center">
                  <span className="text-3xl font-bold text-electric-400">
                    {founder.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>

                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-electric-400 bg-electric-500/10 rounded-full">
                  {founder.role}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {founder.name}
                </h3>

                <p className="text-gray-400">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {["ISO 27001", "GDPR Compliant", "Singapore MAS", "Italy CONSOB"].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 border border-white/10 rounded-lg text-sm text-gray-500"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
