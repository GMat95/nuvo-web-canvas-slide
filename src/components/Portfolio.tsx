
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    category: string;
    image: string;
    tags: string[];
    description: string;
    challenge: string;
    solution: string;
    results: string;
    additionalImages: string[];
  }>(null);

  const projects = [
    {
      title: "Local Cafe Website Redesign",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      tags: ["Responsive Design", "E-Commerce", "SEO"],
      description: "A complete redesign of the website for a local cafe to improve online ordering and customer engagement.",
      challenge: "The cafe's old website wasn't mobile-friendly and lacked online ordering capabilities, resulting in lost sales.",
      solution: "We created a modern, responsive website with an integrated online ordering system and menu management.",
      results: "Online orders increased by 45% in the first month, with improved customer satisfaction and reduced phone orders.",
      additionalImages: [
        "https://images.unsplash.com/photo-1541167760496-1628856ab772",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56"
      ]
    },
    {
      title: "Retail Store Data Dashboard",
      category: "Data Analysis",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Data Visualization", "Python", "Analytics"],
      description: "A custom analytics dashboard for a growing retail chain to track sales, inventory, and customer trends.",
      challenge: "The retailer struggled with making data-driven decisions due to scattered information across multiple systems.",
      solution: "We built a centralized dashboard using Python and modern visualization tools to aggregate and present key metrics.",
      results: "Management reduced inventory costs by 15% and identified high-performing product categories to focus marketing efforts.",
      additionalImages: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4",
        "https://images.unsplash.com/photo-1543286386-2e659306cd6c"
      ]
    },
    {
      title: "Real Estate Agency Website",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Property Listings", "Search Functionality", "Mobile-First"],
      description: "A comprehensive web platform for a real estate agency featuring advanced property search and agent profiles.",
      challenge: "The agency needed a more effective way to showcase properties and connect potential buyers with agents.",
      solution: "We developed a feature-rich website with detailed property listings, virtual tours, and integrated contact forms.",
      results: "The agency reported a 60% increase in qualified leads and reduced time to sell properties by 25%.",
      additionalImages: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      ]
    },
    {
      title: "Restaurant Sales Predictor",
      category: "Model Building",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      tags: ["Machine Learning", "Predictive Analytics", "Data Processing"],
      description: "A machine learning model that helps restaurant owners predict busy periods and optimize staff scheduling.",
      challenge: "The restaurant faced staffing issues, with either too many or too few employees during varying business hours.",
      solution: "We created a predictive model analyzing historical sales, weather patterns, and local events to forecast customer volume.",
      results: "The restaurant reduced labor costs by 18% while improving customer service during peak hours.",
      additionalImages: [
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
        "https://images.unsplash.com/photo-1567620832903-9fc6debc209f"
      ]
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
            <Card 
              key={index} 
              className="overflow-hidden card-hover border-0 shadow-md cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedProject(project)}
            >
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
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-4 text-nuvo-purple flex items-center gap-1 hover:bg-nuvo-purple/10"
                >
                  View details <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge className="bg-nuvo-purple text-white">{selectedProject.category}</Badge>
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-nuvo-purple/10 text-nuvo-purple border-nuvo-purple/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </DialogHeader>

            <Tabs defaultValue="overview" className="mt-4">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <DialogDescription className="text-lg mb-4">
                  {selectedProject.description}
                </DialogDescription>
                <div className="mt-6">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="details">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">The Challenge</h4>
                    <p className="text-gray-700">{selectedProject.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Our Solution</h4>
                    <p className="text-gray-700">{selectedProject.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Results</h4>
                    <p className="text-gray-700">{selectedProject.results}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="gallery">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[selectedProject.image, ...selectedProject.additionalImages].map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`${selectedProject.title} - Image ${index + 1}`} 
                        className="w-full h-auto transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default Portfolio;
