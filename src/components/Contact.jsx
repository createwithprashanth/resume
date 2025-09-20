import { Mail, Phone, Globe, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "prashanth.thipparthi@outlook.com",
      href: "mailto:prashanth.thipparthi@outlook.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+971-769-4886",
      href: "tel:+971769488"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "www.xyra-ai.com",
      href: "https://www.xyra-ai.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Abu Dhabi, UAE",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-slide-up"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto animate-slide-up">
            Ready to discuss digitalization opportunities, product management challenges, or potential collaborations? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.label}
                className="card p-6 animate-slide-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center">
                  <div className="text-primary mr-4">
                    {contact.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {contact.label}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-gray-600 hover:text-primary transition-colors duration-200"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{contact.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-600 mb-6">
                Whether you're looking for a Product Owner to drive your digitalization initiatives, 
                or seeking expertise in engineering domain solutions, I'm here to help transform your vision into reality.
              </p>
              <a
                href="mailto:prashanth.thipparthi@outlook.com"
                className="btn-primary inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;