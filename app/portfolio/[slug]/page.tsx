// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { 
//   ArrowLeft, 
//   Flame, 
//   ShieldAlert, 
//   Cpu, 
//   CheckCircle2, 
//   TrendingUp, 
//   Layers, 
//   Zap,
//   Briefcase
// } from "lucide-react";

// interface ProjectDetail {
//   slug: string;
//   title: string;
//   category: string;
//   description: string;
//   image: string;
//   client: string;
//   duration: string;
//   results: string;
//   problem: string;
//   solution: string;
//   timeline: { phase: string; details: string }[];
//   metricsGrid: { label: string; value: string; subtext: string }[];
// }

// export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const project = caseStudiesData.find((p) => p.slug === slug);

//   if (!project) return notFound();

//   return (
//     <main className="bg-[#030712] text-white selection:bg-blue-600 min-h-screen font-sans antialiased">
      
//       {/* =========================================================
//           1. HERO BLOCK (Premium Immersive Texture Overlay)
//          ========================================================= */}
//       <section className="relative min-h-[90vh] flex items-center justify-center px-4 md:px-8 pt-32 pb-20 bg-[#020617] overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.15),transparent_50%)]" />
//         <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.03] blur-[120px] pointer-events-none rounded-full" />
        
//         <div className="relative w-full max-w-7xl rounded-[3rem] p-6 md:p-16 border border-white/10 bg-gradient-to-b from-[#090d1f] to-[#050814] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.9)]">
//           {/* Background Image Mesh */}
//           <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none mix-blend-overlay">
//             <img src={project.image} alt="" className="w-full h-full object-cover filter grayscale scale-110" />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#090d1f]/80 to-transparent" />
//           </div>

//           <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center w-full border-b border-white/5 pb-8 mb-12 gap-4">
//             <Link href="/portfolio" className="flex items-center gap-3 text-zinc-400 hover:text-blue-400 font-semibold tracking-wider text-xs transition-colors group">
//               <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
//               <span>BACK TO ARCHIVE</span>
//             </Link>
//             <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full">
//               <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
//               <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase">{project.category}</span>
//             </div>
//           </div>

//           <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
//             <div className="lg:col-span-8 space-y-6 text-left">
//               <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1] text-white">
//                 {project.title} <br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
//                   {project.results}
//                 </span>
//               </h1>
//               <p className="text-zinc-400 text-base md:text-lg max-w-3xl font-medium leading-relaxed">
//                 {project.description}
//               </p>
//             </div>
            
//             {/* Quick Specs Floating Card */}
//             <div className="lg:col-span-4 w-full bg-black/40 border border-white/10 backdrop-blur-xl p-6 rounded-3xl space-y-4 shadow-2xl">
//               <div className="text-xs font-bold text-zinc-500 tracking-widest uppercase border-b border-white/5 pb-2">Deployment Identity</div>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <div className="text-xs text-zinc-400 font-medium">Partner client</div>
//                   <div className="text-sm font-bold text-white">{project.client}</div>
//                 </div>
//                 <div>
//                   <div className="text-xs text-zinc-400 font-medium">Time window</div>
//                   <div className="text-sm font-bold text-blue-400">{project.duration}</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           2. THE PROBLEM (Brutalist Dark Grid Layout)
//          ========================================================= */}
//       <section className="bg-[#090b11] border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
//         <div className="absolute -left-16 top-1/4 w-96 h-96 bg-red-600/[0.02] blur-[100px] pointer-events-none rounded-full" />
        
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
//           <div className="lg:col-span-4 space-y-4">
//             <div className="flex items-center gap-2 text-red-400 font-bold tracking-widest text-xs uppercase">
//               <ShieldAlert size={16} />
//               <span>01 / System Friction</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
//               The Baseline Barriers.
//             </h2>
//             <div className="h-1 w-20 bg-red-500/50 rounded-full" />
//           </div>
          
//           <div className="lg:col-span-8 bg-zinc-950/50 border border-red-500/10 p-8 md:p-12 rounded-[2.5rem] relative">
//             <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono px-3 py-1 rounded-md">
//               DIAGNOSTIC_FAIL_LOG
//             </div>
//             <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
//               {project.problem}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           3. THE SOLUTION (Fluid Tech-Gradient Aesthetic)
//          ========================================================= */}
//       <section className="bg-gradient-to-b from-[#030712] to-[#0b0f19] py-24 md:py-32 relative overflow-hidden">
//         <div className="absolute right-10 bottom-10 w-[600px] h-[300px] bg-blue-600/[0.03] blur-[150px] pointer-events-none rounded-full" />
        
//         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-8 order-2 lg:order-1 bg-gradient-to-br from-zinc-900/90 to-blue-950/40 border border-blue-500/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
//             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-400/10 blur-3xl pointer-events-none rounded-full" />
//             <p className="text-zinc-200 text-base md:text-xl leading-relaxed font-medium relative z-10">
//               {project.solution}
//             </p>
//           </div>

//           <div className="lg:col-span-4 order-1 lg:order-2 space-y-4 lg:pl-8 text-left lg:text-right">
//             <div className="flex items-center lg:justify-end gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase">
//               <Cpu size={16} />
//               <span>02 / Architecture</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
//               Our Deployment Sprint.
//             </h2>
//             <div className="h-1 w-20 bg-blue-500/50 rounded-full lg:ml-auto" />
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           4. THE PROCESS TIMELINE (Asymmetrical Alternating Nodes)
//          ========================================================= */}
//       <section className="bg-[#05070f] py-24 md:py-32 border-t border-white/5">
//         <div className="max-w-4xl mx-auto px-6">
//           <div className="text-center space-y-4 mb-20">
//             <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-zinc-400">
//               <Layers size={12} className="text-cyan-400" /> STAGE_EXECUTION_FLOW
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">How We Structured the Build</h2>
//           </div>

//           <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12">
//             {project.timeline.map((step, index) => (
//               <div key={index} className="relative pl-8 group">
//                 {/* Timeline Node Point */}
//                 <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors duration-300" />
                
//                 {/* Stage Index Tag */}
//                 <div className="absolute left-[-130px] top-1 hidden md:block text-right w-24 font-mono text-xs font-bold text-zinc-600 group-hover:text-blue-400 transition-colors">
//                   PHASE_0{index + 1}
//                 </div>

//                 <div className="bg-zinc-950/60 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-all duration-300 shadow-xl">
//                   <h4 className="text-xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
//                     <CheckCircle2 size={16} className="text-emerald-400" />
//                     {step.phase}
//                   </h4>
//                   <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.details}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           5. RESULTS DASHBOARD (3D Glassmorphism Neon Grids)
//          ========================================================= */}
//       <section className="bg-gradient-to-b from-[#05070f] to-[#02040a] border-t border-white/5 py-24 md:py-32 relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center space-y-4 mb-16">
//             <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[4px] text-zinc-500">
//               <TrendingUp size={14} className="text-emerald-400" />
//               <span>Data Attribution Matrix</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">The Conversion Yield</h2>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {project.metricsGrid.map((metric, i) => (
//               <div key={i} className="relative group p-8 rounded-[2.5rem] bg-gradient-to-b from-zinc-950/80 to-black border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/20">
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-4">{metric.label}</span>
//                 <h3 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-blue-400 group-hover:to-cyan-300 transition-colors duration-500">
//                   {metric.value}
//                 </h3>
//                 <p className="text-zinc-500 text-xs font-medium mt-2 leading-relaxed">{metric.subtext}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           6. THE HIGH-STAKES INTERCEPT CTA
//          ========================================================= */}
//       <section className="max-w-7xl mx-auto px-6 mb-16 pt-12">
//         <div className="bg-gradient-to-br from-[#0c1020] via-[#050914] to-[#081226] rounded-[3.5rem] p-8 md:p-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden border border-white/10">
//           <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.04] blur-[80px] pointer-events-none rounded-full" />
          
//           <div className="relative z-10 space-y-4">
//             <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-mono text-[10px] font-bold tracking-widest uppercase">
//               <Zap size={12} className="animate-pulse" /> SYSTEM_READY_FOR_UPGRADE
//             </div>
//             <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Ready to Map This Engine to Your Framework?</h2>
//             <p className="text-zinc-400 text-sm max-w-xl font-medium leading-relaxed">
//               Let's craft custom technical setups structured perfectly around your primary user monetization targets.
//             </p>
//           </div>
          
//           <Link href="/contact" className="relative z-10 bg-white text-black font-black text-xs uppercase tracking-[3px] px-10 py-5 rounded-full shadow-xl hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2 group">
//             <Briefcase size={14} />
//             <span>INITIATE ENGAGEMENT</span>
//           </Link>
//         </div>
//       </section>

//     </main>
//   );
// }

// // Complete, rich schema matching database holding individual case dynamics
// const caseStudiesData: ProjectDetail[] = [
//   {
//     slug: "ecom-apparel-roas",
//     title: "E-com Apparel Store Sprint",
//     category: "social",
//     description: "Full-funnel Meta and TikTok targeted performance deployment scaling revenue pipelines for global fashion houses.",
//     image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
//     client: "VogueFit Apparel",
//     duration: "3 Months",
//     results: "4.2x Attributed ROAS",
//     problem: "VogueFit was draining substantial capital on generalized social media ad targeting tracks without structured asset variation, forcing acquisition costs to skyrocket past acceptable dynamic margins.",
//     solution: "We engineered custom pattern-interrupt visual modules coupled with hyper-segmented lookalike parameters to decrease user conversion lag on primary checkout landing arrays.",
//     timeline: [
//       { phase: "Creative Diagnostic Analysis", details: "Isolated low-performing layout blocks and built dynamic, rapid pattern-interrupt testing assets." },
//       { phase: "Funnel Velocity Refactor", details: "Optimized script rendering paths on product sheets to guarantee minimal interaction latency on mobile devices." },
//       { phase: "Execution & Automation Sprint", details: "Configured micro-scaling protocols to systematically shift real-time capital allocation onto peak-yielding asset structures." }
//     ],
//     metricsGrid: [
//       { label: "Return On Ad Capital Index", value: "4.2x ROAS", subtext: "Attributed performance yield verified via custom clean conversion tracking loops." },
//       { label: "Acquisition Overhead Cost", value: "-38% Saved", subtext: "Significant optimization in unique target validation protocols across core networks." },
//       { label: "Net Revenue Stream Scale", value: "+145K Scale", subtext: "Monthly recurring conversion values mapped perfectly within target growth models." }
//     ]
//   },
//   {
//     slug: "b2b-saas-lead-campaign",
//     title: "B2B SaaS Lead Generation Matrix",
//     category: "social",
//     description: "LinkedIn conversational ad tracks mapping high-value enterprise accounts.",
//     image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
//     client: "SaaSify Inc.",
//     duration: "6 Months",
//     results: "+180% Demo Bookings",
//     problem: "SaaSify's lead ecosystem was cluttered with low-intent generic targets that failed essential enterprise qualification steps, causing high resource burn inside the outbound sales process.",
//     solution: "We deployed targeted account-based marketing (ABM) pipelines using interactive conversational blocks to prompt direct, instant C-suite scheduling actions.",
//     timeline: [
//       { phase: "Firmographic Alignment", details: "Parsed precise account frameworks to isolate specific decision-makers matching strict compliance profiles." },
//       { phase: "Interactive Pipeline Draft", details: "Constructed targeted direct-response conversational paths focusing directly on major corporate operational pain points." },
//       { phase: "Operational Sync Integration", details: "Connected pipeline data streams straight to corporate management layers to avoid data drops." }
//     ],
//     metricsGrid: [
//       { label: "Qualified Pipelines Generated", value: "+180% Inbound", subtext: "Enterprise accounts passing initial automated filtering phases." },
//       { label: "Form Optimization Velocity", value: "24% Stabilized", subtext: "Consistent interaction rates maintained over extensive account outreach modules." },
//       { label: "Net Active Attributed ARR", value: "$420K Live", subtext: "Closed revenue directly traceable back to the deployment grid matrix." }
//     ]
//   },
//   {
//     slug: "fintech-hub-organic-scale",
//     title: "FinTech Hub Traffic Expansion",
//     category: "seo",
//     description: "Deep technical semantic clustering and architectural Core Web Vitals optimization.",
//     image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200",
//     client: "CapitalHub Digital",
//     duration: "8 Months",
//     results: "1M Monthly Organic Hits",
//     problem: "CapitalHub's site authority rankings were bottlenecked by overlapping indexing models, leaving primary market-intent topics completely hidden from search visibility layers.",
//     solution: "We completely restructured layout hierarchies into isolated, semantic content loops while debugging layout crawl scripts to clear indexing deadlocks.",
//     timeline: [
//       { phase: "System Optimization Audit", details: "Cleared rendering script blockages and restructured metadata pathways." },
//       { phase: "Topical Cluster Deployment", details: "Produced clear network structures designed around transactional keyword sequences." },
//       { phase: "Contextual Reference Build", details: "Secured structural backlink records from recognized authoritative finance portals." }
//     ],
//     metricsGrid: [
//       { label: "Organic Monthly Traffic", value: "1.2M Visits", subtext: "Unpaid search visits mapped over absolute transactional intent models." },
//       { label: "Target Rank Keyword Spots", value: "450+ Active", subtext: "Terms holding absolute top-3 tracking positions consistently." },
//       { label: "Domain Search Index Rating", value: "DR 82 Reached", subtext: "Overall site authority matrix score optimized past top industry competition." }
//     ]
//   },
//   {
//     slug: "realtime-crypto-tracker",
//     title: "Real-time Telemetry Dashboard",
//     category: "web",
//     description: "Type-safe custom Next.js deployment sync built over lightning-fast API microservices.",
//     image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200",
//     client: "CryptoStream Labs",
//     duration: "4 Months",
//     results: "320ms Response Index",
//     problem: "CryptoStream had critical client-side data layout freezes, resulting in severe interface lag spikes when network transaction tracking data volume peaked.",
//     solution: "We re-coded modules to use type-safe Server Components and configured edge processing nodes to fetch and display high-frequency data tracks instantaneously.",
//     timeline: [
//       { phase: "Architecture Node Revamp", details: "Replaced heavy legacy frameworks with customized micro-routing nodes." },
//       { phase: "Data Package Compacting", details: "Compressed data payload parameters to secure instant rendering cycles without script lag." },
//       { phase: "Motion Layout Construction", details: "Built highly fluid dashboard visualization elements optimized for 60fps interaction profiles." }
//     ],
//     metricsGrid: [
//       { label: "Global Hydration Latency", value: "320ms Edge", subtext: "Data delivery delay profiles validated across multi-region server arrays." },
//       { label: "Average Session Interactivity", value: "+110% Higher", subtext: "User engagement time lengths scaling immediately following layout updates." },
//       { label: "Compute Resource Overhead", value: "-42% Slashed", subtext: "Operational hosting costs saved via structural client-side execution reductions." }
//     ]
//   },
//   {
//     slug: "saas-content-lead-engine",
//     title: "SaaS Content Funnel Optimization",
//     category: "content",
//     description: "Direct-response conversion copywriting resolving deep-level customer pain points.",
//     image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
//     client: "ScaleUp Global",
//     duration: "2 Months",
//     results: "12% Signup Conversion",
//     problem: "ScaleUp's target traffic inbound volume was strong, yet their reading conversion paths were too academic, leaving product benefits completely disconnected from customer pain points.",
//     solution: "We redrafted marketing assets into direct-response execution loops and introduced highly contextual action prompts throughout the user engagement layouts.",
//     timeline: [
//       { phase: "Audience Target Mapping", details: "Executed customer research campaigns to extract exact business workflow issues." },
//       { phase: "Asset Messaging Overhaul", details: "Rewrote marketing copy sequences to focus purely on high-impact solutions." },
//       { phase: "A/B Layout Positioning", details: "Tested varied prompt distribution structures to find maximum click-through rates." }
//     ],
//     metricsGrid: [
//       { label: "Conversion Lift Rate", value: "12% Solid", subtext: "Direct transition from passive readers into active portal accounts." },
//       { label: "User Session Bounce Reduction", value: "-28% Cleared", subtext: "Friction loops fixed to retain traffic longer within educational channels." },
//       { label: "New Demo Accounts Created", value: "4.8K Accounts", subtext: "New active signups logged within the initial 60-day tracking window." }
//     ]
//   }
// ];

import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Flame, 
  ShieldAlert, 
  Cpu, 
  CheckCircle2, 
  TrendingUp, 
  Layers, 
  Zap,
  Briefcase
} from "lucide-react";

// =========================================================================
// 1. STATIC PARAMS GENERATION (For "output: export")
// =========================================================================
export async function generateStaticParams() {
  return caseStudiesData.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  results: string;
  problem: string;
  solution: string;
  timeline: { phase: string; details: string }[];
  metricsGrid: { label: string; value: string; subtext: string }[];
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = caseStudiesData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-[#030712] text-white selection:bg-blue-600 min-h-screen font-sans antialiased">
      
      {/* =========================================================
          1. HERO BLOCK (Premium Immersive Texture Overlay)
          ========================================================= */}
    <section className="relative w-full overflow-hidden">
                 
                  {/* 🕸️ Background Mesh Image */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000" 
                      alt="Mesh Grid" 
                      className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-50"
                    />
                    {/* Blend Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
                  </div>
          
                  {/* Ambient Glow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] pointer-events-none" />
          
                  {/* FIX 2: Agar Navbar 'Fixed' hai to -mt-20 sahi hai. 
                     Agar space phir bhi hai to -mt-20 ko hata kar pt-20 kar do.
                  */}
                  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40">
                    <div className="max-w-5xl">
                      
                      <div className="flex items-center gap-2.5 mb-8 w-fit px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                        <Flame size={12} className="text-blue-400 animate-pulse" />
                        <span className="text-[10px] font-black  tracking-[4px] text-blue-300 ">Production Ready</span>
                      </div>
          
                      <h1 className="text-6xl sm:text-8xl md:text-[100px] font-black tracking-tighter leading-[0.8] text-white   mb-8">
                        Our <br />
                        <span className="bg-gradient-to-r from-[#00f2ff] via-[#0070ff] to-[#00f2ff] bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
    Recent Work                   </span>
                      </h1>
                      
                      <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed opacity-80">
                        Explore our architectural blueprints and technical deployments engineered to convert traffic into revenue.
                      </p>
                    </div>
                  </div>
                </section>

      {/* =========================================================
          2. THE PROBLEM (Brutalist Dark Grid Layout)
          ========================================================= */}
      <section className="bg-[#090b11] border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute -left-16 top-1/4 w-96 h-96 bg-red-600/[0.02] blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 text-red-400 font-bold tracking-widest text-xs uppercase">
              <ShieldAlert size={16} />
              <span>01 / System Friction</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              The Baseline Barriers.
            </h2>
            <div className="h-1 w-20 bg-red-500/50 rounded-full" />
          </div>
          
          <div className="lg:col-span-8 bg-zinc-950/50 border border-red-500/10 p-8 md:p-12 rounded-[2.5rem] relative">
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-mono px-3 py-1 rounded-md">
              DIAGNOSTIC_FAIL_LOG
            </div>
            <p className="text-zinc-300 text-base md:text-xl leading-relaxed font-medium">
              {project.problem}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. THE SOLUTION (Fluid Tech-Gradient Aesthetic)
          ========================================================= */}
      <section className="bg-gradient-to-b from-[#030712] to-[#0b0f19] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute right-10 bottom-10 w-[600px] h-[300px] bg-blue-600/[0.03] blur-[150px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 order-2 lg:order-1 bg-gradient-to-br from-zinc-900/90 to-blue-950/40 border border-blue-500/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-400/10 blur-3xl pointer-events-none rounded-full" />
            <p className="text-zinc-200 text-base md:text-xl leading-relaxed font-medium relative z-10">
              {project.solution}
            </p>
          </div>

          <div className="lg:col-span-4 order-1 lg:order-2 space-y-4 lg:pl-8 text-left lg:text-right">
            <div className="flex items-center lg:justify-end gap-2 text-blue-400 font-bold tracking-widest text-xs uppercase">
              <Cpu size={16} />
              <span>02 / Architecture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Our Deployment Sprint.
            </h2>
            <div className="h-1 w-20 bg-blue-500/50 rounded-full lg:ml-auto" />
          </div>
        </div>
      </section>

      {/* =========================================================
          4. THE PROCESS TIMELINE (Asymmetrical Alternating Nodes)
          ========================================================= */}
      <section className="bg-[#05070f] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <div className="inline-flex items-center gap-2 bg-zinc-900 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-zinc-400">
              <Layers size={12} className="text-cyan-400" /> STAGE_EXECUTION_FLOW
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">How We Structured the Build</h2>
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12">
            {project.timeline.map((step, index) => (
              <div key={index} className="relative pl-8 group">
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-blue-500 group-hover:bg-cyan-400 group-hover:border-cyan-400 transition-colors duration-300" />
                <div className="absolute left-[-130px] top-1 hidden md:block text-right w-24 font-mono text-xs font-bold text-zinc-600 group-hover:text-blue-400 transition-colors">
                  PHASE_0{index + 1}
                </div>

                <div className="bg-zinc-950/60 border border-white/5 p-6 md:p-8 rounded-2xl hover:border-white/10 transition-all duration-300 shadow-xl">
                  <h4 className="text-xl font-bold tracking-tight text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    {step.phase}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed font-medium">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          5. RESULTS DASHBOARD (3D Glassmorphism Neon Grids)
          ========================================================= */}
      <section className="bg-gradient-to-b from-[#05070f] to-[#02040a] border-t border-white/5 py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[4px] text-zinc-500">
              <TrendingUp size={14} className="text-emerald-400" />
              <span>Data Attribution Matrix</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white">The Conversion Yield</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metricsGrid.map((metric, i) => (
              <div key={i} className="relative group p-8 rounded-[2.5rem] bg-gradient-to-b from-zinc-950/80 to-black border border-white/5 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block mb-4">{metric.label}</span>
                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 group-hover:from-blue-400 group-hover:to-cyan-300 transition-colors duration-500">
                  {metric.value}
                </h3>
                <p className="text-zinc-500 text-xs font-medium mt-2 leading-relaxed">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          6. THE HIGH-STAKES INTERCEPT CTA
          ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 mb-16 pt-12">
        <div className="bg-gradient-to-br from-[#0c1020] via-[#050914] to-[#081226] rounded-[3.5rem] p-8 md:p-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.04] blur-[80px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 font-mono text-[10px] font-bold tracking-widest uppercase">
              <Zap size={12} className="animate-pulse" /> SYSTEM_READY_FOR_UPGRADE
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Ready to Map This Engine to Your Framework?</h2>
            <p className="text-zinc-400 text-sm max-w-xl font-medium leading-relaxed">
              Let&apos;s craft custom technical setups structured perfectly around your primary user monetization targets.
            </p>
          </div>
          
          <Link href="/contact" className="relative z-10 bg-white text-black font-black text-xs uppercase tracking-[3px] px-10 py-5 rounded-full shadow-xl hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all whitespace-nowrap flex items-center gap-2 group">
            <Briefcase size={14} />
            <span>INITIATE ENGAGEMENT</span>
          </Link>
        </div>
      </section>

    </main>
  );
}

// Complete, rich schema matching database
const caseStudiesData: ProjectDetail[] = [
  {
    slug: "ecom-apparel-roas",
    title: "E-com Apparel Store Sprint",
    category: "social",
    description: "Full-funnel Meta and TikTok targeted performance deployment scaling revenue pipelines for global fashion houses.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200",
    client: "VogueFit Apparel",
    duration: "3 Months",
    results: "4.2x Attributed ROAS",
    problem: "VogueFit was draining substantial capital on generalized social media ad targeting tracks without structured asset variation, forcing acquisition costs to skyrocket past acceptable dynamic margins.",
    solution: "We engineered custom pattern-interrupt visual modules coupled with hyper-segmented lookalike parameters to decrease user conversion lag on primary checkout landing arrays.",
    timeline: [
      { phase: "Creative Diagnostic Analysis", details: "Isolated low-performing layout blocks and built dynamic, rapid pattern-interrupt testing assets." },
      { phase: "Funnel Velocity Refactor", details: "Optimized script rendering paths on product sheets to guarantee minimal interaction latency on mobile devices." },
      { phase: "Execution & Automation Sprint", details: "Configured micro-scaling protocols to systematically shift real-time capital allocation onto peak-yielding asset structures." }
    ],
    metricsGrid: [
      { label: "Return On Ad Capital Index", value: "4.2x ROAS", subtext: "Attributed performance yield verified via custom clean conversion tracking loops." },
      { label: "Acquisition Overhead Cost", value: "-38% Saved", subtext: "Significant optimization in unique target validation protocols across core networks." },
      { label: "Net Revenue Stream Scale", value: "+145K Scale", subtext: "Monthly recurring conversion values mapped perfectly within target growth models." }
    ]
  },
  {
    slug: "b2b-saas-lead-campaign",
    title: "B2B SaaS Lead Generation Matrix",
    category: "social",
    description: "LinkedIn conversational ad tracks mapping high-value enterprise accounts.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200",
    client: "SaaSify Inc.",
    duration: "6 Months",
    results: "+180% Demo Bookings",
    problem: "SaaSify's lead ecosystem was cluttered with low-intent generic targets that failed essential enterprise qualification steps, causing high resource burn inside the outbound sales process.",
    solution: "We deployed targeted account-based marketing (ABM) pipelines using interactive conversational blocks to prompt direct, instant C-suite scheduling actions.",
    timeline: [
      { phase: "Firmographic Alignment", details: "Parsed precise account frameworks to isolate specific decision-makers matching strict compliance profiles." },
      { phase: "Interactive Pipeline Draft", details: "Constructed targeted direct-response conversational paths focusing directly on major corporate operational pain points." },
      { phase: "Operational Sync Integration", details: "Connected pipeline data streams straight to corporate management layers to avoid data drops." }
    ],
    metricsGrid: [
      { label: "Qualified Pipelines Generated", value: "+180% Inbound", subtext: "Enterprise accounts passing initial automated filtering phases." },
      { label: "Form Optimization Velocity", value: "24% Stabilized", subtext: "Consistent interaction rates maintained over extensive account outreach modules." },
      { label: "Net Active Attributed ARR", value: "$420K Live", subtext: "Closed revenue directly traceable back to the deployment grid matrix." }
    ]
  },
  {
    slug: "fintech-hub-organic-scale",
    title: "FinTech Hub Traffic Expansion",
    category: "seo",
    description: "Deep technical semantic clustering and architectural Core Web Vitals optimization.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200",
    client: "CapitalHub Digital",
    duration: "8 Months",
    results: "1M Monthly Organic Hits",
    problem: "CapitalHub's site authority rankings were bottlenecked by overlapping indexing models, leaving primary market-intent topics completely hidden from search visibility layers.",
    solution: "We completely restructured layout hierarchies into isolated, semantic content loops while debugging layout crawl scripts to clear indexing deadlocks.",
    timeline: [
      { phase: "System Optimization Audit", details: "Cleared rendering script blockages and restructured metadata pathways." },
      { phase: "Topical Cluster Deployment", details: "Produced clear network structures designed around transactional keyword sequences." },
      { phase: "Contextual Reference Build", details: "Secured structural backlink records from recognized authoritative finance portals." }
    ],
    metricsGrid: [
      { label: "Organic Monthly Traffic", value: "1.2M Visits", subtext: "Unpaid search visits mapped over absolute transactional intent models." },
      { label: "Target Rank Keyword Spots", value: "450+ Active", subtext: "Terms holding absolute top-3 tracking positions consistently." },
      { label: "Domain Search Index Rating", value: "DR 82 Reached", subtext: "Overall site authority matrix score optimized past top industry competition." }
    ]
  },
  {
    slug: "realtime-crypto-tracker",
    title: "Real-time Telemetry Dashboard",
    category: "web",
    description: "Type-safe custom Next.js deployment sync built over lightning-fast API microservices.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=1200",
    client: "CryptoStream Labs",
    duration: "4 Months",
    results: "320ms Response Index",
    problem: "CryptoStream had critical client-side data layout freezes, resulting in severe interface lag spikes when network transaction tracking data volume peaked.",
    solution: "We re-coded modules to use type-safe Server Components and configured edge processing nodes to fetch and display high-frequency data tracks instantaneously.",
    timeline: [
      { phase: "Architecture Node Revamp", details: "Replaced heavy legacy frameworks with customized micro-routing nodes." },
      { phase: "Data Package Compacting", details: "Compressed data payload parameters to secure instant rendering cycles without script lag." },
      { phase: "Motion Layout Construction", details: "Built highly fluid dashboard visualization elements optimized for 60fps interaction profiles." }
    ],
    metricsGrid: [
      { label: "Global Hydration Latency", value: "320ms Edge", subtext: "Data delivery delay profiles validated across multi-region server arrays." },
      { label: "Average Session Interactivity", value: "+110% Higher", subtext: "User engagement time lengths scaling immediately following layout updates." },
      { label: "Compute Resource Overhead", value: "-42% Slashed", subtext: "Operational hosting costs saved via structural client-side execution reductions." }
    ]
  },
  {
    slug: "saas-content-lead-engine",
    title: "SaaS Content Funnel Optimization",
    category: "content",
    description: "Direct-response conversion copywriting resolving deep-level customer pain points.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    client: "ScaleUp Global",
    duration: "2 Months",
    results: "12% Signup Conversion",
    problem: "ScaleUp's target traffic inbound volume was strong, yet their reading conversion paths were too academic, leaving product benefits completely disconnected from customer pain points.",
    solution: "We redrafted marketing assets into direct-response execution loops and introduced highly contextual action prompts throughout the user engagement layouts.",
    timeline: [
      { phase: "Audience Target Mapping", details: "Executed customer research campaigns to extract exact business workflow issues." },
      { phase: "Asset Messaging Overhaul", details: "Rewrote marketing copy sequences to focus purely on high-impact solutions." },
      { phase: "A/B Layout Positioning", details: "Tested varied prompt distribution structures to find maximum click-through rates." }
    ],
    metricsGrid: [
      { label: "Conversion Lift Rate", value: "12% Solid", subtext: "Direct transition from passive readers into active portal accounts." },
      { label: "User Session Bounce Reduction", value: "-28% Cleared", subtext: "Friction loops fixed to retain traffic longer within educational channels." },
      { label: "New Demo Accounts Created", value: "4.8K Accounts", subtext: "New active signups logged within the initial 60-day tracking window." }
    ]
  }
];