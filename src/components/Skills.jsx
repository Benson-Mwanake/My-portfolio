import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      "React",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "TypeScript",
      "Responsive Design",
    ],
  },
  {
    title: "State & Data",
    skills: [
      "REST API Integration",
      "React Context API",
      "Async JavaScript",
      "API Handling",
    ],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "React Testing Library", "Debugging", "Code Quality"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git / GitHub", "VS Code", "Postman", "Netlify / Render", "npm"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-32 px-6 relative bg-background text-foreground"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-6xl md:text-8xl font-black tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>

        <motion.p
          className="text-muted-foreground max-w-xl mt-6 mb-20 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A focused frontend engineering stack built through real projects,
          performance-first thinking, and production experience.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group"
            >
              {/* Category Title */}
              <h3 className="text-xl font-display font-bold mb-6 text-primary tracking-wide">
                {cat.title}
              </h3>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.1 + j * 0.03,
                      duration: 0.4,
                    }}
                    className="
                      px-4 py-2 
                      bg-secondary/60 
                      border border-border 
                      text-sm 
                      rounded-full 
                      text-muted-foreground
                      hover:text-foreground 
                      hover:border-primary 
                      hover:bg-primary/10 
                      transition-all duration-300
                      backdrop-blur-sm
                    "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
