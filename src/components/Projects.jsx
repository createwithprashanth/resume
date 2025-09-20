import React from 'react';
import { ExternalLink, Lightbulb, Zap, DollarSign } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AIGRID",
      subtitle: "Founder, XYRA AI Pvt. Ltd.",
      description: "SaaS platform for SPI/engineering data management with AI-powered automation and workflow optimization.",
      icon: <Lightbulb className="w-8 h-8" />,
      technologies: ["AI/ML", "SaaS", "Data Management", "Engineering Workflows"],
      link: "https://www.xyra-ai.com"
    },
    {
      title: "Instrumap",
      subtitle: "AI-Powered Engineering Tool",
      description: "Intelligent tool that automatically generates Instrument Index from P&IDs using advanced computer vision and AI algorithms.",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Computer Vision", "AI", "P&ID Processing", "Automation"],
      link: null
    },
    {
      title: "ExpenseEase",
      subtitle: "Personal Finance App",
      description: "Smart personal finance tracking application with automated expense categorization and insightful spending analytics.",
      icon: <DollarSign className="w-8 h-8" />,
      technologies: ["React.js", "Machine Learning", "FinTech", "Data Analytics"],
      link: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Projects & Entrepreneurship
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-slide-up"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card p-6 animate-slide-up hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {project.subtitle}
                  </p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;