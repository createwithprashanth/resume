const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-max section-padding">
        <div className="text-center">
          <div className="text-2xl font-bold text-gradient mb-4">
            Prashanth Thipparthi
          </div>
          <p className="text-gray-400 mb-4">
            Senior Product Owner | Digitalization Lead | Engineering Domain Expert
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:prashanth.thipparthi@outlook.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://www.xyra-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Website
            </a>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Prashanth Thipparthi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;