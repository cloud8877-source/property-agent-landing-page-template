import React from 'react';

const About: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Senior Property Consultant',
      experience: '12 years',
      specialty: 'Luxury Condominiums',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Specializing in luxury properties in KLCC and Mont Kiara with over 200 successful transactions.'
    },
    {
      id: 2,
      name: 'James Lim',
      role: 'Investment Advisor',
      experience: '15 years',
      specialty: 'Commercial Properties',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Expert in property investment strategies and commercial real estate portfolio management.'
    },
    {
      id: 3,
      name: 'Aisha Hassan',
      role: 'Rental Specialist',
      experience: '8 years',
      specialty: 'Serviced Residences',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Dedicated to helping clients find the perfect rental properties with comprehensive support.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: 'RM 1.2B+', label: 'Property Value Transacted' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '15+', label: 'Years of Combined Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            About Our Agency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 15 years of combined experience in the Malaysian real estate market, 
            we provide expert guidance and personalized service to help you achieve your property goals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Mission & Values */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To simplify the property journey for our clients by providing transparent, 
                professional, and personalized real estate services that exceed expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-gold-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Trust & Integrity</h4>
                    <p className="text-gray-600 text-sm">Building long-term relationships based on honesty and transparency.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Expertise & Innovation</h4>
                    <p className="text-gray-600 text-sm">Leveraging market insights and technology for better outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gold-100 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">Client-Centric Approach</h4>
                    <p className="text-gray-600 text-sm">Putting your needs and goals at the center of everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div>
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gold-400 mb-2">{achievement.number}</div>
                    <div className="text-gray-300 text-sm">{achievement.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="font-semibold mb-3">Areas We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {['KLCC', 'Mont Kiara', 'Bangsar', 'Damansara Heights', 'Bukit Bintang', 'TRX'].map((area, index) => (
                    <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
              Meet Our Expert Team
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing you with 
              the highest level of service and expertise in the real estate industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">{member.name}</h4>
                  <p className="text-gold-600 font-medium mb-1">{member.role}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {member.experience} experience
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex items-center text-sm text-navy-700">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Specialty: {member.specialty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our experienced team guide you through your property journey with 
              personalized service and expert market knowledge.
            </p>
            <button className="bg-navy-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-800 transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;