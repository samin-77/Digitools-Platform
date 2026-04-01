import React from 'react';
import { Mail, GitBranch, ExternalLink } from 'lucide-react';

export default function Footer() {
  const handleLinkClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterLink = (type) => {
    alert(`${type} page would open here`);
  };
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">DigiTools</h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Your comprehensive platform for premium digital tools, design assets, and productivity solutions.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/ishfak-samin-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/ishfak.mahbub.samin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/samin-77"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition"
              >
                <GitBranch className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product column */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('features')} className="text-blue-200 hover:text-white transition">Features</button></li>
              <li><button onClick={() => handleLinkClick('pricing')} className="text-blue-200 hover:text-white transition">Pricing</button></li>
              <li><button onClick={() => handleFooterLink('Templates')} className="text-blue-200 hover:text-white transition">Templates</button></li>
              <li><button onClick={() => handleFooterLink('Integrations')} className="text-blue-200 hover:text-white transition">Integrations</button></li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleFooterLink('About')} className="text-blue-200 hover:text-white transition">About</button></li>
              <li><button onClick={() => handleFooterLink('Blog')} className="text-blue-200 hover:text-white transition">Blog</button></li>
              <li><button onClick={() => handleFooterLink('Careers')} className="text-blue-200 hover:text-white transition">Careers</button></li>
              <li><button onClick={() => handleFooterLink('Press')} className="text-blue-200 hover:text-white transition">Press</button></li>
            </ul>
          </div>

          {/* Resources column */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><button onClick={() => handleFooterLink('Documentation')} className="text-blue-200 hover:text-white transition">Documentation</button></li>
              <li><button onClick={() => handleFooterLink('Help Center')} className="text-blue-200 hover:text-white transition">Help Center</button></li>
              <li><button onClick={() => handleFooterLink('Community')} className="text-blue-200 hover:text-white transition">Community</button></li>
              <li><button onClick={() => handleFooterLink('Contact')} className="text-blue-200 hover:text-white transition">Contact</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 mb-4 md:mb-0">
              © 2026 Digitools. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <button onClick={() => handleFooterLink('Privacy Policy')} className="text-blue-200 hover:text-white transition">Privacy Policy</button>
              <button onClick={() => handleFooterLink('Terms of Service')} className="text-blue-200 hover:text-white transition">Terms of Service</button>
              <button onClick={() => handleFooterLink('Cookies')} className="text-blue-200 hover:text-white transition">Cookies</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
