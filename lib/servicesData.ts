export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  heroTitle: string;
  heroDesc: string;
  stats: { label: string; value: string }[];
  whyUs: { title: string; desc: string }[];
  portfolio: { title: string; category: string; image: string }[];
  process: { step: string; title: string; desc: string }[];
  longContent: string;
  faqs: { q: string; a: string }[];
}

export const servicesData: ServiceData[] = [
  {
    id: "01",
    slug: "web-design-services",
    title: "Web Design & Development",
    heroTitle: "We Build Websites That Outsmart Your Competition",
    heroDesc: "Your website is the digital front door to your business. We combine cutting-edge Next.js technology with psychological design principles to create high-converting digital experiences that load in a blink.",
    stats: [
      { label: "Site Speed", value: "99/100" },
      { label: "Conversion Lift", value: "45%+" },
      { label: "Active Users", value: "1M+" },
      { label: "Projects Done", value: "250+" }
    ],
    whyUs: [
      { title: "Mobile-First approach", desc: "We design for the thumb first. Our sites are fluid and fully responsive across all devices." },
      { title: "Next.js Performance", desc: "Using SSR and SSG to ensure your site is blazing fast and Google-friendly out of the box." },
      { title: "Conversion UI/UX", desc: "Every button and scroll is placed strategically to guide users towards a purchase." }
    ],
    portfolio: [
      { title: "Fintech Pro", category: "Web Application", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
      { title: "Luxury E-com", category: "Shopify Store", image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800" }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep dive into your business goals and target audience." },
      { step: "02", title: "UX Design", desc: "Wireframing the user journey for maximum engagement." },
      { step: "03", title: "Build", desc: "Clean coding with Next.js and Tailwind CSS." },
      { step: "04", title: "Launch", desc: "Final QA testing and cloud deployment." }
    ],
    longContent: "In the modern digital landscape, a slow website is a dead website. We focus on Core Web Vitals to ensure your business stays ahead of Google's algorithm updates while providing a seamless experience to your users.",
    faqs: [
      { q: "Do you offer custom CMS integration?", a: "Yes, we integrate Sanity, Contentful, or headless WordPress for easy management." },
      { q: "How long does a project take?", a: "A typical high-end website takes between 4 to 8 weeks from start to finish." }
    ]
  },
  {
    id: "02",
    slug: "seo-agency",
    title: "SEO Optimization",
    heroTitle: "Rank Higher, Sell More with Intent-Based SEO",
    heroDesc: "Stop chasing traffic and start chasing revenue. Our SEO strategies are built around high-intent keywords that bring customers ready to buy, not just browsers.",
    stats: [
      { label: "Traffic Growth", value: "300%" },
      { label: "Keywords Ranked", value: "1.2K" },
      { label: "ROI Delivered", value: "15x" },
      { label: "Backlinks Built", value: "500+" }
    ],
    whyUs: [
      { title: "Data-Driven Audit", desc: "We find the hidden technical errors that are holding your website back from ranking." },
      { title: "Quality Backlinks", desc: "No spam. We build authority through high-quality niche placements and PR." },
      { title: "Content Mastery", desc: "We create long-form content that answers user queries better than anyone else." }
    ],
    portfolio: [
      { title: "SaaS Growth", category: "Organic Scaling", image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?w=800" },
      { title: "Local Leader", category: "Local SEO", image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800" }
    ],
    process: [
      { step: "01", title: "Audit", desc: "Full technical and competitor SEO analysis." },
      { step: "02", title: "Keyword Map", desc: "Mapping high-intent terms to your landing pages." },
      { step: "03", title: "Optimization", desc: "On-page and technical fixes for maximum crawlability." },
      { step: "04", title: "Authority", desc: "Monthly link building and content distribution." }
    ],
    longContent: "SEO is a marathon, not a sprint. We focus on sustainable, white-hat techniques that keep your site ranking even after algorithm updates. Our approach is holistic, covering technical, on-page, and off-page SEO.",
    faqs: [
      { q: "Can you guarantee #1 ranking?", a: "No one can guarantee #1, but we guarantee significant growth in organic traffic and leads." },
      { q: "When will I see results?", a: "Typically, visible growth starts within 3-6 months depending on competition." }
    ]
  },
  {
    id: "03",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    heroTitle: "Viral Strategies That Build Loyal Communities",
    heroDesc: "Social media is the heartbeat of modern branding. We create thumb-stopping content and targeted ad campaigns that turn followers into brand advocates.",
    stats: [
      { label: "Reach", value: "10M+" },
      { label: "Engagement Rate", value: "8.5%" },
      { label: "Ad Spend Managed", value: "$2M+" },
      { label: "Communities", value: "50+" }
    ],
    whyUs: [
      { title: "Creative Storytelling", desc: "We don't just post; we tell stories that resonate with your audience's emotions." },
      { title: "Precise Targeting", desc: "Reaching the exact demographic that is most likely to convert using advanced AI tools." },
      { title: "Influencer Network", desc: "Access to top-tier influencers to boost your brand's credibility instantly." }
    ],
    portfolio: [
      { title: "Glow Skin Care", category: "Viral Growth", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" },
      { title: "Tech Pulse", category: "Ad Campaign", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800" }
    ],
    process: [
      { step: "01", title: "Profiling", desc: "Identifying where your audience hangs out online." },
      { step: "02", title: "Creation", desc: "Producing high-quality reels, graphics, and copy." },
      { step: "03", title: "Execution", desc: "Strategic posting and real-time community management." },
      { step: "04", title: "Growth", desc: "Scaling ads and analyzing performance weekly." }
    ],
    longContent: "Social media is where your brand comes to life. We bridge the gap between your product and your customers through authentic engagement and viral-worthy content production.",
    faqs: [
      { q: "Do you handle negative comments?", a: "Yes, our community management includes crisis control and reputation management." },
      { q: "Which platforms do you support?", a: "Instagram, TikTok, Facebook, LinkedIn, and Twitter (X)." }
    ]
  },
  {
    id: "04",
    slug: "branding-design",
    title: "Branding & Logo Design",
    heroTitle: "Visual Identities That Demand Attention",
    heroDesc: "A logo is just the beginning. We build complete brand universes—from color psychology to typography—that make your business unforgettable.",
    stats: [
      { label: "Logos Created", value: "500+" },
      { label: "Brand Manuals", value: "120+" },
      { label: "Client Retension", value: "95%" },
      { label: "Visual Impact", value: "100%" }
    ],
    whyUs: [
      { title: "Color Psychology", desc: "We choose palettes that subconsciously trigger the right emotions in your customers." },
      { title: "Scalable Systems", desc: "Designs that work everywhere, from a favicon to a massive billboard." },
      { title: "Strategic Meaning", desc: "Every curve and dot in our designs has a purpose and a story behind it." }
    ],
    portfolio: [
      { title: "Vanguard Realty", category: "Brand Identity", image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=800" },
      { title: "Brew & Co", category: "Logo Design", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" }
    ],
    process: [
      { step: "01", title: "Ideation", desc: "Brainstorming and sketching initial brand concepts." },
      { step: "02", title: "Development", desc: "Refining designs and testing against brand values." },
      { step: "03", title: "Manual", desc: "Creating the rules for how your brand should look." },
      { step: "04", title: "Delivery", desc: "Providing all vector files and web-ready assets." }
    ],
    longContent: "Your brand is the promise you make to your customers. We ensure that promise is visually stunning, consistent, and powerful enough to stand the test of time.",
    faqs: [
      { q: "Will I get multiple concepts?", a: "Yes, we typically provide 3-5 unique concepts to choose from." },
      { q: "Can you rebrand an existing business?", a: "Absolutely. We specialize in modernizing legacy brands for the digital age." }
    ]
  },
  {
    id: "05",
    slug: "content-marketing",
    title: "Content Marketing",
    heroTitle: "High-Value Content That Educates & Converts",
    heroDesc: "Content is the fuel for SEO and Social Media. We craft stories, blogs, and copy that position your brand as the ultimate authority in your niche.",
    stats: [
      { label: "Articles Published", value: "2K+" },
      { label: "Average Read Time", value: "4m+" },
      { label: "Lead Gen", value: "+60%" },
      { label: "Viral Pieces", value: "15+" }
    ],
    whyUs: [
      { title: "SEO First Writing", desc: "We write for people first, but we optimize for robots to ensure visibility." },
      { title: "Authority Building", desc: "Educational content that makes your competitors look like amateurs." },
      { title: "Omnichannel strategy", desc: "Content that can be repurposed for blogs, newsletters, and social media." }
    ],
    portfolio: [
      { title: "The Finance Blog", category: "Content Strategy", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800" },
      { title: "Travel Guide", category: "Copywriting", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800" }
    ],
    process: [
      { step: "01", title: "Topic Map", desc: "Finding what your customers are actually searching for." },
      { step: "02", title: "Drafting", desc: "Writing research-backed, high-quality long-form pieces." },
      { step: "03", title: "SEO Pass", desc: "Optimizing for LSI keywords and readability." },
      { step: "04", title: "Promotion", desc: "Distributing content through email and social channels." }
    ],
    longContent: "Google rewards expertise. Our content marketing strategy is designed to showcase your brand's knowledge, building deep trust with your audience before they ever speak to a salesperson.",
    faqs: [
      { q: "Do you write whitepapers?", a: "Yes, we create in-depth whitepapers, case studies, and e-books." },
      { q: "Can you handle monthly blogging?", a: "Most of our clients are on a monthly content retainer for consistent growth." }
    ]
  }
];