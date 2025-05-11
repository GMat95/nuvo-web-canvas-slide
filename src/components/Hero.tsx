
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleGetStartedClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-white to-nuvo-light"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nuvo-dark leading-tight mb-6">
              Transforming <span className="text-nuvo-purple">Local Businesses</span> With Modern Tech Solutions
            </h1>
            <p className="text-nuvo-gray text-lg md:text-xl mb-8 max-w-xl">
              We create beautiful websites, optimize performance, provide IT support, develop Python applications, and build data models for businesses that want to grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-nuvo-purple hover:bg-nuvo-purple/90 text-white px-8 py-6 text-base"
                size="lg"
              >
                <a href="#contact" onClick={handleGetStartedClick}>
                  Get Started
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-nuvo-purple text-nuvo-purple hover:bg-nuvo-purple/5 px-8 py-6 text-base"
                size="lg"
              >
                <a href="#services">
                  Our Services
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-nuvo-purple/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-nuvo-blue/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="NUVO digital solutions" 
                className="w-full max-w-md rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
