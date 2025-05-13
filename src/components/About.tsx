
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const About = () => {
  const { language, t } = useLanguage();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section id="o-nas" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              className="relative"
            >
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black"></div>
              <img
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt={language === 'sl' ? "Minimalistična arhitektura" : "Minimalist architecture"}
                className="w-full rounded-none shadow-xl relative z-10"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2"
          >
            <motion.h2 
              custom={0}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-black mb-6"
            >
              {t("O nas")} <span className="font-light">EDGE</span>
            </motion.h2>
            
            <motion.p 
              custom={1}
              variants={fadeInUp}
              className="text-gray-700 mb-6"
            >
              {t("NUVO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke.")}
            </motion.p>
            
            <motion.p 
              custom={2}
              variants={fadeInUp}
              className="text-gray-700 mb-6"
            >
              {t("Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu.")}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                custom={3}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-black mb-2">{t("Naše poslanstvo")}</h3>
                <p className="text-gray-700">
                  {t("Opolnomočiti lokalna podjetja s tehnološkimi rešitvami, ki spodbujajo rast in uspeh.")}
                </p>
              </motion.div>
              
              <motion.div 
                custom={4}
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-black mb-2">{t("Naša vizija")}</h3>
                <p className="text-gray-700">
                  {t("Biti zaupanja vreden tehnološki partner za lokalna podjetja po vsej državi.")}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
