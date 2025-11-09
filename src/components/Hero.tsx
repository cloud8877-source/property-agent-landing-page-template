import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal-900">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundPosition: 'center 30%'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-navy-900/70 to-charcoal-900/95"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/20 to-bronze-500/20 backdrop-blur-sm border border-gold-500/30 mb-8 shadow-xl">
            <svg className="w-5 h-5 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-bold text-gold-300 uppercase tracking-wider">Premium Property Specialists</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
            Discover Luxury
            <span className="block bg-gradient-to-r from-gold-400 via-gold-300 to-bronze-400 bg-clip-text text-transparent mt-3 drop-shadow-2xl">
              Living Redefined
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-10 font-light max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Malaysia's premier property consultants specializing in exclusive luxury real estate.
            <span className="block mt-2 text-gold-300 font-semibold">Serving discerning clients since 2008</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('properties')}
              className="group bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl min-w-[240px] flex items-center justify-center"
            >
              Explore Properties
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white hover:text-navy-900 transition-all duration-300 transform hover:scale-105 min-w-[240px] shadow-xl"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Statistics */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: 'RM 1.2B+', label: 'Property Sold' },
              { number: '15+', label: 'Years Experience' },
              { number: '98%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-2xl md:text-3xl font-bold text-gold-400 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('properties')}
          className="flex flex-col items-center text-white hover:text-gold-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Explore Properties</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;