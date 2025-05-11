
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      title: "Local Cafe Website Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      tags: ["Responsive Design", "E-Commerce", "SEO"],
    },
    {
      title: "Retail Store Data Dashboard",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Data Visualization", "Python", "Analytics"],
    },
    {
      title: "Real Estate Agency Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Property Listings", "Search Functionality", "Mobile-First"],
    },
    {
      title: "Restaurant Sales Predictor",
      category: "Model Building",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["Machine Learning", "Predictive Analytics", "Data Processing"],
    },
  ];

  return (
    <section id="portfolio" className="section-padding bg-nuvo-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nuvo-dark mb-4">
            Our <span className="text-nuvo-purple">Portfolio</span>
          </h2>
          <p className="text-nuvo-gray">
            Take a look at some of our recent projects and the solutions we've delivered for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover border-0 shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-nuvo-dark">{project.title}</h3>
                  <span className="text-sm text-nuvo-purple font-medium">{project.category}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="bg-nuvo-purple/10 text-nuvo-purple border-nuvo-purple/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
