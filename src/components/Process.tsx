
import { useLanguage } from "@/hooks/useLanguage";

const Process = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: "Odkritje",
      description: "Začnemo z razumevanjem vašega podjetja, ciljev in izzivov s podrobnim posvetovanjem.",
    },
    {
      number: "02",
      title: "Strategija",
      description: "Naša ekipa razvije prilagojeno strategijo in načrt rešitve v skladu z vašimi poslovnimi cilji.",
    },
    {
      number: "03",
      title: "Oblikovanje & Razvoj",
      description: "Ustvarjamo in gradimo vašo rešitev s pozornostjo na podrobnosti, zagotavljamo kakovost in učinkovitost.",
    },
    {
      number: "04",
      title: "Testiranje",
      description: "Temeljito testiranje zagotavlja, da vaša rešitev deluje brezhibno na vseh platformah in napravah.",
    },
    {
      number: "05",
      title: "Zagon",
      description: "Skrbno uvedemo vašo rešitev in zagotavljamo podporo v kritični fazi zagona.",
    },
    {
      number: "06",
      title: "Optimizacija",
      description: "Nenehno izboljševanje in optimizacija omogočata, da vaša rešitev deluje kar najbolje.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-4">
            {"Naš proces".split(" ").map((word, i) => (
              <span key={i} className={i === 1 ? "text-nuvo-purple" : ""}>
                {word}{" "}
              </span>
            ))}
          </h2>
          <p className="text-nuvo-gray">
            Sledimo strukturiranemu pristopu, da zagotovimo učinkovito izvedbo vašega projekta in presežemo pričakovanja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative p-6 border border-gray-100 rounded-lg bg-white shadow-sm card-hover opacity-0 animate-[fade-in_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-nuvo-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-nuvo-dark mt-4 mb-3">{step.title}</h3>
              <p className="text-nuvo-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
