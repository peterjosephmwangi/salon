import React from "react";

const NailsServices = () => {
  return (
    <section className="bg-gradient-to-r from-pink-100 to-purple-200 py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
            Nail Services That Shine
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Treat yourself to the ultimate nail experience with our premium services.
            From classic manicures to elaborate nail art, we have the perfect service
            to make your nails shine with style and elegance.
          </p>
        </div>

        {/* Nail services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-pink-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2v20m0 0l8-8m-8 8l-8-8"
                />
              </svg>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Classic Manicure</h3>
              <p className="text-gray-600 mb-4">
                A timeless treatment to enhance the natural beauty of your nails. Includes
                shaping, cuticle care, and a polish of your choice for that perfect finish.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-md transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-purple-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 3l9 9-9 9-9-9 9-9z"
                />
              </svg>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Gel Manicure</h3>
              <p className="text-gray-600 mb-4">
                Long-lasting gel polish for a durable, chip-resistant finish. Perfect for
                busy lifestyles with a glossy shine that lasts up to two weeks.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-md transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2v20m0 0l8-8m-8 8l-8-8"
                />
              </svg>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Nail Art</h3>
              <p className="text-gray-600 mb-4">
                Get creative with custom nail designs that match your unique style. From
                geometric patterns to floral accents, the possibilities are endless.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-yellow-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 3l9 9-9 9-9-9 9-9z"
                />
              </svg>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Acrylic Nails</h3>
              <p className="text-gray-600 mb-4">
                Perfect for those who want extra length or strength, acrylic nails offer
                a durable, customizable base for any shape or style.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full shadow-md transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white shadow-xl rounded-lg p-8 transform transition duration-500 hover:scale-105">
            <div className="text-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-green-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2v20m0 0l8-8m-8 8l-8-8"
                />
              </svg>
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Nail Care Treatment</h3>
              <p className="text-gray-600 mb-4">
                Pamper your nails with a nourishing treatment to improve strength, flexibility,
                and overall health of your nails.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-md transition-all"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NailsServices;
