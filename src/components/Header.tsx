
"use client";

import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-semibold text-gray-900">
              <a href="/" className="transition-colors">Brocan</a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/pocketretail" className="text-gray-700 hover:text-gray-900 transition-colors">Pocket Retail</a>
              <a href="/pulsegym-pro" className="text-gray-700 hover:text-gray-900 transition-colors">PulseGym Pro</a>
              <a href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</a>
              {/* <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a> */}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {/* <a href="https://poketretail.brocan.in/" className="px-4 py-2 text-sm border border-gray-200 rounded-lg">
              Create your site
            </a> */}
            <Button
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white hover:bg-gray-800">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
