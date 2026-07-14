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
    title: "Fibo Entertainment | Creative Media Production & Tech Agency",
    description: "Fibo Entertainment delivers high-end media production, cinematic VFX, custom web development, and AI solutions to bring your vision to life.",
  },

  about: {
    title: "About Us | Who We Are at Fibo Entertainment",
    description: "Meet the team at Fibo Entertainment. We bridge the gap between creative storytelling and advanced technology to scale your business.",
  },

  contact: {
    title: "Get in Touch | Start Your Project with Fibo Entertainment",
    description: "Ready to launch your next project? Contact Fibo Entertainment today for professional media production, VFX, and tech development proposals.",
  },

  "our-work": {
    title: "Our Work | Cinematic Portfolios & Digital Projects",
    description: "Explore our collection of cinematic 3D videos, VFX projects, and high-performance web applications that we've built for our clients.",
  },

  services: {
    title: "Our Services | Media Production, VFX & Tech Solutions",
    description: "From cinematic video production to advanced AI automation and web development, we provide comprehensive services for modern businesses.",
  },

  "website-development": {
    title: "Web Development | Custom Solutions for Your Brand",
    description: "Professional web development services focusing on responsive design, high-speed performance, and custom features for your business.",
  },

  "app-development": {
    title: "App Development | Scalable Mobile Experiences",
    description: "We build intuitive, robust mobile applications that offer seamless user experiences and drive business engagement.",
  },

  "3d-video-production": {
    title: "3D Video Production | Immersive Media Experiences",
    description: "Cinematic 3D video production services to engage your audience with high-quality, professional visual content.",
  },

  vfx: {
    title: "VFX & Post-Production | Cinematic Visual Excellence",
    description: "Professional VFX, compositing, and cinematic post-production services to bring professional-grade visual storytelling to your project.",
  },

  "graphic-design": {
    title: "Graphic Design | Creative Branding & Visual Identity",
    description: "Unique and professional graphic design services to strengthen your brand identity and capture your target market's attention.",
  },

  "digital-marketing": {
    title: "Digital Marketing | Growth Strategies for Your Media Brand",
    description: "Data-driven digital marketing and social media strategies to increase your online presence and reach your audience effectively.",
  },

  "blockchain-development": {
    title: "Blockchain Development | Secure Web3 & Decentralized Solutions",
    description: "Cutting-edge blockchain development services providing secure and scalable solutions for the future of digital finance and web apps.",
  },

  "ai-ml-solutions": {
    title: "AI/ML Solutions | Intelligent Automation for Business",
    description: "Transform your operations with AI and machine learning, including custom automation workflows and smart business logic.",
  },

  terms: {
    title: "Terms of Service | Fibo Entertainment",
    description: "Review our Terms of Service to understand the policies, project guidelines, and professional agreements at Fibo Entertainment.",
  },

  privacy: {
    title: "Privacy Policy | Your Data & Security at Fibo",
    description: "Your privacy is our priority. Read how we collect, use, and protect your personal and business data at Fibo Entertainment.",
  },
};