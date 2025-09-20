import React from 'react';
import { MapPin, Phone, Mail, Globe, Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden text-center">
      <div className="container-center section-padding text-center relative z-10">
        <div className="animate-fade-in text-center mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center mx-auto">
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-primary via-neural-blue to-accent rounded-full p-1 animate-spin-slow">
                <div className="w-full h-full bg-twitter-darker rounded-full flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Prashanth Thipparthi" 
                    className="w-36 h-36 rounded-full object-cover border-2 border-gray-700"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-accent to-warning rounded-full animate-bounce-slow">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 p-2 bg-gradient-to-r from-success to-neural-blue rounded-full animate-pulse-slow">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow text-center mx-auto">
            Prashanth <span className="text-gradient animate-glow">Thipparthi</span>
          </h1>
          
          <div className="twitter-card p-6 mb-8 animate-slide-up max-w-3xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl text-gradient mb-4 font-semibold text-center">
              Senior Product Owner | Digitalization Lead | Engineering Domain Expert
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto rounded-full text-center"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-slide-up max-w-4xl mx-auto justify-center">
            {[
              { icon: MapPin, text: "Abu Dhabi, UAE", color: "from-primary to-neural-blue" },
              { icon: Phone, text: "+971-769-4886", color: "from-secondary to-neural-purple" },
              { icon: Mail, text: "prashanth.thipparthi@outlook.com", color: "from-accent to-warning" },
              { icon: Globe, text: "www.xyra-ai.com", color: "from-success to-neural-blue" }
            ].map((item, index) => (
              <div key={index} className="twitter-card p-4 hover:scale-105 transition-all duration-300 group text-center mx-auto">
                <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-bounce-slow`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <p className="text-gray-300 text-sm font-medium text-center">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="animate-slide-up text-center mx-auto">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group relative overflow-hidden mx-auto text-center"
            >
              <span className="relative z-10 flex items-center">
                Explore My Journey
                <Rocket className="ml-2 w-5 h-5 group-hover:animate-bounce-slow" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;