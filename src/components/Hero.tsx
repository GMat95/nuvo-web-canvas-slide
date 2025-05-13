
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import Logo from "./Logo";

const Hero = () => {
  const { t } = useLanguage();

  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="domov" 
      className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Logo animated />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {t("Preoblikujemo lokalna podjetja z modernimi tehnološkimi rešitvami")}
            </motion.h1>
            
            <motion.p 
              className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {t("Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti.")}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Button 
                asChild
                className="bg-black hover:bg-black/80 text-white px-8 py-6 text-base transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                <a href="#kontakt" onClick={handleGetStartedClick}>
                  {t("Začnite zdaj")}
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-black text-black hover:bg-black/5 px-8 py-6 text-base transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                <a href="#storitve">
                  {t("Naše storitve")}
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            <motion.div 
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <motion.div 
                className="absolute -left-6 -bottom-6 w-full h-full border-2 border-black"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
              ></motion.div>
              <img
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1974&auto=format&fit=crop"
                alt="Minimalist architecture"
                className="w-full max-w-md relative z-10 hover:shadow-2xl transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full z-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 800 800">
          <g>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.rect
                key={i}
                x={Math.random() * 800}
                y={Math.random() * 800}
                width={Math.random() * 80 + 10}
                height={Math.random() * 80 + 10}
                fill="#000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ 
                  delay: Math.random() * 2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
            ))}
          </g>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
