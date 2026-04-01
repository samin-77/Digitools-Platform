import React from 'react';

export default function Stats() {
  return (
    <section className="bg-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
            <div className="text-purple-100 text-lg">Active Users</div>
          </div>
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
            <div className="text-purple-100 text-lg">Premium Tools</div>
          </div>
          <div className="text-white">
            <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
            <div className="text-purple-100 text-lg">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
