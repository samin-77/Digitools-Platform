import React, { useState } from 'react';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleCartClick = () => {
    // First switch to cart tab
    onCartClick();
    // Then smoothly scroll to cart section
    setTimeout(() => {
      const element = document.getElementById('cart-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    // Reload the page
    window.location.reload();
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition"
            >
              DigiTools
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('products')}
              className="text-gray-700 hover:text-purple-600 transition flex items-center gap-1"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
            </button>
            <button 
              onClick={() => handleNavClick('features')}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('pricing')}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('faq')}
              className="text-gray-700 hover:text-purple-600 transition"
            >
              FAQ
            </button>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart button */}
            <button 
              onClick={handleCartClick}
              className="relative p-2 text-gray-700 hover:text-purple-600 transition"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login button */}
            <button 
              onClick={() => alert('Login functionality coming soon!')}
              className="hidden md:block px-4 py-2 text-gray-700 hover:text-purple-600 transition"
            >
              Login
            </button>

            {/* Get Started button */}
            <button 
              onClick={() => handleNavClick('pricing')}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              Get Started
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => handleNavClick('products')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                Products
              </button>
              <button 
                onClick={() => handleNavClick('features')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                Features
              </button>
              <button 
                onClick={() => handleNavClick('pricing')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                Pricing
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('faq')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                FAQ
              </button>
              <button 
                onClick={() => alert('Login functionality coming soon!')}
                className="text-left text-gray-700 hover:text-purple-600 transition"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
