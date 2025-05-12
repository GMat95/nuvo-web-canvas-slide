import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Domov', href: '#domov' },
  { label: 'Storitve', href: '#storitve' },
  { label: 'O nas', href: '#o-nas' },
  { label: 'Projekti', href: '#projekti' },
  { label: 'Kontakt', href: '#kontakt' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#domov" className="text-2xl font-bold text-gray-800">
          Edge<span className="text-emerald-500">.</span>
        </a>
        
        {/* Mobile toggle */}
        <button 
          className="md:hidden text-gray-800 p-2 z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-gray-800 hover:text-emerald-500 font-medium relative transition-all duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-emerald-500 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 w-full h-screen bg-white/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } flex items-center justify-center`}
      >
        <nav className="flex flex-col items-center gap-8 py-20">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href}
              className="text-xl text-gray-800 hover:text-emerald-500 font-medium"
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
