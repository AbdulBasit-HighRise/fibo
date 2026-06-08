export interface MetadataConfig {
  title: string;
  description: string;
}

// :dart: Interface ko recursive banaya taake nested services bhi properly type-safe ho sakein
export type MetadataRecord = {
  [key: string]: MetadataConfig | MetadataRecord;
};

export const siteMetadata: MetadataRecord = {
  home: {
    title: "Trusted Digital Marketing Agency | Online Growth Solutions",
    description:
      "Grow your business with our expert digital marketing agency. We offer SEO, web, and content marketing strategies that drive measurable results.",
  },

  about: {
    title: "About Us | High Rise Digital",
    description:
      "Learn more about our team, mission, and expertise. We help businesses grow through innovative digital marketing, web development, SEO, and AI-driven solutions.",
  },

  contact: {
    title: "Contact Us | Get a Free Project Proposal | High Rise Digital",
    description:
      "Ready to scale your business? Contact our experts today for a personalized growth strategy and support.",
  },

  blog: {
    title: "Latest Insights, Marketing & AI Trends | High Rise Digital",
    description:
      "Stay updated with expert articles on AI automation, web engineering, local SEO hacks, and performance paid social media marketing strategies.",
  },

  portfolio: {
    title: "Case Studies | Proven Results & Success Stories",
    description:
      "Explore our case studies and success stories to see how we help businesses achieve growth through digital marketing, SEO, web development, and AI solutions.",
  },

  faq: {
    title: "FAQs | Frequently Asked Questions & Support",
    description:
      "Find answers to common questions about our services, pricing, SEO, web development, and AI automation solutions.",
  },

  terms: {
    title: "Terms & Conditions | Website Usage & Legal Information",
    description:
      "Review our Terms and Conditions to understand the rules, rights, and responsibilities when using our website and digital services.",
  },

  pricing: {
    title: "Pricing Plans | Affordable Digital Marketing & Web Services",
    description:
      "Explore our flexible pricing plans for SEO, digital marketing, web development, and AI automation services designed to fit your business needs.",
  },

  privacy: {
    title: "Privacy Policy | Data Protection & User Information",
    description:
      "Read our Privacy Policy to understand how we collect, use, and protect your personal data while ensuring full transparency and security.",
  },

  services: {
    title: "Our Services | Digital Marketing, SEO & Web Development",
    description:
      "Explore our comprehensive services, including digital marketing, SEO, website development, social media management, ecommerce solutions, and AI automation.",

    webDev: {
      title: "Website Development Agency | WordPress & Shopify Experts",
      description:
        "Build a powerful online presence with our website development agency. We create responsive, user-friendly, and SEO-optimized websites for your business.",
    },

    seo: {
      title: "SEO Agency | Improve Rankings, Traffic & Online Visibility",
      description:
        "Boost your rankings and organic traffic with our professional SEO agency. We provide on-page SEO, technical SEO, link building, and local SEO services.",
    },

    smm: {
      title: "Social Media Marketing Agency | Grow Your Brand Online",
      description:
        "Increase brand awareness, engagement, and sales with our social media marketing agency. We manage Facebook, Instagram, LinkedIn, TikTok, and other social media platforms.",
    },

    ecommerce: {
      title: "Ecommerce Management Agency | Store Optimization & Growth",
      description:
        "Maximize your online store performance with our ecommerce management agency. We handle product listings, inventory management, marketing, and conversion optimization.",
    },

    automation: {
      title: "AI Automation Agency | Smart Business Automation Solutions",
      description:
        "Boost efficiency with AI automation, chatbots, and smart workflows that streamline operations and accelerate business growth.",
    },
  },
};