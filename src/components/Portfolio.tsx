
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Local Cafe Website Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      additionalImages: [
        "https://images.unsplash.com/photo-1541167760496-1628856ab772",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
      ],
      tags: ["Responsive Design", "E-Commerce", "SEO"],
      description: "A complete redesign of the website for a local cafe to improve online ordering and customer engagement.",
      challenge: "The cafe's old website wasn't mobile-friendly and lacked online ordering capabilities, resulting in lost sales.",
      solution: "We created a modern, responsive website with an integrated online ordering system and menu management.",
      results: "Online orders increased by 45% in the first month, with improved customer satisfaction and reduced phone orders.",
    },
    {
      id: 2,
      title: "Retail Store Data Dashboard",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      additionalImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4"
      ],
      tags: ["Data Visualization", "Python", "Analytics"],
      description: "A custom analytics dashboard for a growing retail chain to track sales, inventory, and customer trends.",
      challenge: "The retailer struggled with making data-driven decisions due to scattered information across multiple systems.",
      solution: "We built a centralized dashboard using Python and modern visualization tools to aggregate and present key metrics.",
      results: "Management reduced inventory costs by 15% and identified high-performing product categories to focus marketing efforts.",
    },
    {
      id: 3,
      title: "Real Estate Agency Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      additionalImages: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
      ],
      tags: ["Property Listings", "Search Functionality", "Mobile-First"],
      description: "A comprehensive web platform for a real estate agency featuring advanced property search and agent profiles.",
      challenge: "The agency needed a more effective way to showcase properties and connect potential buyers with agents.",
      solution: "We developed a feature-rich website with detailed property listings, virtual tours, and integrated contact forms.",
      results: "The agency reported a 60% increase in qualified leads and reduced time to sell properties by 25%.",
    },
    {
      id: 4,
      title: "Restaurant Sales Predictor",
      category: "Model Building",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      additionalImages: [
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
      ],
      tags: ["Machine Learning", "Predictive Analytics", "Data Processing"],
      description: "A machine learning model that helps restaurant owners predict busy periods and optimize staff scheduling.",
      challenge: "The restaurant faced staffing issues, with either too many or too few employees during varying business hours.",
      solution: "We created a predictive model analyzing historical sales, weather patterns, and local events to forecast customer volume.",
      results: "The restaurant reduced labor costs by 18% while improving customer service during peak hours.",
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-nuvo-light dark:bg-nuvo-dark-bg/70">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark dark:text-white mb-4">
            Our <span className="text-nuvo-purple">Portfolio</span>
          </h2>
          <p className="text-nuvo-gray dark:text-gray-300">
            Take a look at some of our recent projects and the solutions we've delivered for our clients.
          </p>
        </div>

        <div className="space-y-24 mt-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <div className="relative overflow-hidden rounded-xl shadow-lg group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-white/90 text-sm">{project.category}</p>
                  </div>
                </div>

                {/* Additional Images */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {project.additionalImages.map((img, imgIndex) => (
                    <div key={imgIndex} className="overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={img} 
                        alt={`${project.title} additional view ${imgIndex + 1}`}
                        className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <div className="mb-3 flex items-center gap-3">
                  <Badge className="bg-nuvo-purple text-white dark:bg-nuvo-purple/80">{project.category}</Badge>
                  <div className="flex gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="bg-nuvo-purple/10 text-nuvo-purple border-nuvo-purple/20 dark:bg-nuvo-purple/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-nuvo-dark dark:text-white mb-4">{project.title}</h3>
                
                <p className="text-nuvo-gray dark:text-gray-300 mb-6">{project.description}</p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-nuvo-dark dark:text-white mb-2">The Challenge:</h4>
                    <p className="text-nuvo-gray dark:text-gray-300">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-nuvo-dark dark:text-white mb-2">Our Solution:</h4>
                    <p className="text-nuvo-gray dark:text-gray-300">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-nuvo-dark dark:text-white mb-2">Results:</h4>
                    <p className="text-nuvo-gray dark:text-gray-300">{project.results}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 border-nuvo-purple text-nuvo-purple hover:bg-nuvo-purple/5 dark:border-nuvo-purple dark:text-nuvo-purple dark:hover:bg-nuvo-purple/20 w-fit"
                >
                  View Full Case Study <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
