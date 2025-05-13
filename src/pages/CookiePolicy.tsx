
import { useLanguage } from "@/hooks/useLanguage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last Updated: May 13, 2025",
      intro: "This Cookie Policy explains how EDGE uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
      sections: [
        {
          title: "1. What Are Cookies",
          content: "Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information."
        },
        {
          title: "2. Why Do We Use Cookies",
          content: "We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as 'essential' or 'strictly necessary' cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes."
        },
        {
          title: "3. Types of Cookies We Use",
          content: "Essential cookies: These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Performance cookies: These cookies are used to enhance the performance and functionality of our website but are non-essential to their use. Functionality cookies: These cookies enable the website to provide enhanced functionality and personalization. Analytics cookies: These cookies help us understand how visitors interact with our website."
        },
        {
          title: "4. Your Choices Regarding Cookies",
          content: "If you prefer to avoid the use of cookies on the website, first you must disable the use of cookies in your browser and then delete the cookies saved in your browser associated with this website. You may use this option for preventing the use of cookies at any time. If you do not accept our cookies, you may experience some inconvenience in your use of our website and some features may not function properly."
        },
        {
          title: "5. Changes to This Cookie Policy",
          content: "We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies."
        }
      ]
    },
    sl: {
      title: "Politika piškotkov",
      lastUpdated: "Zadnja posodobitev: 13. maj 2025",
      intro: "Ta politika piškotkov pojasnjuje, kako EDGE uporablja piškotke in podobne tehnologije za prepoznavanje, ko obiščete našo spletno stran. Pojasnjuje, kaj so te tehnologije in zakaj jih uporabljamo, pa tudi vaše pravice do nadzora nad našo uporabo teh tehnologij.",
      sections: [
        {
          title: "1. Kaj so piškotki",
          content: "Piškotki so majhne podatkovne datoteke, ki se namestijo na vaš računalnik ali mobilno napravo, ko obiščete spletno stran. Piškotki so široko uporabljeni s strani lastnikov spletnih strani, da njihove spletne strani delujejo ali da delujejo učinkoviteje, pa tudi za zagotavljanje poročil."
        },
        {
          title: "2. Zakaj uporabljamo piškotke",
          content: "Uporabljamo lastne in piškotke tretjih oseb iz več razlogov. Nekateri piškotki so potrebni iz tehničnih razlogov, da naša spletna stran deluje, in jih imenujemo 'bistveni' ali 'nujno potrebni' piškotki. Drugi piškotki nam omogočajo tudi sledenje in ciljanje interesov naših uporabnikov za izboljšanje izkušnje na naši spletni strani. Tretje osebe strežejo piškotke preko naše spletne strani za oglaševanje, analitiko in druge namene."
        },
        {
          title: "3. Vrste piškotkov, ki jih uporabljamo",
          content: "Bistveni piškotki: Ti piškotki so nujno potrebni za zagotavljanje storitev, ki so na voljo prek naše spletne strani, in za uporabo nekaterih njenih funkcij. Izvedbeni piškotki: Ti piškotki se uporabljajo za izboljšanje učinkovitosti in funkcionalnosti naše spletne strani, vendar niso bistveni za njihovo uporabo. Funkcionalni piškotki: Ti piškotki omogočajo spletni strani, da zagotovi izboljšano funkcionalnost in personalizacijo. Analitični piškotki: Ti piškotki nam pomagajo razumeti, kako obiskovalci sodelujejo z našo spletno stranjo."
        },
        {
          title: "4. Vaše izbire glede piškotkov",
          content: "Če se želite izogniti uporabi piškotkov na spletni strani, morate najprej onemogočiti uporabo piškotkov v vašem brskalniku in nato izbrisati piškotke, shranjene v vašem brskalniku, povezane s to spletno stranjo. To možnost lahko uporabite za preprečevanje uporabe piškotkov kadar koli. Če ne sprejmete naših piškotkov, boste morda doživeli nekaj nevšečnosti pri uporabi naše spletne strani in nekatere funkcije morda ne bodo delovale pravilno."
        },
        {
          title: "5. Spremembe te politike piškotkov",
          content: "To politiko piškotkov lahko občasno posodobimo, na primer, zaradi sprememb piškotkov, ki jih uporabljamo, ali iz drugih operativnih, pravnih ali regulativnih razlogov. Zato redno ponovno obiščite to politiko piškotkov, da ostanete obveščeni o naši uporabi piškotkov in povezanih tehnologij."
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
