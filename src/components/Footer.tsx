"use client";

import { motion } from "framer-motion";

const footerLinks = {
  Services: [
    { name: "Physical Presence", href: "#services" },
    { name: "Corporate Setup", href: "#services" },
    { name: "Grant AI", href: "#grant-ai" },
    { name: "Investor Network", href: "#services" },
  ],
  Company: [
    { name: "About ISSA", href: "#" },
    { name: "Our Partners", href: "#partners" },
    { name: "Careers", href: "#" },
    { name: "Press Kit", href: "#" },
  ],
  Resources: [
    { name: "Free Grant Tool", href: "https://www.grantsg.it/" },
    { name: "Singapore Guide", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#faq" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-white">Ready to </span>
            <span className="text-gradient">Expand to Asia?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-8">
            Join the Italian companies already succeeding in Singapore with ISSA.
            Your journey to Asia starts with a single conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4" id="eligibility">
            <motion.a
              href="mailto:contact@issa.network"
              className="px-8 py-4 bg-electric-500 text-white font-semibold rounded-full text-lg shadow-lg shadow-electric-500/25 animate-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.a>
            <motion.a
              href="https://www.grantsg.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass text-white font-semibold rounded-full text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Free Grant Tool
            </motion.a>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-white">IS</span>
              <span className="text-electric-500">SA</span>
            </span>
            <span className="text-gray-500 text-sm">
              Italian Singapore Strategic Access
            </span>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-electric-400 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>&copy; 2025 ISSA Network. A GSPIVSGP Initiative. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <span className="text-gray-400">BCC Studio</span>,{" "}
            <span className="text-gray-400">Allix</span>, and{" "}
            <span className="text-gray-400">PugliAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
