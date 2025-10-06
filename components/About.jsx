import React from 'react';

const About = () => {
  return (
    <div 
      className="relative min-h-screen px-4 py-12 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1920&q=80')`,
      }}
    >
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center drop-shadow-black">
          About Us
        </h1>
        
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-white/40">
          <p className="text-lg mb-6 leading-relaxed text-gray-200 font-medium">
            We are a leading e-commerce platform dedicated to providing the best shopping experience for our customers.
          </p>
          <p className="text-white mb-8 leading-relaxed font-medium">
            Founded in 2020, we've grown to serve thousands of happy customers worldwide. Our mission is to make online shopping easy, safe, and enjoyable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-extrabold mb-3 text-blue-900">Our Vision</h3>
              <p className="text-white font-light">
                To be the most trusted e-commerce platform globally, setting new standards for quality and customer satisfaction.
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-sm p-6 rounded-xl border border-white/40 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-extrabold mb-3 text-cyan-900">Our Mission</h3>
              <p className="text-white font-light">
                Deliver quality products with exceptional service, making every customer interaction memorable and rewarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;