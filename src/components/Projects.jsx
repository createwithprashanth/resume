import React from 'react';
import { ExternalLink, Lightbulb, Zap, DollarSign, Rocket, Star, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AIGRID",
      subtitle: "Founder, XYRA AI Pvt. Ltd.",
      description: "Revolutionary SaaS platform for SPI/engineering data management with AI-powered automation and workflow optimization. Transforming how engineering teams handle complex data workflows.",
      icon: <Lightbulb className="w-6 h-6" />,
      technologies: ["AI/ML", "SaaS", "Data Management", "Engineering Workflows", "Cloud Computing"],
      link: "https://www.xyra-ai.com",
      color: "from-primary to-neural-blue",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Live",
      featured: true
    },
    {
      title: "Instrumap",
      subtitle: "AI-Powered Engineering Tool",
      description: "Cutting-edge intelligent tool that automatically generates Instrument Index from P&IDs using advanced computer vision and AI algorithms. Reducing manual effort by 80%.",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Computer Vision", "AI", "P&ID Processing", "Automation", "Deep Learning"],
      link: null,
      color: "from-secondary to-neural-purple",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Development",
      featured: true
    },
    {
      title: "ExpenseEase",
      subtitle: "Personal Finance App",
      description: "Smart personal finance tracking application with automated expense categorization and insightful spending analytics. Built with modern React architecture.",
      icon: <DollarSign className="w-6 h-6" />,
      technologies: ["React.js", "Machine Learning", "FinTech", "Data Analytics", "Mobile-First"],
      link: null,
      color: "from-accent to-warning",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "Beta",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden text-center">
      <div className="container-center section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in text-glow text-center mx-auto">
            Projects & <span className="text-gradient">Entrepreneurship</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto animate-slide-up rounded-full text-center"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto text-center">
            Innovative solutions that bridge engineering complexity with user-friendly experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-slide-up transition-all duration-500 text-center mx-auto"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="twitter-card p-6 h-full relative overflow-hidden hover:scale-105 transition-all duration-500 text-center mx-auto">
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
                    project.status === 'Live' ? 'bg-gradient-to-r from-success to-neural-blue text-white' :
                    project.status === 'Development' ? 'bg-gradient-to-r from-accent to-warning text-white' :
                    'bg-gradient-to-r from-secondary to-neural-purple text-white'
                  } animate-pulse-slow`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <div className="p-2 bg-gradient-to-r from-primary to-neural-blue rounded-full animate-bounce-slow">
                      <Star className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 bg-gradient-to-r ${project.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                        <div className="text-white">
                          {project.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300">
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
                        className="p-2 twitter-card hover:scale-110 transition-all duration-300 group/link"
                      >
                        <ExternalLink size={16} className="text-gray-400 group-hover/link:text-white" />
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 border border-primary/30 text-gray-300 text-xs rounded-full font-medium hover:scale-105 transition-transform duration-300"
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
                          className={`flex-1 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-center text-sm`}
                        >
                          <span className="flex items-center justify-center">
                            <Rocket className="w-4 h-4 mr-2" />
                            Visit Project
                          </span>
                        </a>
                      ) : (
                        <div className="flex-1 bg-gray-700/50 border border-gray-600 text-gray-400 px-4 py-2 rounded-xl font-medium text-center text-sm">
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