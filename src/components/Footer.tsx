
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold/30 animate-flicker"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-playfair text-2xl mb-4">Bloom & Burn</h3>
            <p className="text-sm text-gray-600 mb-6">
              Handcrafted candles that tell stories, evoke emotions, and transform spaces into sanctuaries of light and scent.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com/_sridha07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center border border-gold hover:bg-gold hover:text-white transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-gray-600 mb-4">
              Sign up to receive updates on new collections and special offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gold/30 rounded-l-full focus:outline-none focus:border-gold flex-grow"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-r-full hover:bg-gold/80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/20 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>© 2024 Bloom & Burn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
