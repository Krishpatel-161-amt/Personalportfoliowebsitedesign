import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Code2, Palette, Database, Layout } from "lucide-react";
import { motion } from "motion/react";

export function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 90,
      icon: <Code2 className="h-5 w-5" />,
      color: "from-[#007BFF] to-[#0056b3]",
      category: "Frontend",
    },
    {
      name: "CSS",
      level: 85,
      icon: <Palette className="h-5 w-5" />,
      color: "from-[#007BFF] to-[#5FFBF1]",
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 80,
      icon: <Code2 className="h-5 w-5" />,
      color: "from-[#5FFBF1] to-[#007BFF]",
      category: "Frontend",
    },
    {
      name: "PHP",
      level: 75,
      icon: <Database className="h-5 w-5" />,
      color: "from-[#7C3AED] to-[#5a1eb3]",
      category: "Backend",
    },
    {
      name: "Figma",
      level: 88,
      icon: <Layout className="h-5 w-5" />,
      color: "from-[#7C3AED] to-[#5FFBF1]",
      category: "Design",
    },
  ];

  const skillCategories = [
    {
      title: "Design Tools",
      icon: <Palette className="h-6 w-6" />,
      tools: ["Figma", "Adobe XD", "Sketch", "Illustrator"],
      color: "from-[#7C3AED] to-[#5FFBF1]",
    },
    {
      title: "Frontend",
      icon: <Code2 className="h-6 w-6" />,
      tools: ["HTML5", "CSS3", "JavaScript", "React"],
      color: "from-[#007BFF] to-[#5FFBF1]",
    },
    {
      title: "Backend",
      icon: <Database className="h-6 w-6" />,
      tools: ["PHP", "MySQL", "Java", "API Integration"],
      color: "from-[#7C3AED] to-[#007BFF]",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#7C3AED] rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skillset spanning design, frontend, and backend development
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:scale-105 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-accent/50 rounded-full text-muted-foreground hover:bg-accent transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 border-border/50">
            <h3 className="mb-6">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white`}>
                        {skill.icon}
                      </div>
                      <div>
                        <div>{skill.name}</div>
                        <div className="text-muted-foreground">{skill.category}</div>
                      </div>
                    </div>
                    <span className={`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.level} className="h-2" />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 * index, duration: 1, ease: "easeOut" }}
                      className={`absolute top-0 left-0 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
