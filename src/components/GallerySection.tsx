"use client";
import { useState } from "react";

const images = [
  "/assets/product-1.png",
  "/assets/product-2.png",
  "/assets/product-3.png",
  "/assets/product-4.png",
  "/assets/product-5.png",
  "/assets/product-6.png",
  "/assets/product-7.png",
  "/assets/product-8.png",
  "/assets/product-9.png",
  "/assets/product-10.png",
  "/assets/product-11.png",
  "/assets/product-12.png",
  "/assets/product-13.png",
  "/assets/product-14.png",
  "/assets/product-15.png",
  "/assets/product-16.png",
  "/assets/product-17.png",
  "/assets/product-18.png",
  "/assets/product-19.png",
  "/assets/product-20.png",
];

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <section id="gallery" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Product Gallery
        </h2>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 transition-all duration-500"
        >
          {visibleImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md bg-gray-900 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
