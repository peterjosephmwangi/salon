import React from "react";

const WaxingServices = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Waxing Services</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Enjoy smooth, radiant skin with our premium waxing services. Whether you're looking for
            a quick touch-up or a full-body experience, we offer professional waxing services
            tailored to your needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 - Leg Waxing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/legwax.jpeg" // Replace with your image URL
              alt="Leg Waxing"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Leg Waxing</h3>
              <p className="text-gray-600 mb-6">
                Our leg waxing treatment provides smooth, hair-free legs that last for weeks. We
                use gentle techniques to minimize discomfort while ensuring excellent results.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Service 2 - Arm Waxing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/armwax.jpeg" // Replace with your image URL
              alt="Arm Waxing"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Arm Waxing</h3>
              <p className="text-gray-600 mb-6">
                Remove unwanted hair from your arms with our soothing waxing treatment. Experience
                silky-smooth arms without the irritation.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Service 3 - Bikini Waxing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/bikiniwax.jpeg" // Replace with your image URL
              alt="Bikini Waxing"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Bikini Waxing</h3>
              <p className="text-gray-600 mb-6">
                Achieve a smooth bikini line with our expert waxing service. Get long-lasting
                results that leave you feeling confident and comfortable.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Service 4 - Face Waxing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/facewax.jpeg" // Replace with your image URL
              alt="Face Waxing"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Face Waxing</h3>
              <p className="text-gray-600 mb-6">
                Our gentle face waxing will leave your skin smooth and soft. Say goodbye to
                unwanted facial hair with our professional service.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Service 5 - Full Body Waxing */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
            <img
              src="/images/fullwax.jpeg" // Replace with your image URL
              alt="Full Body Waxing"
              className="w-full h-56 object-cover"
            />
            <div className="p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Full Body Waxing</h3>
              <p className="text-gray-600 mb-6">
                Enjoy the ultimate smooth skin experience with our full-body waxing service. A
                luxurious treatment that leaves you feeling fresh from head to toe.
              </p>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full text-lg transition-all"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our waxing services are performed by certified professionals using the highest
            quality products. We prioritize your comfort, offering a relaxing experience and long-lasting
            results. Book your appointment today and experience the difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaxingServices;
