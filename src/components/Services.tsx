import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Property Valuation',
      description: 'Get accurate market valuations for your property with our comprehensive analysis and local market expertise.',
      icon: '💰',
      features: ['Market Analysis', 'Comparative Pricing', 'Investment Potential']
    },
    {
      id: 2,
      title: 'Buyer Representation',
      description: 'Let us represent your interests and find the perfect property that meets your needs and budget.',
      icon: '🏠',
      features: ['Property Search', 'Negotiation', 'Due Diligence']
    },
    {
      id: 3,
      title: 'Seller Representation',
      description: 'Maximize your property value with our marketing strategies and extensive buyer network.',
      icon: '📈',
      features: ['Marketing Strategy', 'Viewing Management', 'Offer Evaluation']
    },
    {
      id: 4,
      title: 'Rental Management',
      description: 'Professional rental management services to ensure your property generates optimal returns.',
      icon: '🔑',
      features: ['Tenant Screening', 'Rent Collection', 'Maintenance Coordination']
    },
    {
      id: 5,
      title: 'Investment Advisory',
      description: 'Strategic advice for property investors looking to build wealth through real estate.',
      icon: '📊',
      features: ['Portfolio Planning', 'Market Research', 'ROI Analysis']
    },
    {
      id: 6,
      title: 'Legal Support',
      description: 'Comprehensive legal guidance and documentation support for all property transactions.',
      icon: '⚖️',
      features: ['Document Preparation', 'Legal Compliance', 'Transaction Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to meet your unique property needs and goals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Service Icon */}
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gold-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className="mt-6 text-center">
                <button className="text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors duration-300 flex items-center justify-center mx-auto">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Property Journey?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you achieve your real estate goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-navy-900 transition-all duration-300 transform hover:scale-105">
              Call Now: +60 12-345 6789
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;