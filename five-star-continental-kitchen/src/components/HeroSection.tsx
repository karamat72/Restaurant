import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Utensils, 
  Leaf, 
  Wine, 
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, setIsVideoStoryOpen } = useApp();

  return (
    <section className="relative bg-[#0c0d0e] overflow-hidden border-b border-[#1f2326]">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c5a059]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column - EXACT SAME AS SCREENSHOT */}
          <div className="lg:col-span-5 py-12 lg:py-20 space-y-5 text-left z-10">
            
            <div className="inline-flex items-center gap-2 tracking-[0.25em] text-[11px] font-semibold text-[#c5a059] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              GOOD FOOD. BRIGHTER CONVERSATIONS.
            </div>

            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-[3.4rem] font-bold text-white tracking-tight leading-[1.1]">
              A Continental <br />
              Dining Experience <br />
              <span className="font-serif italic font-normal text-[#c5a059]">
                Made for Every Occasion
              </span>
            </h1>

            <p className="text-stone-400 text-[15px] max-w-[480px] font-light leading-relaxed">
              Savour globally inspired flavours, crafted with the finest ingredients, in a warm and elegant setting.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('reservations')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e8dcc6] hover:bg-white text-black font-bold text-[12px] uppercase tracking-widest transition-all cursor-pointer"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsVideoStoryOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent border border-white/20 text-white font-medium text-[11px] uppercase tracking-wider hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
                  <Play className="w-3 h-3 fill-black ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Icons bar like screenshot */}
            <div className="pt-8 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-5 border-t border-white/10">
              <div className="flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[11px] text-stone-300 leading-tight">Global<br/>Flavours</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Leaf className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[11px] text-stone-300 leading-tight">Fresh & Premium<br/>Ingredients</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Wine className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[11px] text-stone-300 leading-tight">Elegant<br/>Ambience</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#c5a059]" />
                <span className="text-[11px] text-stone-300 leading-tight">Perfect for<br/>Every Occasion</span>
              </div>
            </div>
          </div>

          {/* Right Column - BIG PASTA PLATE LIKE SCREENSHOT */}
          <div className="lg:col-span-7 relative h-[380px] lg:h-[580px] w-full lg:w-[115%] lg:-mr-[10%]">
            {/* MAIN HERO IMAGE - Same pasta like screenshot */}
            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=85"
              alt="Continental Pasta"
              className="w-full h-full object-cover object-center lg:rounded-l-[24px] lg:object-[center_60%]"
            />
            
            {/* Dark gradient on left to blend with text */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/60 to-transparent lg:via-[#0c0d0e]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/40 to-transparent" />

            {/* Handwritten badge top right like screenshot */}
            <div className="absolute top-6 right-6 sm:right-10 rotate-3">
              <p className="font-script text-white text-[18px] sm:text-[20px] leading-[1.1] text-right opacity-90" style={{fontFamily: 'cursive'}}>
                Good Food<br/>
                Brings People<br/>
                Together ♡
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
