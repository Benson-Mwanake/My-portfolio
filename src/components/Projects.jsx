import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Computer,
} from "lucide-react";

const projects = [
  {
    title: "AfyaLink KE",
    category: "Healthcare Dashboard Platform",
    image: "/images/afyalink.png",
    description:
      "Built a modern healthcare platform that streamlines patient, provider, and admin workflows through responsive dashboards and intuitive real-time interfaces.",
    tech: [
      "React",
      "JavaScript",
      "CSS3",
      "Context API",
      "REST APIs",
      "Jest",
      "Tailwind CSS",
    ],
    color: "from-primary/20 to-orange-600/10",
    github: "#",
    live: "#",
  },
  {
    title: "GadgetReview",
    category: "Tech Product Review Platform",
    image: "/images/afyalink.png",
    description:
      "Responsive CRUD interface with authentication, protected routes, and dynamic filtering.",
    tech: ["React", "JavaScript", "JWT Auth", "REST APIs", "Python"],
    color: "from-blue-500/15 to-cyan-500/10",
    github: "#",
    live: "#",
  },
  {
    title: "GitHub Search App",
    category: "Developer Profile Finder",
    image: "/images/afyalink.png",
    description:
      "GitHub API search tool with debounced queries and real-time repository display.",
    tech: ["JavaScript", "GitHub API", "HTML5", "CSS3"],
    color: "from-purple-500/15 to-pink-500/10",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🔥 smooth scroll helper
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index];
    if (!child) return;

    setCurrentIndex(index);

    child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  // 🔥 stable scroll tracking (no fighting with click updates)
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children);

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const center = window.innerWidth / 2;
      const childCenter = rect.left + rect.width / 2;

      const distance = Math.abs(center - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  const next = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToIndex(nextIndex);
  };

  const prev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    scrollToIndex(prevIndex);
  };

  return (
    <section className="relative py-32 overflow-hidden" id="projects">
      {/* Header */}
      <div className="px-6 mb-20">
        <h2 className="text-6xl md:text-8xl font-black">Selected Work</h2>
        <p className="text-muted-foreground text-lg mt-5 max-w-xl">
          Real projects shipped to production - built with React.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex items-center gap-8
          overflow-x-auto scroll-smooth
          no-scrollbar
          px-[10vw]
        "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`
              flex-shrink-0 cursor-pointer
              w-[80vw] sm:w-[60vw] lg:w-[32rem]
              transition-all duration-500 ease-out

              ${
                currentIndex === index
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-40 hover:opacity-70"
              }
            `}
          >
            <motion.div
              className="relative aspect-square bg-secondary border border-border overflow-hidden group"
              whileHover={{ scale: 1.02, y: -6 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`}
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                {/* icons */}
                <div className="flex justify-end gap-3">
                  <a className="w-10 h-10 border flex items-center justify-center">
                    <Computer className="w-4 h-4" />
                  </a>
                  <a className="w-10 h-10 border flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* text */}
                <div>
                  <p className="text-primary text-sm uppercase tracking-widest mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-3xl font-black mb-4">{project.title}</h3>

                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 border border-border text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-10">
        <button
          onClick={prev}
          className="w-12 h-12 border flex items-center justify-center"
        >
          <ChevronLeft />
        </button>

        <p className="text-muted-foreground">
          {currentIndex + 1} / {projects.length}
        </p>

        <button
          onClick={next}
          className="w-12 h-12 border flex items-center justify-center"
        >
          <ChevronRight />
        </button>
      </div>

      {/* hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
