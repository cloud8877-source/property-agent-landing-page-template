import React from 'react';

const BrandPartners: React.FC = () => {
  const partners = [
    {
      name: 'PropertyGuru',
      logo: '🏠'
    },
    {
      name: 'iProperty',
      logo: '🏢'
    },
    {
      name: 'Mudah.my',
      logo: '🔑'
    },
    {
      name: 'EdgeProp',
      logo: '📈'
    },
    {
      name: 'Property Hunter',
      logo: '🔍'
    },
    {
      name: 'StarProperty',
      logo: '⭐'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Trusted by Malaysia's Top Platforms
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our properties are featured on the most reputable real estate platforms in Malaysia
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <h3 className="text-lg font-semibold text-navy-900 text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;