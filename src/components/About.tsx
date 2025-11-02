import { Card } from "./ui/card";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const stats = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      label: "Education",
      value: "B.Tech Student",
      color: "from-[#007BFF] to-[#0056b3]",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      label: "Experience",
      value: "Beginner Level",
      color: "from-[#7C3AED] to-[#5a1eb3]",
    },
    {
      icon: <Target className="h-6 w-6" />,
      label: "Focus",
      value: "UI/UX Design",
      color: "from-[#5FFBF1] to-[#007BFF]",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
              About Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#007BFF] to-[#7C3AED] rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://i.ibb.co/PvFtQPQn/jk.jpg"
                alt="UI/UX Designer Workspace"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF]/30 to-[#7C3AED]/30"></div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007BFF] to-[#7C3AED] flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-muted-foreground">
                    Studying at
                  </div>
                  <div>Uka Tarsadia</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3>Hello! I'm Patel Krish</h3>
              <p className="text-muted-foreground">
                I'm Patel Krish, a UI/UX Designer with
                beginner-level experience and a background in
                technology and design. Currently studying toward
                a B.Tech degree at Uka Tarsadia University
                (2024–2025). I focus on creating intuitive,
                engaging interfaces.
              </p>
              <p className="text-muted-foreground">
                My passion lies in bridging the gap between
                users and technology through thoughtful design.
                I believe that great design is not just about
                aesthetics, but about solving real problems and
                creating meaningful experiences.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.6,
                  }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow border-border/50">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-3`}
                    >
                      {stat.icon}
                    </div>
                    <div className="text-muted-foreground mb-1">
                      {stat.label}
                    </div>
                    <div>{stat.value}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}