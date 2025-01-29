export default function HairColoringServices() {
  return (
    <section className="bg-pink-100 text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Transform Your Look with Vibrant Hair Colors</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            From soft pastels to bold transformations, our professional colorists will bring your vision to life!
          </p>
        </div>

        {/* Hair Coloring Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {hairColoringServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-pink-300 hover:border-pink-500 transition-all"
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-white p-8 rounded-xl text-center shadow-lg border border-pink-300">
          <h2 className="text-3xl font-semibold text-pink-600">Why Choose Our Hair Coloring Services?</h2>
          <p className="text-gray-700 mt-4">
            Our expert stylists use premium, ammonia-free colors for **long-lasting shine and vibrancy**.
          </p>
          <ul className="text-lg text-gray-700 mt-6 space-y-3 text-left md:text-center">
            <li>💖 Personalized color consultations</li>
            <li>💖 High-quality, damage-free coloring products</li>
            <li>💖 Ombre, balayage, highlights & full-color services</li>
            <li>💖 Latest trends & techniques from expert stylists</li>
          </ul>
          <a
            href="/contact"
            className="mt-8 inline-block px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            Book Your Hair Color Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

const hairColoringServices = [
  {
    title: "Balayage & Ombre",
    description:
      "Seamless, natural-looking color that adds dimension and depth to your hair.",
  },
  {
    title: "Full Hair Coloring",
    description:
      "Completely transform your look with a bold, vibrant shade of your choice.",
  },
  {
    title: "Highlights & Lowlights",
    description:
      "Add soft, face-framing highlights or depth-enhancing lowlights for a fresh look.",
  },
  {
    title: "Pastel & Fantasy Colors",
    description:
      "Express yourself with stunning pastel pinks, purples, blues, and more!",
  },
  {
    title: "Grey Coverage & Root Touch-Up",
    description:
      "Effortlessly blend away grays or refresh your color with expert precision.",
  },
  {
    title: "Gloss & Toner Treatments",
    description:
      "Enhance shine, neutralize brassiness, and keep your hair color looking salon-fresh.",
  },
];
