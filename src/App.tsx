import React from 'react';
// Property Agent Landing Page Components
import Header from './components/Header';
import Hero from './components/Hero';
import BrandPartners from './components/BrandPartners';
import Properties from './components/Properties';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <Hero />
      <BrandPartners />
      <Properties />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
