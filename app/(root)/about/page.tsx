export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Elevate your beauty experience with our premium salon services.
        </p>
      </div>

      <section className="mt-12 space-y-8">
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Our Story</h2>
          <p className="mt-4 text-gray-600">
            Founded with a passion for beauty and wellness, our salon is dedicated to providing top-tier services that empower confidence. Our expert team ensures a luxurious experience tailored to every client’s needs.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h2>
          <ul className="mt-4 space-y-3 text-gray-600 list-disc pl-5">
            <li>Experienced and professional stylists</li>
            <li>High-quality products and latest techniques</li>
            <li>Relaxing and elegant salon environment</li>
            <li>Personalized services tailored to your needs</li>
          </ul>
        </div>
      </section>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Book Your Appointment Today!</h2>
        <p className="mt-4 text-gray-600">
          Let us bring out the best in you. Visit us for a transformational salon experience.
        </p>
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
}