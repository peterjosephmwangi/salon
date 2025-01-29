import React from 'react'

const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* About Us Image */}
          <div>
            <img
              src="/images/image4.jpg" // Replace with your image path
              alt="Salon Team"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* About Us Text */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              About Our Salon
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Welcome to <span className="text-pink-600 font-semibold">[Salon Name]</span>, where beauty meets relaxation. 
              With over 15 years of experience, we specialize in providing top-notch hair and beauty services tailored to your needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our team of skilled professionals offers a wide range of services, from trendy haircuts to luxurious facials and nail treatments. 
              We only use high-quality products to ensure that you leave our salon feeling pampered and rejuvenated.
            </p>
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
