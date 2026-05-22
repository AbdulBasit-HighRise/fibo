"use client";

export default function JuicerReviews() {
  // Columns=3 aur per=6 taake pure layout grid clean load ho
  const juicerEmbedUrl = "https://www.juicer.io/api/feeds/chijr_w0q-m1ozkrhpfvkd-bnyu/iframe?columns=3&per=6";

  return (
    // py-0 lagaya hai taake top aur bottom ki faltu padding bilkul khatam ho jaye
    <div className="w-full bg-[#030712] py-12 text-center relative z-10 overflow-hidden">
      
      {/* Premium Tech Mesh Lines for background depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30" />

      {/* Container ki padding ko bhi optimized kiya hai (my-6) taake spacing natural lage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 my-6 relative z-10">
        
        {/* Minimalist Tech Title Badge & Heading */}
        <div className="mb-8">
          {/* <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-blue-500/5 border border-blue-500/10 backdrop-blur-md mb-3">
            <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[9px] font-bold tracking-[4px] text-blue-400 uppercase">FEEDBACK</span>
          </div> */}
          
          <h2 className="text-[2.3rem]  md:text-[2.5rem] lg:text-[2.5rem] 2xl:text-[3.2rem] font-black tracking-tight text-white ">
            What Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Clients</span> Say
          </h2>
        </div>
        
        {/* 🔥 Ultra-Clean Dark Glassmorphism Container */}
        <div className="w-full rounded-2xl border border-white/[0.03] bg-[#010409]/60 backdrop-blur-md p-2 md:p-4 shadow-[0_0_40px_-15px_rgba(59,130,246,0.1)] hover:border-blue-500/20 transition-all duration-500">
          <iframe
            src={juicerEmbedUrl}
            width="100%"
            height="600px"
            frameBorder="0"
            scrolling="yes"
            className="w-full rounded-xl opacity-95 invert-[0.92] hue-rotate-180 contrast-120 saturate-150"
            title="Google Reviews Feed"
            loading="lazy"
            style={{ colorScheme: 'dark' }}
          />
        </div>
        
      </div>
    </div>
  );
}