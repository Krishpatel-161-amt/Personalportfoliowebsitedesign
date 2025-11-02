import { Card } from "./ui/card";
import { GraduationCap, Briefcase, Target } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const stats = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      label: "Education",
      value: "B.Tech at Uka Tarsadia University",
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
    <section id="about" className="relative overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#007BFF] to-[#7C3AED] clip-diagonal"></div>
        <div className="w-full md:w-1/2 bg-background"></div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-stretch gap-12">
        {/* Left: Image & Name */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center justify-center text-white text-center md:text-left"
        >
          <div className="relative mb-8">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-8 ring-white/20 shadow-2xl">
              <img
                src="https://i.ibb.co/Jw1jBKRd/jk.jpg"
                alt="Patel Krish"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="text-4xl font-bold mb-2">Patel Krish</h3>
          <p className="text-lg font-medium opacity-90">UI/UX Designer</p>
          <div className="mt-4 flex justify-center md:justify-start gap-4 text-sm">
            <a href="#" className="hover:underline">LinkedIn</a>
            <span>•</span>
            <a href="#" className="hover:underline">Behance</a>
            <span>•</span>
            <a href="#" className="hover:underline">GitHub</a>
          </div>
        </motion.div>

        {/* Right: About Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-white/80 backdrop-blur-xl p-10 rounded-2xl shadow-lg"
        >
          <h2 className="mb-6">
            <span className="bg-gradient-to-r from-[#007BFF] via-[#7C3AED] to-[#5FFBF1] bg-clip-text text-transparent text-4xl font-bold">
              About Me
            </span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Hello! I'm Patel Krish, a UI/UX Designer with beginner-level experience and a solid grounding
            in technology and design. My focus is crafting intuitive, delightful user experiences that
            balance functionality with aesthetics.
          </p>

          <div className="space-y-3 bg-card/50 p-6 rounded-xl border border-border/50">
            <h4 className="text-xl font-medium flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h4>
            <p className="text-foreground">
              Currently pursuing a <span className="font-semibold">B.Tech degree</span> at{" "}
              <span className="font-semibold text-primary">Uka Tarsadia University</span> (2024–2028).
            </p>
          </div>

          <p className="text-muted-foreground text-lg leading-relaxed mt-6">
            I love bringing designs/ideas to life by building websites with HTML, CSS, and JavaScript.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index + 0.2,
                  duration: 0.6,
                }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 group">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                  <div className="text-lg font-medium">{stat.value}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
