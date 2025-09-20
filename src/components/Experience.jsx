import { Calendar, MapPin, Building } from 'lucide-react';

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
      current: true
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
      current: false
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
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-slide-up"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${
                  exp.current ? 'bg-primary' : 'bg-gray-400'
                } shadow-md`}></div>
                
                {/* Content */}
                <div className="ml-16 card p-6 w-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-primary font-semibold mb-2">
                        <Building size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
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