
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CookieConsentProps {
  language: "en" | "sl";
}

export default function CookieConsent({ language }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      // Slight delay to show cookie consent after page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  const translations = {
    en: {
      message: "This website uses cookies to ensure you get the best experience on our website.",
      accept: "Accept",
      decline: "Decline",
      policy: "Cookie Policy"
    },
    sl: {
      message: "Ta spletna stran uporablja piškotke za zagotavljanje najboljše uporabniške izkušnje.",
      accept: "Sprejmi",
      decline: "Zavrni",
      policy: "Politika piškotkov"
    }
  };

  const content = translations[language];

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-in">
      <div className="bg-black text-white p-4 md:p-6 shadow-lg mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center gap-4 border border-gray-800">
        <p className="text-sm flex-1">{content.message}</p>
        <div className="flex flex-wrap items-center gap-2">
          <Button 
            onClick={handleAccept} 
            className="bg-white text-black hover:bg-gray-200 min-w-[100px] font-medium"
          >
            {content.accept}
          </Button>
          <Button 
            onClick={handleDecline} 
            variant="outline" 
            className="border-white text-white hover:bg-gray-800 hover:text-white min-w-[100px] font-medium"
          >
            {content.decline}
          </Button>
          <Link to="/cookie-policy">
            <Button 
              variant="link" 
              className="text-white hover:text-gray-300 font-medium"
            >
              {content.policy}
            </Button>
          </Link>
        </div>
        <button 
          onClick={handleDecline} 
          className="text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
