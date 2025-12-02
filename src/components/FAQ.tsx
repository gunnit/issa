"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is ISSA and how does it help Italian startups in Singapore?",
    answer:
      "ISSA (Italian Singapore Strategic Access) is a formal Network Contract between three established Italian tech companies - BCC Studio, Allix, and PugliAI. We provide Italian startups, SMEs, and scale-ups with a complete infrastructure to enter the Singaporean market, including physical presence, legal setup, AI-driven grant matching, and direct access to 500+ Asian investors.",
  },
  {
    question: "What Singapore business grants are available for Italian companies?",
    answer:
      "Singapore offers numerous grants for international companies, including the Startup SG Tech grant (up to SGD 500K), Enterprise Singapore grants, MAS FinTech Regulatory Sandbox, and various sector-specific incentives. Our Grant AI tool automatically matches your business profile with eligible programs, including government grants, tax incentives, and private equity opportunities.",
  },
  {
    question: "How do I get a Tech Visa for Singapore as an Italian entrepreneur?",
    answer:
      "ISSA assists with the full visa process including EntrePass for entrepreneurs, Employment Pass for professionals, and Tech.Pass for established tech leaders. We handle the application, documentation, and provide a physical business address - a key requirement for Singapore visa applications.",
  },
  {
    question: "What does the corporate setup process involve?",
    answer:
      "We provide end-to-end support for incorporating your Singapore Pte. Ltd. entity, including company registration with ACRA, opening corporate bank accounts, setting up a registered office address, appointing a local director (if needed), and ensuring compliance with Singapore's regulatory requirements.",
  },
  {
    question: "How does the blockchain traceability feature work?",
    answer:
      "All operations and transactions within the ISSA network are recorded on a private blockchain, ensuring complete transparency, audit compliance, and trust. This includes grant disbursements, investor communications, and service agreements - providing an immutable record for all stakeholders.",
  },
  {
    question: "What industries does ISSA specialize in?",
    answer:
      "While we support companies across all sectors, we have particular expertise in Fintech, Blockchain/Web3, Artificial Intelligence, Deep Tech, Green Energy, and Healthcare. These align with Singapore's strategic growth sectors and have the highest grant and investment opportunities.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-wider text-electric-400 uppercase glass rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-white">Frequently Asked</span>
            <br />
            <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <details className="group glass rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-white font-medium hover:bg-white/5 transition-colors list-none">
                  <span className="pr-8">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-electric-500/10 flex items-center justify-center group-open:rotate-180 transition-transform">
                    <svg
                      className="w-4 h-4 text-electric-400"
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
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
