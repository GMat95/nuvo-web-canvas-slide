
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";
import Logo from "./Logo";

const Footer = () => {
  const { toast } = useToast();
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: t("Thank you for subscribing!"),
      description: `${email} ${t("has been added to our newsletter.")}`,
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#domov" className="text-white font-bold inline-block">
              <Logo className="text-white" />
            </a>
            <p className="mt-4 text-gray-400">
              {language === "sl" ? 
                "Sodobne tehnološke rešitve za lokalna podjetja. Pomagamo vam rasti s tehnologijo na najvišji ravni in strategijami, ki temeljijo na podatkih." :
                "Modern tech solutions for local businesses. We help you grow with cutting-edge technology and data-driven strategies."}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">{t("Quick Links")}</h3>
            <ul className="space-y-2">
              <li><a href="#domov" className="text-gray-400 hover:text-white transition-colors">{t("Domov")}</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-white transition-colors">{t("Storitve")}</a></li>
              <li><a href="#o-nas" className="text-gray-400 hover:text-white transition-colors">{t("O nas")}</a></li>
              <li><a href="#projekti" className="text-gray-400 hover:text-white transition-colors">{t("Projekti")}</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">{t("Kontakt")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">{t("Services")}</h3>
            <ul className="space-y-2">
              <li><a href="#storitve" className="text-gray-400 hover:text-white transition-colors">{t("Website Development")}</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-white transition-colors">{t("Performance Optimization")}</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-white transition-colors">{t("IT Support & Solutions")}</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-white transition-colors">{t("Python Development")}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">{t("Model Building")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">{t("Newsletter")}</h3>
            <p className="text-gray-400 mb-4">{t("Subscribe to our newsletter for the latest updates.")}</p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                name="email"
                placeholder={t("Your email")}
                className="bg-black/50 border-gray-700 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-white hover:bg-gray-200 text-black">
                {t("Subscribe")}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} EDGE. {t("All rights reserved.")}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                {t("Privacy Policy")}
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                {t("Terms of Service")}
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                {t("Cookie Policy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
