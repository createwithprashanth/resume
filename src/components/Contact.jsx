import React from 'react';
import { Mail, Phone, Globe, MapPin, Send, MessageCircle, Calendar, Zap } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "prashanth.thipparthi@outlook.com",
      href: "mailto:prashanth.thipparthi@outlook.com",
      color: "from-primary to-neural-blue",
      description: "Drop me a line anytime"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+971-769-4886",
      href: "tel:+971769488",
      color: "from-secondary to-neural-purple",
      description: "Let's have a conversation"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Website",
      value: "www.xyra-ai.com",
      href: "https://www.xyra-ai.com",
      color: "from-accent to-warning",
      description: "Explore my digital ventures"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Abu Dhabi, UAE",
      href: null,
      color: "from-success to-neural-blue",
      description: "Based in the innovation hub"
    }
  ];

  const quickActions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Quick Chat",
      description: "Schedule a 15-minute discovery call",
      action: "Schedule Call",
      color: "from-primary to-neural-blue"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Project Discussion",
      description: "Let's discuss your digitalization needs",
      action: "Book Meeting",
      color: "from-secondary to-accent"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Collaboration",
      description: "Explore partnership opportunities",
      action: "Get Started",
      color: "from-accent to-success"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden text-center">
      <div className="container-center section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in text-glow text-center mx-auto">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-neural-blue mx-auto animate-slide-up rounded-full text-center"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto animate-slide-up text-center">
            Ready to discuss digitalization opportunities, product management challenges, or potential collaborations? Let's create something extraordinary together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 text-center">
          {/* Contact Information */}
          <div className="text-center mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mx-auto">
              {contactInfo.map((contact, index) => (
                <div
                  key={contact.label}
                  className="twitter-card p-6 hover:scale-105 transition-all duration-500 group animate-slide-up text-center mx-auto"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start">
                    <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                      <div className="text-white">
                        {contact.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gradient transition-all duration-300 text-center">
                        {contact.label}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 text-center">{contact.description}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm text-center"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-gray-300 font-medium text-sm text-center">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6 text-center max-w-md mx-auto">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Quick <span className="text-gradient">Actions</span>
            </h3>
            {quickActions.map((action, index) => (
              <div
                key={action.title}
                className="twitter-card p-6 hover:scale-105 transition-all duration-500 group animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${action.color} rounded-xl mr-4 group-hover:animate-bounce-slow`}>
                    <div className="text-white">
                      {action.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-gradient transition-all duration-300">
                      {action.title}
                    </h4>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                <button className={`w-full bg-gradient-to-r ${action.color} text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm`}>
                  {action.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="twitter-card p-12 animate-slide-up max-w-3xl mx-auto">
            <div className="mb-8">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Collaboration" 
                className="w-full h-48 object-cover rounded-xl opacity-20"
              />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 text-glow">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you're looking for a Product Owner to drive your digitalization initiatives, 
              seeking expertise in engineering domain solutions, or exploring AI-powered innovations, 
              I'm here to help transform your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:prashanth.thipparthi@outlook.com"
                className="btn-primary group"
              >
                <span className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2 group-hover:animate-bounce-slow" />
                  Send Message
                </span>
              </a>
              <a
                href="https://www.xyra-ai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Visit Portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;