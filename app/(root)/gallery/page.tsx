import React from "react";
import Image from "next/image";

const images = [
  "/images/image3.jpg",
  "/images/image1.jpg",
  "/images/hair.jpeg",
  "/images/image2.jpg",
  "/images/image5.jpg",
  "/images/eyes.jpeg",
];

const Gallery = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900">Our Gallery</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore our elegant salon space and the amazing transformations we create every day.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
