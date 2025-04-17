
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-lavender/10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Story</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-left">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1636103952204-0b738c225254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Candle making process" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-full"></div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bloom & Burn began as a personal journey of finding solace in the simple act of lighting a candle. What started as a meditative practice soon evolved into an art form that we wanted to share with the world.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Each of our candles is handcrafted with intention, using sustainably sourced materials and fragrance oils that evoke emotion and create atmosphere. We believe in the power of scent to transport, transform, and transcend the ordinary moments of life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our small team of artisans pours their heart into every candle, ensuring that each one tells a story and creates an experience worth remembering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
