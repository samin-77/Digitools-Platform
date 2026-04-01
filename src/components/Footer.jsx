import React from 'react';

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
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/ishfak.mahbub.samin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition flex items-center justify-center"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/samin-77"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-lg transition flex items-center justify-center"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
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
            <div className="text-blue-200 mb-4 md:mb-0">
              <p>© 2026 Digitools. All rights reserved.</p>
              <p className="text-sm mt-1 text-blue-300">
                Developed with ❤️ by <span className="text-white font-medium">Ishfak Mahbub Samin</span>
              </p>
            </div>
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
