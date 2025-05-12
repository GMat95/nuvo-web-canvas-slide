
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-padding bg-nuvo-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-nuvo-purple rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                alt="NUVO team at work"
                className="w-full rounded-lg shadow-lg relative z-10 animate-[scale-up_1s_ease-out]"
              />
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-6">
              {t("about.title")} <span className="text-nuvo-purple">NUVO</span>
            </h2>
            
            <p className="text-nuvo-gray mb-6">
              {t("about.description")}
            </p>
            
            <p className="text-nuvo-gray mb-6">
              {t("about.description2")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="animate-[fade-in_0.5s_ease-out]">
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">{t("about.mission.title")}</h3>
                <p className="text-nuvo-gray">
                  {t("about.mission.description")}
                </p>
              </div>
              
              <div className="animate-[fade-in_0.5s_ease-out_0.3s_forwards] opacity-0">
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">{t("about.vision.title")}</h3>
                <p className="text-nuvo-gray">
                  {t("about.vision.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
