"use client";
import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaStar, FaCamera } from "react-icons/fa";

type MakeupServiceType = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};


export default function MakeupServices() {
  const [selectedService, setSelectedService] = useState<MakeupServiceType | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-100 to-rose-300 text-gray-900 px-6 py-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
        Glamorous Makeup Services
      </h1>
      <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl">
        Unleash your beauty with our expert makeup services. From natural elegance to bold transformations, we have the perfect look for every occasion.
      </p>

      {/* Makeup Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {makeupServices.map((service, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-white p-8 cursor-pointer transition-all hover:scale-105 hover:shadow-2xl"
            onClick={() => setSelectedService(service)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center">
            <Image
                            src={service.image}
                            alt={service.title}
                            width={500}
                            height={300}
                            className="w-full h-56 object-cover"
                          />
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="text-gray-600 text-center mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup for Selected Service */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <motion.div
            className="bg-white rounded-xl p-8 max-w-lg text-center shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-24 h-24 mx-auto mb-4">{selectedService.icon}</div>
            <h2 className="text-3xl font-bold">{selectedService.title}</h2>
            <p className="text-lg text-gray-700 mt-3">{selectedService.description}</p>
            <button
              className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-700 transition-all"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}


const makeupServices: MakeupServiceType[] = [
  {
    title: "Bridal Makeup",
    description: "Timeless and flawless beauty for your big day. Let us enhance your natural glow with stunning bridal makeup.",
    image: "/images/bridal.webp",
    icon: <FaHeart className="text-rose-500 text-4xl" />,
  },
  {
    title: "Glam Night Out",
    description: "Dramatic eyes, bold lips, and a radiant finish. Stand out with our glamorous night-out makeup looks.",
    image: "/images/eyes.png",
    icon: <FaStar className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Editorial & Photoshoot",
    description: "High-fashion and camera-ready looks tailored for professional shoots and creative projects.",
    image: "/images/photo.jpeg",
    icon: <FaCamera className="text-blue-500 text-4xl" />,
  },
];
