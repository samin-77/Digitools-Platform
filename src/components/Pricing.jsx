import React from 'react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "Month",
      description: "Perfect for individuals just getting started",
      features: [
        "Access to 20+ basic tools",
        "Community support",
        "Basic templates",
        "1GB cloud storage",
        "Mobile app access"
      ],
      buttonText: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "Month",
      description: "Most popular choice for professionals",
      features: [
        "Access to all 200+ tools",
        "Priority support",
        "Premium templates",
        "100GB cloud storage",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      buttonText: "Start Pro Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "Month",
      description: "Complete solution for large teams",
      features: [
        "Unlimited tool access",
        "Dedicated support",
        "Custom templates",
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "SLA guarantee",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  const handlePlanClick = (planName) => {
    alert(`You clicked on ${planName} plan! This would redirect to the signup page.`);
  };

  const handleContactSales = () => {
    alert('Contact sales functionality would open a contact form or redirect to sales page.');
  };

  return (
    <div className={`relative bg-white rounded-2xl p-8 ${
      plan.popular 
        ? 'border-2 border-purple-600 shadow-xl scale-105' 
        : 'border border-gray-200 shadow-sm'
    }`}>
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
      
      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
        <span className="text-gray-500">/{plan.period}</span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-8">{plan.description}</p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => plan.buttonText === "Contact Sales" ? handleContactSales() : handlePlanClick(plan.name)}
        className={`w-full py-3 rounded-lg font-medium transition transform hover:scale-105 ${
          plan.popular
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  );
}
