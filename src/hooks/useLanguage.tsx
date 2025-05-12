
import React, { createContext, useContext, useState } from "react";

type Language = "en" | "sl";

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.process": "Process",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact Us",
    
    // Hero Section
    "hero.title": "Transforming Local Businesses With Modern Tech Solutions",
    "hero.description": "We create beautiful websites, optimize performance, provide IT support, develop Python applications, and build data models for businesses that want to grow.",
    "hero.cta.start": "Get Started",
    "hero.cta.services": "Our Services",
    
    // Services Section
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive digital solutions tailored for your business needs",
    "services.web.title": "Web Development",
    "services.web.description": "Custom, responsive websites designed to impress your visitors and convert them into customers.",
    "services.optimization.title": "Performance Optimization",
    "services.optimization.description": "Speed up your existing website for better user experience and improved search engine rankings.",
    "services.it.title": "IT Support",
    "services.it.description": "Professional IT help to keep your business running smoothly and securely.",
    "services.python.title": "Python Development",
    "services.python.description": "Custom applications to automate and streamline your business processes.",
    "services.data.title": "Data Analysis",
    "services.data.description": "Transform your raw data into actionable insights to make informed business decisions.",
    "services.model.title": "Model Building",
    "services.model.description": "Advanced predictive models to forecast trends and optimize your business strategy.",
    
    // About Section
    "about.title": "About",
    "about.description": "NUVO is a forward-thinking digital agency focused on helping local businesses succeed in the digital landscape. Our team combines technical expertise with creative solutions to deliver exceptional results for our clients.",
    "about.description2": "We believe that every business, regardless of size, deserves access to cutting-edge technology and professional services that can help them grow and thrive in today's competitive market.",
    "about.mission.title": "Our Mission",
    "about.mission.description": "To empower local businesses with technology solutions that drive growth and success.",
    "about.vision.title": "Our Vision",
    "about.vision.description": "To be the trusted technology partner for local businesses nationwide.",
    
    // Process Section
    "process.title": "Our Process",
    "process.description": "We follow a structured approach to ensure your project is delivered efficiently and exceeds expectations.",
    "process.step1.title": "Discovery",
    "process.step1.description": "We start by understanding your business, goals, and challenges through a detailed consultation.",
    "process.step2.title": "Strategy",
    "process.step2.description": "Our team develops a tailored strategy and solution roadmap aligned with your business objectives.",
    "process.step3.title": "Design & Development",
    "process.step3.description": "We create and build your solution with attention to detail, ensuring quality and performance.",
    "process.step4.title": "Testing",
    "process.step4.description": "Rigorous testing ensures your solution works flawlessly across all platforms and devices.",
    "process.step5.title": "Launch",
    "process.step5.description": "We carefully deploy your solution and provide support during the critical launch phase.",
    "process.step6.title": "Optimization",
    "process.step6.description": "Continuous improvement and optimization keep your solution performing at its best.",
    
    // Portfolio Section
    "portfolio.title": "Our Portfolio",
    "portfolio.subtitle": "Check out some of our recent projects",
    
    // Contact Section
    "contact.title": "Contact Us",
    "contact.subtitle": "Get in touch with us to discuss your project",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",
    
    // Footer
    "footer.rights": "All rights reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  sl: {
    // Navigation
    "nav.home": "Domov",
    "nav.services": "Storitve",
    "nav.about": "O nas",
    "nav.process": "Proces",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontakt",
    
    // Hero Section
    "hero.title": "Preoblikujemo lokalna podjetja z modernimi tehnološkimi rešitvami",
    "hero.description": "Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti.",
    "hero.cta.start": "Začnite zdaj",
    "hero.cta.services": "Naše storitve",
    
    // Services Section
    "services.title": "Naše storitve",
    "services.subtitle": "Celovite digitalne rešitve, prilagojene vašim poslovnim potrebam",
    "services.web.title": "Razvoj spletnih strani",
    "services.web.description": "Prilagojene, odzivne spletne strani, zasnovane za navdušenje vaših obiskovalcev in njihovo pretvorbo v stranke.",
    "services.optimization.title": "Optimizacija zmogljivosti",
    "services.optimization.description": "Pospešite svojo obstoječo spletno stran za boljšo uporabniško izkušnjo in izboljšane uvrstitve na iskalnikih.",
    "services.it.title": "IT podpora",
    "services.it.description": "Profesionalna IT pomoč za nemoteno in varno poslovanje vašega podjetja.",
    "services.python.title": "Python razvoj",
    "services.python.description": "Prilagojene aplikacije za avtomatizacijo in racionalizacijo vaših poslovnih procesov.",
    "services.data.title": "Analiza podatkov",
    "services.data.description": "Pretvorite svoje surove podatke v uporabne vpoglede za sprejemanje informiranih poslovnih odločitev.",
    "services.model.title": "Gradnja modelov",
    "services.model.description": "Napredni napovedovalni modeli za napovedovanje trendov in optimizacijo vaše poslovne strategije.",
    
    // About Section
    "about.title": "O nas",
    "about.description": "NUVO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke.",
    "about.description2": "Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu.",
    "about.mission.title": "Naše poslanstvo",
    "about.mission.description": "Opolnomočiti lokalna podjetja s tehnološkimi rešitvami, ki spodbujajo rast in uspeh.",
    "about.vision.title": "Naša vizija",
    "about.vision.description": "Biti zaupanja vreden tehnološki partner za lokalna podjetja po vsej državi.",
    
    // Process Section
    "process.title": "Naš proces",
    "process.description": "Sledimo strukturiranemu pristopu, da zagotovimo učinkovito izvedbo vašega projekta in presežemo pričakovanja.",
    "process.step1.title": "Odkritje",
    "process.step1.description": "Začnemo z razumevanjem vašega podjetja, ciljev in izzivov s podrobnim posvetovanjem.",
    "process.step2.title": "Strategija",
    "process.step2.description": "Naša ekipa razvije prilagojeno strategijo in načrt rešitve v skladu z vašimi poslovnimi cilji.",
    "process.step3.title": "Oblikovanje & Razvoj",
    "process.step3.description": "Ustvarjamo in gradimo vašo rešitev s pozornostjo na podrobnosti, zagotavljamo kakovost in učinkovitost.",
    "process.step4.title": "Testiranje",
    "process.step4.description": "Temeljito testiranje zagotavlja, da vaša rešitev deluje brezhibno na vseh platformah in napravah.",
    "process.step5.title": "Zagon",
    "process.step5.description": "Skrbno uvedemo vašo rešitev in zagotavljamo podporo v kritični fazi zagona.",
    "process.step6.title": "Optimizacija",
    "process.step6.description": "Nenehno izboljševanje in optimizacija omogočata, da vaša rešitev deluje kar najbolje.",
    
    // Portfolio Section
    "portfolio.title": "Naš portfolio",
    "portfolio.subtitle": "Oglejte si nekatere naše nedavne projekte",
    
    // Contact Section
    "contact.title": "Kontaktirajte nas",
    "contact.subtitle": "Povežite se z nami za pogovor o vašem projektu",
    "contact.name": "Ime",
    "contact.email": "E-pošta",
    "contact.message": "Sporočilo",
    "contact.send": "Pošlji sporočilo",
    
    // Footer
    "footer.rights": "Vse pravice pridržane",
    "footer.privacy": "Pravilnik o zasebnosti",
    "footer.terms": "Pogoji uporabe",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
