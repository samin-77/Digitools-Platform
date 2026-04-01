import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleExploreProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWatchDemo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            {/* New tag */}
            <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              New: AI-Powered Tools Available
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Supercharge Your <span className="text-purple-600">Digital Workflow</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Access premium AI tools, design assets, templates, and productivity software all in one platform. Transform your workflow and achieve more in less time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreProducts}
                className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition flex items-center justify-center group transform hover:scale-105"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition" />
              </button>
              <button 
                onClick={handleWatchDemo}
                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition flex items-center justify-center transform hover:scale-105"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right content - Your Image */}
          <div className="relative w-full max-w-lg">
            <img 
              src="/banner.png" 
              alt="Hero visual showing DigiTools platform features" 
              className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition duration-300" 
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              ✨ New Features
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              🚀 Fast Performance
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">Product Demo</h3>
              <button 
                onClick={closeVideo}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-8">
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                  <p className="text-gray-600">Demo video would play here</p>
                  <p className="text-sm text-gray-500 mt-2">This is a placeholder for the product demo video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
