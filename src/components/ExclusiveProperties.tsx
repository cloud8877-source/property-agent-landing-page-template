import React, { useState } from 'react';

const ExclusiveProperties: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<number | null>(null);

  const exclusiveListings = [
    {
      id: 1,
      title: 'The Meridian Penthouse',
      location: 'KLCC, Kuala Lumpur',
      price: 'RM 12,500,000',
      beds: 5,
      baths: 6,
      sqft: 6500,
      type: 'Penthouse',
      status: 'Off-Market',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Private Elevator', 'Rooftop Pool', 'Sky Garden', 'Smart Home'],
      description: 'Ultra-luxury penthouse with breathtaking city views and exclusive amenities.',
      exclusiveUntil: '2025-12-31'
    },
    {
      id: 2,
      title: 'Heritage Bungalow',
      location: 'Damansara Heights',
      price: 'RM 18,000,000',
      beds: 6,
      baths: 7,
      sqft: 8000,
      type: 'Bungalow',
      status: 'Exclusive',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Wine Cellar', 'Home Theater', 'Infinity Pool', 'Tennis Court'],
      description: 'Prestigious colonial-style bungalow on prime freehold land.',
      exclusiveUntil: '2025-11-15'
    },
    {
      id: 3,
      title: 'Waterfront Villa',
      location: 'Tun Razak Exchange',
      price: 'RM 15,800,000',
      beds: 5,
      baths: 6,
      sqft: 7200,
      type: 'Villa',
      status: 'Private Sale',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: ['Lake View', 'Private Jetty', 'Spa Room', 'Gym'],
      description: 'Stunning waterfront property with unparalleled luxury and privacy.',
      exclusiveUntil: '2025-12-20'
    }
  ];

  return (
    <section id="exclusive-properties" className="py-20 bg-gradient-to-br from-charcoal-900 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
          linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
          linear-gradient(30deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37),
          linear-gradient(150deg, #D4AF37 12%, transparent 12.5%, transparent 87%, #D4AF37 87.5%, #D4AF37)`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/20 to-bronze-500/20 border border-gold-500/30 mb-6 backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold text-gold-300 uppercase tracking-wider">VIP Access Only</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Exclusive Off-Market Listings
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access premium properties not available to the general market.
            <span className="block mt-2 text-gold-300 font-semibold">Reserved for serious investors and qualified buyers only.</span>
          </p>
        </div>

        {/* Exclusive Listings */}
        <div className="space-y-8 mb-16">
          {exclusiveListings.map((property, index) => (
            <div
              key={property.id}
              className="group bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-gold-500/20 hover:border-gold-500/50 transition-all duration-500 shadow-2xl hover:shadow-gold-500/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                      </svg>
                      {property.status}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-navy-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold border border-white/20">
                      {property.type}
                    </div>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                      <p className="text-gray-300 text-sm mb-1">Asking Price</p>
                      <p className="text-4xl font-bold text-white">{property.price}</p>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      {property.title}
                    </h3>
                    <p className="text-gold-300 flex items-center text-lg mb-6">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {property.location}
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {property.description}
                    </p>

                    {/* Property Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-400 text-sm mb-1">Bedrooms</p>
                        <p className="text-2xl font-bold text-white">{property.beds}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-400 text-sm mb-1">Bathrooms</p>
                        <p className="text-2xl font-bold text-white">{property.baths}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-gray-400 text-sm mb-1">Size (sqft)</p>
                        <p className="text-2xl font-bold text-white">{property.sqft.toLocaleString()}</p>
                      </div>
                    </div>

                    {/* Premium Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Premium Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {property.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="bg-gradient-to-r from-gold-500/20 to-bronze-500/20 text-gold-300 px-4 py-2 rounded-full text-sm border border-gold-500/30 font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Exclusive Access Info */}
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-red-300 text-sm font-semibold">Exclusive Access Expires</p>
                          <p className="text-white font-bold">{new Date(property.exclusiveUntil).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-6 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Request Viewing
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20 hover:border-gold-500/50">
                      Full Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Access Request CTA */}
        <div className="bg-gradient-to-r from-gold-500/10 to-bronze-500/10 backdrop-blur-sm rounded-2xl p-12 border border-gold-500/30 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-gold-500/20 p-4 rounded-full mb-6">
              <svg className="w-12 h-12 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Unlock Access to More Exclusive Listings
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Register as a VIP buyer to receive notifications about new off-market properties
              before they're available to the public. Limited access granted to qualified investors only.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
                Apply for VIP Access
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-gold-500/50">
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProperties;
