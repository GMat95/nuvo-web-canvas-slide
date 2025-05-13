
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: May 13, 2025",
      intro: "Please read these terms of service carefully before using the EDGE website. By accessing or using our service, you agree to be bound by these terms.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: "By accessing or using the EDGE website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service."
        },
        {
          title: "2. Use of Services",
          content: "You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You agree not to use our services in any way that violates any applicable local, state, national, or international law or regulation."
        },
        {
          title: "3. Intellectual Property",
          content: "The EDGE website and its original content, features, and functionality are owned by EDGE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."
        },
        {
          title: "4. User Accounts",
          content: "When you create an account with us, you guarantee that the information you provide is accurate, complete, and current at all times. You are responsible for maintaining the confidentiality of your account and password."
        },
        {
          title: "5. Limitation of Liability",
          content: "In no event shall EDGE, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
        },
        {
          title: "6. Changes to Terms",
          content: "We reserve the right to modify or replace these Terms of Service at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect."
        }
      ]
    },
    sl: {
      title: "Pogoji uporabe",
      lastUpdated: "Zadnja posodobitev: 13. maj 2025",
      intro: "Prosimo, da pred uporabo spletne strani EDGE pozorno preberete te pogoje uporabe. Z dostopom do ali uporabo naše storitve se strinjate, da vas ti pogoji zavezujejo.",
      sections: [
        {
          title: "1. Sprejetje pogojev",
          content: "Z dostopom do ali uporabo spletne strani EDGE potrjujete, da ste prebrali, razumeli in se strinjate, da vas zavezujejo ti Pogoji uporabe. Če se s temi pogoji ne strinjate, prosimo, ne uporabljajte naše storitve."
        },
        {
          title: "2. Uporaba storitev",
          content: "Strinjate se, da boste naše storitve uporabljali samo za zakonite namene in v skladu s temi Pogoji uporabe. Strinjate se, da ne boste uporabljali naših storitev na način, ki krši katerikoli veljaven lokalni, državni, nacionalni ali mednarodni zakon ali predpis."
        },
        {
          title: "3. Intelektualna lastnina",
          content: "Spletna stran EDGE in njene izvirne vsebine, funkcije in funkcionalnost so v lasti podjetja EDGE in so zaščitene z mednarodnimi zakoni o avtorskih pravicah, blagovnih znamkah, patentih, poslovnih skrivnostih in drugimi zakoni o intelektualni lastnini ali lastninskih pravicah."
        },
        {
          title: "4. Uporabniški računi",
          content: "Ko pri nas ustvarite račun, jamčite, da so informacije, ki jih posredujete, točne, popolne in vedno aktualne. Odgovorni ste za ohranjanje zaupnosti svojega računa in gesla."
        },
        {
          title: "5. Omejitev odgovornosti",
          content: "EDGE, niti njegovi direktorji, zaposleni, partnerji, zastopniki, dobavitelji ali podružnice, v nobenem primeru ne odgovarjajo za kakršno koli posredno, naključno, posebno, posledično ali kazensko škodo, vključno z, vendar ne omejeno na, izgubo dobička, podatkov, uporabe, dobrega imena ali drugih neopredmetenih izgub."
        },
        {
          title: "6. Spremembe pogojev",
          content: "Pridržujemo si pravico do spremembe ali zamenjave teh Pogojev uporabe kadar koli. Če je sprememba bistvena, bomo zagotovili vsaj 30-dnevno obvestilo pred začetkom veljavnosti novih pogojev."
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
