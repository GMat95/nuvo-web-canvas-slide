
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      title: t("Website Development"),
      description: t("Custom, mobile-responsive websites designed to attract and convert visitors into customers."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
    },
    {
      title: t("Performance Optimization"),
      description: t("Speed up your website and improve user experience to boost conversions and search rankings."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M14 13.764a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
          <path d="M6 9a6 6 0 0 0 12 0" />
          <path d="M12 2v2" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="M16 5.5l-1.5 1.5" />
          <path d="M8 5.5L9.5 7" />
        </svg>
      ),
    },
    {
      title: t("IT Support & Solutions"),
      description: t("Technical support for your business needs, including network setup, security, and maintenance."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
    },
    {
      title: t("Python Development"),
      description: t("Custom Python applications to automate processes and build advanced functionality for your business."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M2 12L7.5 2.5a2.5 2.5 0 0 1 3 0L16 12" />
          <path d="M4 12h16" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M12 16.5V13" />
          <path d="M18 22V12" />
          <path d="M6 22V12" />
        </svg>
      ),
    },
    {
      title: t("Data Analysis"),
      description: t("Turn your data into actionable insights with advanced analytics and visualization tools."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
    },
    {
      title: t("Model Building"),
      description: t("Custom machine learning models to predict trends and make data-driven decisions for your business."),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="storitve" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="max-w-xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t("Our Services")}
          </h2>
          <p className="text-gray-700">
            {t("We offer a comprehensive range of digital services to help local businesses thrive in the digital world.")}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="border border-gray-200 hover:border-black p-6 transition-all duration-300 bg-white"
              whileHover={{ 
                y: -10,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
              }}
            >
              <div className="mb-4 text-black">{service.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
