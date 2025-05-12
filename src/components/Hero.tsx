import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

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
      className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-nuvo-light dark:from-nuvo-dark-bg dark:to-nuvo-dark-accent overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-nuvo-dark dark:text-white leading-tight mb-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards] transform translate-y-8"
            >
              {"Preoblikujemo lokalna podjetja z modernimi tehnološkimi rešitvami".split(" ").map((word, i) => (
                <span key={i} className={word.includes("Modern") ? "text-nuvo-purple" : ""}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p 
              className="text-nuvo-gray dark:text-gray-300 text-lg md:text-xl mb-8 max-w-xl opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards] transform translate-y-8"
            >
              Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti.
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards] transform translate-y-8"
            >
              <Button 
                asChild
                className="bg-nuvo-purple hover:bg-nuvo-purple/90 text-white px-8 py-6 text-base transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                <a href="#kontakt" onClick={handleGetStartedClick}>
                  Začnite zdaj
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-nuvo-purple text-nuvo-purple hover:bg-nuvo-purple/5 dark:border-nuvo-purple dark:text-nuvo-purple dark:hover:bg-nuvo-purple/10 px-8 py-6 text-base transition-all duration-300 hover:shadow-lg"
                size="lg"
              >
                <a href="#storitve">
                  Naše storitve
                </a>
              </Button>
            </div>
          </div>
          <div 
            className="md:w-1/2 flex justify-center md:justify-end opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards] transform translate-x-8"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-nuvo-purple/10 dark:bg-nuvo-purple/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nuvo-blue/10 dark:bg-nuvo-blue/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-nuvo-purple/20 to-nuvo-blue/20 rounded-full blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1584187167940-d1efac179cb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Creative digital agency"
                className="w-full max-w-md rounded-lg shadow-xl relative z-10 hover:shadow-2xl transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
