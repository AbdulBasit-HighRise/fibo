// export interface MetadataConfig {
//   title: string;
//   description: string;
// }

// // 🎯 Interface ko recursive banaya taake nested services bhi properly type-safe ho sakein
// export type MetadataRecord = {
//   [key: string]: MetadataConfig | MetadataRecord;
// };

// export const siteMetadata: MetadataRecord = {
//   home: {
//     title: "Digital Marketing & Web Design Agency | High Rise Digital",
//     description: "Scale your brand with High Rise Digital Agency. Expert services in custom website design, Shopify e-commerce optimization, social media ads, and smart workflows.",
//   },
//   about: {
//     title: "About High Rise Digital Agency | Trusted Digital Marketing Experts",
//     description: "Learn how we engineer bulletproof conversion architecture and help brands dominate the digital landscape.",
//   },
//   contact: {
//     title: "Contact Us | Get a Proposal | High Rise Digital",
//     description: "Ready to grow? Connect with our digital experts today. We provide personalized support and innovative strategies.",
//   },
//   blog: {
//     title: "Latest Insights & AI Trends | High Rise Digital Blog",
//     description: "Read our latest articles on AI automation, web engineering, and digital marketing strategies.",
//   },
//   portfolio: {
//     title: "Portfolio | Our Work & Client Success Stories",
//     description: "Explore a portfolio showcasing 700+ successful projects in SEO, web design, and digital marketing.",
//   },
//   faq: {
//     title: "FAQs | High Rise Digital Agency Support",
//     description: "Find answers to common questions about High Rise Digital Agency services, pricing, and SEO.",
//   },
//   terms: {
//     title: "Terms & Conditions | High Rise Digital Agency",
//     description: "Review our Terms & Conditions to understand service usage, payments, and legal policies.",
//   },
//   pricing: {
//     title: "Pricing Plans | Affordable Digital Marketing Packages",
//     description: "Explore flexible pricing plans for SEO, social media, PPC, and web services.",
//   },
//   privacy: {
//     title: "Privacy Policy | High Rise Digital Agency",
//     description: "Read our Privacy Policy to understand how we protect your personal information.",
//   },
  
//   // 🎯 FIX: Dono services sections ko ek hi jagah merge kar diya hai
//   services: {
//     title: "Our Services | Global SEO, Marketing & Web Solutions",
//     description: "Explore our services, including SEO, social media marketing, PPC, branding, and web development.",
    
//     // Sub-services inside the main services category
//     webDev: {
//       title: "Custom Web Development Services | High Rise Digital",
//       description: "Build fast, responsive, and high-converting websites. We engineer next-gen digital solutions using React, Next.js, and clean software architecture."
//     },
//     seo: {
//       title: "Professional SEO & Google Ranking Services | High Rise Digital",
//       description: "Drive organic traffic and dominate search results. Boost your search visibility, optimize on-page content, and scale your business revenue with expert SEO."
//     },
//     smm: {
//       title: "Social Media Marketing & Paid Ads | High Rise Digital",
//       description: "Maximize your ROI with high-converting ad campaigns across Meta, LinkedIn, and TikTok. Target the right audience and scale your brand identity fast."
//     },
//     automation: {
//       title: "Custom AI Automation & Workflow Solutions | High Rise Digital",
//       description: "Future-proof your business operations. Eliminate manual tasks, integrate smart chatbots, and build automated backend data pipelines seamlessly."
//     },
//     "ecommerce-management": {
//       title: "E-Commerce Management & Store Optimization | High Rise Digital",
//       description: "Scale your online sales. We build and manage high-converting Shopify and WooCommerce stores, optimize product pipelines, and lower customer acquisition costs."
//     }
//   }
// };



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
    title: "Digital Marketing & Web Design Agency | High Rise Digital", // 58 chars
    description: "Scale your brand with High Rise Digital. Expert services in custom website design, Shopify e-commerce optimization, social media ads, and smart workflows.", // 156 chars
  },
  about: {
    title: "About Us | High Rise Digital Marketing Experts", // 47 chars
    description: "Learn how High Rise Digital engineers bulletproof conversion architecture and data-driven marketing strategies to help brands dominate online search.", // 153 chars
  },
  contact: {
    title: "Contact Us | Get a Free Project Proposal | High Rise Digital", // 59 chars
    description: "Ready to scale your business? Contact our digital marketing and web development experts today for a personalized growth strategy and support.", // 149 chars
  },
  blog: {
    title: "Latest Insights, Marketing & AI Trends | High Rise Digital Blog", // 63 chars (Google parses perfectly)
    description: "Stay updated with expert articles on AI automation, web engineering, local SEO hacks, and performance paid social media marketing strategies.", // 149 chars
  },
  portfolio: {
    title: "Our Work & Client Success Stories | High Rise Digital Portfolio", // 63 chars
    description: "Explore our portfolio showcasing 700+ successful projects in technical SEO, responsive web design, and high-ROI digital marketing campaigns.", // 147 chars
  },
  faq: {
    title: "FAQs | High Rise Digital Agency Services & Support", // 51 chars
    description: "Find instant answers to frequently asked questions about our digital marketing services, custom web design pricing, and SEO optimization timelines.", // 153 chars
  },
  terms: {
    title: "Terms & Conditions | High Rise Digital Agency", // 46 chars
    description: "Read the official Terms and Conditions of High Rise Digital Agency to understand our service agreements, payments, and operational policies.", // 146 chars
  },
  pricing: {
    title: "Affordable Digital Marketing Pricing & Packages | High Rise", // 59 chars
    description: "Explore flexible pricing plans for expert SEO, social media marketing, Google PPC ads, and custom website development packages tailored for growth.", // 154 chars
  },
  privacy: {
    title: "Privacy Policy | High Rise Digital Agency", // 42 chars
    description: "Review the Privacy Policy of High Rise Digital Agency to see how we securely collect, protect, and handle your personal and business data.", // 145 chars
  },
  
  // 🎯 Merged Services section with perfect length and high-intent keywords
  services: {
    title: "Digital Marketing, SEO & Web Design Services | High Rise", // 56 chars
    description: "Supercharge your online presence. We offer premium SEO solutions, conversion-focused paid ads, brand strategy, and custom AI automated workflows.", // 152 chars
    
    webDev: {
      title: "Custom Web Development Company | High Rise Digital", // 50 chars
      description: "Build fast, responsive websites. We engineer high-converting digital solutions using Next.js, React, and clean software architecture.", // 137 chars
    },
    seo: {
      title: "Best SEO Services & Google Ranking | High Rise Digital", // 53 chars
      description: "Drive targeted organic traffic and dominate search results. Boost visibility, optimize on-page content, and scale business revenue with expert SEO.", // 151 chars
    },
    smm: {
      title: "Social Media Marketing & Meta Paid Ads Expert | High Rise", // 56 chars
      description: "Maximize your ROI with high-converting paid ad campaigns across Meta, TikTok, and LinkedIn. Target the right audience and scale your brand identity.", // 152 chars
    },
    automation: {
      title: "Custom AI Automation & Workflow Integration | High Rise", // 54 chars
      description: "Future-proof your business operations. Eliminate manual tasks, integrate smart chatbots, and build automated backend data pipelines seamlessly.", // 149 chars
    },
    "ecommerce-management": {
      title: "Shopify E-Commerce Management & Store Optimization | High Rise", // 62 chars
      description: "Scale online sales. We build high-converting Shopify and WooCommerce stores, optimize product pipelines, and lower customer acquisition costs.", // 146 chars
    }
  }
};