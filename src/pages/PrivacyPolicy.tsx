
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 13, 2025",
      intro: "At EDGE, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.",
      sections: [
        {
          title: "1. Important Information and Who We Are",
          content: "EDGE is responsible for your personal data. We have appointed a data protection officer who is responsible for overseeing questions in relation to this privacy policy. If you have any questions, including any requests to exercise your legal rights, please contact us."
        },
        {
          title: "2. The Data We Collect About You",
          content: "Personal data means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you, including identity data, contact data, technical data, profile data, usage data, and marketing and communications data."
        },
        {
          title: "3. How We Use Your Personal Data",
          content: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests (or those of a third party), or where we need to comply with a legal obligation."
        },
        {
          title: "4. Data Security",
          content: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know."
        },
        {
          title: "5. Your Legal Rights",
          content: "Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing."
        }
      ]
    },
    sl: {
      title: "Politika zasebnosti",
      lastUpdated: "Zadnja posodobitev: 13. maj 2025",
      intro: "Pri EDGE spoštujemo vašo zasebnost in smo zavezani k varovanju vaših osebnih podatkov. Ta politika zasebnosti vas bo obvestila o tem, kako skrbimo za vaše osebne podatke, ko obiščete našo spletno stran, in vas seznanila z vašimi pravicami do zasebnosti ter kako vas varuje zakon.",
      sections: [
        {
          title: "1. Pomembne informacije in kdo smo",
          content: "EDGE je odgovoren za vaše osebne podatke. Imenovali smo pooblaščeno osebo za varstvo podatkov, ki je odgovorna za nadzor vprašanj v zvezi s to politiko zasebnosti. Če imate kakršna koli vprašanja, vključno z zahtevami za uveljavljanje svojih zakonskih pravic, nas prosimo kontaktirajte."
        },
        {
          title: "2. Podatki, ki jih zbiramo o vas",
          content: "Osebni podatki pomenijo vse informacije o posamezniku, iz katerih je mogoče to osebo identificirati. Zbiramo, uporabljamo, shranjujemo in prenašamo različne vrste osebnih podatkov o vas, vključno s podatki o identiteti, kontaktnimi podatki, tehničnimi podatki, podatki o profilu, podatki o uporabi ter podatki o trženju in komunikacijah."
        },
        {
          title: "3. Kako uporabljamo vaše osebne podatke",
          content: "Vaše osebne podatke bomo uporabljali samo, ko nam to dovoljuje zakon. Najpogosteje bomo vaše osebne podatke uporabljali, kadar moramo izvesti pogodbo, ki jo bomo ali smo jo sklenili z vami, kadar je to potrebno za naše legitimne interese (ali interese tretje osebe) ali kadar moramo izpolniti zakonsko obveznost."
        },
        {
          title: "4. Varnost podatkov",
          content: "Uvedli smo ustrezne varnostne ukrepe za preprečevanje nenamerne izgube, uporabe ali dostopa do vaših osebnih podatkov na nepooblaščen način, njihovega spreminjanja ali razkritja. Dostop do vaših osebnih podatkov omejujemo na tiste zaposlene, agente, pogodbenike in druge tretje osebe, ki imajo poslovno potrebo po tem."
        },
        {
          title: "5. Vaše zakonske pravice",
          content: "V določenih okoliščinah imate na podlagi zakonov o varstvu podatkov pravice v zvezi z vašimi osebnimi podatki, vključno s pravico do zahtevanja dostopa, popravka, izbrisa, omejitve, prenosa ali do ugovora obdelavi."
        }
      ]
    }
  };

  const pageContent = language === 'en' ? content.en : content.sl;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl font-bold mb-3">{pageContent.title}</h1>
          <p className="text-gray-600 mb-8">{pageContent.lastUpdated}</p>
          
          <p className="text-gray-800 mb-8 leading-relaxed">
            {pageContent.intro}
          </p>
          
          <div className="space-y-8">
            {pageContent.sections.map((section, index) => (
              <section key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-800 leading-relaxed">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
