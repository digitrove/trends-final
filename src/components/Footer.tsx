"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "/assets/logo.webp";

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-3 mb-6 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src={logo}
                alt="Trend Setterz Logo"
                className="w-28 h-auto object-contain"
                loading="eager"
              />
            </motion.button>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-md">
              {t("footerDescription")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-blue-500" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-900 mb-6">{t("quickLinks")}</h4>
            <ul className="space-y-3">
              {[
                { name: t("about"), href: "#about" },
                { name: t("services"), href: "#services" },
                { name: t("objectives"), href: "#objectives" },
                { name: t("clients"), href: "#clients" },
                { name: t("contact"), href: "#contact" },
                { name: t("Profile"), href: "#Profile" },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 mb-6">{t("contactInfo")}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500">{t("email")}</p>
                  <a
                    href="mailto:Nabeel@Trendsetterzs.com"
                    className="text-gray-800 hover:text-blue-500 transition-colors"
                  >
                    Nabeel@Trendsetterzs.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500">{t("callUs")}</p>
                  <a
                    href="tel:+923452612998"
                    className="text-gray-800 hover:text-blue-500 transition-colors"
                  >
                    +92-345-2612998
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-500">{t("address")}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("fullAddress").split(", ").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < t("fullAddress").split(", ").length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trend Setterzs. {t("allRightsReserved")}
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400 transition-colors"
          >
            {t("backToTop")}
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
