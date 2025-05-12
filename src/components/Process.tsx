
import { useLanguage } from "@/hooks/useLanguage";

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      number: "02",
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      number: "03",
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      number: "04",
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
    {
      number: "05",
      title: t("process.step5.title"),
      description: t("process.step5.description"),
    },
    {
      number: "06",
      title: t("process.step6.title"),
      description: t("process.step6.description"),
    },
  ];

  return (
    <section id="process" className="section-padding bg-white dark:bg-nuvo-dark-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark dark:text-white mb-4">
            {t("process.title").split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-nuvo-purple" : ""}>
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="text-nuvo-gray dark:text-gray-300">
            {t("process.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 border border-gray-100 dark:border-gray-800 rounded-lg bg-white dark:bg-nuvo-dark-card shadow-sm card-hover opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-nuvo-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-nuvo-dark dark:text-white mt-4 mb-3">{step.title}</h3>
              <p className="text-nuvo-gray dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
