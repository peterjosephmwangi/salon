export default function Pricing() {
  const plans = [
    {
      title: "Basic Package",
      price: "$49",
      features: [
        "Haircut",
        "Shampoo & Conditioning",
        "Basic Styling",
      ],
      buttonText: "Choose Package",
      buttonLink: "#",
    },
    {
      title: "Standard Package",
      price: "$99",
      features: [
        "Haircut",
        "Shampoo & Conditioning",
        "Advanced Styling",
        "Hair Color Touch-Up",
        "Scalp Treatment",
      ],
      buttonText: "Choose Package",
      buttonLink: "#",
      isPopular: true,
    },
    {
      title: "Premium Package",
      price: "$149",
      features: [
        "Haircut",
        "Shampoo & Conditioning",
        "Advanced Styling",
        "Full Hair Color",
        "Deep Conditioning Treatment",
        "Scalp Massage",
      ],
      buttonText: "Choose Package",
      buttonLink: "#",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Salon Packages
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Choose the package that best suits your beauty needs and budget.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-pink-600 text-white text-xs uppercase px-2 py-1 rounded-bl-lg">
                  Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">
                {plan.price}
              </p>
              <ul className="mb-6 space-y-2 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* Flexbox for aligning buttons at the bottom */}
              <div className="mt-auto flex justify-center gap-4">
                <a
                  href={plan.buttonLink}
                  className="block text-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-lg transition"
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
