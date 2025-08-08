"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Palette, Cog, HeadphonesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "research",
      title: t("researchDevelopment"),
      icon: Search,
      subtitle: t("researchDevelopmentSubtitle"),
      description: t("researchDevelopmentDesc"),
      development: t("researchDevelopmentTech"),
    },
    {
      id: "design", 
      title: t("design"),
      icon: Palette,
      subtitle: t("designSubtitle"),
      description: t("designDesc"),
    },
    {
      id: "production",
      title: t("production"),
      icon: Cog,
      subtitle: t("productionSubtitle"),
      sourcing: t("productionSourcing"),
      production: t("productionControl"),
      quality: t("productionQuality"),
    },
    {
      id: "operations",
      title: t("operationsSupport"),
      icon: HeadphonesIcon,
      subtitle: t("operationsSupportSubtitle"),
      description: t("operationsSupportDesc"),
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4">
            {t("servicesBadge")}
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            {t("servicesTitle").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t("servicesTitle").split(" ").slice(-1)[0]}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("servicesDescription")}
          </p>
        </motion.div>

        <Tabs defaultValue="research" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-2 mb-8">
              {services.map((service, index) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex flex-col items-center p-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <service.icon className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {services.map((service, index) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-effect shadow-elegant">
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl font-heading font-bold text-foreground">
                      {service.subtitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {service.description && (
                      <p className="text-lg leading-relaxed text-foreground">
                        {service.description}
                      </p>
                    )}
                    
                    {service.development && (
                      <div className="bg-muted/50 p-6 rounded-lg">
                        <h4 className="font-semibold text-foreground mb-2">DEVELOPMENT</h4>
                        <p className="text-foreground">{service.development}</p>
                      </div>
                    )}

                    {service.sourcing && (
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-primary/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-primary mb-2">{t("productionSubtitle").split(" ")[0]}</h4>
                          <p className="text-foreground">{service.sourcing}</p>
                        </div>
                        <div className="bg-accent/10 p-6 rounded-lg">
                          <h4 className="font-semibold text-accent mb-2">{t("productionSubtitle").split(" ").slice(2).join(" ")}</h4>
                          <p className="text-foreground">{service.production}</p>
                        </div>
                        <div className="bg-slate-600 p-6 rounded-lg">
                          <h4 className="font-semibold text-blue-400 mb-2">{t("qualityAssurance").split(" ")[0]}</h4>
                          <p className="text-white">{service.quality}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;