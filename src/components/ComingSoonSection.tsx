
import React from 'react';

const ComingSoonSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-gold/10 to-blush/20">
      <div className="container mx-auto">
        <h2 className="section-title">Coming Soon</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-md opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl mb-4">Curated Gift Boxes</h3>
            <p className="text-gray-600">
              Thoughtfully arranged gift boxes featuring our signature candles paired with complementary items like artisanal tea, handmade chocolates, and more. Perfect for gifting or self-care.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-md opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 w-12 rounded-full bg-gold/20 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="font-playfair text-xl mb-4">Seasonal Subscription</h3>
            <p className="text-gray-600">
              Join our seasonal subscription service and receive a carefully curated selection of limited edition candles every season, designed to complement the unique atmosphere of each time of year.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-outline">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
