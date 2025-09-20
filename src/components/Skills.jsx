import React from 'react';
import { Briefcase, Zap, Users, Code, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Product Management",
      skills: ["Product Roadmaps", "Agile/Scrum", "User Stories", "Backlog Prioritization", "Cross-functional Leadership"],
      color: "from-primary to-neural-blue",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digitalization & Innovation",
      skills: ["AI/ML Integration", "Workflow Automation", "Digital Twin", "Data Migrations", "Process Optimization"],
      color: "from-secondary to-neural-purple",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stakeholder Engagement",
      skills: ["Requirement Gathering", "Client Collaboration (ADNOC, EPCs)", "Change Management"],
      color: "from-accent to-warning",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Expertise",
      skills: ["SmartPlant Instrumentation (SPI)", "Oracle SQL", "Python", "GitLab", "Azure VM", "React.js", "Power BI"],
      color: "from-success to-neural-blue",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Domain Knowledge",
      skills: ["Oil & Gas", "EPC", "Engineering Digitalization", "FinTech (Banking - HDFC)"],
      color: "from-neural-blue to-primary",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Emerging Technologies",
      skills: ["Machine Learning", "IoT Integration", "Cloud Computing", "Blockchain", "AR/VR"],
      color: "from-neural-purple to-secondary",
      image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container-center section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in text-glow">
            Core <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto animate-slide-up rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            A comprehensive blend of technical expertise, leadership skills, and domain knowledge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group animate-slide-up hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="twitter-card p-6 h-full relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center group/skill">
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 group-hover/skill:animate-pulse-slow`}></div>
                        <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300 text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-xs">Proficiency</span>
                      <span className="text-gray-300 text-xs font-semibold">Expert</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className={`h-2 bg-gradient-to-r ${category.color} rounded-full animate-pulse-slow`} style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;