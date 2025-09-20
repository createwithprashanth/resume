import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="container-center section-padding py-12 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-primary to-neural-blue rounded-xl mr-4 animate-pulse-slow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-gradient">
              Prashanth Thipparthi
            </div>
          </div>
          
          <p className="text-gray-300 mb-6 text-lg">
            Senior Product Owner | Digitalization Lead | Engineering Domain Expert
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:prashanth.thipparthi@outlook.com"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Email
            </a>
            <a
              href="https://www.xyra-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Website
            </a>
            <a
              href="tel:+971769488"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Phone
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex items-center justify-center text-gray-500 text-sm">
              <span>© 2024 Prashanth Thipparthi. Crafted with</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 animate-pulse-slow" />
              <span>and</span>
              <Code className="w-4 h-4 mx-2 text-primary animate-bounce-slow" />
              <span>All rights reserved.</span>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              Transforming Engineering Through Digital Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;