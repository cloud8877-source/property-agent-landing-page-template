import React, { useState } from 'react';

const VirtualTours: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState(0);

  const tours = [
    {
      id: 1,
      title: 'Luxury Penthouse - KLCC',
      location: 'Kuala Lumpur City Centre',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      views: '2,450',
      featured: true
    },
    {
      id: 2,
      title: 'Modern Villa - Damansara Heights',
      location: 'Damansara Heights',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      views: '1,890',
      featured: false
    },
    {
      id: 3,
      title: 'Waterfront Residence - TRX',
      location: 'Tun Razak Exchange',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      views: '3,120',
      featured: true
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: '360° Virtual Tours',
      description: 'Immersive property viewing from anywhere'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Interactive Floor Plans',
      description: 'Detailed layouts with measurements'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: 'HD Video Walkthroughs',
      description: 'Professional video tours in 4K'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Optimized',
      description: 'View on any device, anywhere'
    }
  ];

  return (
    <section id="virtual-tours" className="py-20 bg-gradient-to-br from-charcoal-900 via-navy-900 to-charcoal-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <span className="text-sm font-medium text-gold-400">Premium Experience</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Immersive Virtual Tours
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience properties like never before with our cutting-edge 360° virtual tours.
            Walk through luxury homes from the comfort of yours.
          </p>
        </div>

        {/* Main Tour Viewer */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-navy-800/50 to-charcoal-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl">
            <div className="relative">
              <img
                src={tours[selectedTour].image}
                alt={tours[selectedTour].title}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Tour Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="group bg-white/90 hover:bg-white backdrop-blur-sm p-8 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl">
                  <svg className="w-16 h-16 text-navy-900 group-hover:text-gold-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                </button>
              </div>

              {/* Tour Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{tours[selectedTour].title}</h3>
                    <p className="text-gold-300 flex items-center text-lg">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {tours[selectedTour].location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <p className="text-gray-300 text-sm">Total Views</p>
                      <p className="text-2xl font-bold text-gold-400">{tours[selectedTour].views}</p>
                    </div>
                    <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Start Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Tour Thumbnails */}
            <div className="p-6 bg-navy-900/50 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4">
                {tours.map((tour, index) => (
                  <button
                    key={tour.id}
                    onClick={() => setSelectedTour(index)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                      selectedTour === index ? 'ring-4 ring-gold-500 shadow-lg' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={tour.image} alt={tour.title} className="w-full h-24 object-cover" />
                    {tour.featured && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-gold-500 text-white text-xs px-2 py-1 rounded-full font-medium">Featured</span>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <p className="text-white text-xs font-medium truncate">{tour.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-gold-500/30 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gold-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-gold-400 group-hover:bg-gold-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gold-500/10 to-bronze-500/10 rounded-2xl p-8 border border-gold-500/20">
            <h3 className="text-2xl font-bold mb-4">Experience the Future of Property Viewing</h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Schedule a personalized virtual tour with our agents and explore properties in stunning detail
            </p>
            <button className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;
