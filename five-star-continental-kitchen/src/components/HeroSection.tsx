import React from 'react';
import { 
  ArrowRight, 
  Play, 
  Utensils, 
  Leaf, 
  Wine, 
  Users, 
  Sparkles,
  Heart
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroSection: React.FC = () => {
  const { navigateTo, setIsVideoStoryOpen } = useApp();

  return (
    <section className="relative bg-[#0c0d0e] overflow-hidden pt-6 pb-16 lg:py-20 border-b border-[#1f2326]">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#1a2e22]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Tagline pill/label */}
            <div className="inline-flex items-center gap-2 tracking-[0.25em] text-[11px] font-semibold text-[#c5a059] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
              GOOD FOOD. BRIGHTER CONVERSATIONS.
            </div>

            {/* Main Editorial Headings */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.6rem] font-bold text-white tracking-tight leading-[1.12]">
              A Continental <br className="hidden sm:inline" />
              Dining Experience <br />
              <span className="font-serif italic font-normal text-[#c5a059] drop-shadow-sm">
                Made for Every Occasion
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-stone-300 text-base sm:text-lg max-w-xl font-light leading-relaxed">
              Savour globally inspired flavours, crafted with the finest ingredients, in a warm and elegant setting.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigateTo('reservations')}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c5a059] hover:bg-[#d4af37] text-[#0c0d0e] font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-[#c5a059]/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Reserve a Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsVideoStoryOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#15191c] hover:bg-[#1f2428] text-white border border-stone-700 hover:border-[#c5a059] font-medium text-xs uppercase tracking-wider transition-all duration-200 group cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#c5a059] group-hover:text-black flex items-center justify-center transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Key Feature Highlights Bar - Exact Match to Screenshot */}
            <div className="pt-8 border-t border-[#1f2427] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#15181a] border border-[#262c31] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
                  <Utensils className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Global</p>
                  <p className="text-stone-400">Flavours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#15181a] border border-[#262c31] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Fresh & Premium</p>
                  <p className="text-stone-400">Ingredients</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#15181a] border border-[#262c31] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
                  <Wine className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Elegant</p>
                  <p className="text-stone-400">Ambience</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#15181a] border border-[#262c31] flex items-center justify-center text-[#c5a059] group-hover:border-[#c5a059] transition-colors">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Perfect for</p>
                  <p className="text-stone-400">Every Occasion</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Continental Food Photography with Hand-drawn badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative gold ring */}
              <div className="absolute -inset-3 rounded-3xl border border-[#c5a059]/30 blur-[1px] pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-800 bg-[#121517] aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1200&q=85"
                  alt="A Continental Dining Experience - Artisan Pasta"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Bottom dish tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0d0f11]/80 backdrop-blur-md border border-stone-800 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">Chef's Signature</p>
                    <p className="font-serif text-sm text-white font-semibold">Truffle Alfredo Tagliatelle</p>
                  </div>
                  <span className="text-xs font-bold text-stone-200 bg-[#1f2428] px-2.5 py-1 rounded-lg border border-stone-700">
                    ₹520
                  </span>
                </div>
              </div>

              {/* Floating playful handwritten badge - matching screenshot top right */}
              <div className="absolute -top-6 -right-3 sm:-right-6 bg-gradient-to-br from-[#1d2226] to-[#121517] border border-[#c5a059]/60 px-5 py-3 rounded-2xl shadow-2xl rotate-3 transform hover:rotate-0 transition-transform">
                <p className="font-script text-xl sm:text-2xl text-white font-semibold leading-tight text-center">
                  Good Food <br />
                  Brings People <br />
                  Together <span className="text-[#c5a059]">♡</span>
                </p>
              </div>

              {/* Star Rating Badge floating on left */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-[#161a1d]/90 backdrop-blur-md border border-[#2f363c] px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c5a059]/20 flex items-center justify-center text-[#c5a059]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs font-bold text-white">
                    <span>4.9 / 5.0</span>
                    <span className="text-[#c5a059]">★★★★★</span>
                  </div>
                  <p className="text-[10px] text-stone-400">Over 5,000+ Verified Diners</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
