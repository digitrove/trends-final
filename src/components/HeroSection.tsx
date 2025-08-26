"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import heroBg from  "/assets/hero-bg.webp";
import product1 from "/assets/1.svg";
import product2 from "/assets/2.svg";
import product3 from "/assets/3.svg";
import product4 from "/assets/4.svg";
import product5 from "/assets/5.svg";
// import product6 from "/assets/6.webp";
// import product7 from "/assets/7.png";
// // import product8 from "/assets/product-8.webp";
// import product9 from "/assets/product-9.webp";
// import product10 from "/assets/product-10.webp";
// import product11 from "/assets/product-11.webp";
// import product12 from "/assets/product-12.webp";
// import product13 from "/assets/product-13.webp";
// import product14 from "/assets/product-14.webp";
// import product15 from "/assets/product-15.webp";
// import product16 from "/assets/product-16.webp";
// import product17 from "/assets/product-17.webp";
// import product18 from "/assets/product-18.webp";
// import product19 from "/assets/product-19.webp";
// import product20 from "/assets/product-20.webp";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const products = [
    { id: 1, image: product1 },
    { id: 2, image: product2 },
    { id: 3, image: product3 },
    { id: 4, image: product4 },
    { id: 5, image: product5 },
    // { id: 6, image: product6 },
    // { id: 7, image: product7 },
    // { id: 8, image: product8 },
    // { id: 9, image: product9 },
    // { id: 10, image: product10 },
    // { id: 11, image: product11 },
    // { id: 12, image: product12 },
    // { id: 13, image: product13 },
    // { id: 14, image: product14 },
    // { id: 15, image: product15 },
    // { id: 16, image: product16 },
    // { id: 17, image: product17 },
    // { id: 18, image: product18 },
    // { id: 19, image: product19 },
    // { id: 20, image: product20 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(30,64,175,0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          className="text-white space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl lg:text-6xl font-semibold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("heroTitle").split(" ").slice(0, 2).join(" ")}{" "}
            <span className="bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              {t("heroTitle").split(" ").slice(2, 4).join(" ")}
            </span>{" "}
            {t("heroTitle").split(" ").slice(4).join(" ")}
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("heroSubtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => scrollToSection("#about")}
            >
              {t("learnMore")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border-white text-white hover:bg-white hover:text-black"
              onClick={() => scrollToSection("#contact")}
            >
              {t("contactUs")}
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-8 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <StatBlock number="14+" label={t("yearsExperience")} />
            <StatBlock number="50+" label={t("globalPartners")} />
            <StatBlock number="1000+" label={t("productsDelivered")} />
          </motion.div>
        </motion.div>

        {/* Right - Product Carousel */}
{/* Right - Product Carousel */}
<motion.div
  className="relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
>
  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
    {products.map((product, index) =>
      index === currentSlide ? (
        <motion.div
          key={product.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={product.image}
            alt={`Product ${product.id}`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      ) : null
    )}

    {/* Arrows */}
    <button
      onClick={() =>
        setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
      }
      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 text-white"
      aria-label="Previous slide"
    >
      <ChevronLeft className="h-5 w-5" />
    </button>
    <button
      onClick={() => setCurrentSlide((prev) => (prev + 1) % products.length)}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 text-white"
      aria-label="Next slide"
    >
      <ChevronRight className="h-5 w-5" />
    </button>

    {/* Dots */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      {products.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 rounded-full ${
            index === currentSlide ? "bg-white" : "bg-white/50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* View Gallery Button
    <div className="absolute bottom-4 right-4">
      <Button
        size="sm"
        variant="ghost"
        className="border-white text-white hover:bg-blue-400 hover:text-black"
        onClick={() => scrollToSection("#gallery")}
      >
        View Gallery <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div> */}
  </div>
</motion.div>

      </div>
    </section>
  );
};

const StatBlock = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-white">{number}</div>
    <div className="text-white/80">{label}</div>
  </div>
);

export default HeroSection;
