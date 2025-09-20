import React from 'react';
import { MapPin, Phone, Mail, Globe, Rocket, Sparkles } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden engineering-grid">
      <FloatingParticles count={30} />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-accent/20 to-success/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-grid-cyan/20 to-grid-purple/20 rounded-full blur-xl animate-bounce-slow"></div>
      </div>

      <div className="container-max section-padding text-center relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder with Engineering Theme */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-primary via-secondary to-accent rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Prashanth Thipparthi" 
                    className="w-44 h-44 rounded-full object-cover border-4 border-white/20"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 p-3 bg-gradient-to-r from-accent to-warning rounded-full animate-bounce-slow">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 p-3 bg-gradient-to-r from-success to-grid-emerald rounded-full animate-pulse-slow">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 text-glow">
            Prashanth <span className="text-gradient animate-glow">Thipparthi</span>
          </h1>
          
          <div className="neon-card p-6 mb-8 animate-slide-up">
            <h2 className="text-2xl md:text-3xl text-gradient mb-4 font-semibold">
              Senior Product Owner | Digitalization Lead | Engineering Domain Expert
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-slide-up">
            {[
              { icon: MapPin, text: "Abu Dhabi, UAE", color: "from-primary to-grid-blue" },
              { icon: Phone, text: "+971-769-4886", color: "from-secondary to-grid-purple" },
              { icon: Mail, text: "prashanth.thipparthi@outlook.com", color: "from-accent to-warning" },
              { icon: Globe, text: "www.xyra-ai.com", color: "from-success to-grid-emerald" }
            ].map((item, index) => (
              <div key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300 group">
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-bounce-slow`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <p className="text-white/90 text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="animate-slide-up">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore My Journey
                <Rocket className="ml-2 w-5 h-5 group-hover:animate-bounce-slow" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;