import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="o-nas" className="section-padding bg-nuvo-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1583347106880-cdb0674fae62?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Black and white forest"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-6">
              {"O nas"} <span className="text-nuvo-purple">NUVO</span>
            </h2>
            
            <p className="text-nuvo-gray mb-6">
              NUVO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke.
            </p>
            
            <p className="text-nuvo-gray mb-6">
              Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="animate-[fade-in_0.5s_ease-out]">
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">Naše poslanstvo</h3>
                <p className="text-nuvo-gray">
                  Opolnomočiti lokalna podjetja s tehnološkimi rešitvami, ki spodbujajo rast in uspeh.
                </p>
              </div>
              
              <div className="animate-[fade-in_0.5s_ease-out_0.3s_forwards] opacity-0">
                <h3 className="text-xl font-semibold text-nuvo-dark mb-2">Naša vizija</h3>
                <p className="text-nuvo-gray">
                  Biti zaupanja vreden tehnološki partner za lokalna podjetja po vsej državi.
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
