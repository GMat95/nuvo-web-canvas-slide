
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const Process = () => {
  const { language, t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t("Odkritje"),
      description: t("Začnemo z razumevanjem vašega podjetja, ciljev in izzivov s podrobnim posvetovanjem."),
    },
    {
      number: "02",
      title: t("Strategija"),
      description: t("Naša ekipa razvije prilagojeno strategijo in načrt rešitve v skladu z vašimi poslovnimi cilji."),
    },
    {
      number: "03",
      title: t("Oblikovanje & Razvoj"),
      description: t("Ustvarjamo in gradimo vašo rešitev s pozornostjo na podrobnosti, zagotavljamo kakovost in učinkovitost."),
    },
    {
      number: "04",
      title: t("Testiranje"),
      description: t("Temeljito testiranje zagotavlja, da vaša rešitev deluje brezhibno na vseh platformah in napravah."),
    },
    {
      number: "05",
      title: t("Zagon"),
      description: t("Skrbno uvedemo vašo rešitev in zagotavljamo podporo v kritični fazi zagona."),
    },
    {
      number: "06",
      title: t("Optimizacija"),
      description: t("Nenehno izboljševanje in optimizacija omogočata, da vaša rešitev deluje kar najbolje."),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t("Naš proces").split(" ")[0]}{" "}
            <span className="font-light">{t("Naš proces").split(" ")[1]}</span>
          </h2>
          <p className="text-gray-700">
            {t("Sledimo strukturiranemu pristopu, da zagotovimo učinkovito izvedbo vašega projekta in presežemo pričakovanja.")}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative p-6 border border-gray-200 bg-white hover:border-black transition-colors duration-300"
              variants={item}
            >
              <span className="absolute -top-4 -left-4 bg-black text-white w-12 h-12 flex items-center justify-center text-xl font-bold">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-black mt-4 mb-3">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
