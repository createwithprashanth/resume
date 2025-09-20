import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 engineering-grid opacity-20"></div>
      
      <div className="container-max section-padding py-12 relative z-10">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl mr-4 animate-pulse-slow">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-gradient">
              Prashanth Thipparthi
            </div>
          </div>
          
          <p className="text-white/80 mb-6 text-lg">
            Senior Product Owner | Digitalization Lead | Engineering Domain Expert
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:prashanth.thipparthi@outlook.com"
              className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Email
            </a>
            <a
              href="https://www.xyra-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Website
            </a>
            <a
              href="tel:+971769488"
              className="text-white/60 hover:text-white transition-all duration-300 hover:scale-110"
            >
              Phone
            </a>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex items-center justify-center text-white/50 text-sm">
              <span>© 2024 Prashanth Thipparthi. Crafted with</span>
              <Heart className="w-4 h-4 mx-2 text-red-400 animate-pulse-slow" />
              <span>and</span>
              <Code className="w-4 h-4 mx-2 text-primary animate-bounce-slow" />
              <span>All rights reserved.</span>
            </div>
            <p className="text-white/40 text-xs mt-2">
              Transforming Engineering Through Digital Innovation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;