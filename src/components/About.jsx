import React from 'react';
import { Brain, Zap, Target, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Brain, title: "12+ Years", subtitle: "Experience", color: "from-primary to-neural-blue" },
    { icon: Zap, title: "AI-Driven", subtitle: "Innovation", color: "from-secondary to-neural-purple" },
    { icon: Target, title: "Product", subtitle: "Leadership", color: "from-accent to-warning" },
    { icon: Award, title: "Engineering", subtitle: "Excellence", color: "from-success to-neural-blue" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden text-center">
      <div className="container-center section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in text-glow text-center mx-auto">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto animate-slide-up rounded-full text-center"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Left side - Image and highlights */}
          <div className="animate-slide-in-left mb-12 text-center mx-auto">
            <div className="relative mb-8">
              <div className="twitter-card p-6 text-center mx-auto">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Engineering workspace" 
                  className="w-full h-48 object-cover rounded-xl mb-6 mx-auto"
                />
                <div className="grid grid-cols-2 gap-4 justify-center mx-auto">
                  {highlights.map((item, index) => (
                    <div key={index} className="twitter-card p-4 hover:scale-105 transition-all duration-300 group text-center mx-auto">
                      <div className={`inline-flex p-3 bg-gradient-to-r ${item.color} rounded-full mb-3 group-hover:animate-spin-slow`}>
                        <item.icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 text-center">{item.title}</h3>
                      <p className="text-gray-400 text-sm text-center">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-slide-in-right text-center mx-auto">
            <div className="twitter-card p-8 text-center mx-auto">
              <div className="space-y-6">
                <div className="relative">
                  <p className="text-lg text-gray-300 leading-relaxed text-center mx-auto">
                    Dynamic Product Owner and Digitalization Lead with <span className="text-gradient font-semibold">12+ years of experience</span> bridging engineering expertise and product management. Skilled at translating business needs into digital solutions, leading cross-functional teams, and driving AI- and data-driven transformation initiatives.
                  </p>
                </div>
                
                <div className="relative">
                  <p className="text-lg text-gray-300 leading-relaxed text-center mx-auto">
                    Proven track record in <span className="text-gradient font-semibold">Oil & Gas EPC projects (ADNOC)</span> and software product development (Hexagon), with entrepreneurial experience building AI-powered applications. I specialize in creating innovative solutions that bridge the gap between complex engineering requirements and user-friendly digital experiences.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 justify-center">
                  {['Product Strategy', 'AI Integration', 'Digital Transformation', 'Team Leadership'].map((skill, index) => (
                    <span key={index} className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-gray-300 text-sm font-medium hover:scale-105 transition-transform duration-300 text-center">
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