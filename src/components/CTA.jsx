import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const handleExploreProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready To Transform Your Workflow?
          </h2>

          {/* Description */}
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who are already using Digitools to work smarter. 
            Start your free trial today.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleExploreProducts}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium flex items-center justify-center group transform hover:scale-105"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
            <button 
              onClick={handleViewPricing}
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-medium transform hover:scale-105"
            >
              View Pricing
            </button>
          </div>

          {/* Trust indicators */}
          <div className="text-purple-200 text-sm">
            <span 
              onClick={handleGetStarted}
              className="inline-flex items-center cursor-pointer hover:text-white transition"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              14-day free trial
            </span>
            <span className="mx-3">•</span>
            <span 
              onClick={handleGetStarted}
              className="inline-flex items-center cursor-pointer hover:text-white transition"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </span>
            <span className="mx-3">•</span>
            <span 
              onClick={handleGetStarted}
              className="inline-flex items-center cursor-pointer hover:text-white transition"
            >
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
