
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "sl";

interface Translations {
  [key: string]: {
    en: string;
    sl: string;
  };
}

// Translations dictionary
const translations: Translations = {
  "Domov": { en: "Home", sl: "Domov" },
  "Storitve": { en: "Services", sl: "Storitve" },
  "O nas": { en: "About", sl: "O nas" },
  "Projekti": { en: "Projects", sl: "Projekti" },
  "Kontakt": { en: "Contact", sl: "Kontakt" },
  "Naše poslanstvo": { en: "Our Mission", sl: "Naše poslanstvo" },
  "Naša vizija": { en: "Our Vision", sl: "Naša vizija" },
  "Opolnomočiti lokalna podjetja s tehnološkimi rešitvami, ki spodbujajo rast in uspeh.": { 
    en: "Empowering local businesses with technological solutions that foster growth and success.", 
    sl: "Opolnomočiti lokalna podjetja s tehnološkimi rešitvami, ki spodbujajo rast in uspeh." 
  },
  "Biti zaupanja vreden tehnološki partner za lokalna podjetja po vsej državi.": { 
    en: "To be a trusted technology partner for local businesses across the country.", 
    sl: "Biti zaupanja vreden tehnološki partner za lokalna podjetja po vsej državi." 
  },
  "NUVO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke.": {
    en: "EDGE is a forward-thinking digital agency focused on helping local businesses succeed in the digital landscape. Our team combines technical expertise with creative solutions to deliver exceptional results for our clients.",
    sl: "EDGE je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke."
  },
  "Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu.": {
    en: "We believe that every business, regardless of size, deserves access to cutting-edge technology and professional services that can help them grow and thrive in today's competitive market.",
    sl: "Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu."
  },
  "Preoblikujemo lokalna podjetja z modernimi tehnološkimi rešitvami": {
    en: "Transforming local businesses with modern technology solutions",
    sl: "Preoblikujemo lokalna podjetja z modernimi tehnološkimi rešitvami"
  },
  "Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti.": {
    en: "We create beautiful websites, optimize performance, provide IT support, develop Python applications, and build data models for businesses looking to grow.",
    sl: "Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti."
  },
  "Začnite zdaj": { en: "Get Started", sl: "Začnite zdaj" },
  "Naše storitve": { en: "Our Services", sl: "Naše storitve" },
  "O nas": { en: "About Us", sl: "O nas" },
  "Website Development": { en: "Website Development", sl: "Razvoj spletnih strani" },
  "Custom, mobile-responsive websites designed to attract and convert visitors into customers.": {
    en: "Custom, mobile-responsive websites designed to attract and convert visitors into customers.",
    sl: "Po meri izdelane, mobilno odzivne spletne strani, zasnovane za privabljanje in pretvorbo obiskovalcev v stranke."
  },
  "Performance Optimization": { en: "Performance Optimization", sl: "Optimizacija zmogljivosti" },
  "Speed up your website and improve user experience to boost conversions and search rankings.": {
    en: "Speed up your website and improve user experience to boost conversions and search rankings.",
    sl: "Pospešite svojo spletno stran in izboljšajte uporabniško izkušnjo za povečanje konverzij in uvrstitev v iskalnikih."
  },
  "IT Support & Solutions": { en: "IT Support & Solutions", sl: "IT podpora in rešitve" },
  "Technical support for your business needs, including network setup, security, and maintenance.": {
    en: "Technical support for your business needs, including network setup, security, and maintenance.",
    sl: "Tehnična podpora za potrebe vašega podjetja, vključno z namestitvijo omrežja, varnostjo in vzdrževanjem."
  },
  "Python Development": { en: "Python Development", sl: "Python razvoj" },
  "Custom Python applications to automate processes and build advanced functionality for your business.": {
    en: "Custom Python applications to automate processes and build advanced functionality for your business.",
    sl: "Po meri izdelane Python aplikacije za avtomatizacijo procesov in gradnjo naprednih funkcionalnosti za vaše podjetje."
  },
  "Data Analysis": { en: "Data Analysis", sl: "Podatkovna analiza" },
  "Turn your data into actionable insights with advanced analytics and visualization tools.": {
    en: "Turn your data into actionable insights with advanced analytics and visualization tools.",
    sl: "Spremenite svoje podatke v uporabne vpoglede z naprednimi analitičnimi in vizualizacijskimi orodji."
  },
  "Model Building": { en: "Model Building", sl: "Izgradnja modelov" },
  "Custom machine learning models to predict trends and make data-driven decisions for your business.": {
    en: "Custom machine learning models to predict trends and make data-driven decisions for your business.",
    sl: "Po meri izdelani modeli strojnega učenja za napovedovanje trendov in sprejemanje odločitev na podlagi podatkov za vaše podjetje."
  },
  "Our Services": { en: "Our Services", sl: "Naše storitve" },
  "We offer a comprehensive range of digital services to help local businesses thrive in the digital world.": {
    en: "We offer a comprehensive range of digital services to help local businesses thrive in the digital world.",
    sl: "Ponujamo celovit nabor digitalnih storitev za pomoč lokalnim podjetjem pri uspešnem delovanju v digitalnem svetu."
  },
  "Odkritje": { en: "Discovery", sl: "Odkritje" },
  "Začnemo z razumevanjem vašega podjetja, ciljev in izzivov s podrobnim posvetovanjem.": {
    en: "We start by understanding your business, goals, and challenges through a detailed consultation.",
    sl: "Začnemo z razumevanjem vašega podjetja, ciljev in izzivov s podrobnim posvetovanjem."
  },
  "Strategija": { en: "Strategy", sl: "Strategija" },
  "Naša ekipa razvije prilagojeno strategijo in načrt rešitve v skladu z vašimi poslovnimi cilji.": {
    en: "Our team develops a customized strategy and solution plan aligned with your business objectives.",
    sl: "Naša ekipa razvije prilagojeno strategijo in načrt rešitve v skladu z vašimi poslovnimi cilji."
  },
  "Oblikovanje & Razvoj": { en: "Design & Development", sl: "Oblikovanje & Razvoj" },
  "Ustvarjamo in gradimo vašo rešitev s pozornostjo na podrobnosti, zagotavljamo kakovost in učinkovitost.": {
    en: "We create and build your solution with attention to detail, ensuring quality and efficiency.",
    sl: "Ustvarjamo in gradimo vašo rešitev s pozornostjo na podrobnosti, zagotavljamo kakovost in učinkovitost."
  },
  "Testiranje": { en: "Testing", sl: "Testiranje" },
  "Temeljito testiranje zagotavlja, da vaša rešitev deluje brezhibno na vseh platformah in napravah.": {
    en: "Thorough testing ensures your solution works flawlessly across all platforms and devices.",
    sl: "Temeljito testiranje zagotavlja, da vaša rešitev deluje brezhibno na vseh platformah in napravah."
  },
  "Zagon": { en: "Launch", sl: "Zagon" },
  "Skrbno uvedemo vašo rešitev in zagotavljamo podporo v kritični fazi zagona.": {
    en: "We carefully implement your solution and provide support during the critical launch phase.",
    sl: "Skrbno uvedemo vašo rešitev in zagotavljamo podporo v kritični fazi zagona."
  },
  "Optimizacija": { en: "Optimization", sl: "Optimizacija" },
  "Nenehno izboljševanje in optimizacija omogočata, da vaša rešitev deluje kar najbolje.": {
    en: "Continuous improvement and optimization ensures your solution performs at its best.",
    sl: "Nenehno izboljševanje in optimizacija omogočata, da vaša rešitev deluje kar najbolje."
  },
  "Naš proces": { en: "Our Process", sl: "Naš proces" },
  "Sledimo strukturiranemu pristopu, da zagotovimo učinkovito izvedbo vašega projekta in presežemo pričakovanja.": {
    en: "We follow a structured approach to ensure efficient execution of your project and exceed expectations.",
    sl: "Sledimo strukturiranemu pristopu, da zagotovimo učinkovito izvedbo vašega projekta in presežemo pričakovanja."
  },
  "Projects": { en: "Projects", sl: "Projekti" },
  "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.": {
    en: "Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.",
    sl: "Odkrijte, kako vodilna podjetja in razvijalci izkoriščajo sodobne spletne tehnologije za ustvarjanje izjemnih digitalnih izkušenj. Ti primeri prikazujejo resnične aplikacije in zgodbe o uspehu."
  },
  "Get In Touch": { en: "Get In Touch", sl: "Stopite v stik" },
  "Have a project in mind or want to learn more about our services? Contact us today!": {
    en: "Have a project in mind or want to learn more about our services? Contact us today!",
    sl: "Imate v mislih projekt ali želite izvedeti več o naših storitvah? Kontaktirajte nas danes!"
  },
  "Your Name": { en: "Your Name", sl: "Vaše ime" },
  "Your Email": { en: "Your Email", sl: "Vaš e-poštni naslov" },
  "Subject": { en: "Subject", sl: "Zadeva" },
  "How can we help you?": { en: "How can we help you?", sl: "Kako vam lahko pomagamo?" },
  "Message": { en: "Message", sl: "Sporočilo" },
  "Tell us about your project...": { en: "Tell us about your project...", sl: "Povejte nam o svojem projektu..." },
  "Send Message": { en: "Send Message", sl: "Pošlji sporočilo" },
  "Sending...": { en: "Sending...", sl: "Pošiljam..." },
  "Contact Information": { en: "Contact Information", sl: "Kontaktni podatki" },
  "Call Us": { en: "Call Us", sl: "Pokličite nas" },
  "Email Us": { en: "Email Us", sl: "Pišite nam" },
  "Connect With Us": { en: "Connect With Us", sl: "Povežite se z nami" },
  "Quick Links": { en: "Quick Links", sl: "Hitre povezave" },
  "Services": { en: "Services", sl: "Storitve" },
  "Newsletter": { en: "Newsletter", sl: "Novičnik" },
  "Subscribe to our newsletter for the latest updates.": {
    en: "Subscribe to our newsletter for the latest updates.",
    sl: "Prijavite se na naš novičnik za najnovejše posodobitve."
  },
  "Your email": { en: "Your email", sl: "Vaš e-poštni naslov" },
  "Subscribe": { en: "Subscribe", sl: "Naroči se" },
  "All rights reserved.": { en: "All rights reserved.", sl: "Vse pravice pridržane." },
  "Privacy Policy": { en: "Privacy Policy", sl: "Politika zasebnosti" },
  "Terms of Service": { en: "Terms of Service", sl: "Pogoji uporabe" },
  "Cookie Policy": { en: "Cookie Policy", sl: "Politika piškotkov" },
  "Message Sent!": { en: "Message Sent!", sl: "Sporočilo poslano!" },
  "We'll get back to you as soon as possible.": { 
    en: "We'll get back to you as soon as possible.", 
    sl: "Odgovorili vam bomo v najkrajšem možnem času." 
  },
  "Error": { en: "Error", sl: "Napaka" },
  "There was a problem sending your message. Please try again.": { 
    en: "There was a problem sending your message. Please try again.", 
    sl: "Pri pošiljanju vašega sporočila je prišlo do težave. Prosimo, poskusite znova." 
  },
  "Thank you for subscribing!": { en: "Thank you for subscribing!", sl: "Hvala za prijavo!" },
  "has been added to our newsletter.": { 
    en: "has been added to our newsletter.", 
    sl: "je bil dodan v naš novičnik." 
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('sl');

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'sl')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Save language to localStorage when it changes
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
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
