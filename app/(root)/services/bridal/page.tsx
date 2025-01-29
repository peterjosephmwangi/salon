export default function BridalServices() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Bridal Services
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Look and feel your best on your special day with our expert bridal
          beauty services.
        </p>

        {/* Bridal Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bridalPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {pkg.title}
              </h3>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="text-pink-500 mr-2">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Choose <span className="text-pink-600">Saloonist?</span>
          </h2>
          <ul className="text-lg text-gray-700 space-y-4 text-left md:text-center">
            <li>✅ Experienced Bridal Specialists</li>
            <li>✅ Customized Packages Tailored to Your Needs</li>
            <li>✅ High-Quality, Long-Lasting Products</li>
            <li>✅ On-Location Services for a Hassle-Free Experience</li>
          </ul>
          <a
            href="/contact"
            className="mt-8 inline-block px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
          >
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

const bridalPackages = [
  {
    title: "Bridal Makeup & Hair Styling",
    features: [
      "Custom bridal makeup tailored to your skin tone",
      "Professional hairstyling (updos, curls, waves)",
      "Long-lasting, waterproof beauty products",
    ],
  },
  {
    title: "Pre-Wedding Beauty Treatments",
    features: [
      "Skincare and facials for a radiant complexion",
      "Eyebrow shaping and tinting",
      "Manicure & pedicure (gel or classic polish)",
    ],
  },
  {
    title: "Bridal Spa & Relaxation",
    features: [
      "Stress-relieving massages",
      "Body exfoliation for a natural glow",
      "Aromatherapy and deep hydration facials",
    ],
  },
  {
    title: "Bridal Party Glam",
    features: [
      "Bridesmaids’ makeup & hairstyling",
      "Mother-of-the-bride & groom beauty packages",
      "Groom’s grooming and skincare treatments",
    ],
  },
];
