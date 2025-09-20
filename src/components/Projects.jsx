import React from 'react';
import { ExternalLink, Lightbulb, Zap, DollarSign, Rocket, Star, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AIGRID",
      subtitle: "Founder, XYRA AI Pvt. Ltd.",
      description: "Revolutionary SaaS platform for SPI/engineering data management with AI-powered automation and workflow optimization. Transforming how engineering teams handle complex data workflows.",
      icon: <Lightbulb className="w-8 h-8" />,
      technologies: ["AI/ML", "SaaS", "Data Management", "Engineering Workflows", "Cloud Computing"],
      link: "https://www.xyra-ai.com",
      color: "from-primary to-grid-blue",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Live",
      featured: true
    },
    {
      title: "Instrumap",
      subtitle: "AI-Powered Engineering Tool",
      description: "Cutting-edge intelligent tool that automatically generates Instrument Index from P&IDs using advanced computer vision and AI algorithms. Reducing manual effort by 80%.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Computer Vision", "AI", "P&ID Processing", "Automation", "Deep Learning"],
      link: null,
      color: "from-secondary to-grid-purple",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Development",
      featured: true
    },
    {
      title: "ExpenseEase",
      subtitle: "Personal Finance App",
      description: "Smart personal finance tracking application with automated expense categorization and insightful spending analytics. Built with modern React architecture.",
      icon: <DollarSign className="w-8 h-8" />,
      technologies: ["React.js", "Machine Learning", "FinTech", "Data Analytics", "Mobile-First"],
      link: null,
      color: "from-accent to-warning",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Beta",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 engineering-grid opacity-30"></div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in text-glow">
            Projects & <span className="text-gradient">Entrepreneurship</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto animate-slide-up rounded-full"></div>
          <p className="text-xl text-white/80 mt-6 max-w-3xl mx-auto">
            Innovative solutions that bridge engineering complexity with user-friendly experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group animate-slide-up transition-all duration-500 ${
                project.featured ? 'lg:col-span-1 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="neon-card p-8 h-full relative overflow-hidden hover:scale-105 transition-all duration-500">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Live' ? 'bg-gradient-to-r from-success to-grid-emerald text-white' :
                    project.status === 'Development' ? 'bg-gradient-to-r from-accent to-warning text-white' :
                    'bg-gradient-to-r from-secondary to-grid-purple text-white'
                  } animate-pulse-slow`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-2 bg-gradient-to-r from-primary to-secondary rounded-full animate-bounce-slow">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-4 bg-gradient-to-r ${project.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium text-sm">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass-card hover:scale-110 transition-all duration-300 group/link"
                      >
                        <ExternalLink size={20} className="text-white/70 group-hover/link:text-white" />
                      </a>
                    )}
                  </div>

                  <p className="text-white/80 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-white/20 text-white/90 text-sm rounded-full font-medium hover:scale-105 transition-transform duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-center`}
                        >
                          <span className="flex items-center justify-center">
                            <Rocket className="w-4 h-4 mr-2" />
                            Visit Project
                          </span>
                        </a>
                      ) : (
                        <div className={`flex-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-white/20 text-white/70 px-4 py-3 rounded-xl font-medium text-center`}>
                          <span className="flex items-center justify-center">
                            <Code className="w-4 h-4 mr-2" />
                            In Development
                          </span>
                        </div>
                      )}
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

export default Projects;