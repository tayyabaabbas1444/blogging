import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-[#fff4ec] text-[#3b2b2b] overflow-x-hidden relative">
      
     
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="sparkle twinkle top-[5%] left-[10%] text-2xl">✦</span>
        <span className="sparkle float top-[15%] right-[15%] text-lg">✧</span>
        <span className="sparkle twinkle top-[30%] left-[5%] text-xl opacity-60">✦</span>
        <span className="sparkle float top-[45%] right-[2%] text-2xl opacity-40">✦</span>
        <span className="sparkle twinkle top-[60%] left-[20%] text-sm">✧</span>
        <span className="sparkle float top-[80%] right-[10%] text-xl">✦</span>
        <span className="sparkle twinkle bottom-[5%] left-[5%] text-2xl">✧</span>
        <span className="sparkle float bottom-[15%] right-[30%] text-lg">✦</span>
      </div>


      <section className="relative max-w-[1400px] mx-auto px-6 pt-12 lg:pt-24 pb-20">
       
        <span className="sparkle twinkle top-0 left-[25%] text-3xl text-[#f3b2b2]">✦</span>
        <span className="sparkle float top-20 right-[40%] text-md">✧</span>
        <span className="sparkle twinkle bottom-10 left-[45%] text-2xl">✦</span>

        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="text-center lg:text-left order-2 lg:order-1 relative">
            <span className="sparkle twinkle -top-10 -left-5 text-xl">✦</span>
            <h1 className="font-serif text-[36px] sm:text-[48px] lg:text-[64px] leading-tight font-bold">
              Your Personality <br /> is What Makes <br /> Your Character       
            </h1>
            <p className="mt-6 text-[#7a6a6a] max-w-md mx-auto lg:mx-0 leading-relaxed">
              Discover the art of intentional living and creative growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="bg-[#e58b8b] text-white px-10 py-4 rounded-full text-sm font-bold shadow-lg hover:bg-[#d47a7a] transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative flex justify-center order-1 lg:order-2">
            <span className="sparkle twinkle -top-8 -right-8 text-4xl text-[#e58b8b]">✦</span>
            <span className="sparkle float top-1/2 -left-10 text-2xl">✧</span>
            <img
              src="https://i.pinimg.com/736x/77/1d/8e/771d8eab1b796ec464722ebe31d989d6.jpg"
              alt="Hero"
              className="relative w-[280px] sm:w-[320px] rounded-[3rem] z-10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-white rounded-t-[60px] md:rounded-t-[120px] pt-24 pb-20 relative">
        <span className="sparkle twinkle top-10 right-20 text-3xl opacity-30">✧</span>
        <span className="sparkle float bottom-10 left-10 text-2xl text-[#e58b8b]">✦</span>
        
        <div className="text-center mb-16 px-6">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3b2b2b]">We Can Help Transform You</h2>
        </div>
        
        <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard title="Problem Solving" id="problem-solving" />
          <ServiceCard title="Relationships" id="relationships" active />
          <ServiceCard title="Personal Passion" id="personal-passion" />
          <ServiceCard title="Growth Career" id="growth-career" />
        </div>
      </section>

      
      <section className="bg-[#fff4ec] py-24 md:py-32 relative">
        <span className="sparkle twinkle top-0 left-1/3 text-4xl opacity-20">✦</span>
        
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-8 text-[#3b2b2b]">Proving Our Expertise</h2>
            
            <div className="space-y-8 mt-10">
              <ProgressBar label="Experience" percent={80} />
              <ProgressBar label="Consultation" percent={90} />
              <ProgressBar label="Service Success" percent={70} />
            </div>

            <button className="mt-12 bg-[#e58b8b] text-white px-10 py-4 rounded-full text-sm font-bold shadow-md hover:scale-105 transition-all">
              Detailed Portfolio
            </button>
          </div>

          <div className="flex justify-center relative">
            <span className="sparkle twinkle -top-10 -right-5 text-5xl text-[#e58b8b]">✦</span>
            <span className="sparkle float -bottom-10 -left-10 text-3xl">✧</span>
            <img
              src="https://i.pinimg.com/1200x/77/ba/45/77ba458d6b6056fbfbad1232fd4fa1d7.jpg"
              alt="Expertise"
              className="w-full max-w-[340px] rounded-[3rem] shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

     
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(15deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .sparkle { position: absolute; color: #e58b8b; pointer-events: none; z-index: 5; font-family: serif; }
        .twinkle { animation: twinkle 3s infinite ease-in-out; }
        .float { animation: float-slow 5s infinite ease-in-out; }
      `}</style>
    </main>
  );
}


function ServiceCard({ title, id, active }) {
  return (
    <div className={`p-8 rounded-[2.5rem] transition-all duration-500 relative group ${
      active ? "bg-[#e58b8b] text-white shadow-xl scale-105" : "bg-[#fdeee9] text-[#3b2b2b] hover:bg-white"
    }`}>
      {active && <span className="absolute top-4 right-4 animate-pulse">✦</span>}
      <h3 className="font-serif text-xl font-bold mb-4">{title}</h3>
      <p className="text-sm opacity-80 mb-6 italic">Strategic guidance for your journey.</p>
      <Link to={`/service/${id}`} className="text-xs font-bold uppercase tracking-widest border-b border-current pb-1">
        DETAILS
      </Link>
    </div>
  );
}

function ProgressBar({ label, percent }) {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <span className="text-xs font-bold uppercase tracking-widest text-[#3b2b2b]">{label}</span>
        <span className="text-sm font-serif italic text-[#e58b8b]">{percent}%</span>
      </div>
      <div className="h-2 bg-[#eadfd8] rounded-full overflow-hidden">
        <div className="h-full bg-[#e58b8b] transition-all duration-1000 ease-out" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}