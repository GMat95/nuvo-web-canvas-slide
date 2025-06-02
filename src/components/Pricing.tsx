
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Pricing = () => {
  const { t } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: t("STARTER"),
      price: isAnnual ? 40 : 50,
      description: t("Popolno za posameznike in majhne projekte"),
      features: [
        t("Do 10 projektov"),
        t("Osnovna analitika"),
        t("48-urni odzivni čas podpore"),
        t("Omejen dostop do API"),
        t("Skupnostna podpora")
      ],
      buttonText: t("Začni brezplačni preizkus"),
      buttonVariant: "outline" as const
    },
    {
      name: t("PROFESSIONAL"),
      price: isAnnual ? 79 : 99,
      description: t("Idealno za rastoče ekipe in podjetja"),
      features: [
        t("Neomejeni projekti"),
        t("Napredna analitika"),
        t("24-urni odzivni čas podpore"),
        t("Poln dostop do API"),
        t("Prednostna podpora"),
        t("Sodelovanje ekipe"),
        t("Integracije po meri")
      ],
      buttonText: t("Začni"),
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: t("ENTERPRISE"),
      price: isAnnual ? 239 : 299,
      description: t("Za velike organizacije s specifičnimi potrebami"),
      features: [
        t("Vse v Professional"),
        t("Rešitve po meri"),
        t("Namenski upravitelj računa"),
        t("1-urni odzivni čas podpore"),
        t("SSO avtentikacija"),
        t("Napredna varnost"),
        t("Pogodbe po meri"),
        t("SLA sporazum")
      ],
      buttonText: t("Kontaktiraj prodajo"),
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="cene" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {t("Preprosto, Transparentno Cenovanje")}
          </motion.h2>
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            {t("Izberite načrt, ki vam ustreza. Vsi načrti vključujejo dostop do naše platforme, orodij za generiranje potencialnih strank in namenske podpore.")}
          </motion.p>
          
          <motion.div 
            className="flex items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <span className={`mr-3 ${!isAnnual ? 'text-black' : 'text-gray-500'}`}>Mesečno</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'text-black' : 'text-gray-500'}`}>
              {t("Letno račun (Privarčuj 20%)")}
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white border border-gray-200 p-8 flex flex-col ${
                plan.popular ? 'border-black' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white text-xs font-medium py-1 px-3">
                    ★ {t("Priljubljeno")}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-black">{plan.price} €</span>
                  <span className="text-gray-500 ml-2">/ {t("na mesec")}</span>
                </div>
                <p className="text-sm text-gray-500">{t("Račun letno")}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Button 
                  variant={plan.buttonVariant}
                  className={`w-full mb-4 ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-black hover:bg-gray-800 text-white' 
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {plan.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
