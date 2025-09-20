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
    <div className="relative min-h-screen w-full">
      {/* Vanta Net Background - Fixed to cover entire viewport */}
      <VantaNet />
      
      {/* Main Content - Centered and above background */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="w-full">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;