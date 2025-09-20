import React from 'react';
import { Brain, Zap, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Brain, title: "12+ Years", subtitle: "Experience", color: "from-primary to-grid-blue" },
    { icon: Zap, title: "AI-Driven", subtitle: "Innovation", color: "from-secondary to-grid-purple" },
    { icon: Target, title: "Product", subtitle: "Leadership", color: "from-accent to-warning" },
    { icon: Award, title: "Engineering", subtitle: "Excellence", color: "from-success to-grid-emerald" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in text-glow">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto animate-slide-up rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and highlights */}
          <div className="animate-slide-in-left">
            <div className="relative mb-8">
              <div className="neon-card p-8 text-center">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Engineering workspace" 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300 group">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-spin-slow`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-slide-in-right">
            <div className="neon-card p-8">
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  <p className="text-lg text-white/90 leading-relaxed pl-6">
                    Dynamic Product Owner and Digitalization Lead with <span className="text-gradient font-semibold">12+ years of experience</span> bridging engineering expertise and product management. Skilled at translating business needs into digital solutions, leading cross-functional teams, and driving AI- and data-driven transformation initiatives.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full"></div>
                  <p className="text-lg text-white/90 leading-relaxed pl-6">
                    Proven track record in <span className="text-gradient font-semibold">Oil & Gas EPC projects (ADNOC)</span> and software product development (Hexagon), with entrepreneurial experience building AI-powered applications. I specialize in creating innovative solutions that bridge the gap between complex engineering requirements and user-friendly digital experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {['Product Strategy', 'AI Integration', 'Digital Transformation', 'Team Leadership'].map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full text-white/90 text-sm font-medium hover:scale-105 transition-transform duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;