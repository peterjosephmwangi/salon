export default function FacialServices() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">Indulgent Facial Treatments</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Pamper your skin with our rejuvenating facials designed to **hydrate, cleanse, and refresh**.
          </p>
        </div>

        {/* Facials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {facialServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-pink-400 transition-all"
            >
              <h3 className="text-2xl font-semibold text-pink-400 mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="mt-16 bg-gray-800 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-semibold text-pink-400">Why Choose Our Facials?</h2>
          <p className="text-gray-300 mt-4">
            Experience **luxury skincare treatments** using high-quality, dermatologist-approved products.
          </p>
          <ul className="text-lg text-gray-400 mt-6 space-y-3 text-left md:text-center">
            <li>🌸 Deep hydration for soft, glowing skin</li>
            <li>🌸 Revitalizing treatments for all skin types</li>
            <li>🌸 Stress-relieving and anti-aging benefits</li>
            <li>🌸 Organic & premium skincare products</li>
          </ul>
          <a
            href="/contact"
            className="mt-8 inline-block px-8 py-3 bg-pink-400 hover:bg-pink-500 text-gray-900 font-semibold rounded-lg shadow-lg transition-all"
          >
            Book Your Facial Today
          </a>
        </div>
      </div>
    </section>
  );
}

const facialServices = [
  {
    title: "Hydrating Glow Facial",
    description:
      "A moisture-rich treatment that deeply hydrates and leaves your skin soft and supple.",
  },
  {
    title: "Anti-Aging Collagen Facial",
    description:
      "Targets fine lines and promotes youthful skin with collagen-infused products.",
  },
  {
    title: "Acne Soothing Facial",
    description:
      "A purifying facial designed to reduce breakouts and calm irritated skin.",
  },
  {
    title: "Brightening Rose Facial",
    description:
      "Infused with rose extracts to enhance your skin’s radiance and even out tone.",
  },
  {
    title: "Luxury Pink Clay Facial",
    description:
      "Detoxifies and brightens using high-quality pink clay and essential minerals.",
  },
  {
    title: "Relaxing Aromatherapy Facial",
    description:
      "A calming treatment with essential oils to rejuvenate your skin and senses.",
  },
];
