
import React from 'react';
import { Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleContactClick = () => {
    window.open('https://www.instagram.com/_sridha07', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-blush/20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title">Get In Touch</h2>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Have questions about our products or want to place a custom order? We'd love to hear from you. Reach out to us on Instagram for the fastest response.
          </p>
          
          <button 
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 bg-gold text-white px-8 py-4 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 animate-glow"
          >
            <Instagram size={20} />
            <span>Contact on Instagram</span>
          </button>
          
          <div className="mt-12 pt-12 border-t border-gold/20">
            <p className="text-gray-600 italic">
              "A candle loses nothing by lighting another candle."
            </p>
            <p className="text-gold mt-2">— James Keller</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
