import { motion } from "framer-motion";
import { useRef } from "react";
import { Code2, Layers, Zap, TestTube } from "lucide-react";

const approaches = [
  {
    icon: Code2,
    title: "Component-Driven",
    description:
      "I build scalable, reusable component architectures in React with clean separation of concerns and maintainable code.",
  },
  {
    icon: Zap,
    title: "Performance-First",
    description:
      "I optimize rendering, improve responsiveness, and build interfaces that feel smooth across devices.",
  },
  {
    icon: Layers,
    title: "API Integration",
    description:
      "REST API integration with loading states, error handling, and real-world frontend architecture.",
  },
  {
    icon: TestTube,
    title: "Quality & Testing",
    description:
      "Accessible interfaces, scalable systems, and testing-focused frontend development.",
  },
];

const milestones = [
  { label: "Projects Built", value: "5+" },
  { label: "Components Created", value: "50+" },
  { label: "Frontend Hours", value: "1000+" },
  { label: "Technologies Learned", value: "15+" },
];

const About = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          How I Build
          <span className="text-primary"> ✦</span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Frontend-focused software engineer building modern React applications
          with strong UI systems, smooth interactions, API integrations, and
          performance-focused architecture.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {approaches.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative p-8 bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -4 }}
            >
              <item.icon className="w-6 h-6 text-primary mb-4" />

              <h3 className="text-xl font-display font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>

              {/* Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-primary"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Milestones */}
        <motion.div
          className="flex flex-wrap gap-12 md:gap-20 justify-center py-12 border-y border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {milestones.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <p className="text-4xl md:text-5xl font-display font-black text-primary mb-2">
                {stat.value}
              </p>

              <p className="text-sm text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
