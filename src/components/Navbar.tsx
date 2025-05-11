
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
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

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "dark:bg-nuvo-dark-bg bg-white py-3 shadow-md dark:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.5)]" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#home" className="text-nuvo-dark dark:text-white font-bold text-2xl md:text-3xl">
          NUVO<span className="text-nuvo-purple">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="text-nuvo-dark dark:text-white hover-underline-animation text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
          
          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <Sun size={18} className="text-nuvo-dark dark:text-white" />
            <Switch 
              checked={theme === 'dark'} 
              onCheckedChange={toggleTheme}
              className="data-[state=checked]:bg-nuvo-purple"
            />
            <Moon size={18} className="text-nuvo-dark dark:text-white" />
          </div>
          
          <Button 
            asChild 
            className="bg-nuvo-purple hover:bg-nuvo-purple/90 text-white"
          >
            <a 
              href="#contact" 
              onClick={handleNavClick}
            >
              Contact Us
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle for Mobile */}
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="text-nuvo-dark dark:text-white">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-nuvo-dark dark:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 right-0 bg-white dark:bg-nuvo-dark-bg shadow-md md:hidden mobile-nav",
          isMobileMenuOpen && "open"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="text-nuvo-dark dark:text-white hover:text-nuvo-purple dark:hover:text-nuvo-purple py-2 px-4"
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
