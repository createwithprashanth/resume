import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VantaNet from './components/VantaNet';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Vanta Net Background */}
      <VantaNet />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-4xl mx-auto px-4">
          <Header />
          <div className="flex flex-col items-center justify-center text-center w-full">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;