import React, { useState } from 'react';

const Properties: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const properties = [
    {
      id: 1,
      title: 'Luxury Condominium in KLCC',
      location: 'Kuala Lumpur City Centre',
      price: 'RM 2,500,000',
      beds: 3,
      baths: 3,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      type: 'condo',
      virtualTour: true,
      newListing: true,
      pricePerSqft: 1389
    },
    {
      id: 2,
      title: 'Modern Apartment in Mont Kiara',
      location: 'Mont Kiara, Kuala Lumpur',
      price: 'RM 1,200,000',
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false,
      type: 'apartment',
      virtualTour: true,
      newListing: false,
      pricePerSqft: 1000
    },
    {
      id: 3,
      title: 'Serviced Residence in Bangsar',
      location: 'Bangsar South, Kuala Lumpur',
      price: 'RM 1,800,000',
      beds: 3,
      baths: 2,
      sqft: 1500,
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      type: 'serviced',
      virtualTour: false,
      newListing: true,
      pricePerSqft: 1200
    },
    {
      id: 4,
      title: 'Penthouse in Damansara Heights',
      location: 'Damansara Heights, Kuala Lumpur',
      price: 'RM 3,500,000',
      beds: 4,
      baths: 4,
      sqft: 2500,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false,
      type: 'penthouse',
      virtualTour: true,
      newListing: false,
      pricePerSqft: 1400
    },
    {
      id: 5,
      title: 'Waterfront Residence',
      location: 'Tun Razak Exchange',
      price: 'RM 2,800,000',
      beds: 3,
      baths: 3,
      sqft: 2000,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: true,
      type: 'condo',
      virtualTour: true,
      newListing: true,
      pricePerSqft: 1400
    },
    {
      id: 6,
      title: 'Sky Garden Condominium',
      location: 'Bukit Bintang, Kuala Lumpur',
      price: 'RM 1,500,000',
      beds: 2,
      baths: 2,
      sqft: 1100,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      featured: false,
      type: 'condo',
      virtualTour: false,
      newListing: false,
      pricePerSqft: 1364
    }
  ];

  const filteredProperties = filterType === 'all'
    ? properties
    : properties.filter(p => p.type === filterType);

  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <span className="text-sm font-medium text-gold-600">Premium Selection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties in prime locations across Kuala Lumpur
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'All Properties', value: 'all' },
            { label: 'Condominiums', value: 'condo' },
            { label: 'Penthouses', value: 'penthouse' },
            { label: 'Apartments', value: 'apartment' },
            { label: 'Serviced Residence', value: 'serviced' }
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setFilterType(filter.value)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                filterType === filter.value
                  ? 'bg-gradient-to-r from-gold-500 to-bronze-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gold-500'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-gold-500/30"
            >
              {/* Property Image */}
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.featured && (
                    <span className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                      Featured
                    </span>
                  )}
                  {property.newListing && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                      New Listing
                    </span>
                  )}
                  {property.virtualTour && (
                    <span className="bg-navy-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>
                      360° Tour
                    </span>
                  )}
                </div>

                <div className="absolute top-4 right-4">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full bg-white/95 backdrop-blur-sm text-navy-900 py-2 rounded-lg font-semibold hover:bg-white transition-all duration-300 shadow-xl">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{property.title}</h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>

                {/* Property Features */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <svg className="w-5 h-5 mx-auto mb-1 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <p className="text-xs text-gray-500">Beds</p>
                    <p className="font-bold text-navy-900">{property.beds}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <svg className="w-5 h-5 mx-auto mb-1 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs text-gray-500">Baths</p>
                    <p className="font-bold text-navy-900">{property.baths}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center border border-gray-100">
                    <svg className="w-5 h-5 mx-auto mb-1 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    <p className="text-xs text-gray-500">Sq.ft</p>
                    <p className="font-bold text-navy-900">{property.sqft}</p>
                  </div>
                </div>

                {/* Price per sqft */}
                <div className="bg-gold-50 border border-gold-200 rounded-lg px-3 py-2 mb-4">
                  <p className="text-xs text-gray-600 mb-1">Price per sq.ft</p>
                  <p className="text-sm font-bold text-gold-700">RM {property.pricePerSqft.toLocaleString()}</p>
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Asking Price</p>
                      <span className="text-2xl font-bold bg-gradient-to-r from-gold-600 to-bronze-600 bg-clip-text text-transparent">{property.price}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-navy-900 to-charcoal-900 text-white px-4 py-3 rounded-lg hover:from-navy-800 hover:to-charcoal-800 transition-all duration-300 font-semibold transform hover:scale-105 shadow-md">
                    View Full Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-gold-50 to-bronze-50 rounded-2xl p-8 border border-gold-200">
            <h3 className="text-2xl font-bold text-navy-900 mb-3">Explore More Premium Properties</h3>
            <p className="text-gray-600 mb-6">Browse our complete collection of luxury properties across Malaysia</p>
            <button className="bg-gradient-to-r from-gold-500 to-bronze-500 hover:from-gold-600 hover:to-bronze-600 text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All {properties.length}+ Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;