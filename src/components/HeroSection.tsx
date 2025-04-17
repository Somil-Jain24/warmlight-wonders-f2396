
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-blush/30 to-cream">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lavender/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="block">Bloom & Burn</span>
            <span className="block text-xl md:text-2xl mt-4 text-gold italic">Light a memory. Burn a story.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Artisanal candles handcrafted to transform moments into memories. Each flame carries emotions, each scent tells a story, inviting you to create your own sanctuary of light.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#products" className="btn-primary">
              Explore Collections
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#products">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
