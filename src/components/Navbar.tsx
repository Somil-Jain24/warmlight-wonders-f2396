
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="py-6 px-4 md:px-8 flex justify-between items-center bg-cream/80 backdrop-blur-sm sticky top-0 z-50">
      <Link to="/" className="font-playfair text-2xl font-semibold tracking-wide text-gold hover:opacity-80 transition-opacity">
        Bloom & Burn
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/" className="hidden md:block font-poppins text-sm uppercase tracking-widest hover:text-gold transition-colors">
          Home
        </Link>
        <a href="#products" className="hidden md:block font-poppins text-sm uppercase tracking-widest hover:text-gold transition-colors">
          Collections
        </a>
        <a href="#about" className="hidden md:block font-poppins text-sm uppercase tracking-widest hover:text-gold transition-colors">
          About
        </a>
        <a href="#contact" className="hidden md:block font-poppins text-sm uppercase tracking-widest hover:text-gold transition-colors">
          Contact
        </a>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
