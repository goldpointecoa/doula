import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll-utils";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-8 md:py-12">
      {/* Background Image with Organic Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/hero/cover.jpg')`
        }}
      />
      
      {/* Organic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-copper-400/80 via-dun-300/70 to-ash-gray-400/60" />
      
      {/* Floating nature elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 hero-nature-float" style={{animationDelay: '0s'}}>🌿</div>
      <div className="absolute top-40 right-20 text-4xl opacity-30 hero-nature-sway" style={{animationDelay: '1s'}}>🍃</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-25 hero-nature-float" style={{animationDelay: '2s'}}>🌸</div>
      <div className="absolute top-60 right-10 text-3xl opacity-20 hero-nature-sway" style={{animationDelay: '0.5s'}}>🌾</div>
      <div className="absolute top-32 left-1/3 text-2xl opacity-15 hero-nature-float" style={{animationDelay: '3s'}}>🦋</div>
      <div className="absolute bottom-60 right-1/4 text-4xl opacity-20 hero-nature-sway" style={{animationDelay: '4s'}}>🌺</div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-ash-gray-200">
          <h1 className="font-lora text-3xl sm:text-4xl lg:text-5xl font-semibold text-ebony-800 mb-6 leading-tight fade-in">
            Evidence-based care,
            <span className="block text-copper-400">Christ at the center.</span>
          </h1>
          <p className="text-lg sm:text-xl text-ebony-700 mb-8 max-w-2xl mx-auto leading-relaxed fade-in">
            Compassionate, evidence-based support through pregnancy and birth. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button
              onClick={() => scrollToSection("#about")}
              className="bg-[#424b3a] hover:bg-[#2e3327] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Meet Essie
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom divider with nature elements */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Organic wave shape */}
        <svg
          viewBox="0 0 1200 120"
          fill="none"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="var(--warm-cream)"
          />
          <path
            d="M0,80 C250,120 550,20 800,80 C950,110 1100,50 1200,80 L1200,120 L0,120 Z"
            fill="var(--dun-50)"
            opacity="0.8"
          />
        </svg>
        
        {/* Scattered nature elements on the wave */}
        <div className="absolute bottom-6 left-1/4 text-2xl opacity-60 animate-pulse">🌿</div>
        <div className="absolute bottom-8 right-1/3 text-xl opacity-50" style={{animation: 'float 3s ease-in-out infinite'}}>🍃</div>
        <div className="absolute bottom-4 left-2/3 text-lg opacity-40 animate-bounce" style={{animationDelay: '1.5s'}}>🌸</div>
      </div>
    </section>
  );
}
