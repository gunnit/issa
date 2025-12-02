"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "it";

interface Translations {
  // Navbar
  nav: {
    services: string;
    howItWorks: string;
    grantAI: string;
    partners: string;
    apply: string;
    getStarted: string;
    bookFreeCall: string;
    questions: string;
  };
  // Hero
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    italianExperts: string;
    valueProps: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      value: string;
      label: string;
    }[];
  };
  // Process
  process: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
  };
  // BentoGrid / Services
  services: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    features: {
      title: string;
      description: string;
    }[];
    bottomText: string;
    pricingLink: string;
  };
  // GrantAI
  grantAI: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    tryFree: string;
    successRate: string;
    averageMatch: string;
    freeToUse: string;
  };
  // Testimonials
  testimonials: {
    badge: string;
    title1: string;
    title2: string;
  };
  // Partners (Founders)
  partners: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    founders: {
      name: string;
      description: string;
      role: string;
    }[];
  };
  // Local Partners
  localPartners: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    categories: {
      government: string;
      accelerators: string;
      regional: string;
    };
  };
  // FAQ
  faq: {
    badge: string;
    title1: string;
    title2: string;
    stillQuestions: string;
    getInTouch: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
  // Footer
  footer: {
    ctaTitle1: string;
    ctaTitle2: string;
    ctaSubtitle: string;
    incorporationFrom: string;
    grantMatchingFree: string;
    ctaPrimary: string;
    ctaSecondary: string;
    categories: {
      services: string;
      company: string;
      resources: string;
      legal: string;
    };
    links: {
      physicalPresence: string;
      corporateSetup: string;
      grantAI: string;
      investorNetwork: string;
      aboutISSA: string;
      ourPartners: string;
      contact: string;
      faq: string;
      freeGrantTool: string;
      guides: string;
      singaporeGuide: string;
      blog: string;
      privacyPolicy: string;
      termsOfService: string;
      cookiePolicy: string;
    };
    tagline: string;
    copyright: string;
    poweredBy: string;
  };
  // Apply Form
  apply: {
    backToHome: string;
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    form: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      company: string;
      website: string;
      sector: string;
      selectSector: string;
      sectors: {
        fintech: string;
        blockchain: string;
        ai: string;
        deeptech: string;
        greenEnergy: string;
        healthcare: string;
        saas: string;
        ecommerce: string;
        other: string;
      };
      stage: string;
      selectStage: string;
      stages: {
        idea: string;
        mvp: string;
        revenue: string;
        scaling: string;
        established: string;
      };
      funding: string;
      selectFunding: string;
      fundingOptions: {
        none: string;
        pre_seed: string;
        seed: string;
        series_a: string;
        series_b_plus: string;
      };
      interest: string;
      selectInterest: string;
      interests: {
        incorporation: string;
        grants: string;
        investors: string;
        fullPackage: string;
        consultation: string;
      };
      timeline: string;
      selectTimeline: string;
      timelines: {
        immediately: string;
        one_three: string;
        three_six: string;
        exploring: string;
      };
      message: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      privacyNote: string;
      responseTime: string;
    };
    success: {
      title: string;
      message: string;
      sendAnother: string;
    };
    sidebar: {
      directContact: string;
      offices: string;
      singapore: string;
      italy: string;
      whatToExpect: string;
      expectations: string[];
    };
    bottomCta: {
      text: string;
      link: string;
    };
  };
  // Common
  common: {
    learnMore: string;
    free: string;
  };
  // Privacy Policy Page
  privacyPolicy: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  // Terms of Service Page
  termsOfService: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  // Cookie Policy Page
  cookiePolicy: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  // Singapore Guide Page
  singaporeGuide: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    sections: {
      title: string;
      content: string;
      items?: string[];
    }[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  // Blog Page
  blog: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    comingSoon: string;
    comingSoonText: string;
    notifyMe: string;
    emailPlaceholder: string;
    categories: string[];
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      grantAI: "Grant AI",
      partners: "Partners",
      apply: "Apply",
      getStarted: "Get Started",
      bookFreeCall: "Book Free Call",
      questions: "Questions?",
    },
    hero: {
      badge: "For Italian Founders Expanding to Asia",
      title1: "Launch Your Singapore Company",
      title2: "in 30 Days or Less",
      subtitle: "Get your Pte. Ltd. incorporated, bank account opened, and matched with SGD 500K+ in grants.",
      italianExperts: "Italian-speaking experts handle everything.",
      valueProps: [
        "Pte. Ltd. in 14 days",
        "89% grant success rate",
        "500+ VC network",
        "Zero upfront for grants",
      ],
      ctaPrimary: "Apply Now",
      ctaSecondary: "Check Eligibility",
      stats: [
        { value: "27 Days", label: "Average Setup Time" },
        { value: "SGD 50M+", label: "Grants Secured" },
        { value: "100+", label: "Italian Companies" },
        { value: "89%", label: "Grant Success Rate" },
      ],
    },
    process: {
      badge: "Simple Process",
      title1: "From Italy to Singapore",
      title2: "in 4 Easy Steps",
      subtitle: "We handle the complexity so you can focus on growing your business.",
    },
    services: {
      badge: "Our Services",
      title1: "Zero to Singapore Pte. Ltd.",
      title2: "Here's What We Handle",
      subtitle: "Complete infrastructure for Italian companies entering Singapore, backed by three established tech leaders.",
      features: [
        { title: "Physical Presence", description: "Skip the SGD 5,000/month office lease. Get a prestigious Singapore business address and meeting space." },
        { title: "Corporate Setup", description: "We file incorporation papers, handle ACRA registration, and set up your bank account. You just sign." },
        { title: "500+ Investor Network", description: "Direct introductions to VCs who've funded 47+ Italian startups. No cold outreach - warm introductions only." },
        { title: "Blockchain Trust", description: "All operations secured by blockchain for maximum transparency and audit compliance." },
        { title: "Legal & Tax", description: "Pay 17% corporate tax vs Italy's 24%. Italian-speaking CPAs ensure you never leave money on the table." },
        { title: "Grant Matching", description: "AI-powered matching with SGD 700K+ in grants you actually qualify for - not generic listings." },
      ],
      bottomText: "All services included in our expansion packages",
      pricingLink: "See pricing options",
    },
    grantAI: {
      badge: "AI-Powered Tool",
      title1: "Find Your Grants",
      title2: "in 2 Minutes",
      subtitle: "Our AI analyzes your company profile and matches you with Singapore grants you actually qualify for.",
      tryFree: "Try Free Grant Tool",
      successRate: "89% Success Rate",
      averageMatch: "SGD 280K+ Avg Match",
      freeToUse: "Free to Use",
    },
    testimonials: {
      badge: "Success Stories",
      title1: "Trusted by",
      title2: "Italian Founders",
    },
    partners: {
      badge: "Network Contract",
      title1: "Backed by 3 Italian Tech Leaders",
      title2: "15+ Years in Asia-Pacific",
      subtitle: "A formal alliance of three established Italian tech companies, combining decades of experience in innovation, strategy, and AI.",
      founders: [
        { name: "BCC Studio", description: "15+ years building enterprise software. Leading tech expansion for companies entering Singapore.", role: "Technology Partner" },
        { name: "Allix", description: "International business development specialists with deep Asia-Pacific market expertise.", role: "Strategy Partner" },
        { name: "PugliAI", description: "AI research and implementation. Powering the Grant AI matching algorithms.", role: "AI Partner" },
      ],
    },
    localPartners: {
      badge: "Italian Ecosystem",
      title1: "Connected to Italy's",
      title2: "Innovation Network",
      subtitle: "We work alongside Italy's top government programs and accelerators to support your international expansion.",
      categories: {
        government: "Government Programs",
        accelerators: "Accelerators & Incubators",
        regional: "Regional Innovation",
      },
    },
    faq: {
      badge: "FAQ",
      title1: "Frequently Asked",
      title2: "Questions",
      stillQuestions: "Still have questions?",
      getInTouch: "Get in touch with our team",
      questions: [
        {
          question: "What is ISSA and how does it help Italian startups in Singapore?",
          answer: "ISSA (Italian Singapore Strategic Access) is a formal Network Contract between three established Italian tech companies - BCC Studio, Allix, and PugliAI. We provide Italian startups, SMEs, and scale-ups with a complete infrastructure to enter the Singaporean market, including physical presence, legal setup, AI-driven grant matching, and direct access to 500+ Asian investors.",
        },
        {
          question: "How much does it cost to work with ISSA?",
          answer: "Incorporation packages start from SGD 3,500, which includes company registration, ACRA filing, and bank account setup. Grant matching through our AI tool is completely free - we only succeed when you do. Full expansion packages with investor introductions and ongoing support are customized based on your needs. Book a free strategy call to get a personalized quote.",
        },
        {
          question: "What Singapore business grants are available for Italian companies?",
          answer: "Singapore offers numerous grants for international companies, including the Startup SG Tech grant (up to SGD 500K), Enterprise Singapore grants, MAS FinTech Regulatory Sandbox, and various sector-specific incentives. Our Grant AI tool automatically matches your business profile with eligible programs. Average clients qualify for SGD 280K+ in grants.",
        },
        {
          question: "How long does the incorporation process take?",
          answer: "On average, we complete the full incorporation process in 27 days - from initial documentation to having your Singapore Pte. Ltd. fully operational with a bank account. Some straightforward cases can be completed in as little as 14 days. Compare this to 3-6 months if doing it yourself.",
        },
        {
          question: "Do I need to relocate to Singapore?",
          answer: "No. Many of our clients run their Singapore operations remotely. We provide a registered business address, meeting facilities when needed, and can arrange a local director if required. You only need to visit Singapore for specific activities like certain banking procedures.",
        },
        {
          question: "What if I don't get approved for any grants?",
          answer: "Our Grant AI matching is free to use. We have an 89% grant application success rate because we only recommend grants you actually qualify for - not generic listings. If a specific grant application is unsuccessful, we identify alternative opportunities at no additional cost.",
        },
        {
          question: "What industries does ISSA specialize in?",
          answer: "While we support companies across all sectors, we have particular expertise in Fintech, Blockchain/Web3, Artificial Intelligence, Deep Tech, Green Energy, and Healthcare. These align with Singapore's strategic growth sectors and have the highest grant and investment opportunities.",
        },
      ],
    },
    footer: {
      ctaTitle1: "Your Singapore Launch — ",
      ctaTitle2: "Mapped Out in 30 Minutes",
      ctaSubtitle: "In a single call, we'll assess your grant eligibility, timeline for incorporation, and introduce you to relevant investors. No obligations — just clarity.",
      incorporationFrom: "Incorporation from",
      grantMatchingFree: "Grant matching is",
      ctaPrimary: "Book Free Strategy Call",
      ctaSecondary: "Try Free Grant Tool",
      categories: {
        services: "Services",
        company: "Company",
        resources: "Resources",
        legal: "Legal",
      },
      links: {
        physicalPresence: "Physical Presence",
        corporateSetup: "Corporate Setup",
        grantAI: "Grant AI",
        investorNetwork: "Investor Network",
        aboutISSA: "About ISSA",
        ourPartners: "Our Partners",
        contact: "Contact",
        faq: "FAQ",
        freeGrantTool: "Free Grant Tool",
        guides: "Business Guides",
        singaporeGuide: "Singapore Guide",
        blog: "Blog",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
      },
      tagline: "Italian Singapore Startup Agency",
      copyright: "ISSA Network. A GSPIVSGP Initiative. All rights reserved.",
      poweredBy: "Powered by",
    },
    apply: {
      backToHome: "Back to Home",
      badge: "Apply Now",
      title1: "Start Your",
      title2: "Singapore Journey",
      subtitle: "Ready to expand to Asia? Fill out the application below and our team will assess your eligibility within 24 hours.",
      form: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Work Email",
        phone: "Phone Number",
        company: "Company Name",
        website: "Website (optional)",
        sector: "Industry/Sector",
        selectSector: "Select your sector",
        sectors: {
          fintech: "Fintech",
          blockchain: "Blockchain / Web3",
          ai: "AI & Machine Learning",
          deeptech: "Deep Tech",
          greenEnergy: "Green Energy / CleanTech",
          healthcare: "Healthcare / MedTech",
          saas: "SaaS / Software",
          ecommerce: "E-Commerce",
          other: "Other",
        },
        stage: "Company Stage",
        selectStage: "Select your stage",
        stages: {
          idea: "Idea / Concept",
          mvp: "MVP / Early Product",
          revenue: "Revenue Generating",
          scaling: "Scaling",
          established: "Established Business",
        },
        funding: "Current Funding",
        selectFunding: "Select funding stage",
        fundingOptions: {
          none: "Bootstrapped / No funding",
          pre_seed: "Pre-Seed (< €250K)",
          seed: "Seed (€250K - €2M)",
          series_a: "Series A (€2M - €10M)",
          series_b_plus: "Series B+ (> €10M)",
        },
        interest: "What are you interested in?",
        selectInterest: "Select your interest",
        interests: {
          incorporation: "Singapore Company Incorporation",
          grants: "Grant Matching & Applications",
          investors: "Investor Network Access",
          fullPackage: "Full Expansion Package",
          consultation: "General Consultation",
        },
        timeline: "When do you plan to expand?",
        selectTimeline: "Select timeline",
        timelines: {
          immediately: "Immediately",
          one_three: "1-3 months",
          three_six: "3-6 months",
          exploring: "Just exploring",
        },
        message: "Tell us about your company and goals",
        messagePlaceholder: "Brief description of your company, current traction, and what you hope to achieve in Singapore...",
        submit: "Submit Application",
        submitting: "Submitting...",
        privacyNote: "By submitting, you agree to our",
        responseTime: "We'll respond within 24 hours.",
      },
      success: {
        title: "Application Submitted!",
        message: "Thank you for applying. Our team will review your application and get back to you within 24 hours with an eligibility assessment.",
        sendAnother: "Submit another application",
      },
      sidebar: {
        directContact: "Direct Contact",
        offices: "Our Offices",
        singapore: "Singapore",
        italy: "Italy",
        whatToExpect: "What to Expect",
        expectations: [
          "Response within 24 hours",
          "Free eligibility assessment",
          "Personalized grant matches",
          "Italian-speaking support",
        ],
      },
      bottomCta: {
        text: "Prefer to explore first?",
        link: "Try our Free Grant AI Tool",
      },
    },
    common: {
      learnMore: "Learn More",
      free: "free",
    },
    privacyPolicy: {
      badge: "Legal",
      title1: "Privacy",
      title2: "Policy",
      subtitle: "We are committed to protecting your personal information and being transparent about what we do with it.",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "Information We Collect",
          content: "We collect information you provide directly to us, such as when you fill out forms, apply for our services, or contact us. This includes your name, email address, phone number, company information, and any other details you choose to share.",
        },
        {
          title: "How We Use Your Information",
          content: "We use your information to provide and improve our services, process your applications, communicate with you about our offerings, and comply with legal obligations. We may also use your data to personalize your experience and send relevant updates about Singapore business opportunities.",
        },
        {
          title: "Information Sharing",
          content: "We do not sell your personal information. We may share your data with trusted partners who help us deliver our services, including our network partners (BCC Studio, Allix, PugliAI), professional service providers in Singapore, and government agencies when required for grant applications.",
        },
        {
          title: "Data Security",
          content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our systems are secured using industry-standard encryption and security protocols.",
        },
        {
          title: "Your Rights",
          content: "You have the right to access, correct, or delete your personal information. You may also object to processing or request data portability. To exercise these rights, please contact us at privacy@is-sa.it.",
        },
        {
          title: "International Transfers",
          content: "As we operate between Italy and Singapore, your data may be transferred internationally. We ensure appropriate safeguards are in place for such transfers in compliance with GDPR and Singapore's PDPA.",
        },
        {
          title: "Contact Us",
          content: "For any privacy-related questions or concerns, please contact our Data Protection Officer at privacy@is-sa.it or write to us at our Singapore office.",
        },
      ],
    },
    termsOfService: {
      badge: "Legal",
      title1: "Terms of",
      title2: "Service",
      subtitle: "Please read these terms carefully before using our services.",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "Acceptance of Terms",
          content: "By accessing or using ISSA's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
        },
        {
          title: "Description of Services",
          content: "ISSA provides business expansion services for Italian companies entering the Singapore market, including company incorporation, grant matching, investor network access, and related consulting services.",
        },
        {
          title: "User Obligations",
          content: "You agree to provide accurate and complete information when using our services. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.",
        },
        {
          title: "Fees and Payment",
          content: "Service fees are as quoted at the time of engagement. Incorporation packages start from SGD 3,500. Grant matching services are provided free of charge. Custom packages are priced based on specific requirements.",
        },
        {
          title: "Intellectual Property",
          content: "All content, trademarks, and intellectual property on this website belong to ISSA or our licensors. You may not reproduce, distribute, or create derivative works without our express permission.",
        },
        {
          title: "Limitation of Liability",
          content: "ISSA provides services on a best-efforts basis. While we maintain high success rates, we cannot guarantee specific outcomes for grant applications or investor introductions. Our liability is limited to the fees paid for the specific service in question.",
        },
        {
          title: "Governing Law",
          content: "These terms are governed by the laws of Singapore. Any disputes shall be resolved in the courts of Singapore, without prejudice to your rights under Italian or EU consumer protection laws.",
        },
        {
          title: "Changes to Terms",
          content: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.",
        },
      ],
    },
    cookiePolicy: {
      badge: "Legal",
      title1: "Cookie",
      title2: "Policy",
      subtitle: "This policy explains how we use cookies and similar technologies on our website.",
      lastUpdated: "Last updated: December 2024",
      sections: [
        {
          title: "What Are Cookies",
          content: "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.",
        },
        {
          title: "How We Use Cookies",
          content: "We use cookies to understand how visitors interact with our website, remember your language preferences, and improve our services. We also use cookies for analytics to help us understand which pages are most useful.",
        },
        {
          title: "Types of Cookies We Use",
          content: "Essential Cookies: Required for the website to function properly, including language preferences. Analytics Cookies: Help us understand how visitors use our site (we use privacy-focused analytics). Marketing Cookies: Used only with your consent to provide relevant information about our services.",
        },
        {
          title: "Third-Party Cookies",
          content: "We may use third-party services that set their own cookies, such as analytics providers. These third parties have their own privacy policies governing their use of cookies.",
        },
        {
          title: "Managing Cookies",
          content: "You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling cookies may affect the functionality of our website.",
        },
        {
          title: "Your Consent",
          content: "By continuing to use our website, you consent to our use of essential cookies. For non-essential cookies, we will ask for your explicit consent through our cookie banner.",
        },
        {
          title: "Contact Us",
          content: "If you have questions about our use of cookies, please contact us at privacy@is-sa.it.",
        },
      ],
    },
    singaporeGuide: {
      badge: "Free Resource",
      title1: "Singapore Business",
      title2: "Guide for Italians",
      subtitle: "Everything you need to know about expanding your Italian business to Singapore - from incorporation to grants and beyond.",
      sections: [
        {
          title: "Why Singapore?",
          content: "Singapore consistently ranks as one of the world's easiest places to do business. With a strategic location, business-friendly regulations, and generous incentives for foreign companies, it's the perfect gateway to Asia for Italian entrepreneurs.",
          items: [
            "Ranked #2 globally for ease of doing business",
            "17% corporate tax rate (vs 24% in Italy)",
            "No capital gains tax",
            "Extensive network of 80+ trade agreements",
            "World-class infrastructure and talent pool",
          ],
        },
        {
          title: "Types of Business Entities",
          content: "The most common choice for foreign companies is the Private Limited Company (Pte. Ltd.). This structure provides limited liability protection, a professional image, and eligibility for government grants.",
          items: [
            "Private Limited Company (Pte. Ltd.) - Most popular for foreign businesses",
            "Branch Office - Extension of your Italian company",
            "Representative Office - For market research only, no commercial activities",
            "Sole Proprietorship - Simpler but offers no liability protection",
          ],
        },
        {
          title: "Incorporation Requirements",
          content: "Setting up a Singapore company is straightforward with the right support. Here are the key requirements:",
          items: [
            "At least one shareholder (can be 100% foreign-owned)",
            "At least one local director (Singapore resident)",
            "A registered Singapore address",
            "Minimum paid-up capital of SGD 1 (no maximum)",
            "Company secretary (within 6 months of incorporation)",
          ],
        },
        {
          title: "Available Grants & Incentives",
          content: "Singapore offers numerous grants and incentives for businesses, especially in strategic sectors like tech, fintech, and sustainability.",
          items: [
            "Startup SG Tech - Up to SGD 500,000 for deep tech startups",
            "Enterprise Development Grant - Up to 50% project cost support",
            "Market Readiness Assistance - Up to 70% for overseas expansion",
            "Productivity Solutions Grant - Up to 50% for digital transformation",
            "MAS FinTech Regulatory Sandbox - For fintech innovation",
          ],
        },
        {
          title: "Banking & Finance",
          content: "Opening a business bank account in Singapore requires proper documentation and may require an in-person visit. Major banks serving international businesses include DBS, OCBC, UOB, and international banks like HSBC and Standard Chartered.",
          items: [
            "Corporate account opening typically takes 2-4 weeks",
            "Multi-currency accounts available",
            "Online banking with international transfer capabilities",
            "Access to Singapore's robust financial ecosystem",
          ],
        },
        {
          title: "Tax Considerations",
          content: "Singapore's tax system is territorial and offers many advantages for international businesses.",
          items: [
            "Corporate tax: 17% (with exemptions for new companies)",
            "No withholding tax on dividends",
            "Extensive double taxation agreements (including Italy)",
            "GST: 9% (with registration threshold of SGD 1M)",
            "Personal tax: Progressive 0-24%",
          ],
        },
      ],
      ctaTitle: "Ready to Start Your Singapore Journey?",
      ctaSubtitle: "Let our Italian-speaking experts guide you through every step of your Singapore expansion.",
      ctaButton: "Book Free Consultation",
    },
    blog: {
      badge: "Insights",
      title1: "ISSA",
      title2: "Blog",
      subtitle: "Insights, guides, and success stories for Italian entrepreneurs expanding to Singapore.",
      comingSoon: "Coming Soon",
      comingSoonText: "We're preparing valuable content about Singapore business expansion, grant opportunities, and success stories from Italian entrepreneurs. Subscribe to be notified when we launch.",
      notifyMe: "Notify Me",
      emailPlaceholder: "Enter your email",
      categories: ["All", "Grants", "Incorporation", "Success Stories", "Market Insights"],
    },
  },
  it: {
    nav: {
      services: "Servizi",
      howItWorks: "Come Funziona",
      grantAI: "Grant AI",
      partners: "Partner",
      apply: "Candidati",
      getStarted: "Inizia",
      bookFreeCall: "Prenota Chiamata",
      questions: "Domande?",
    },
    hero: {
      badge: "Per Founder Italiani che si Espandono in Asia",
      title1: "Lancia la Tua Azienda a Singapore",
      title2: "in 30 Giorni o Meno",
      subtitle: "Ottieni l'incorporazione della tua Pte. Ltd., l'apertura del conto bancario e l'accesso a oltre 500K SGD in grant.",
      italianExperts: "Esperti italiani gestiscono tutto.",
      valueProps: [
        "Pte. Ltd. in 14 giorni",
        "89% successo grant",
        "500+ rete VC",
        "Zero anticipo per grant",
      ],
      ctaPrimary: "Candidati Ora",
      ctaSecondary: "Verifica Idoneità",
      stats: [
        { value: "27 Giorni", label: "Tempo Medio Setup" },
        { value: "SGD 50M+", label: "Grant Ottenuti" },
        { value: "100+", label: "Aziende Italiane" },
        { value: "89%", label: "Tasso di Successo" },
      ],
    },
    process: {
      badge: "Processo Semplice",
      title1: "Dall'Italia a Singapore",
      title2: "in 4 Semplici Passi",
      subtitle: "Gestiamo noi la complessità così tu puoi concentrarti sulla crescita del tuo business.",
    },
    services: {
      badge: "I Nostri Servizi",
      title1: "Da Zero a Singapore Pte. Ltd.",
      title2: "Ecco Cosa Gestiamo",
      subtitle: "Infrastruttura completa per aziende italiane che entrano a Singapore, supportate da tre leader tech consolidati.",
      features: [
        { title: "Presenza Fisica", description: "Evita l'affitto ufficio da 5.000 SGD/mese. Ottieni un indirizzo business prestigioso e spazi meeting a Singapore." },
        { title: "Setup Societario", description: "Gestiamo le pratiche di incorporazione, la registrazione ACRA e l'apertura del conto bancario. Tu firmi e basta." },
        { title: "500+ Network Investitori", description: "Presentazioni dirette a VC che hanno finanziato 47+ startup italiane. Niente cold outreach - solo introduzioni calde." },
        { title: "Fiducia Blockchain", description: "Tutte le operazioni protette da blockchain per massima trasparenza e conformità audit." },
        { title: "Legale & Fiscale", description: "Paga il 17% di tasse corporate vs il 24% italiano. CPA italiani assicurano che non lasci soldi sul tavolo." },
        { title: "Grant Matching", description: "Matching AI con oltre 700K SGD in grant per cui sei effettivamente idoneo - non liste generiche." },
      ],
      bottomText: "Tutti i servizi inclusi nei nostri pacchetti di espansione",
      pricingLink: "Vedi opzioni prezzi",
    },
    grantAI: {
      badge: "Strumento AI",
      title1: "Trova i Tuoi Grant",
      title2: "in 2 Minuti",
      subtitle: "La nostra AI analizza il profilo della tua azienda e ti abbina ai grant di Singapore per cui sei davvero idoneo.",
      tryFree: "Prova Grant Tool Gratis",
      successRate: "89% Tasso Successo",
      averageMatch: "SGD 280K+ Media Match",
      freeToUse: "Gratis da Usare",
    },
    testimonials: {
      badge: "Storie di Successo",
      title1: "Scelti dai",
      title2: "Founder Italiani",
    },
    partners: {
      badge: "Contratto di Rete",
      title1: "Supportati da 3 Leader Tech Italiani",
      title2: "15+ Anni in Asia-Pacifico",
      subtitle: "Un'alleanza formale di tre aziende tech italiane consolidate, che combinano decenni di esperienza in innovazione, strategia e AI.",
      founders: [
        { name: "BCC Studio", description: "15+ anni nella costruzione di software enterprise. Leader nell'espansione tech per aziende che entrano a Singapore.", role: "Partner Tecnologico" },
        { name: "Allix", description: "Specialisti in sviluppo business internazionale con profonda esperienza nel mercato Asia-Pacifico.", role: "Partner Strategico" },
        { name: "PugliAI", description: "Ricerca e implementazione AI. Alimenta gli algoritmi di matching del Grant AI.", role: "Partner AI" },
      ],
    },
    localPartners: {
      badge: "Ecosistema Italiano",
      title1: "Connessi alla Rete",
      title2: "di Innovazione Italiana",
      subtitle: "Lavoriamo insieme ai principali programmi governativi e acceleratori italiani per supportare la tua espansione internazionale.",
      categories: {
        government: "Programmi Governativi",
        accelerators: "Acceleratori & Incubatori",
        regional: "Innovazione Regionale",
      },
    },
    faq: {
      badge: "FAQ",
      title1: "Domande",
      title2: "Frequenti",
      stillQuestions: "Hai ancora domande?",
      getInTouch: "Contatta il nostro team",
      questions: [
        {
          question: "Cos'è ISSA e come aiuta le startup italiane a Singapore?",
          answer: "ISSA (Italian Singapore Strategic Access) è un Contratto di Rete formale tra tre aziende tech italiane consolidate - BCC Studio, Allix e PugliAI. Forniamo a startup, PMI e scale-up italiane un'infrastruttura completa per entrare nel mercato singaporiano, inclusa presenza fisica, setup legale, grant matching AI e accesso diretto a oltre 500 investitori asiatici.",
        },
        {
          question: "Quanto costa lavorare con ISSA?",
          answer: "I pacchetti di incorporazione partono da 3.500 SGD, che include registrazione aziendale, filing ACRA e apertura conto bancario. Il grant matching tramite il nostro strumento AI è completamente gratuito - noi guadagniamo solo quando tu vinci. I pacchetti di espansione completi con introduzioni agli investitori e supporto continuativo sono personalizzati in base alle tue esigenze. Prenota una chiamata strategica gratuita per un preventivo personalizzato.",
        },
        {
          question: "Quali grant di Singapore sono disponibili per aziende italiane?",
          answer: "Singapore offre numerosi grant per aziende internazionali, tra cui lo Startup SG Tech grant (fino a 500K SGD), grant di Enterprise Singapore, MAS FinTech Regulatory Sandbox e vari incentivi settoriali. Il nostro Grant AI abbina automaticamente il tuo profilo aziendale con i programmi per cui sei idoneo. I clienti si qualificano mediamente per oltre 280K SGD in grant.",
        },
        {
          question: "Quanto tempo richiede il processo di incorporazione?",
          answer: "In media, completiamo l'intero processo di incorporazione in 27 giorni - dalla documentazione iniziale ad avere la tua Singapore Pte. Ltd. pienamente operativa con conto bancario. Alcuni casi semplici possono essere completati in appena 14 giorni. Confrontalo con i 3-6 mesi se lo fai da solo.",
        },
        {
          question: "Devo trasferirmi a Singapore?",
          answer: "No. Molti dei nostri clienti gestiscono le loro operazioni a Singapore da remoto. Forniamo un indirizzo business registrato, sale riunioni quando necessario e possiamo organizzare un direttore locale se richiesto. Devi visitare Singapore solo per attività specifiche come determinate procedure bancarie.",
        },
        {
          question: "E se non ottengo l'approvazione per nessun grant?",
          answer: "Il nostro Grant AI matching è gratuito. Abbiamo un tasso di successo dell'89% nelle domande grant perché raccomandiamo solo grant per cui sei effettivamente idoneo - non liste generiche. Se una specifica domanda grant non ha successo, identifichiamo opportunità alternative senza costi aggiuntivi.",
        },
        {
          question: "In quali settori è specializzata ISSA?",
          answer: "Pur supportando aziende in tutti i settori, abbiamo particolare expertise in Fintech, Blockchain/Web3, Intelligenza Artificiale, Deep Tech, Green Energy e Healthcare. Questi si allineano con i settori strategici di crescita di Singapore e hanno le maggiori opportunità di grant e investimenti.",
        },
      ],
    },
    footer: {
      ctaTitle1: "Il Tuo Lancio a Singapore — ",
      ctaTitle2: "Mappato in 30 Minuti",
      ctaSubtitle: "In una singola chiamata, valuteremo la tua idoneità ai grant, i tempi per l'incorporazione e ti presenteremo investitori rilevanti. Nessun obbligo — solo chiarezza.",
      incorporationFrom: "Incorporazione da",
      grantMatchingFree: "Grant matching è",
      ctaPrimary: "Prenota Chiamata Strategica",
      ctaSecondary: "Prova Grant Tool Gratis",
      categories: {
        services: "Servizi",
        company: "Azienda",
        resources: "Risorse",
        legal: "Legale",
      },
      links: {
        physicalPresence: "Presenza Fisica",
        corporateSetup: "Setup Societario",
        grantAI: "Grant AI",
        investorNetwork: "Network Investitori",
        aboutISSA: "Chi è ISSA",
        ourPartners: "I Nostri Partner",
        contact: "Contatti",
        faq: "FAQ",
        freeGrantTool: "Grant Tool Gratis",
        guides: "Guide Business",
        singaporeGuide: "Guida Singapore",
        blog: "Blog",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Termini di Servizio",
        cookiePolicy: "Cookie Policy",
      },
      tagline: "Italian Singapore Startup Agency",
      copyright: "ISSA Network. Un'Iniziativa GSPIVSGP. Tutti i diritti riservati.",
      poweredBy: "Powered by",
    },
    apply: {
      backToHome: "Torna alla Home",
      badge: "Candidati Ora",
      title1: "Inizia il Tuo",
      title2: "Percorso a Singapore",
      subtitle: "Pronto per espanderti in Asia? Compila la candidatura e il nostro team valuterà la tua idoneità entro 24 ore.",
      form: {
        firstName: "Nome",
        lastName: "Cognome",
        email: "Email Aziendale",
        phone: "Numero di Telefono",
        company: "Nome Azienda",
        website: "Sito Web (opzionale)",
        sector: "Settore",
        selectSector: "Seleziona il tuo settore",
        sectors: {
          fintech: "Fintech",
          blockchain: "Blockchain / Web3",
          ai: "AI & Machine Learning",
          deeptech: "Deep Tech",
          greenEnergy: "Green Energy / CleanTech",
          healthcare: "Healthcare / MedTech",
          saas: "SaaS / Software",
          ecommerce: "E-Commerce",
          other: "Altro",
        },
        stage: "Fase Aziendale",
        selectStage: "Seleziona la fase",
        stages: {
          idea: "Idea / Concetto",
          mvp: "MVP / Prodotto Iniziale",
          revenue: "In Fatturazione",
          scaling: "In Scaling",
          established: "Business Consolidato",
        },
        funding: "Finanziamenti Attuali",
        selectFunding: "Seleziona fase funding",
        fundingOptions: {
          none: "Bootstrap / Nessun finanziamento",
          pre_seed: "Pre-Seed (< €250K)",
          seed: "Seed (€250K - €2M)",
          series_a: "Series A (€2M - €10M)",
          series_b_plus: "Series B+ (> €10M)",
        },
        interest: "Cosa ti interessa?",
        selectInterest: "Seleziona il tuo interesse",
        interests: {
          incorporation: "Incorporazione Società Singapore",
          grants: "Grant Matching & Domande",
          investors: "Accesso Network Investitori",
          fullPackage: "Pacchetto Espansione Completo",
          consultation: "Consulenza Generale",
        },
        timeline: "Quando pensi di espanderti?",
        selectTimeline: "Seleziona tempistica",
        timelines: {
          immediately: "Immediatamente",
          one_three: "1-3 mesi",
          three_six: "3-6 mesi",
          exploring: "Sto esplorando",
        },
        message: "Parlaci della tua azienda e dei tuoi obiettivi",
        messagePlaceholder: "Breve descrizione della tua azienda, traction attuale e cosa speri di ottenere a Singapore...",
        submit: "Invia Candidatura",
        submitting: "Invio in corso...",
        privacyNote: "Inviando, accetti la nostra",
        responseTime: "Risponderemo entro 24 ore.",
      },
      success: {
        title: "Candidatura Inviata!",
        message: "Grazie per la candidatura. Il nostro team esaminerà la tua domanda e ti risponderà entro 24 ore con una valutazione di idoneità.",
        sendAnother: "Invia un'altra candidatura",
      },
      sidebar: {
        directContact: "Contatto Diretto",
        offices: "I Nostri Uffici",
        singapore: "Singapore",
        italy: "Italia",
        whatToExpect: "Cosa Aspettarsi",
        expectations: [
          "Risposta entro 24 ore",
          "Valutazione idoneità gratuita",
          "Match grant personalizzati",
          "Supporto in italiano",
        ],
      },
      bottomCta: {
        text: "Preferisci esplorare prima?",
        link: "Prova il nostro Grant AI Gratuito",
      },
    },
    common: {
      learnMore: "Scopri di Più",
      free: "gratuito",
    },
    privacyPolicy: {
      badge: "Legale",
      title1: "Privacy",
      title2: "Policy",
      subtitle: "Ci impegniamo a proteggere le tue informazioni personali e ad essere trasparenti su come le utilizziamo.",
      lastUpdated: "Ultimo aggiornamento: Dicembre 2024",
      sections: [
        {
          title: "Informazioni che Raccogliamo",
          content: "Raccogliamo le informazioni che ci fornisci direttamente, come quando compili moduli, richiedi i nostri servizi o ci contatti. Questo include nome, indirizzo email, numero di telefono, informazioni aziendali e qualsiasi altro dettaglio che scegli di condividere.",
        },
        {
          title: "Come Utilizziamo le Tue Informazioni",
          content: "Utilizziamo le tue informazioni per fornire e migliorare i nostri servizi, elaborare le tue richieste, comunicare con te riguardo alle nostre offerte e adempiere agli obblighi legali. Possiamo anche usare i tuoi dati per personalizzare la tua esperienza e inviarti aggiornamenti rilevanti sulle opportunità di business a Singapore.",
        },
        {
          title: "Condivisione delle Informazioni",
          content: "Non vendiamo le tue informazioni personali. Possiamo condividere i tuoi dati con partner fidati che ci aiutano a fornire i nostri servizi, inclusi i nostri partner di rete (BCC Studio, Allix, PugliAI), fornitori di servizi professionali a Singapore e agenzie governative quando richiesto per le domande di grant.",
        },
        {
          title: "Sicurezza dei Dati",
          content: "Implementiamo misure tecniche e organizzative appropriate per proteggere le tue informazioni personali da accesso non autorizzato, alterazione, divulgazione o distruzione. I nostri sistemi sono protetti utilizzando crittografia e protocolli di sicurezza standard del settore.",
        },
        {
          title: "I Tuoi Diritti",
          content: "Hai il diritto di accedere, correggere o cancellare le tue informazioni personali. Puoi anche opporti al trattamento o richiedere la portabilità dei dati. Per esercitare questi diritti, contattaci a privacy@is-sa.it.",
        },
        {
          title: "Trasferimenti Internazionali",
          content: "Poiché operiamo tra Italia e Singapore, i tuoi dati potrebbero essere trasferiti a livello internazionale. Assicuriamo che siano in atto garanzie appropriate per tali trasferimenti in conformità con il GDPR e il PDPA di Singapore.",
        },
        {
          title: "Contattaci",
          content: "Per qualsiasi domanda o preoccupazione relativa alla privacy, contatta il nostro Responsabile della Protezione dei Dati a privacy@is-sa.it o scrivici presso il nostro ufficio di Singapore.",
        },
      ],
    },
    termsOfService: {
      badge: "Legale",
      title1: "Termini di",
      title2: "Servizio",
      subtitle: "Si prega di leggere attentamente questi termini prima di utilizzare i nostri servizi.",
      lastUpdated: "Ultimo aggiornamento: Dicembre 2024",
      sections: [
        {
          title: "Accettazione dei Termini",
          content: "Accedendo o utilizzando i servizi di ISSA, accetti di essere vincolato da questi Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.",
        },
        {
          title: "Descrizione dei Servizi",
          content: "ISSA fornisce servizi di espansione aziendale per aziende italiane che entrano nel mercato di Singapore, inclusa incorporazione societaria, matching di grant, accesso al network di investitori e servizi di consulenza correlati.",
        },
        {
          title: "Obblighi dell'Utente",
          content: "Accetti di fornire informazioni accurate e complete quando utilizzi i nostri servizi. Sei responsabile del mantenimento della riservatezza del tuo account e di tutte le attività che si verificano sotto il tuo account.",
        },
        {
          title: "Tariffe e Pagamento",
          content: "Le tariffe dei servizi sono quelle quotate al momento dell'ingaggio. I pacchetti di incorporazione partono da 3.500 SGD. I servizi di grant matching sono forniti gratuitamente. I pacchetti personalizzati sono prezzati in base a requisiti specifici.",
        },
        {
          title: "Proprietà Intellettuale",
          content: "Tutti i contenuti, marchi e proprietà intellettuale su questo sito web appartengono a ISSA o ai nostri licenzianti. Non puoi riprodurre, distribuire o creare opere derivate senza il nostro espresso permesso.",
        },
        {
          title: "Limitazione di Responsabilità",
          content: "ISSA fornisce servizi sulla base del massimo impegno. Pur mantenendo alti tassi di successo, non possiamo garantire risultati specifici per domande di grant o introduzioni agli investitori. La nostra responsabilità è limitata alle tariffe pagate per il servizio specifico in questione.",
        },
        {
          title: "Legge Applicabile",
          content: "Questi termini sono regolati dalle leggi di Singapore. Eventuali controversie saranno risolte nei tribunali di Singapore, fatti salvi i tuoi diritti ai sensi delle leggi italiane o UE sulla protezione dei consumatori.",
        },
        {
          title: "Modifiche ai Termini",
          content: "Potremmo aggiornare questi termini di tanto in tanto. L'uso continuato dei nostri servizi dopo le modifiche costituisce accettazione dei nuovi termini.",
        },
      ],
    },
    cookiePolicy: {
      badge: "Legale",
      title1: "Cookie",
      title2: "Policy",
      subtitle: "Questa policy spiega come utilizziamo i cookie e tecnologie simili sul nostro sito web.",
      lastUpdated: "Ultimo aggiornamento: Dicembre 2024",
      sections: [
        {
          title: "Cosa Sono i Cookie",
          content: "I cookie sono piccoli file di testo memorizzati sul tuo dispositivo quando visiti un sito web. Aiutano i siti web a ricordare le tue preferenze e migliorare la tua esperienza di navigazione.",
        },
        {
          title: "Come Utilizziamo i Cookie",
          content: "Utilizziamo i cookie per capire come i visitatori interagiscono con il nostro sito, ricordare le tue preferenze linguistiche e migliorare i nostri servizi. Utilizziamo anche cookie per analytics per capire quali pagine sono più utili.",
        },
        {
          title: "Tipi di Cookie che Utilizziamo",
          content: "Cookie Essenziali: Necessari per il funzionamento del sito web, incluse le preferenze linguistiche. Cookie Analytics: Ci aiutano a capire come i visitatori usano il nostro sito (usiamo analytics rispettosi della privacy). Cookie Marketing: Utilizzati solo con il tuo consenso per fornire informazioni rilevanti sui nostri servizi.",
        },
        {
          title: "Cookie di Terze Parti",
          content: "Potremmo utilizzare servizi di terze parti che impostano i propri cookie, come fornitori di analytics. Queste terze parti hanno le proprie policy sulla privacy che regolano il loro uso dei cookie.",
        },
        {
          title: "Gestione dei Cookie",
          content: "Puoi controllare i cookie attraverso le impostazioni del tuo browser. La maggior parte dei browser ti permette di rifiutare i cookie o eliminare quelli esistenti. Nota che disabilitare i cookie potrebbe influire sulla funzionalità del nostro sito.",
        },
        {
          title: "Il Tuo Consenso",
          content: "Continuando a utilizzare il nostro sito web, acconsenti al nostro uso dei cookie essenziali. Per i cookie non essenziali, chiederemo il tuo consenso esplicito attraverso il nostro banner cookie.",
        },
        {
          title: "Contattaci",
          content: "Se hai domande sul nostro uso dei cookie, contattaci a privacy@is-sa.it.",
        },
      ],
    },
    singaporeGuide: {
      badge: "Risorsa Gratuita",
      title1: "Guida Business Singapore",
      title2: "per Italiani",
      subtitle: "Tutto ciò che devi sapere per espandere la tua azienda italiana a Singapore - dall'incorporazione ai grant e oltre.",
      sections: [
        {
          title: "Perché Singapore?",
          content: "Singapore si classifica costantemente come uno dei posti più facili al mondo per fare business. Con una posizione strategica, regolamenti favorevoli alle imprese e generosi incentivi per le aziende straniere, è il gateway perfetto per l'Asia per gli imprenditori italiani.",
          items: [
            "Classificata #2 a livello globale per facilità di fare business",
            "Aliquota fiscale societaria del 17% (vs 24% in Italia)",
            "Nessuna tassa sulle plusvalenze",
            "Ampia rete di 80+ accordi commerciali",
            "Infrastrutture e pool di talenti di livello mondiale",
          ],
        },
        {
          title: "Tipi di Entità Aziendali",
          content: "La scelta più comune per le aziende straniere è la Private Limited Company (Pte. Ltd.). Questa struttura offre protezione dalla responsabilità limitata, un'immagine professionale e idoneità ai grant governativi.",
          items: [
            "Private Limited Company (Pte. Ltd.) - Più popolare per aziende straniere",
            "Branch Office - Estensione della tua azienda italiana",
            "Representative Office - Solo per ricerche di mercato, nessuna attività commerciale",
            "Sole Proprietorship - Più semplice ma non offre protezione dalla responsabilità",
          ],
        },
        {
          title: "Requisiti di Incorporazione",
          content: "Costituire un'azienda a Singapore è semplice con il giusto supporto. Ecco i requisiti chiave:",
          items: [
            "Almeno un azionista (può essere 100% di proprietà straniera)",
            "Almeno un direttore locale (residente a Singapore)",
            "Un indirizzo registrato a Singapore",
            "Capitale versato minimo di 1 SGD (nessun massimo)",
            "Company secretary (entro 6 mesi dall'incorporazione)",
          ],
        },
        {
          title: "Grant e Incentivi Disponibili",
          content: "Singapore offre numerosi grant e incentivi per le aziende, specialmente nei settori strategici come tech, fintech e sostenibilità.",
          items: [
            "Startup SG Tech - Fino a 500.000 SGD per startup deep tech",
            "Enterprise Development Grant - Fino al 50% supporto costi progetto",
            "Market Readiness Assistance - Fino al 70% per espansione internazionale",
            "Productivity Solutions Grant - Fino al 50% per trasformazione digitale",
            "MAS FinTech Regulatory Sandbox - Per innovazione fintech",
          ],
        },
        {
          title: "Banking & Finanza",
          content: "Aprire un conto bancario aziendale a Singapore richiede documentazione appropriata e potrebbe richiedere una visita di persona. Le principali banche per aziende internazionali includono DBS, OCBC, UOB e banche internazionali come HSBC e Standard Chartered.",
          items: [
            "L'apertura del conto corporate richiede tipicamente 2-4 settimane",
            "Conti multi-valuta disponibili",
            "Online banking con capacità di trasferimento internazionale",
            "Accesso al robusto ecosistema finanziario di Singapore",
          ],
        },
        {
          title: "Considerazioni Fiscali",
          content: "Il sistema fiscale di Singapore è territoriale e offre molti vantaggi per le aziende internazionali.",
          items: [
            "Tassa societaria: 17% (con esenzioni per nuove aziende)",
            "Nessuna ritenuta sui dividendi",
            "Ampi accordi contro la doppia imposizione (inclusa l'Italia)",
            "GST: 9% (con soglia di registrazione di 1M SGD)",
            "Tassa personale: Progressiva 0-24%",
          ],
        },
      ],
      ctaTitle: "Pronto a Iniziare il Tuo Percorso a Singapore?",
      ctaSubtitle: "Lascia che i nostri esperti italiani ti guidino attraverso ogni passo della tua espansione a Singapore.",
      ctaButton: "Prenota Consulenza Gratuita",
    },
    blog: {
      badge: "Approfondimenti",
      title1: "Blog",
      title2: "ISSA",
      subtitle: "Approfondimenti, guide e storie di successo per imprenditori italiani che si espandono a Singapore.",
      comingSoon: "Prossimamente",
      comingSoonText: "Stiamo preparando contenuti di valore sull'espansione aziendale a Singapore, opportunità di grant e storie di successo di imprenditori italiani. Iscriviti per essere avvisato quando lanceremo.",
      notifyMe: "Avvisami",
      emailPlaceholder: "Inserisci la tua email",
      categories: ["Tutti", "Grant", "Incorporazione", "Storie di Successo", "Approfondimenti di Mercato"],
    },
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Check for saved language preference or browser language
    const saved = localStorage.getItem("issa-language") as Language;
    if (saved && (saved === "en" || saved === "it")) {
      setLanguage(saved);
    } else {
      // Check browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("it")) {
        setLanguage("it");
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("issa-language", lang);
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
