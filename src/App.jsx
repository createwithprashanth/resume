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
    <div className="min-h-screen relative flex flex-col items-center">
      {/* Vanta Net Background */}
      <VantaNet />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;