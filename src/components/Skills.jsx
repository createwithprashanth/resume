import { Briefcase, Zap, Users, Code, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Product Management",
      skills: ["Product Roadmaps", "Agile/Scrum", "User Stories", "Backlog Prioritization", "Cross-functional Leadership"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Digitalization & Innovation",
      skills: ["AI/ML Integration", "Workflow Automation", "Digital Twin", "Data Migrations", "Process Optimization"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Stakeholder Engagement",
      skills: ["Requirement Gathering", "Client Collaboration (ADNOC, EPCs)", "Change Management"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Expertise",
      skills: ["SmartPlant Instrumentation (SPI)", "Oracle SQL", "Python", "GitLab", "Azure VM", "React.js", "Power BI"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Domain Knowledge",
      skills: ["Oil & Gas", "EPC", "Engineering Digitalization", "FinTech (Banking - HDFC)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Core Skills
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-slide-up"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card p-6 animate-slide-up hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;