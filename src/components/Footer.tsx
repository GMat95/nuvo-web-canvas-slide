
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    
    toast({
      title: "Thank you for subscribing!",
      description: `${email} has been added to our newsletter.`,
    });
    
    form.reset();
  };

  return (
    <footer className="bg-nuvo-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#domov" className="text-white font-bold text-2xl md:text-3xl">
              Edge<span className="text-emerald-500">.</span>
            </a>
            <p className="mt-4 text-gray-400">
              Modern tech solutions for local businesses. We help you grow with cutting-edge technology and data-driven strategies.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#domov" className="text-gray-400 hover:text-emerald-500 transition-colors">Domov</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-emerald-500 transition-colors">Storitve</a></li>
              <li><a href="#o-nas" className="text-gray-400 hover:text-emerald-500 transition-colors">O nas</a></li>
              <li><a href="#projekti" className="text-gray-400 hover:text-emerald-500 transition-colors">Projekti</a></li>
              <li><a href="#kontakt" className="text-gray-400 hover:text-emerald-500 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#storitve" className="text-gray-400 hover:text-emerald-500 transition-colors">Website Development</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-emerald-500 transition-colors">Performance Optimization</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-emerald-500 transition-colors">IT Support</a></li>
              <li><a href="#storitve" className="text-gray-400 hover:text-emerald-500 transition-colors">Python Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-nuvo-purple transition-colors">Model Building</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubscribe} className="flex space-x-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                className="bg-nuvo-dark/50 border-gray-700 text-white"
                required
              />
              <Button type="submit" className="bg-nuvo-purple hover:bg-nuvo-purple/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} NUVO. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-nuvo-purple transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-nuvo-purple transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-nuvo-purple transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
