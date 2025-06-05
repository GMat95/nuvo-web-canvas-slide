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
  "Minimalizem, ki prepriča.": { en: "Minimalism that convinces.", sl: "Minimalizem, ki prepriča." },
  "Oblikujemo sodobne, estetske in funkcionalne spletne strani, ki pripovedujejo vašo zgodbo. Minimalistično, premišljeno in brez odvečnosti – za znamke, ki želijo pustiti vtis.": { en: "We design modern, aesthetic, and functional websites that tell your story. Minimalist, thoughtful, and without redundancy - for brands that want to make an impression.", sl: "Oblikujemo sodobne, estetske in funkcionalne spletne strani, ki pripovedujejo vašo zgodbo. Minimalistično, premišljeno in brez odvečnosti – za znamke, ki želijo pustiti vtis." },
  "Kontaktirajte nas": { en: "Contact Us", sl: "Kontaktirajte nas" },
  "Naše storitve": { en: "Our Services", sl: "Naše storitve" },
  "Storitve": { en: "Services", sl: "Storitve" },
  "O nas": { en: "About", sl: "O nas" },
  "Projekti": { en: "Projects", sl: "Projekti" },
  "Kontakt": { en: "Contact", sl: "Kontakt" },
  "Cene": { en: "Pricing", sl: "Cene" },
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
  "SFUMATO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke.": {
    en: "SFUMATO is a forward-thinking digital agency focused on helping local businesses succeed in the digital landscape. Our team combines technical expertise with creative solutions to deliver exceptional results for our clients.",
    sl: "SFUMATO je napredno usmerjena digitalna agencija, osredotočena na pomoč lokalnim podjetjem pri uspehu v digitalnem okolju. Naša ekipa združuje tehnično znanje s kreativnimi rešitvami za zagotavljanje izjemnih rezultatov za naše stranke."
  },
  "Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu.": {
    en: "We believe that every business, regardless of size, deserves access to cutting-edge technology and professional services that can help them grow and thrive in today's competitive market.",
    sl: "Verjamemo, da si vsako podjetje, ne glede na velikost, zasluži dostop do najsodobnejše tehnologije in profesionalnih storitev, ki mu lahko pomagajo rasti in uspevati na današnjem konkurenčnem trgu."
  },
  "Minimalizem, ki prepriča": {
    en: "Minimalism that resonates.",
    sl: "Minimalizem, ki prepriča."
  },
  "Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti.": {
    en: "We create beautiful websites, optimize performance, provide IT support, develop Python applications, and build data models for businesses looking to grow.",
    sl: "Ustvarjamo čudovite spletne strani, optimiziramo zmogljivost, nudimo IT podporo, razvijamo Python aplikacije in gradimo podatkovne modele za podjetja, ki želijo rasti."
  },
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
  // Project translations
  "Minimalistična E-trgovinska Platforma": { en: "Minimalist E-Commerce Platform", sl: "Minimalistična E-trgovinska Platforma" },
  "Elegantna črno-bela e-trgovinska platforma z osredotočenostjo na tipografijo in bel prostor. Minimalistični dizajn poudarja fotografijo izdelkov in ustvarja elegantno nakupovalno izkušnjo.": {
    en: "An elegant black and white e-commerce platform focused on typography and whitespace. The minimalist design emphasizes product photography and creates an elegant shopping experience.",
    sl: "Elegantna črno-bela e-trgovinska platforma z osredotočenostjo na tipografijo in bel prostor. Minimalistični dizajn poudarja fotografijo izdelkov in ustvarja elegantno nakupovalno izkušnjo."
  },
  "Monohromatski Portfelj za Fotografski Studio": { en: "Monochrome Portfolio for Photography Studio", sl: "Monohromatski Portfelj za Fotografski Studio" },
  "Monohromatska portfeljska spletna stran za profesionalni fotografski studio. Dizajn uporablja kontrast in razmike za ustvarjanje galerijske izkušnje, ki fotografiji omogoča, da zasije.": {
    en: "A monochromatic portfolio website for a professional photography studio. The design uses contrast and spacing to create a gallery-like experience that lets the photography take center stage.",
    sl: "Monohromatska portfeljska spletna stran za profesionalni fotografski studio. Dizajn uporablja kontrast in razmike za ustvarjanje galerijske izkušnje, ki fotografiji omogoča, da zasije."
  },
  "Korporativna Identiteta Arhitekturnega Podjetja": { en: "Architectural Firm Corporate Identity", sl: "Korporativna Identiteta Arhitekturnega Podjetja" },
  "Celovita blagovna identiteta in spletna stran za sodobno arhitekturno podjetje. Dizajn poudarja čiste linije, negativni prostor in arhitekturne elemente, ki odražajo estetsko filozofijo podjetja.": {
    en: "A comprehensive brand identity and website for a modern architectural firm. The design emphasizes clean lines, negative space, and architectural elements to reflect the firm's aesthetic philosophy.",
    sl: "Celovita blagovna identiteta in spletna stran za sodobno arhitekturno podjetje. Dizajn poudarja čiste linije, negativni prostor in arhitekturne elemente, ki odražajo estetsko filozofijo podjetja."
  },
  "Minimalistična Aplikacija za Sledenje Proračuna": { en: "Minimalist Budget Tracking Application", sl: "Minimalistična Aplikacija za Sledenje Proračuna" },
  "Čista, osredotočena aplikacija za sledenje proračuna, zasnovana z mislijo na preprostost. Črno-beli vmesnik z minimalnimi barvnimi poudarki pomaga uporabnikom osredotočiti se na njihove finančne podatke brez motenj.": {
    en: "A clean, focused budget tracking app designed with simplicity in mind. The black and white interface with minimal color accents helps users focus on their financial data without distractions.",
    sl: "Čista, osredotočena aplikacija za sledenje proračuna, zasnovana z mislijo na preprostost. Črno-beli vmesnik z minimalnimi barvnimi poudarki pomaga uporabnikom osredotočiti se na njihove finančne podatke brez motenj."
  },
  // Pricing translations
  "Preprosto, Transparentno Cenovanje": { en: "Simple, Transparent Pricing", sl: "Preprosto, Transparentno Cenovanje" },
  "Izberite načrt, ki vam ustreza. Vsi načrti vključujejo dostop do naše platforme, orodij za generiranje potencialnih strank in namenske podpore.": {
    en: "Choose the plan that works for you. All plans include access to our platform, lead generation tools, and dedicated support.",
    sl: "Izberite načrt, ki vam ustreza. Vsi načrti vključujejo dostop do naše platforme, orodij za generiranje potencialnih strank in namenske podpore."
  },
  "Letno račun (Privarčuj 20%)": { en: "Annual billing (Save 20%)", sl: "Letno račun (Privarčuj 20%)" },
  "STARTER": { en: "STARTER", sl: "ZAČETNI" },
  "PROFESSIONAL": { en: "PROFESSIONAL", sl: "PROFESIONALNI" },
  "ENTERPRISE": { en: "ENTERPRISE", sl: "PODJETNIŠKI" },
  "na mesec": { en: "per month", sl: "na mesec" },
  "Račun letno": { en: "billed annually", sl: "Račun letno" },
  "Priljubljeno": { en: "Popular", sl: "Priljubljeno" },
  "Do 10 projektov": { en: "Up to 10 projects", sl: "Do 10 projektov" },
  "Osnovna analitika": { en: "Basic analytics", sl: "Osnovna analitika" },
  "48-urni odzivni čas podpore": { en: "48-hour support response time", sl: "48-urni odzivni čas podpore" },
  "Omejen dostop do API": { en: "Limited API access", sl: "Omejen dostop do API" },
  "Skupnostna podpora": { en: "Community support", sl: "Skupnostna podpora" },
  "Neomejeni projekti": { en: "Unlimited projects", sl: "Neomejeni projekti" },
  "Napredna analitika": { en: "Advanced analytics", sl: "Napredna analitika" },
  "24-urni odzivni čas podpore": { en: "24-hour support response time", sl: "24-urni odzivni čas podpore" },
  "Poln dostop do API": { en: "Full API access", sl: "Poln dostop do API" },
  "Prednostna podpora": { en: "Priority support", sl: "Prednostna podpora" },
  "Sodelovanje ekipe": { en: "Team collaboration", sl: "Sodelovanje ekipe" },
  "Integracije po meri": { en: "Custom integrations", sl: "Integracije po meri" },
  "Vse v Professional": { en: "Everything in Professional", sl: "Vse v Professional" },
  "Rešitve po meri": { en: "Custom solutions", sl: "Rešitve po meri" },
  "Namenski upravitelj računa": { en: "Dedicated account manager", sl: "Namenski upravitelj računa" },
  "1-urni odzivni čas podpore": { en: "1-hour support response time", sl: "1-urni odzivni čas podpore" },
  "SSO avtentikacija": { en: "SSO Authentication", sl: "SSO avtentikacija" },
  "Napredna varnost": { en: "Advanced security", sl: "Napredna varnost" },
  "Pogodbe po meri": { en: "Custom contracts", sl: "Pogodbe po meri" },
  "SLA sporazum": { en: "SLA agreement", sl: "SLA sporazum" },
  "Začni brezplačni preizkus": { en: "Start Free Trial", sl: "Začni brezplačni preizkus" },
  "Začni": { en: "Get Started", sl: "Začni" },
  "Kontaktiraj prodajo": { en: "Contact Sales", sl: "Kontaktiraj prodajo" },
  "Popolno za posameznike in majhne projekte": { en: "Perfect for individuals and small projects", sl: "Popolno za posameznike in majhne projekte" },
  "Idealno za rastoče ekipe in podjetja": { en: "Ideal for growing teams and businesses", sl: "Idealno za rastoče ekipe in podjetja" },
  "Za velike organizacije s specifičnimi potrebami": { en: "For large organizations with specific needs", sl: "Za velike organizacije s specifičnimi potrebami" },
  // ... keep existing contact translations
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
  },
  "PROJEKT": { en: "PROJECT", sl: "PROJEKT" },
  "Tehnologije": { en: "Technologies", sl: "Tehnologije" },
  
  // Testimonials translations
  "Testimonials": { en: "Testimonials", sl: "Mnenja strank" },
  "See what our clients say about working with us and the results we've achieved together.": {
    en: "See what our clients say about working with us and the results we've achieved together.",
    sl: "Poglejte, kaj pravijo naše stranke o sodelovanju z nami in rezultatih, ki smo jih dosegli skupaj."
  },
  "Ana Novak": { en: "Ana Novak", sl: "Ana Novak" },
  "Marko Petrič": { en: "Marko Petrič", sl: "Marko Petrič" },
  "Sara Kralj": { en: "Sara Kralj", sl: "Sara Kralj" },
  "Lokalna Restavracija": { en: "Local Restaurant", sl: "Lokalna Restavracija" },
  "Tech Startup": { en: "Tech Startup", sl: "Tech Startup" },
  "E-trgovina": { en: "E-commerce Store", sl: "E-trgovina" },
  "EDGE je preoblikoval našo spletno prisotnost. Nova spletna stran je povečala naše rezervacije za 150% v prvem mesecu. Njihova pozornost na podrobnosti in razumevanje naših potreb je bilo izjemno.": {
    en: "EDGE transformed our online presence. The new website increased our reservations by 150% in the first month. Their attention to detail and understanding of our needs was exceptional.",
    sl: "EDGE je preoblikoval našo spletno prisotnost. Nova spletna stran je povečala naše rezervacije za 150% v prvem mesecu. Njihova pozornost na podrobnosti in razumevanje naših potreb je bilo izjemno."
  },
  "Sodelovanje z EDGE je bilo game-changer za naš startup. Njihova tehnična ekspertiza in kreativni pristop sta nam pomagala zgraditi platformo, ki naše uporabnike navdušuje vsak dan.": {
    en: "Working with EDGE was a game-changer for our startup. Their technical expertise and creative approach helped us build a platform that delights our users every day.",
    sl: "Sodelovanje z EDGE je bilo game-changer za naš startup. Njihova tehnična ekspertiza in kreativni pristop sta nam pomagala zgraditi platformo, ki naše uporabnike navdušuje vsak dan."
  },
  "Naša e-trgovina je doživela revolucijo zahvaljujoč EDGE. Optimizacije zmogljivosti so zmanjšale čas nalaganja za 70%, prodaja pa se je povečala za 200%. Priporočam vsem!": {
    en: "Our e-commerce store experienced a revolution thanks to EDGE. Performance optimizations reduced loading time by 70%, and sales increased by 200%. I recommend them to everyone!",
    sl: "Naša e-trgovina je doživela revolucijo zahvaljujoč EDGE. Optimizacije zmogljivosti so zmanjšale čas nalaganja za 70%, prodaja pa se je povečala za 200%. Priporočam vsem!"
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
