
import { motion } from "framer-motion";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  additionalImages: string[];
  category: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col lg:flex-row gap-8 py-16 first:pt-8 border-b border-gray-200 last:border-none"
    >
      <div className={`lg:w-1/2 order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <div className="relative">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <img
              src={project.mainImage}
              alt={project.title}
              className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          <div className="absolute top-4 left-4 bg-black text-white text-xs font-medium py-1 px-2">
            {project.category}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          {project.additionalImages.map((image, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <img
                src={image}
                alt={`${project.title} - image ${i + 1}`}
                className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className={`lg:w-1/2 order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
        <span className="text-sm text-gray-500 mb-2">PROJECT {String(index + 1).padStart(2, '0')}</span>
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{project.title}</h3>
        <p className="text-gray-700 mb-6">{project.description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span 
                key={i}
                className="inline-block bg-gray-100 text-gray-800 text-xs font-medium py-1 px-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <motion.a
          href="#"
          className="self-start inline-flex items-center text-black font-medium group"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="ml-2 w-4 h-4 transition-transform duration-200 transform group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
