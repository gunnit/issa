"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/italysingaporestartupagency/",
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
  const { t } = useI18n();

  const footerLinks = {
    [t.footer.categories.services]: [
      { name: t.footer.links.physicalPresence, href: "#services" },
      { name: t.footer.links.corporateSetup, href: "#services" },
      { name: t.footer.links.grantAI, href: "#grant-ai" },
      { name: t.footer.links.investorNetwork, href: "#services" },
    ],
    [t.footer.categories.company]: [
      { name: t.footer.links.aboutISSA, href: "#partners" },
      { name: t.footer.links.ourPartners, href: "#partners" },
      { name: t.footer.links.contact, href: "/apply" },
      { name: t.footer.links.faq, href: "#faq" },
    ],
    [t.footer.categories.resources]: [
      { name: t.footer.links.freeGrantTool, href: "https://www.grantsg.it/" },
      { name: t.footer.links.guides, href: "/guides" },
      { name: t.footer.links.singaporeGuide, href: "/singapore-guide" },
      { name: t.footer.links.blog, href: "/blog" },
    ],
    [t.footer.categories.legal]: [
      { name: t.footer.links.privacyPolicy, href: "/privacy-policy" },
      { name: t.footer.links.termsOfService, href: "/terms-of-service" },
      { name: t.footer.links.cookiePolicy, href: "/cookie-policy" },
    ],
  };

  return (
    <footer id="contact" className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold mb-4 sm:mb-6">
            <span className="text-white">{t.footer.ctaTitle1}</span>
            <span className="text-gradient">{t.footer.ctaTitle2}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-gray-400 mb-4 sm:mb-6 px-2">
            {t.footer.ctaSubtitle}
          </p>

          {/* Pricing indicator */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm">
            <span className="text-gray-400">
              {t.footer.incorporationFrom} <span className="text-white font-semibold">SGD 3,500</span>
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-gray-400">
              {t.footer.grantMatchingFree} <span className="text-electric-400 font-semibold">{t.common.free}</span>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4" id="eligibility">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-electric-500 text-white font-semibold rounded-full text-base sm:text-lg shadow-lg shadow-electric-500/25"
              >
                {t.footer.ctaPrimary}
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
            <motion.a
              href="https://www.grantsg.it/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 glass text-white font-semibold rounded-full text-base sm:text-lg hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.footer.ctaSecondary}
            </motion.a>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
                {category}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 sm:pt-8 border-t border-white/5 gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/">
              <Image
                src="/ISSA_ICON_LOGO.png"
                alt="ISSA"
                width={50}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <span className="text-gray-500 text-xs sm:text-sm">
              {t.footer.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
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

        <div className="text-center mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
          <p>&copy; 2025 {t.footer.copyright}</p>
          <p className="mt-2">
            {t.footer.poweredBy}{" "}
            <span className="text-gray-400">BCC Studio</span>,{" "}
            <span className="text-gray-400">Allix</span>, and{" "}
            <span className="text-gray-400">PugliAI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
