
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import ComingSoonSection from '../components/ComingSoonSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ComingSoonSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
