export default function HairstylingServices() {
  return (
    <section className="bg-pink-50 text-gray-900 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Exquisite Hairstyling for Every Occasion</h1>
          <p className="text-lg text-gray-700">
            Whether you need a sleek updo for an event or effortless waves for a casual look, our stylists are here to create magic.
          </p>
        </div>

        {/* Service Highlights */}
        <div className="mt-16 space-y-16">
          {hairstylingServices.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl shadow-lg w-full object-cover h-80"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-gray-900">Ready for a Glamorous New Look?</h3>
          <p className="text-lg text-gray-700 mt-3">
            Let our experts craft the perfect style tailored to you. Book your appointment today!
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-all"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

const hairstylingServices = [
  {
    title: "Elegant Updos",
    description:
      "Perfect for weddings, galas, and special occasions, our updos are both sophisticated and stunning.",
    image: "/images/image1.jpg",
  },
  {
    title: "Hollywood Waves",
    description:
      "Soft, glamorous waves that add volume and elegance to any look. Ideal for both casual and formal styles.",
    image: "/images/image2.jpg",
  },
  {
    title: "Sleek & Straight",
    description:
      "A polished, frizz-free style that exudes confidence and professionalism.",
    image: "/images/image3.jpg",
  },
  {
    title: "Textured & Tousled",
    description:
      "Effortlessly chic, this style adds movement and dimension for a modern, carefree look.",
    image: "/images/image4.jpg",
  },
];
