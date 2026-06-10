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

  "case-studies": {
    title: "Case Studies | Proven Results & Success Stories",
    description:
      "See how High Rise Digital delivers growth. Explore our real agency case studies, SEO success stories, and high-ROAS social media marketing results.",
  },

  faq: {
    title: "FAQs | Frequently Asked Questions & Support",
    description:
      "Find answers to common questions about our services, pricing, SEO, web development, and AI automation solutions.",
  },

  // 🔴 Slugs ke mutabiq keys ko update kiya taake code me asani ho (Content same hai)
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

  // 🔴 Slugs ke mutabiq keys ko update kiya taake code me asani ho (Content same hai)
  privacy: {
    title: "Privacy Policy | Data Protection & User Information",
    description:
      "Read our Privacy Policy to understand how we collect, use, and protect your personal data while ensuring full transparency and security.",
  },

  services: {
    title: "Our Services | Digital Marketing, SEO & Web Development",
    description:
      "Explore our comprehensive services, including digital marketing, SEO, website development, social media management, ecommerce solutions, and AI automation.",

    // 🔴 Slugs ke mutabiq inke keys ke naam update kar diye taake import karte hue masla na ho
    "website-development": {
      title: "Website Development Agency | WordPress & Shopify Experts",
      description:
        "Build a powerful online presence with our website development agency. We create responsive, user-friendly, and SEO-optimized websites for your business.",
    },

    seo: {
      title: "SEO Agency | Improve Rankings, Traffic & Online Visibility",
      description:
        "Boost your rankings and organic traffic with our professional SEO agency. We provide on-page SEO, technical SEO, link building, and local SEO services.",
    },

    "social-media-marketing": {
      title: "Social Media Marketing Agency | Grow Your Brand Online",
      description:
        "Increase brand awareness, engagement, and sales with our social media marketing agency. We manage Facebook, Instagram, LinkedIn, TikTok, and other social media platforms.",
    },

    "e-commerce-management": {
      title: "Ecommerce Management Agency | Store Optimization & Growth",
      description:
        "Maximize your online store performance with our ecommerce management agency. We handle product listings, inventory management, marketing, and conversion optimization.",
    },

    "ai-automation": {
      title: "AI Automation Agency | Smart Business Automation Solutions",
      description:
        "Boost efficiency with AI automation, chatbots, and smart workflows that streamline operations and accelerate business growth.",
    },
  },

  // 📊 --- CASE STUDIES METADATA (Saare 9 projects ka custom metadata yahan add kar diya) ---
  " case-studies ": {
    "170-leads-increased-for-roofing-company": {
      title: "170% Leads Increased For Roofing Company | Case Study",
      description: "How we generated 170% more qualified leads for a local roofing company through technical SEO and local optimization.",
    },
    "28-organic-traffic-increase-for-local-cleaning-company": {
      title: "28% Organic Traffic Increase For Local Cleaning Company | Case Study",
      description: "Discover how our SEO strategy boosted organic traffic by 28% for a local cleaning business.",
    },
    "6.69K-clicks-in-just-3-months-for-local-restaurant": {
      title: "6.69K Clicks in 3 Months For Local Restaurant | Case Study",
      description: "Case study on driving 6.69K organic clicks in less than 90 days for a local food brand.",
    },
    "1-76k-leads-for-aesthetic-clinic": {
      title: "1.76K Leads For Aesthetic Clinic | Case Study",
      description: "See how we scaled appointments and generated 1.76K high-intent leads for an aesthetic clinic.",
    },
    "%231-position-in-serp-for-holistic-doctor-clinic": {
      title: "#1 Position in SERP For Holistic Doctor Clinic | Case Study",
      description: "Our SEO roadmap that secured the top spot on Google for a holistic healthcare clinic.",
    },
    "31-increase-in-qualified-property-leads-via-high-intent-social-funnels": {
      title: "31% Increase In Qualified Property Leads | Case Study",
      description: "How we used social media marketing and custom funnels to boost property leads by 31%.",
    },
    "598541-in-sales-at-22x-roas-for-private-label-fitness-brand": {
      title: "$598,541 In Sales At 22x ROAS For Fitness Brand | Case Study",
      description: "Achieving an incredible 22x ROAS and massive ecommerce sales for a private label fitness clothing brand.",
    },
    "1044-website-purchases-for-fashion-brand": {
      title: "1,044 Website Purchases For Fashion Brand | Case Study",
      description: "How we generated over 1,000 direct-response purchases in 2 months at 23.85x ROAS.",
    },
    "25-10x-roas-for-home-living-brand": {
      title: "25.10x ROAS For Home & Living Brand | Case Study",
      description: "Scaling a home decor brand's revenue using high-converting paid social media advertising funnels.",
    },
  }
};