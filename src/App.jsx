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
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Vanta Net Background - Fixed positioning to cover entire viewport */}
      <div className="fixed inset-0 w-full h-full z-0">
        <VantaNet />
      </div>
      
      {/* Main Content - Centered and above background */}
      <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-start">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <Header />
          <main className="flex flex-col items-center justify-center text-center w-full">
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