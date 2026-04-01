import React from 'react';
import { User, Package, Rocket } from 'lucide-react';

export default function Steps() {
  const steps = [
    {
      number: "01",
      icon: <User className="w-6 h-6" />,
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started."
    },
    {
      number: "02",
      icon: <Package className="w-6 h-6" />,
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs."
    },
    {
      number: "03",
      icon: <Rocket className="w-6 h-6" />,
      title: "Start Creating",
      description: "Download and start using your premium tools immediately."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }) {
  return (
    <div className="relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      {/* Step Number */}
      <div className="absolute top-4 right-4">
        <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
          {step.number}
        </div>
      </div>

      {/* Icon */}
      <div className="flex justify-center mb-6">
        <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center">
          {step.icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {step.title}
      </h3>
      <p className="text-gray-600 text-center leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
