import React from 'react';
import { Calendar, MapPin, Building, TrendingUp, Award, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Bilfinger Tebodin Middle East",
      position: "Senior Engineer – Instrumentation & Digitalization Lead",
      location: "Abu Dhabi",
      period: "Nov 2024 – Present",
      achievements: [
        "Leading digital transformation efforts for ADNOC Bab Artificial Lift Phase-II project",
        "Acting as Product Owner for SPI-based workflows, coordinating across teams",
        "Designed and executed bulk data automation solutions, reducing manual effort by 40%",
        "Defined digitalization roadmap and presented to ADNOC stakeholders"
      ],
      current: true,
      color: "from-primary to-grid-blue",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      company: "Hexagon AB",
      position: "Senior Software Test Engineer – Smart Instrumentation (SPI)",
      location: "Hyderabad, India",
      period: "2017 – 2024",
      achievements: [
        "Acted as proxy Product Owner for SPI product development",
        "Partnered with analysts to refine requirements and ensure user value delivery",
        "Automated validation scripts, cutting test cycles by 30%",
        "Represented customer perspective during sprint reviews"
      ],
      current: false,
      color: "from-secondary to-grid-purple",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Award className="w-6 h-6" />
    },
    {
      company: "EPC Project Roles",
      position: "Instrumentation Engineer",
      location: "Various",
      period: "2012 – 2017",
      achievements: [
        "Delivered control system designs, loop diagrams, cable schedules, and hook-ups",
        "Collaborated with clients and vendors to ensure compliance",
        "Managed multiple concurrent projects with strict deadlines",
        "Mentored junior engineers in instrumentation best practices"
      ],
      current: false,
      color: "from-accent to-warning",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 grid-bg opacity-20"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in text-glow">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto animate-slide-up rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-3xl mx-auto">
            A journey of innovation, leadership, and technical excellence across diverse industries
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-60"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-16 animate-slide-in-left group"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Enhanced Timeline dot */}
                <div className={`absolute left-6 w-6 h-6 rounded-full border-4 border-slate-900 ${
                  exp.current ? 'bg-gradient-to-r from-primary to-secondary animate-pulse-slow' : 'bg-gradient-to-r from-gray-400 to-gray-600'
                } shadow-lg z-10`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 animate-ping"></div>
                </div>
                
                {/* Content Card */}
                <div className="ml-16 w-full">
                  <div className="neon-card p-8 hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                              <div className="text-white">
                                {exp.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
                                {exp.position}
                              </h3>
                              <div className="flex items-center text-gradient font-semibold text-lg">
                                <Building size={18} className="mr-2" />
                                {exp.company}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col lg:items-end text-white/70 mt-4 lg:mt-0">
                          <div className="glass-card p-3 rounded-xl mb-2">
                            <div className="flex items-center mb-1">
                              <Calendar size={16} className="mr-2 text-primary" />
                              <span className="font-medium">{exp.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2 text-secondary" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-gradient-to-r from-success to-grid-emerald text-white text-sm rounded-full font-medium animate-pulse-slow">
                              Current Role
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="glass-card p-4 hover:scale-105 transition-all duration-300 group/achievement">
                            <div className="flex items-start">
                              <div className={`w-3 h-3 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover/achievement:animate-pulse-slow`}></div>
                              <span className="text-white/90 group-hover/achievement:text-white transition-colors duration-300">
                                {achievement}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;