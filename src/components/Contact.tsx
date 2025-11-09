import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyType: ''
    });
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '+60 12-345 6789',
      description: 'Mon to Fri 9am to 6pm'
    },
    {
      icon: '📧',
      title: 'Email',
      details: 'hello@propertyagent.com',
      description: 'Send us your query anytime'
    },
    {
      icon: '📍',
      title: 'Office',
      details: 'KLCC, Kuala Lumpur',
      description: 'Visit our office by appointment'
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: '+60 12-345 6789',
      description: 'Quick responses via WhatsApp'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to find your dream property? Contact us today for a free consultation 
            and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested In
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select property type</option>
                    <option value="condominium">Condominium</option>
                    <option value="serviced-residence">Serviced Residence</option>
                    <option value="landed-property">Landed Property</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="commercial">Commercial</option>
                    <option value="rental">Rental Property</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your property requirements, budget, and preferred locations..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-navy-900 text-white py-4 rounded-lg font-semibold hover:bg-navy-800 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-2xl mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-gold-300 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-300 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy-900 mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-navy-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-navy-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-navy-900">By Appointment</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-navy-900 mb-3">Service Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {['KLCC', 'Mont Kiara', 'Bangsar', 'Damansara Heights', 'Bukit Bintang', 'TRX', 'Setia Alam', 'Subang Jaya'].map((area, index) => (
                    <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-300">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <div className="flex items-start">
                <div className="text-red-500 text-2xl mr-4">🚨</div>
                <div>
                  <h4 className="font-bold text-red-800 mb-2">Emergency Contact</h4>
                  <p className="text-red-700 text-sm mb-2">
                    For urgent property matters outside office hours
                  </p>
                  <p className="font-semibold text-red-800">+60 16-123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Visit Our Office</h3>
            <div className="bg-white rounded-xl p-4 shadow-inner">
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-4">🗺️</div>
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">KLCC, Kuala Lumpur, Malaysia</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <button className="bg-white text-navy-900 border-2 border-navy-900 px-6 py-3 rounded-lg font-semibold hover:bg-navy-900 hover:text-white transition-all duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;