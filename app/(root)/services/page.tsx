"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Hair Styling",
    description: "Get a fresh new look with expert styling and precision cuts.",
    image: "/images/hair.jpeg",
    link: "/services/hairstyling",
  },
  {
    title: "Facials & Skincare",
    description: "Rejuvenate your skin with professional facial treatments.",
    image: "/images/facial.jpeg",
    link: "/services/facials",
  },
  {
    title: "Manicure & Pedicure",
    description: "Pamper yourself with luxurious nail care services.",
    image: "/images/manicure.jpeg",
    link: "/services/nails",
  },
  {
    title: "Hair Coloring",
    description: "Transform your look with vibrant and professional coloring.",
    image: "/images/haircolor.jpeg",
    link: "/services/haircoloring",
  },
  {
    title: "Makeup Services",
    description: "Enhance your beauty with expert makeup for any occasion.",
    image: "/images/makeup.jpeg",
    link: "/services/makeup",
  },
  {
    title: "Massage Therapy",
    description: "Relax and unwind with soothing therapeutic massages.",
    image: "/images/massage2.jpg",
    link: "/services/massage",
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Premium Services
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Indulge in our top-tier salon services, designed for relaxation, beauty, and confidence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <button
                  onClick={() => router.push(service.link)}
                  className="mt-4 px-5 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow-md transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push("/booking")}
            className="px-8 py-3 text-lg font-semibold bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
