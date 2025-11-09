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
      description: 'Specializing in luxury properties in KLCC and Mont Kiara with over 200 successful transactions.',
      certifications: ['REA License #1234', 'Certified Luxury Specialist', 'Investment Property Advisor'],
      deals: 'RM 450M+'
    },
    {
      id: 2,
      name: 'James Lim',
      role: 'Investment Advisor',
      experience: '15 years',
      specialty: 'Commercial Properties',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Expert in property investment strategies and commercial real estate portfolio management.',
      certifications: ['REA License #5678', 'MBA Finance', 'Real Estate Negotiator'],
      deals: 'RM 680M+'
    },
    {
      id: 3,
      name: 'Aisha Hassan',
      role: 'Rental Specialist',
      experience: '8 years',
      specialty: 'Serviced Residences',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Dedicated to helping clients find the perfect rental properties with comprehensive support.',
      certifications: ['REA License #9012', 'Property Management Specialist', 'Tenant Relations Expert'],
      deals: 'RM 280M+'
    }
  ];

  const certifications = [
    { name: 'Board of Valuers, Appraisers, Estate Agents & Property Managers (BOVAEP)', logo: '🏛️' },
    { name: 'Malaysian Institute of Estate Agents (MIEA)', logo: '🏆' },
    { name: 'International Real Estate Federation (FIABCI)', logo: '🌍' },
    { name: 'Asia Pacific Real Estate Association', logo: '🌏' }
  ];

  const achievements = [
    { number: '500+', label: 'Happy Clients' },
    { number: 'RM 1.2B+', label: 'Property Value Transacted' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '15+', label: 'Years of Combined Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 mb-6">
            <span className="text-sm font-medium text-gold-600">Professional Excellence</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            About Our Agency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 15 years of combined experience in the Malaysian real estate market,
            we provide expert guidance and personalized service to help you achieve your property goals.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16 bg-gradient-to-br from-navy-900 to-charcoal-900 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Accredited & Certified By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl mb-3">{cert.logo}</div>
                <p className="text-sm text-gray-200 font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
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
            <div className="bg-gradient-to-br from-navy-900 to-charcoal-900 rounded-2xl p-8 text-white shadow-2xl border border-gold-500/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-7 h-7 mr-2 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Our Achievements
              </h3>
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
              <div key={member.id} className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-gold-500/30">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Deals Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-gold-500 to-bronze-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {member.deals} Deals
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{member.name}</h4>
                  <p className="text-gold-600 font-semibold mb-1">{member.role}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-3 pb-3 border-b border-gray-100">
                    <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {member.experience} experience
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>

                  {/* Certifications */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-1 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.certifications.map((cert, idx) => (
                        <span key={idx} className="text-xs bg-gold-50 text-gold-700 px-2 py-1 rounded border border-gold-200">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm font-semibold text-navy-700">
                      <svg className="w-4 h-4 mr-1 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      {member.specialty}
                    </div>
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