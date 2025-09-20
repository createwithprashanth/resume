import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetwork from './components/NeuralNetwork';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Neural Networks on both sides */}
      <NeuralNetwork side="left" />
      <NeuralNetwork side="right" />
      
      {/* Main content */}
      <div className="relative z-10">
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