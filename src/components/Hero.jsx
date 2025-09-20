import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Prashanth <span className="text-gradient">Thipparthi</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
            Senior Product Owner | Digitalization Lead | Engineering Domain Expert
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-600 animate-slide-up">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Abu Dhabi, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-primary" />
              <span>+971-769-4886</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>prashanth.thipparthi@outlook.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={18} className="text-primary" />
              <span>www.xyra-ai.com</span>
            </div>
          </div>

          <div className="animate-slide-up">
            <button
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;