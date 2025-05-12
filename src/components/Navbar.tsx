
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/hooks/useLanguage";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.process"), href: "#process" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href") || "";
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust based on navbar height
        behavior: "smooth",
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "sl" : "en");
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white py-3 shadow-md" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-nuvo-dark font-bold text-2xl md:text-3xl animate-fade-in">
          NUVO<span className="text-nuvo-purple">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.slice(0, -1).map((item, index) => (
                <NavigationMenuItem key={item.name} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <NavigationMenuLink 
                    asChild 
                    className="hover-underline-animation text-nuvo-dark text-sm font-medium"
                  >
                    <a href={item.href} onClick={handleNavClick}>
                      {item.name}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                {language === "en" ? "EN" : "SLO"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("sl")}>
                Slovenščina
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            asChild 
            className="bg-nuvo-purple hover:bg-nuvo-purple/90 text-white animate-fade-in"
            style={{ animationDelay: "700ms" }}
          >
            <a 
              href="#contact" 
              onClick={handleNavClick}
            >
              {t("nav.contact")}
            </a>
          </Button>
        </nav>

        {/* Mobile menu button - FIXED to be more visible */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Language Toggle for Mobile */}
          <button 
            onClick={handleLanguageToggle}
            className="text-nuvo-dark border border-nuvo-purple rounded-md px-2 py-1 text-sm"
          >
            {language === "en" ? "EN" : "SLO"}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-nuvo-dark p-2 hover:bg-gray-100 rounded-md transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - FIXED visibility issues */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 right-0 bg-white shadow-md md:hidden transition-transform duration-300 ease-in-out z-40",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-nuvo-dark hover:text-nuvo-purple py-2 px-4 animate-fade-in"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
