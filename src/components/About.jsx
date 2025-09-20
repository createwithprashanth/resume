const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto animate-slide-up"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed">
              Dynamic Product Owner and Digitalization Lead with <span className="font-semibold text-primary">12+ years of experience</span> bridging engineering expertise and product management. Skilled at translating business needs into digital solutions, leading cross-functional teams, and driving AI- and data-driven transformation initiatives.
            </p>
            <br />
            <p className="text-lg text-gray-700 leading-relaxed">
              Proven track record in <span className="font-semibold text-primary">Oil & Gas EPC projects (ADNOC)</span> and software product development (Hexagon), with entrepreneurial experience building AI-powered applications. I specialize in creating innovative solutions that bridge the gap between complex engineering requirements and user-friendly digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;