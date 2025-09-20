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
      color: "from-primary to-neural-blue",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <TrendingUp className="w-5 h-5" />
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
      color: "from-secondary to-neural-purple",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400",
      icon: <Award className="w-5 h-5" />
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
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container-center section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in text-glow">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto animate-slide-up rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A journey of innovation, leadership, and technical excellence across diverse industries
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-neural-blue to-accent rounded-full opacity-60"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center mb-12 animate-slide-up group text-center"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-2 border-twitter-darker ${
                  exp.current ? 'bg-gradient-to-r from-primary to-neural-blue animate-pulse-slow' : 'bg-gradient-to-r from-gray-400 to-gray-600'
                } shadow-lg z-10`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-neural-blue opacity-30 animate-ping"></div>
                </div>
                
                {/* Content Card */}
                <div className="mt-8 w-full">
                  <div className="twitter-card p-6 hover:scale-105 transition-all duration-500 group-hover:shadow-2xl">
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
                      <div className="text-center mb-6">
                        <div className="flex-1">
                          <div className="flex items-center justify-center mb-3">
                            <div className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                              <div className="text-white">
                                {exp.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
                                {exp.position}
                              </h3>
                              <div className="flex items-center justify-center text-gradient font-semibold">
                                <Building size={16} className="mr-2" />
                                {exp.company}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-center text-gray-400 mt-4">
                          <div className="twitter-card p-3 rounded-xl mb-2 inline-block">
                            <div className="flex items-center mb-1">
                              <Calendar size={14} className="mr-2 text-primary" />
                              <span className="font-medium text-sm">{exp.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-2 text-neural-blue" />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                          {exp.current && (
                            <span className="px-3 py-1 bg-gradient-to-r from-success to-neural-blue text-white text-xs rounded-full font-medium animate-pulse-slow">
                              Current Role
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="twitter-card p-4 hover:scale-105 transition-all duration-300 group/achievement">
                            <div className="flex items-start">
                              <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 mr-3 flex-shrink-0 group-hover/achievement:animate-pulse-slow`}></div>
                              <span className="text-gray-300 group-hover/achievement:text-white transition-colors duration-300 text-sm">
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