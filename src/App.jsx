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
    <div className="relative min-h-screen w-full bg-gradient-to-br from-twitter-darker via-twitter-dark to-twitter-darker">
      {/* Animated Background */}
      <VantaNet />
      
      {/* Main Content */}
      <div className="relative z-10 w-full">
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
  );
}

export default App;