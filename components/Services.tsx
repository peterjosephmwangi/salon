import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Hair Styling",
      description:
        "Get a fresh new look with our expert hair styling and cutting services.",
      icon: "💇‍♀️",
      link: "/services/hairstyling",
    },
    {
      title: "Facials & Skincare",
      description:
        "Rejuvenate your skin with our relaxing and professional facial treatments.",
      icon: "🧖‍♀️",
      link: "/services/facials",
    },
    {
      title: "Manicure & Pedicure",
      description:
        "Pamper yourself with our luxurious manicure and pedicure services.",
      icon: "💅",
      link: "/services/nails",
    },
    {
      title: "Hair Coloring",
      description:
        "Transform your look with vibrant and professional hair coloring.",
      icon: "🎨",
      link: "/services/haircoloring",
    },
    {
      title: "Makeup Services",
      description:
        "Enhance your beauty for any occasion with our professional makeup services.",
      icon: "💄",
      link: "/services/makeup",
    },
    {
      title: "Massage Therapy",
      description:
        "Relax and unwind with our soothing and therapeutic massage treatments.",
      icon: "💆‍♀️",
      link: "/services/massage",
    },
    {
      title: "Eyebrow & Eyelash Services",
      description:
        "Define your look with our expert eyebrow shaping and eyelash extensions.",
      icon: "👁️",
      link: "/services/eyebrows",
    },
    {
      title: "Waxing & Hair Removal",
      description:
        "Achieve smooth and flawless skin with our professional waxing services.",
      icon: "🪒",
      link: "/services/waxing",
    },
    {
      title: "Bridal & Special Occasion Services",
      description:
        "Look stunning on your big day with our customized bridal and event styling.",
      icon: "👰",
      link: "/services/bridal",
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Explore our premium salon services designed to make you look and feel your best.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:cursor-pointer transition h-64 w-full">
                <div className="text-5xl mb-2">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
