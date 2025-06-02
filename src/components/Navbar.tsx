
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t('Domov'), href: '/' },
    { label: t('Storitve'), href: '/#storitve' },
    { label: t('O nas'), href: '/#o-nas' },
    { label: t('Projekti'), href: '/#projekti' },
    { label: t('Kontakt'), href: '/#kontakt' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(language === 'sl' ? 'en' : 'sl');

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Logo className="text-black" />
        </a>
        
        {/* Mobile toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-gray-800 hover:text-black"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            <span className="font-medium">{language === 'sl' ? 'EN' : 'SL'}</span>
          </button>
          
          <button 
            className="text-gray-800 p-2 z-50"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-black font-medium relative transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
          
          <button 
            className="text-gray-800 hover:text-black font-medium"
            onClick={toggleLanguage}
            aria-label="Change language"
          >
            {language === 'sl' ? 'EN' : 'SL'}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } flex items-center justify-center md:hidden`}
      >
        <nav className="flex flex-col items-center gap-8 py-20">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xl text-gray-800 hover:text-black font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
