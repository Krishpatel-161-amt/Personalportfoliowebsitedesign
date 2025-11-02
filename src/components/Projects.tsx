import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "InvoiceNow",
      description: "A comprehensive POS and inventory management system with modern UI, analytics dashboard, and responsive design for seamless business operations.",
      tags: ["PHP", "MySQL", "JavaScript", "Responsive"],
      features: [
        "Modern, intuitive UI",
        "Analytics dashboard",
        "Inventory tracking",
        "Responsive design",
      ],
      image: "https://i.ibb.co/xq14x4Vd/sumup-X9-ONq8p-ARi-U-unsplash.jpg",
      gradient: "from-[#007BFF] to-[#5FFBF1]",
    },
    {
      title: "Student Management System",
      description: "Desktop application built with Java Swing featuring CRUD operations, record sorting, and a clean, user-friendly layout for educational institutions.",
      tags: ["Java", "Swing", "Desktop", "CRUD"],
      features: [
        "CRUD operations",
        "Record sorting & filtering",
        "Clean UI layout",
        "Data management",
      ],
      image: "https://i.ibb.co/LhNWMgmQ/Screenshot-2025-11-02-194255.png",
      gradient: "from-[#7C3AED] to-[#5FFBF1]",
    },
    {
      title: "Subbox",
      description: "Mystery box e-commerce platform with dynamic product filters, shopping cart system, and engaging reveal animations for an exciting shopping experience.",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      features: [
        "Product filters",
        "Shopping cart system",
        "Reveal animations",
        "E-commerce features",
      ],
      image: "https://i.ibb.co/M5QFJBrM/Screenshot-2025-11-02-194531.png",
      gradient: "from-[#5FFBF1] to-[#007BFF]",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-[#007BFF] via-[#7C3AED] to-[#5FFBF1] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#7C3AED] rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in UI/UX design and development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 group h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 space-y-2 flex-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-accent/50 hover:bg-accent"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button
            variant="outline"
            className="rounded-full px-8 border-2 hover:bg-accent group"
          >
            <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
