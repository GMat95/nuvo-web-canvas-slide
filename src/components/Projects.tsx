
import { useLanguage } from "@/hooks/useLanguage";
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const { t } = useLanguage();

  const projects: ProjectProps[] = [
    {
      id: "ecommerce-platform",
      title: t("Minimalistična E-trgovinska Platforma"),
      description: t("Elegantna črno-bela e-trgovinska platforma z osredotočenostjo na tipografijo in bel prostor. Minimalistični dizajn poudarja fotografijo izdelkov in ustvarja elegantno nakupovalno izkušnjo."),
      mainImage: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1974&auto=format&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1974&auto=format&fit=crop"
      ],
      category: "E-Commerce",
      technologies: ["React", "Next.js", "TailwindCSS", "Stripe", "Sanity"]
    },
    {
      id: "photography-portfolio",
      title: t("Monohromatski Portfelj za Fotografski Studio"),
      description: t("Monohromatska portfeljska spletna stran za profesionalni fotografski studio. Dizajn uporablja kontrast in razmike za ustvarjanje galerijske izkušnje, ki fotografiji omogoča, da zasije."),
      mainImage: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1974&auto=format&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?q=80&w=1974&auto=format&fit=crop"
      ],
      category: "Portfolio",
      technologies: ["Gatsby", "GraphQL", "GSAP", "Framer Motion", "Vercel"]
    },
    {
      id: "architectural-identity",
      title: t("Korporativna Identiteta Arhitekturnega Podjetja"),
      description: t("Celovita blagovna identiteta in spletna stran za sodobno arhitekturno podjetje. Dizajn poudarja čiste linije, negativni prostor in arhitekturne elemente, ki odražajo estetsko filozofijo podjetja."),
      mainImage: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=1974&auto=format&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1483653085484-eb63c9f02547?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?q=80&w=1974&auto=format&fit=crop"
      ],
      category: "Branding",
      technologies: ["Figma", "Adobe Suite", "WordPress", "Three.js", "PHP"]
    },
    {
      id: "budget-tracking",
      title: t("Minimalistična Aplikacija za Sledenje Proračuna"),
      description: t("Čista, osredotočena aplikacija za sledenje proračuna, zasnovana z mislijo na preprostost. Črno-beli vmesnik z minimalnimi barvnimi poudarki pomaga uporabnikom osredotočiti se na njihove finančne podatke brez motenj."),
      mainImage: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?q=80&w=1974&auto=format&fit=crop",
      additionalImages: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1974&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1974&auto=format&fit=crop"
      ],
      category: "Web Application",
      technologies: ["React", "TypeScript", "Redux", "Firebase", "ChartJS"]
    }
  ];

  return (
    <section id="projekti" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            {t("Projects")}
          </h2>
          <p className="text-gray-700">
            {t("Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.")}
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
