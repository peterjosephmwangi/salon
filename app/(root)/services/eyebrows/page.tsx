export default function EyebrowServices() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Eyebrow Services
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Enhance your natural beauty with perfectly shaped and defined
          eyebrows, tailored just for you.
        </p>

        {/* Eyebrow Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eyebrowServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Trust <span className="text-pink-600">Saloonist?</span>
          </h2>
          <ul className="text-lg text-gray-700 space-y-4 text-left md:text-center">
            <li>✅ Professional and certified eyebrow specialists</li>
            <li>✅ Personalized shaping based on your face structure</li>
            <li>✅ High-quality and skin-friendly products</li>
            <li>✅ Hygienic and relaxing salon environment</li>
          </ul>
          <a
            href="/contact"
            className="mt-8 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
          >
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

const eyebrowServices = [
  {
    title: "Eyebrow Threading",
    description:
      "Achieve a clean and natural shape with our precise threading technique for a defined look.",
  },
  {
    title: "Eyebrow Waxing",
    description:
      "Get smooth and well-defined brows with our gentle waxing treatment, perfect for sensitive skin.",
  },
  {
    title: "Eyebrow Tinting",
    description:
      "Enhance your brows with semi-permanent color for a fuller and more defined appearance.",
  },
  {
    title: "Microblading",
    description:
      "A semi-permanent tattooing technique that creates natural-looking, fuller brows.",
  },
  {
    title: "Lamination & Shaping",
    description:
      "Achieve a sleek, lifted brow look with our lamination and expert shaping service.",
  },
];
