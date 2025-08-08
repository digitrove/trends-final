"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Import your logos here (make sure these images are stored in /assets)
import AlphaLogo from  "/assets/Alpha-Industries-Logo.png";
import BeniSport from  "/assets/benisport-logo.png";
import jrc_logo from   "/assets/jrc-logo.png";
import JoyluLogo from  "/assets/1joylu-logo.png";
import MakitoLogo from "/assets/makito-logo.png";
import vecnalogo from  "/assets/vecna-logo.png"
import gringo from     "/assets/gringo-logo.png"
import larson from     "/assets/ole-larson.png"

const ClientsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const clients = [
    { name: "Alpha Industries", logo: AlphaLogo },
    { name: "BeniSport", logo: BeniSport },
    { name: "jrc logo", logo: jrc_logo },
    { name: "JoyluLogo", logo: JoyluLogo },
    { name: "Makito", logo: MakitoLogo },
    { name: "Vecna", logo: vecnalogo },
    { name: "olelarson", logo: larson },
    { name: "Gringo", logo: gringo },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clients.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, [clients.length]);

  return (
    <section id="clients" className="section-padding bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            {t("ourClients")}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t("clientsTitle").split("Global Brands")[0]}{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Global Brands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("clientsDescription")}
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="aspect-square bg-white rounded-lg shadow-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center group hover-lift p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-6">
            {clients.slice(currentSlide * 4, (currentSlide + 1) * 4).map((client, index) => (
              <motion.div
                key={index}
                className="aspect-square bg-white rounded-lg shadow-soft flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain w-full h-full"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(clients.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
