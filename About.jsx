export default function About() {
  return (
    <div className="bg-[#fdeee9] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full bg-white/50 backdrop-blur-sm p-10 md:p-16 rounded-3xl shadow-sm text-center">
        
     
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-serif text-[#7a5c58] mb-4 tracking-tight">
            About From Roses
          </h2>
          <div className="w-20 h-1 bg-[#7a5c58] mx-auto opacity-20 rounded-full"></div>
        </div>

      
        <div className="space-y-6">
          <p className="text-[#7a5c58] text-lg md:text-xl leading-relaxed font-light">
            From Roses is a lifestyle and photography blog focused on 
            <span className="font-semibold"> slow living, creativity,</span> and 
            <span className="font-semibold"> intentional moments.</span>
          </p>
          
          <p className="text-[#8c736f] text-base md:text-lg leading-relaxed italic">
            "Created for people who love softness, calm, and beauty in everyday life."
          </p>
        </div>

    
        <div className="mt-12">
          <a 
            href="/blogs" 
            className="text-[#7a5c58] uppercase tracking-widest text-xs font-bold border-b-2 border-[#7a5c58] pb-1 hover:opacity-60 transition-opacity"
          >
            Explore the Stories
          </a>
        </div>
      </div>
    </div>
  );
}