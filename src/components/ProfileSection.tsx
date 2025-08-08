"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUp } from "lucide-react";

const ProfileSection = () => {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation();

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <section
      id="profile"
      className="relative bg-gradient-to-br from-black via-slate-900 to-blue-950 text-white py-20 px-6 md:px-24 overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-white">
          {t("profileTitle") || "Trend Setterzs"}
        </h2>

        <p className="text-lg text-white/90 mb-6">
          {t("profileIntro") ||
            "Trend Setterzs is a dedicated manufacturer and exporter of high-quality woven garments. Established to serve key international markets such as the USA and the European Union, we operate from Karachi, Pakistan — a major industrial and port city that offers strategic advantages in production and logistics. With a strong emphasis on craftsmanship, consistency, and professionalism, we strive to deliver apparel products that meet international standards in both quality and design."}
        </p>

        <AnimatePresence>
          {showMore && (
            <motion.div
              className="space-y-6 text-white/90"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                {t("profileDetail1") ||
                  "To become a leading manufacturer and exporter of textile products, guided by our core values of quality, reliability, and ethical business practices."}
              </p>

              <div>
                <h3 className="text-xl font-semibold text-white">Mission & Vision</h3>
                <ul className="list-disc list-inside text-white/80 space-y-2">
                  <li>
                    <strong>{t("mission")}:</strong>{" "}
                    {t("missionText") ||
                      "Deliver quality garments with reliability and professionalism."}
                  </li>
                  <li>
                    <strong>{t("vision")}:</strong>{" "}
                    {t("visionText") ||
                      "To Conceive: Grow in partnership with our clients by understanding and fulfilling their diverse needs. To Create: Maintain quality as the essence of every product — delivering value beyond style. To Achieve: Build long-term client relationships through trust, transparency, and consistent performance."}
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Product Range</h3>
                <p className="mb-2 text-white/80">
                  We specialize in manufacturing denim and non-denim woven garments for men,
                  women, and children, including:
                </p>
                <ul className="list-decimal list-inside text-white/80 space-y-1 pl-4">
                  <li>Jeans</li>
                  <li>Shorts</li>
                  <li>Capris</li>
                  <li>Jogger Pants</li>
                  <li>Jackets</li>
                  <li>Cargo Bottoms</li>
                </ul>
                <p className="mt-2 text-white/80">
                  In addition, we are fully capable of handling inquiries for knitted garments
                  based on specific customer requirements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Strengths</h3>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Skilled workforce & management</li>
                  <li>Competitive pricing with high quality</li>
                  <li>Quick turnaround, on-time delivery</li>
                  <li>Strong garment finishing network</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Production Capacity</h3>
                <p className="mb-2 text-white/80">
                  We own and operate a fully equipped production unit with the following monthly
                  capacity:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>30,000 pieces of non-denim cargo pants and jackets</li>
                  <li>20,000 pieces of basin 5-pocket trousers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Clients</h3>
                <p className="mb-2 text-white/80">We are proud to have worked with notable names:</p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Alpha Industries</li>
                  <li>Beni Sports</li>
                  <li>Stylo</li>
                  <li>JRC</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                <p className="text-white/80 leading-relaxed">
                  Mr. Khurram Salim Jamal / Mr. Nabeel Khan <br />
                  B-1, Suleman Lodge, Block 13-B, Gulshan-e-Iqbal, Karachi <br />
                  Plot #25, Sector 12-D, North Karachi Industrial Area <br />
                  +92-333-2288733 / +92-345-2612998 <br />
                  <a
                    href="mailto:khurram@trendsetterzs.com"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    khurram@trendsetterzs.com
                  </a>{" "}
                  |{" "}
                  <a
                    href="mailto:nabeel@trendsetterzs.com"
                    className="text-blue-400 underline hover:text-blue-300"
                  >
                    nabeel@trendsetterzs.com
                  </a>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleShowMore}
          className="mt-6 flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          {showMore ? t("showLess") || "Show Less" : t("showMore") || "Show More"}
          {showMore ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
        </button>
      </motion.div>
    </section>
  );
};

export default ProfileSection;
