// ========================================================
// 📦 GLOBAL CASE STUDIES DATA REPOSITORY ARRAY
// ========================================================
export interface MetricItem {
  value: string;
  label: string;
  highlight: boolean;
}

export interface SectionItem {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  theme: "dark" | "variant";
  paragraphs: string[];
  featuresHeader?: string;
  features?: string[];
  conclusion?: string;
}

export interface ResultCard {
  badge: string;
  value: string;
  label: string;
  desc: string;
  isEmerald: boolean;
}

export interface ResultsData {
  id: string;
  tag: string;
  title: string;
  description: string;
  cards: ResultCard[];
  additionalHeader?: string;
  additionalImprovements?: string[];
  conclusionTitle: string;
  conclusionParagraphs: string[];
}

export interface ProofImage {
  src: string;
  alt: string;
  caption: string;
  // 🔥 Fixed & Added "pink" here so it compiles cleanly
  color: "blue" | "emerald" | "purple" | "pink"; 
}

export interface ProofData {
  header: string;
  subheader: string;
  images: ProofImage[];
}

export interface CaseStudy {
  slug: string;
  category: "seo" | "social" | "web";
  isSocial: boolean;
  title: string;
  description: string;
  primaryOutcome: string;
  image: string;
  metrics: MetricItem[];
  sections: SectionItem[];
  results: ResultsData;
  proof?: ProofData;
}
export const caseStudiesData: CaseStudy[] = [
  // ========================================================
  // 🔥 1. RHINO ROOFING ORLANDO (SEO CASE STUDY)
  // ========================================================
  {
    slug: "rhino-orlando",
    category: "seo",
    isSocial: false,
    title: "Rhino Roofing Orlando",
    description: "How we built a scalable digital acquisition channel, driving massive ranking improvements and local service dominance in a highly competitive market.",
    primaryOutcome: "+1,194% Traffic",
    image: "/rino-roffers.jpg",
    metrics: [
      { value: "+1,194%", label: "Organic traffic growth achieved in 6 months.", highlight: false },
      { value: "+170%", label: "Lead generation increase across channels.", highlight: true },
      { value: "+4.4K", label: "Monthly organic visitors systematically sustained.", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Rhino Roofing Orlando approached us looking to strengthen its online presence and generate more qualified roofing leads in a highly competitive local market.",
          "The existing website lacked modern design standards, had weak SEO foundations, and struggled to attract consistent organic traffic. Despite offering quality roofing services, the business was not receiving enough visibility on Google to compete effectively against established local competitors.",
          "The challenge was not only to redesign the website visually but also to create a scalable SEO strategy that could improve search visibility, increase local traffic, and convert visitors into real customer inquiries."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Website Redesign & Conversion Optimisation",
        theme: "variant",
        paragraphs: [
          "To drive sustainable growth, we implemented a complete website redesign alongside a 6-month SEO campaign focused on performance, visibility, and lead generation.",
          "The first step was rebuilding the website with a modern, user-focused approach designed to improve both user experience and conversions."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Modern and responsive website design",
          "Improved mobile usability layouts",
          "Faster loading speed optimisation loops",
          "SEO-friendly clean site architecture",
          "Clear service-focused custom landing pages",
          "Better call-to-actions and conversion lead forms"
        ],
        conclusion: "The redesign created a stronger user experience while providing a solid technical foundation for SEO growth."
      },
      {
        id: "03",
        tag: "Execution",
        title: "SEO FOUNDATION & TECHNICAL OPTIMISATION",
        theme: "dark",
        paragraphs: [
          "After launching the new website, we focused on strengthening the technical SEO framework to improve search engine crawlability and indexing."
        ],
        featuresHeader: "SEO Improvements Included:",
        features: [
          "Comprehensive keyword research",
          "On-page SEO optimisation",
          "Meta title and description optimisation",
          "Technical SEO fixes",
          "Schema implementation",
          "Local SEO enhancements"
        ],
        conclusion: "This helped improve search visibility for high-intent roofing keywords across Orlando."
      },
      {
        id: "04",
        tag: "Locality",
        title: "CONTENT & LOCAL SEO GROWTH STRATEGY",
        theme: "variant",
        paragraphs: [
          "To expand local visibility and authority, we developed a targeted content and local SEO strategy focused on attracting qualified roofing traffic."
        ],
        featuresHeader: "Growth Activities Included:",
        features: [
          "Service area targeting",
          "Location-based SEO pages",
          "Google Business Profile optimisation",
          "Local citation improvements",
          "High-quality backlink acquisition"
        ],
        conclusion: "The strategy focused on capturing users actively searching for roofing services while strengthening local ranking signals."
      },
      {
        id: "05",
        tag: "Agile Loops",
        title: "CONTINUOUS SEO OPTIMISATION",
        theme: "dark",
        paragraphs: [
          "Throughout the 6-month campaign, we continuously monitored rankings, traffic behaviour, and conversion performance to maximise growth opportunities."
        ],
        featuresHeader: "Ongoing Optimisation Included:",
        features: [
          "Monthly SEO audits",
          "Performance tracking and reporting",
          "Keyword ranking improvements",
          "Conversion optimisation"
        ],
        conclusion: "This agile approach allowed us to adapt quickly and scale performance consistently over time."
      }
    ],
    results: {
      id: "06",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The campaign delivered significant growth across organic traffic, online visibility, and lead generation within just 6 months.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "+1,194%",
          label: "Organic Traffic Growth",
          desc: "Monthly website traffic scaled systematically from a baseline of 340 visitors directly to 4.4K active monthly visitors.",
          isEmerald: true
        },
        {
          badge: "Conversion Loop",
          value: "+170%",
          label: "Increase in Leads",
          desc: "The improved website experience and SEO visibility generated a substantial increase in qualified customer inquiries.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Performance Improvements:",
      additionalImprovements: [
        "Higher rankings for competitive roofing keywords",
        "Stronger visibility in local Google searches",
        "Increased engagement and lower bounce rates",
        "Improved conversion rates from organic traffic"
      ],
      conclusionTitle: "TURNING SEO INTO LONG-TERM BUSINESS GROWTH",
      conclusionParagraphs: [
        "Rhino Roofing Orlando’s growth demonstrates the impact of combining a modern, conversion-focused website with a strategic SEO campaign built around long-term scalability.",
        "By improving technical performance, strengthening local SEO signals, and continuously optimising user experience, we helped transform the website into a reliable lead generation asset."
      ]
    },
    proof: {
      header: "Verified Analytics & Execution Proof:",
      subheader: "Live platform snapshots capturing the exact transition loops and metric adjustments.",
      images: [
        {
          src: "/rino-reviews.jpg",
          alt: "Rhino Roofing Google Search Console Organic Traffic Analytics",
          caption: "Figure 1.1: Verified 6-month growth loop capturing organic search impressions.",
          color: "blue"
        },
        {
          src: "/rino-results.jpg",
          alt: "Rhino Roofing Orlando Local Keyword Positioning Dashboard",
          caption: "Figure 1.2: Local map pack tracking loops for primary Orlando high-intent search terms.",
          color: "emerald"
        }
      ]
    }
  },
 
// ========================================================
  // 🔥 SMILECARE (PURE ECOMMERCE & SHOPIFY SEO CASE STUDY)
  // ========================================================
  {
    slug: "breez-care",
    category: "seo",
    isSocial: false,
    title: "Breez care",
    description: "+11% Total Sales Revenue Increased For Oral Care Brand",
    primaryOutcome: "+28% Sessions",
    image: "/smile-care.jpg", // 👈 Top Image Path (Yahan apni file ka naam set kar lena)
    metrics: [
      { value: "+28%", label: "Increase in website sessions", highlight: false },
      { value: "+11%", label: "Growth in total sales revenue", highlight: true },
      { value: "+10%", label: "Increase in total orders", highlight: false },
      { value: "+9%", label: "Growth in gross sales", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our eCommerce client approached us looking to improve organic visibility, increase qualified traffic, and drive more sales through their Shopify store.",
          "Although the brand had quality products and an established online presence, the store was struggling with inconsistent organic traffic growth, limited keyword visibility, and underperforming conversion rates. The website also lacked a strong SEO structure capable of supporting long-term scaling in a highly competitive eCommerce market.",
          "The challenge was not simply to increase traffic, but to attract high-intent visitors that would convert into paying customers while improving overall store performance and revenue growth.",
          "The business needed a Shopify SEO strategy focused on sustainable growth, technical optimisation, and stronger search visibility across commercial product searches."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Shopify SEO Foundation & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To improve performance, we implemented a comprehensive Shopify SEO strategy focused on technical optimisation, content improvements, keyword targeting, and conversion-focused traffic growth.",
          "The first priority was improving the technical SEO structure of the Shopify store to enhance crawlability, indexing, and overall site performance."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Shopify technical SEO optimisation",
          "Site speed and performance improvements",
          "Mobile usability enhancements",
          "Optimised collection and product page structure",
          "Schema markup implementation",
          "Meta title and description optimisation",
          "Internal linking improvements",
          "Duplicate content fixes"
        ],
        conclusion: "These changes created a stronger SEO foundation while improving the overall user experience."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Keyword Strategy & Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To increase visibility for high-intent commercial searches, we developed a targeted keyword and content strategy aligned with customer buying behaviour."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Comprehensive keyword research",
          "Product page SEO optimisation",
          "Collection page optimisation",
          "Content expansion for category relevance",
          "Search intent mapping",
          "Competitor SEO analysis",
          "Optimised image alt tags and descriptions"
        ],
        conclusion: "This helped improve rankings for valuable eCommerce search terms while increasing qualified organic traffic."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion-Focused SEO Growth",
        theme: "variant",
        paragraphs: [
          "Beyond rankings and traffic, the strategy focused heavily on improving conversion performance and revenue generation."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "User experience improvements",
          "Better navigation and product discovery",
          "Enhanced call-to-actions",
          "Shopify conversion optimisation",
          "Improved customer journey flow",
          "Performance monitoring and ongoing SEO refinements"
        ],
        conclusion: "This approach ensured traffic growth translated into measurable business results."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The Shopify SEO campaign delivered strong improvements across traffic, sales, and customer engagement.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "+28%",
          label: "Increase in Website Sessions",
          desc: "Organic and overall website sessions increased significantly, driving more qualified visitors to the store.",
          isEmerald: true
        },
        {
          badge: "Revenue Growth",
          value: "+11%",
          label: "Growth in Total Sales Revenue",
          desc: "Total sales revenue grew consistently as higher-intent traffic converted into customers.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Higher rankings for commercial keywords",
        "Increased product visibility in search engines",
        "Better customer engagement metrics",
        "Improved mobile shopping experience",
        "Stronger long-term SEO scalability"
      ],
      conclusionTitle: "TURNING SHOPIFY SEO INTO REVENUE GROWTH",
      conclusionParagraphs: [
        "This campaign demonstrates how a well-structured Shopify SEO strategy can directly impact eCommerce growth beyond just rankings and traffic.",
        "By combining technical SEO, keyword optimisation, user experience improvements, and ongoing performance analysis, we helped transform the Shopify store into a stronger revenue-generating platform.",
        "The result was increased visibility, stronger customer acquisition, and measurable growth in sessions, orders, and sales revenue.",
        "With a scalable SEO foundation now in place, the brand is positioned for continued eCommerce growth, improved search performance, and long-term online success."
      ]
    },
    proof: {
      header: "Verified Analytics & Execution Proof:",
      subheader: "Live platform snapshots capturing the exact transition loops and metric adjustments.",
      images: [
        {
          src: "/breez-care-result.jpg", // 👈 Bottom Image Path (Aapki hardcoded review image ya analytics ss)
          alt: "SmileCare Google Analytics and Shopify Revenue Growth Proof",
          caption: "Figure 3.1: Live metric improvements including +10% orders and +11% total revenue scale.",
          color: "blue"
        }
      ]
    }
  },
 // ========================================================
  // 🔥 WEST LONDON CLEANING COMPANY (WIX LOCAL SEO CASE STUDY)
  // ========================================================
  {
    slug: "west-london-cleaners",
    category: "seo",
    isSocial: false,
    title: "West London Cleaning Company",
    description: "+28% Organic Traffic Increase For Local Cleaning Company",
    primaryOutcome: "Top #1 Positions",
    image: "/cleaning.jpg", // 👈 Top Image Path (Yahan apni top image file ka naam set karein)
    metrics: [
      { value: "+28%", label: "Increase in organic website sessions", highlight: false },
      { value: "Top #1", label: "Position for multiple high-intent keywords", highlight: true },
      { value: "+10%", label: "Growth in direct service booking inquiries", highlight: false },
      { value: "+9%", label: "Improvement in user engagement metrics", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our local service client, a cleaning company operating in West London, approached us with the goal of increasing local organic visibility, driving more qualified service leads, and positioning the brand as the top choice for residential and commercial cleaning in the area.",
          "The cleaning service market in West London is highly saturated, making it difficult for new and established businesses to stand out. Our client's existing website was struggling to capture local search traffic due to a weak technical structure, limited keyword visibility, and a lack of local relevance.",
          "Additionally, the online booking flow was fragmented, resulting in low conversion rates from the minimal traffic they did receive. The business urgently needed a professional, local SEO-focused presence.",
          "The challenge was to build and optimize a Wix-based platform that would not just rank for general cleaning terms, but dominate local, high-intent searches specific to West London boroughs.",
          "The objective was to transform their online presence into a primary engine for local lead generation and customer acquisition within a tight three-month timeline."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Wix Local SEO Foundation & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To achieve competitive local rankings and lead generation, we designed and implemented a comprehensive, localized SEO strategy, beginning with the foundation of a brand-new, optimized Wix website.",
          "The primary focus was establishing a powerful local search foundation by leveraging Wix's SEO and structure to maximize crawlability and local relevance."
        ],
        featuresHeader: "Key Activities Included:",
        features: [
          "Development and optimization of a new Wix business website",
          "Advanced technical SEO tuning (schema markup, mobile usability)",
          "Comprehensive local keyword research targeting West London boroughs",
          "Mobile-first design for local search and on-the-go users",
          "Advanced image SEO (optimized alt tags and file naming)",
          "Detailed competitor research and performance mapping",
          "Schema implementation for local service and physical address details",
          "Detailed page structure optimization"
        ],
        conclusion: "This strategic foundation ensured that the subsequent content strategy was supported by a strong, locally relevant, and user-friendly platform."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Content Strategy & User Experience Optimization",
        theme: "dark",
        paragraphs: [
          "Beyond the technical backend, we focused on high-quality, targeted content designed to satisfy local search intent and facilitate user conversion."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Search intent mapping for service terms",
          "Creation of detailed, optimized service pages (e.g., Deep Cleaning in Chiswick)",
          "Hyper-local blog content addressing relevant cleaning needs",
          "Integrated Wix online booking system for direct conversion",
          "Internal linking strategy for authority and navigation",
          "Local business directory submissions (citations)",
          "Consistent NAP (Name, Address, Phone) implementation"
        ],
        conclusion: "This localized content approach ensured the website was recognized by search engines as a genuine authority for cleaning services in the specific West London target areas."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Performance Monitoring & Ongoing Conversion Refinements",
        theme: "variant",
        paragraphs: [
          "The final stage focused on converting traffic growth into measurable business results."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Real-time performance tracking and SERP monitoring",
          "Customer journey analysis to identify conversion bottlenecks",
          "Iterative improvements to call-to-actions and contact forms",
          "Regular SEO performance audits and reporting",
          "Mobile booking flow optimization"
        ],
        conclusion: "This ensured that the rapid increase in local search visibility translated directly into qualified bookings and business revenue."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The Wix local SEO campaign delivered exceptional results, achieving top search positions and significant growth in local leads.",
      cards: [
        {
          badge: "SERP Dominance",
          value: "Top #1",
          label: "Ranking for Target Keywords",
          desc: "The cleaning company website achieved the #1 organic position for multiple localized, high-intent keywords within West London after just 3 months.",
          isEmerald: true
        },
        {
          badge: "Traffic Velocity",
          value: "+28%",
          label: "Increase in Organic Website Sessions",
          desc: "Highly relevant local traffic and organic website sessions grew significantly, driving more customers to discover and engage with the business.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Domination of local search results for competitive terms",
        "Significantly increased local brand visibility and authority",
        "Dramatically improved local search presence and mapping results",
        "A highly professional and trustworthy online business image",
        "A scalable foundation for continued local service expansion"
      ],
      conclusionTitle: "LEVERAGING LOCAL SEO AND WIX FOR BUSINESS GROWTH",
      conclusionParagraphs: [
        "This localized service campaign demonstrates how a focused local SEO strategy combined with an optimized Wix platform can rapidly transform search performance and drive local lead generation.",
        "By focusing on highly relevant keyword targeting, local technical optimization, and conversion-focused design, we successfully positioned the West London cleaning company as a top-performing online competitor within a competitive market in under 90 days.",
        "This provided a strong return on investment and a valuable, locally authoritative digital asset."
      ]
    },
    // proof: {
    //   header: "Verified Analytics & Local Performance Proof:",
    //   subheader: "Live platform snapshots capturing the exact transition loops and metric adjustments.",
    //   images: [
    //     {
    //       src: "/cleaning-result.jpg", // 👈 Bottom Image Path (Yahan apni bottom proof/analytics image ka name set karein)
    //       alt: "Cleaning Company Wix Ranking and Local Search Analytics Proof",
    //       caption: "Figure 3.1: Live metrics tracking displaying the transition loop into Top 1 position for core West London search variables.",
    //       color: "blue"
    //     }
    //   ]
    // }
  },
// ========================================================
  // 🔥 LOCAL RESTAURANT AUSTRALIA (LOCAL SEO CASE STUDY)
  // ========================================================
  {
    slug: "australia-restaurant-seo",
    category: "seo",
    isSocial: false,
    title: "Local Restaurant Australia",
    description: "+6.69K Clicks in Just 3 Months For Local Restaurant",
    primaryOutcome: "+6.69K Clicks",
    image: "/burger.jpg", // 👈 Top Image Path (Yahan apni banner image set karein)
    metrics: [
      { value: "+6.69K", label: "Total Organic Clicks realized", highlight: false },
      { value: "+291K", label: "Total Search Impressions achieved", highlight: true },
      { value: "#7", label: "Average SERP Position stabilized", highlight: false },
      { value: "2.3%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our hospitality client, a local restaurant operating in Australia, approached us to improve their online visibility, capture high-intent local food searches, and drive more direct table reservations through their website.",
          "Despite serving exceptional cuisine and having a strong physical reputation, the restaurant’s website was virtually invisible on search engines. They were struggling with an unoptimized web structure, zero ranking positions for high-value transactional keywords (like 'best restaurants near me' or cuisine-specific local searches), and an underperforming online booking experience.",
          "The challenge was not simply to pull random traffic, but to consistently attract hungry, local, high-intent diners who would convert into table bookings and walk-ins. The business needed a localized SEO strategy built for immediate search discoverability and sustainable, long-term organic growth."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Technical Foundation & Local SEO Optimisation",
        theme: "variant",
        paragraphs: [
          "To dramatically scale search performance, we implemented a comprehensive local SEO and conversion-focused optimization strategy to turn search impressions into seated guests.",
          "The first priority was fixing the backend technical foundation of the restaurant's website to maximize search engine crawlability and establish deep local relevance."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Website technical SEO audit and optimization",
          "Local Business and Restaurant JSON-LD schema implementation",
          "Site speed and mobile responsiveness improvements (crucial for on-the-go diners)",
          "Google Business Profile (GBP) deep synchronization",
          "Menu page structural optimization and readability tuning",
          "Meta title, description, and header tag optimization for target suburbs",
          "Clean internal linking architecture",
          "Image asset compression and alt tag optimization for menu items"
        ],
        conclusion: "These fundamental upgrades paved the way for search engines to easily index the restaurant’s location, hours, and culinary offerings."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Keyword Targeting & Menu Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To capture local searchers at the exact moment they were deciding where to eat, we built out a hyper-targeted keyword and content blueprint."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "In-depth local hospitality keyword research",
          "Dedicated landing page optimization for primary service areas and suburbs",
          "Semantic menu content optimization (mapping dishes to popular search queries)",
          "Local competitor search gap analysis",
          "Geotargeted local citation building and consistency cleanup",
          "Search intent mapping for booking queries vs. general food browsing"
        ],
        conclusion: "This targeted approach positioned the restaurant at the top of organic results for valuable local dining and culinary search terms."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion-Focused Growth & Booking Flow",
        theme: "variant",
        paragraphs: [
          "Beyond scaling impressions and clicks, the campaign prioritized optimizing the website to maximize table reservations."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "User experience (UX) refinements for effortless mobile browsing",
          "Frictionless online booking system integration",
          "Prominent, high-visibility 'Book a Table' call-to-actions (CTAs)",
          "Direct phone numbers and click-to-navigate structural fixes",
          "Ongoing conversion rate optimization based on user navigation paths"
        ],
        conclusion: "This approach guaranteed that the steady climb in search clicks successfully translated into real-world business growth and filled seats."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The restaurant SEO campaign yielded exceptional results over the 3-month period, establishing a highly visible and reliable lead-generation pipeline.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "+6.69K",
          label: "Total Organic Clicks",
          desc: "The website generated a massive stream of targeted organic traffic, capturing thousands of high-intent visitors looking to dine.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "+291K",
          label: "Total Search Impressions",
          desc: "Brand visibility exploded across search engines, appearing nearly 300,000 times in front of local users actively searching for dining options.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant rankings for hyper-local 'near me' restaurant searches",
        "Significantly higher visibility across local mapping results",
        "Upgraded and polished mobile-first dining UX",
        "Increased direct web reservations, reducing reliance on third-party aggregators",
        "Scalable SEO architecture ready to support future menu or location expansions"
      ],
      conclusionTitle: "TURNING RESTAURANT SEO INTO SEATED GUESTS",
      conclusionParagraphs: [
        "This campaign proves how a targeted local SEO strategy can directly transform a restaurant's digital presence into a highly profitable customer acquisition tool.",
        "By pairing technical local optimizations, strict geo-targeted keyword strategies, and an intuitive user interface, we turned a quiet website into a primary driver of foot traffic and online bookings.",
        "The result is a rock-solid online foundation that positions the brand for sustained culinary market leadership and long-term business success."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/burger-results.jpg", // 👈 Bottom Image Path (Yahan apni metrics/GSC screenshot image set karein)
          alt: "Google Search Console performance dashboard capturing organic traffic scaling parameters.",
          caption: "Figure 4.1: Verified 3-month tracking profile displaying average position improvements and impression spikes.",
          color: "blue"
        }
      ]
    }
  },
// ========================================================
  // 🔥 AESTHETIC CLINIC USA (MEDICAL CLINICAL SEO CASE STUDY)
  // ========================================================
  {
    slug: "aesthetic-clinic-seo",
    category: "seo",
    isSocial: false,
    title: "Aesthetic Clinic",
    description: "+1.76K Leads For Aesthetic Clinic",
    primaryOutcome: "+1.76K Leads",
    image: "/clinic.jpg", // 👈 Top Image Path
    metrics: [
      { value: "+1.76K", label: "Total Organic Clicks realized", highlight: false },
      { value: "+198K", label: "Total Search Impressions achieved", highlight: true },
      { value: "6.7", label: "Average SERP Position stabilized", highlight: false },
      { value: "0.9%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our medical aesthetics client, an upscale aesthetic clinic operating in the USA, approached us to increase their local organic reach, capture high-intent medical spa searches, and drive more direct consultation bookings through their website.",
          "Operating in a premium, highly competitive market, the clinic was struggling to break through the local noise.",
          "While their practitioners were top-tier, their website suffered from poor search visibility, an unoptimized service page architecture, and zero prominent positions for lucrative treatments like Botox, dermal fillers, and advanced skin resurfacing. The site was losing potential patients to local med spas with stronger technical foundations.",
          "The challenge was not merely to boost broad traffic metrics, but to strategically capture localized, high-intent searches from users actively seeking clinical treatments. The business required an advanced aesthetic SEO and content strategy to establish regional authority and drive steady, long-term patient acquisition."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Technical Foundation & Local Clinical SEO",
        theme: "variant",
        paragraphs: [
          "To achieve competitive search positions and drive high-value patient leads, we implemented a precise, conversion-focused medical aesthetic SEO strategy.",
          "The immediate priority was overhauling the technical infrastructure of the clinic's website to ensure search engines could cleanly index their treatments and locations."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Website technical SEO audit and architectural optimization",
          "MedicalBusiness and LocalBusiness JSON-LD schema implementation",
          "Site speed enhancements and mobile usability tuning (critical for local users)",
          "Google Business Profile (GBP) deep optimization and service mapping",
          "Core Web Vitals optimization to improve first-input delay and page response",
          "Meta title, description, and header structure optimization for target geographic regions",
          "Image file compression and precise alt-tag naming for treatment results",
          "Internal linking fixes to distribute authority to high-value service pages"
        ],
        conclusion: "These core technical adjustments established a highly crawlable, authoritative web presence recognized by search crawlers for local relevance."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Treatment Pillar & High-Intent Content Optimisation",
        theme: "dark",
        paragraphs: [
          "To capture users searching for specific aesthetic treatments, we built a comprehensive content strategy centered around treatment authority and clear medical communication."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Comprehensive local keyword research targeting premium aesthetic treatments",
          "Development of dedicated, high-converting landing pages for core services",
          "Alignment of content with medical search intent and local user expectations",
          "Deep competitor search gap analysis to reclaim lost local market share",
          "Local citation building and NAP (Name, Address, Phone) consistency tuning",
          "Strategic FAQ integration on service pages to capture voice search and long-tail queries"
        ],
        conclusion: "This targeted approach positioned the clinic's specialized treatments directly in front of localized audiences at the exact moment they were ready to book."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Conversion Rate Optimisation & Patient Lead Generation",
        theme: "variant",
        paragraphs: [
          "Beyond scaling impressions and clicks, the strategy focused heavily on refining the online user experience to convert cold traffic into scheduled appointments."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Streamlining mobile navigation and treatment discovery paths",
          "High-visibility, prominent 'Book Consultation' call-to-actions (CTAs)",
          "Integration of a seamless, frictionless online scheduling system",
          "Compliance-conscious UX updates to build immediate clinical trust",
          "Ongoing user behavior monitoring to remove drop-off points in the booking funnel"
        ],
        conclusion: "This comprehensive setup ensured that the climbing search visibility successfully materialized as qualified consultations and increased clinic appointments."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The medical aesthetics SEO campaign delivered strong, measurable growth across all key search metrics, solidifying a predictable patient acquisition channel.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "1.76K",
          label: "Total Organic Clicks",
          desc: "The website generated a steady stream of highly targeted traffic, pulling in over 1,700 qualified visitors actively interested in aesthetic services.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "198K",
          label: "Total Search Impressions",
          desc: "Brand visibility scaled significantly across search engines, displaying the clinic's services nearly 200,000 times to users browsing aesthetic treatments.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant rankings for competitive local medical spa and aesthetic keywords",
        "Elevated placement within localized search and map packs",
        "Significantly enhanced mobile user experience for seamless smartphone booking",
        "Higher lifetime value patient acquisition through target organic keyword streams",
        "A rock-solid digital asset poised to support future clinic expansions or new treatments"
      ],
      conclusionTitle: "TURNING AESTHETIC SEO INTO CLINIC GROWTH",
      conclusionParagraphs: [
        "This campaign demonstrates how a carefully tailored clinical SEO strategy can completely transform an aesthetic clinic's digital presence into a premium, lead-generating asset.",
        "By combining rigorous technical local optimization, strict high-intent keyword alignment, and a friction-free user journey, we transformed a quiet website into a primary engine for patient acquisition.",
        "The clinic now possesses a scalable, authoritative digital foundation built to secure continuous organic growth, fill practitioner schedules, and maintain long-term market leadership."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/clinic-result.jpg", // 👈 Bottom Image Path
          alt: "Google Search Console dashboard showing organic traffic spikes and lead generation patterns for the aesthetic clinic.",
          caption: "Figure 5.1: Verified performance index showcasing single-digit average position scale and traffic acquisition loops.",
          color: "blue"
        }
      ]
    }
  },
// ========================================================
  // 🔥 HOLISTIC DOCTOR CLINIC (INTEGRATIVE HEALTH SEO CASE STUDY)
  // ========================================================
  {
    slug: "holistic-doctor-clinic",
    category: "seo",
    isSocial: false,
    title: "Holistic Doctor Clinic",
    description: "#1 Position in SERP For Holistic Doctor Clinic",
    primaryOutcome: "#1 SERP Position",
    image: "/dr.jpg", // 👈 Top Image Path
    metrics: [
      { value: "+2.51K", label: "Total Organic Clicks realized", highlight: false },
      { value: "+145K", label: "Total Search Impressions achieved", highlight: true },
      { value: "14.2", label: "Average SERP Position stabilized", highlight: false },
      { value: "1.7%", label: "Average Click-Through Rate (CTR)", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our allied health client, a premium holistic medicine and integrative doctor clinic operating in Australia, approached us to scale their organic visibility, capture local high-intent medical searches, and drive more direct patient consultations through their website.",
          "Operating in a specialized and competitive wellness space, the clinic was struggling with an fragmented online presence.",
          "Despite their industry expertise and highly qualified practitioners, the website suffered from an unoptimized technical framework, a lack of clear service landing pages, and minimal search engine presence for lucrative, high-intent keywords (like 'integrative doctor near me' or specific natural therapy queries). They were consistently losing valuable patient leads to larger medical centers with stronger digital foundations.",
          "The challenge was not simply to bring generic, informational traffic to the site, but to establish profound digital trust and attract highly targeted local patients looking for holistic medical care. The clinic required a tailored healthcare SEO strategy focused on multi-location visibility, clinical authority, and a streamlined mobile patient journey."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Clinical SEO Foundation & Technical Optimisation",
        theme: "variant",
        paragraphs: [
          "To drive qualified traffic and continuous appointment growth, we designed and executed a multi-layered healthcare SEO strategy optimized for medical search intent.",
          "The initial step was upgrading the website's technical health and structuring its data so search engine crawlers could easily interpret the clinic's specialized offerings and locations."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Extensive technical SEO health audit and structural optimization",
          "Advanced MedicalBusiness and Physician JSON-LD schema implementation",
          "Page load speed enhancements and Core Web Vitals optimization",
          "Mobile responsiveness and layout testing (essential for patient navigation)",
          "Google Business Profile (GBP) deep optimization and service category mapping",
          "Meta description, title tag, and URL structure optimization for target Australian suburbs",
          "Clean internal link rebuilding to flow search authority to priority treatment pages",
          "Next-gen image asset compression and clinical alt-tag naming"
        ],
        conclusion: "This rigorous technical tuning gave search engines a clear, authoritative signal of the clinic's local physical presence and medical offerings."
      },
      {
        id: "03",
        tag: "Execution",
        title: "Topical Authority & Specialized Treatment Content",
        theme: "dark",
        paragraphs: [
          "To connect with individuals actively looking for alternative and integrative health treatments, we built a comprehensive content architecture mapped to specific patient pain points."
        ],
        featuresHeader: "SEO Activities Included:",
        features: [
          "Deep keyword research targeting localized holistic and integrative medicine queries",
          "Creation of dedicated, comprehensive service pages for specialized therapies",
          "Alignment of copy with authoritative healthcare communication standards to build immediate patient trust",
          "Competitor search gap analysis to identify missing high-intent service terms",
          "Multi-location citation building and local NAP (Name, Address, Phone) consistency validation",
          "Structured FAQ integration to capture voice searches and rich snippet opportunities in SERPs"
        ],
        conclusion: "This tailored alignment established the website as a highly authoritative, go-to regional destination for holistic and integrated medical support."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Patient Experience & Conversion-Focused Growth",
        theme: "variant",
        paragraphs: [
          "Beyond capturing massive keyword impressions, the campaign focused heavily on converting inbound web traffic into actual clinic appointments."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "User experience (UX) enhancements to simplify clinic discovery and mobile menu browsing",
          "Placement of high-visibility, professional 'Book a Consultation' call-to-actions (CTAs)",
          "Integration of a clean, seamless online patient scheduling system",
          "Strategic trust signals, including clear practitioner credentials and compliance-friendly patient reviews",
          "Continuous tracking of the user journey to remove potential friction or drop-offs in the online booking funnel"
        ],
        conclusion: "This unified approach ensured that the growth in organic search interest translated effectively into packed practitioner calendars and steady clinic growth."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The holistic healthcare SEO campaign achieved remarkable improvements over the 3-month cycle, capturing market share and establishing a dependable patient flow.",
      cards: [
        {
          badge: "Traffic Velocity",
          value: "+2.51K",
          label: "Total Organic Clicks",
          desc: "The platform pulled a substantial stream of hyper-targeted local organic traffic, connecting over 2,500 highly qualified patients with the clinic.",
          isEmerald: true
        },
        {
          badge: "Brand Visibility",
          value: "+145K",
          label: "Total Search Impressions",
          desc: "Brand discoverability scaled impressively, rendering the clinic's specialized services 145,000 times to users actively browsing holistic medical alternatives.",
          isEmerald: false
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Dominant search rankings for target geo-specific integrative doctor keywords",
        "Stronger map-pack presence across key local patient catchment zones",
        "Exceptional mobile browsing experience, boosting on-the-go phone and booking metrics",
        "Greater volume of high-lifetime-value patients seeking multi-session treatment plans",
        "A highly scalable, authoritative web asset fully prepared to support future clinic expansions"
      ],
      conclusionTitle: "TURNING HOLISTIC MEDICAL SEO INTO PATIENT GROWTH",
      conclusionParagraphs: [
        "This campaign stands as definitive proof of how a specialized healthcare SEO strategy can effectively transform a medical practice's digital footprint into a primary driver of clinic revenue.",
        "By successfully merging rigorous technical local alignment, strict high-intent keyword targeting, and an intuitive, trustworthy user experience, we converted an underutilized website into a leading source of patient acquisition.",
        "The clinic now commands an authoritative, future-proof digital engine built to secure sustainable market dominance, consistent bookings, and long-term online success."
      ]
    },
    proof: {
      header: "Verified Analytics & Console Performance Proof:",
      subheader: "Live platform snapshots capturing the exact metrics changes and search positioning parameters.",
      images: [
        {
          src: "/dr-result.jpg", // 👈 Bottom Image Path
          alt: "Google Search Console performance dashboard tracking metrics expansion and keyword alignment loops for the holistic clinic.",
          caption: "Figure 6.1: Verified performance index showcasing single-digit map pack placement loops and impression spikes across targeted Australian search patterns.",
          color: "blue"
        }
      ]
    }
  },

// ========================================================
  // 🔥 REAL ESTATE AUSTRALIA (PAID SOCIAL & LEAD GEN CASE STUDY)
  // ========================================================
  {
    slug: "australia-real-estate-social",
    category: "social", // 👈 Yeh key handle karegi dynamic layout themes aur colors ko
    isSocial: true,
    title: "Victoria Property Network",
    description: "31% INCREASE IN QUALIFIED PROPERTY LEADS VIA HIGH-INTENT SOCIAL FUNNELS",
    primaryOutcome: "+31% Property Leads",
    image: "/realestate.jpg", // 👈 Top Image Path (Real Estate Banner Asset)
    metrics: [
      { value: "+31%", label: "Increase in qualified property leads realized", highlight: true },
      { value: "+19%", label: "Improvement in digital campaign conversion rate", highlight: false },
      { value: "Paid Search", label: "Expanded visibility across priority regions", highlight: false },
      { value: "Heightened", label: "Brand engagement across social platforms", highlight: false }
    ],
    sections: [
      {
        id: "01",
        tag: "Context",
        title: "THE CHALLENGE",
        theme: "dark",
        paragraphs: [
          "Our real estate client, one of Victoria’s longest-standing and most respected property networks, approached us to optimize their digital marketing, generate a stronger volume of qualified listing leads, and scale market exposure across key metropolitan and regional markets.",
          "Operating in an increasingly competitive Australian real estate landscape, the client required sophisticated digital campaigns that did more than just generate empty vanity metrics.",
          "They needed high-quality inquiries that would translate into meaningful client conversations, property management acquisitions, and successful sales outcomes across their extensive network of offices.",
          "The challenge was to balance broad, authoritative brand awareness with highly localized, high-intent lead acquisition to continuously feed their sales and leasing pipelines in a fluctuating property market."
        ]
      },
      {
        id: "02",
        tag: "Roadmap",
        title: "THE STRATEGY",
        subtitle: "Strategic Social Media Marketing & Paid Campaigns",
        theme: "variant",
        paragraphs: [
          "To drive measurable pipeline growth and maximize market exposure, we engineered a multi-channel digital performance strategy combining high-intent search acquisition with targeted social advertising.",
          "The primary focus was deploying data-driven paid social media campaigns to capture active buyers, sellers, and landlords within specific regional catchments."
        ],
        featuresHeader: "Key Improvements Included:",
        features: [
          "Design and deployment of localized paid social ad campaigns",
          "Intent-based audience segmentation (targeting prospective sellers and investors)",
          "Creative asset optimization tailored for high-converting social feeds",
          "Implementation of native lead-generation forms to reduce friction",
          "Geo-targeted ad delivery customized to specific office territories",
          "Robust conversion tracking and attribution setup across social platforms",
          "Dynamic remarketing campaigns targeting historical website visitors",
          "Clear, action-oriented call-to-actions (CTAs) to drive direct property inquiries"
        ],
        conclusion: "This targeted social architecture ensured the brand remained top-of-mind for locals considering selling or leasing their properties."
      },
      {
        id: "03",
        tag: "Execution",
        title: "High-Intent Paid Search Optimization",
        theme: "dark",
        paragraphs: [
          "To capture active market participants at the exact moment of decision-making, we synchronized our social efforts with a comprehensive paid search blueprint."
        ],
        featuresHeader: "Activities Included:",
        features: [
          "Rigorous keyword research focusing on local property intent and appraisal queries",
          "Tailored search campaign structures designed around priority regional markets",
          "Ongoing ad copy split-testing to maximize click-through rates (CTR)",
          "Strategic landing page alignment to boost quality scores and lower acquisition costs",
          "Search query intent mapping (separating casual browsers from immediate sellers)",
          "Deep competitor ad spend and positioning analysis"
        ],
        conclusion: "By dominating both high-intent search queries and social feeds, we created a comprehensive digital ecosystem that captured leads at every stage of the real estate journey."
      },
      {
        id: "04",
        tag: "Optimization",
        title: "Performance Analysis & Continuous Conversion Tuning",
        theme: "variant",
        paragraphs: [
          "The final pillar focused on scaling efficiency, driving down cost-per-lead (CPL), and boosting overall campaign conversions."
        ],
        featuresHeader: "Growth Optimisation Included:",
        features: [
          "Continuous audience refinement to prioritize high-value segments",
          "Real-time budget allocation shifting toward top-performing regions and creatives",
          "Landing page user experience (UX) audits to streamline the inquiry process",
          "Regular performance insights and strategic data loops to sharpen ad targeting"
        ],
        conclusion: "This proactive optimization model guaranteed that campaign growth directly translated into premium, actionable business data for the client's network."
      }
    ],
    results: {
      id: "05",
      tag: "Impact",
      title: "THE RESULTS",
      description: "The integrated digital marketing campaign delivered strong, measurable advancements in lead performance, visibility, and brand authority across the network.",
      cards: [
        {
          badge: "Lead Velocity",
          value: "+31%",
          label: "Qualified Property Leads",
          desc: "The campaigns generated a massive surge in high-value, intent-driven property inquiries, directly feeding the client's sales and leasing pipelines.",
          isEmerald: false // 👈 Isko false rakhna taake social page par dynamic pink design setup aaye
        },
        {
          badge: "Funnel Efficiency",
          value: "+19%",
          label: "Campaign Conversions",
          desc: "By refining target audiences and optimizing landing page flows, the efficiency of the digital campaigns climbed significantly, delivering more revenue opportunities for less spend.",
          isEmerald: true // 👈 Balance ke liye leads conversion ko true (emerald) rakh sakte hain
        }
      ],
      additionalHeader: "Additional Improvements:",
      additionalImprovements: [
        "Streamlined, high-performing lead generation funnels for local offices",
        "Drastically reduced customer acquisition costs across digital channels",
        "Cohesive, premium brand presentation across all digital touchpoints",
        "Data-backed insight profiles on regional buyer and seller behaviors",
        "A scalable marketing framework ready to support new office launches and market expansions"
      ],
      conclusionTitle: "TURNING DIGITAL MARKETING INTO REAL ESTATE REVENUE",
      conclusionParagraphs: [
        "This campaign stands as definitive proof of how an aligned paid search and strategic social media marketing strategy can directly accelerate pipeline generation for a large-scale real estate network.",
        "By successfully merging targeted paid search visibility with localized, high-intent social ads and constant data optimization, we transformed underutilized digital channels into an aggressive lead-generation engine.",
        "The property network is now equipped with a powerful, scalable digital asset that secures continuous market exposure, consistent listing volume, and long-term business growth."
      ]
    },
    // proof: {
    //   header: "Verified Meta Ads & Campaign Analytics Proof:",
    //   subheader: "Live dashboard snapshots capturing conversion spikes and regional lead acquisition parameters.",
    //   images: [
    //     {
    //       src: "/realestate-result.jpg", // 👈 Bottom Image Path (Meta Ads Performance Matrix Screenshot)
    //       alt: "Meta Ads Manager and Analytics dashboard demonstrating lead acquisition scale for real estate network.",
    //       caption: "Figure 7.1: Verified funnel performance map tracking real-time regional ad delivery, cost-per-lead drops, and conversion tracking loops.",
    //       color: "pink" // 👈 Automated color scheme sync for footer analytics mapping
    //     }
    //   ]
    // }
  },

];