export interface MetadataConfig {
  title: string;
  description: string;
}

// 🎯 Interface ko recursive banaya taake nested services bhi properly type-safe ho sakein
export type MetadataRecord = {
  [key: string]: MetadataConfig | MetadataRecord;
};

export const siteMetadata: MetadataRecord = {
  home: {
    title: "Digital Marketing & Web Design Agency | High Rise Digital",
    description: "Scale your brand with High Rise Digital Agency. Expert services in custom website design, Shopify e-commerce optimization, social media ads, and smart workflows.",
  },
  about: {
    title: "About High Rise Digital Agency | Trusted Digital Marketing Experts",
    description: "Learn how we engineer bulletproof conversion architecture and help brands dominate the digital landscape.",
  },
  contact: {
    title: "Contact Us | Get a Proposal | High Rise Digital",
    description: "Ready to grow? Connect with our digital experts today. We provide personalized support and innovative strategies.",
  },
  blog: {
    title: "Latest Insights & AI Trends | High Rise Digital Blog",
    description: "Read our latest articles on AI automation, web engineering, and digital marketing strategies.",
  },
  portfolio: {
    title: "Portfolio | Our Work & Client Success Stories",
    description: "Explore a portfolio showcasing 700+ successful projects in SEO, web design, and digital marketing.",
  },
  faq: {
    title: "FAQs | High Rise Digital Agency Support",
    description: "Find answers to common questions about High Rise Digital Agency services, pricing, and SEO.",
  },
  terms: {
    title: "Terms & Conditions | High Rise Digital Agency",
    description: "Review our Terms & Conditions to understand service usage, payments, and legal policies.",
  },
  pricing: {
    title: "Pricing Plans | Affordable Digital Marketing Packages",
    description: "Explore flexible pricing plans for SEO, social media, PPC, and web services.",
  },
  privacy: {
    title: "Privacy Policy | High Rise Digital Agency",
    description: "Read our Privacy Policy to understand how we protect your personal information.",
  },
  
  // 🎯 FIX: Dono services sections ko ek hi jagah merge kar diya hai
  services: {
    title: "Our Services | Global SEO, Marketing & Web Solutions",
    description: "Explore our services, including SEO, social media marketing, PPC, branding, and web development.",
    
    // Sub-services inside the main services category
    webDev: {
      title: "Custom Web Development Services | High Rise Digital",
      description: "Build fast, responsive, and high-converting websites. We engineer next-gen digital solutions using React, Next.js, and clean software architecture."
    },
    seo: {
      title: "Professional SEO & Google Ranking Services | High Rise Digital",
      description: "Drive organic traffic and dominate search results. Boost your search visibility, optimize on-page content, and scale your business revenue with expert SEO."
    },
    smm: {
      title: "Social Media Marketing & Paid Ads | High Rise Digital",
      description: "Maximize your ROI with high-converting ad campaigns across Meta, LinkedIn, and TikTok. Target the right audience and scale your brand identity fast."
    },
    automation: {
      title: "Custom AI Automation & Workflow Solutions | High Rise Digital",
      description: "Future-proof your business operations. Eliminate manual tasks, integrate smart chatbots, and build automated backend data pipelines seamlessly."
    },
    "ecommerce-management": {
      title: "E-Commerce Management & Store Optimization | High Rise Digital",
      description: "Scale your online sales. We build and manage high-converting Shopify and WooCommerce stores, optimize product pipelines, and lower customer acquisition costs."
    }
  }
};