import React from "react";

const MassageServices = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-8">
          Relax and Rejuvenate with Our Massage Services
        </h2>

        {/* Description */}
        <p className="text-lg text-center text-gray-700 mb-12">
          Experience tranquility and refreshment with our specialized massage therapies.
          Whether you're seeking relief from stress, muscle pain, or just looking to unwind,
          we have the perfect massage tailored to your needs.
        </p>

        {/* Service options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
            <div className="mb-6 text-center flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-pink-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zM12 13c-4 0-6 1.5-6 3v2h12v-2c0-1.5-2-3-6-3z"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Swedish Massage</h3>
              <p className="text-gray-600">
                A relaxing massage that uses long strokes, kneading, and circular movements to
                improve circulation and promote relaxation.
              </p>
            </div>
            <a
              href="#"
              className="block text-center py-2 px-6 mt-auto bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
            >
              Book Now
            </a>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
            <div className="mb-6 text-center flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-pink-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zM12 13c-4 0-6 1.5-6 3v2h12v-2c0-1.5-2-3-6-3z"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Deep Tissue Massage</h3>
              <p className="text-gray-600">
                Targets deeper layers of muscle and connective tissue to alleviate chronic pain
                and muscle tension.
              </p>
            </div>
            <a
              href="#"
              className="block text-center py-2 px-6 mt-auto bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
            >
              Book Now
            </a>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105">
            <div className="mb-6 text-center flex-grow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 text-pink-600 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c2.5 0 4.5-2 4.5-4.5S14.5 2 12 2 7.5 4 7.5 6.5 9.5 11 12 11zM12 13c-4 0-6 1.5-6 3v2h12v-2c0-1.5-2-3-6-3z"
                />
              </svg>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hot Stone Massage</h3>
              <p className="text-gray-600">
                Smooth, heated stones are placed on specific areas of your body to relax
                muscles and improve circulation.
              </p>
            </div>
            <a
              href="#"
              className="block text-center py-2 px-6 mt-auto bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassageServices;
