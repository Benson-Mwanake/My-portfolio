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
    title: "MobiBridge",
    category: "Healthcare Logistics Coordination Platform",
    image: "/images/mobibridge.png",
    description:
      "Designed and built the public-facing platform for MobiBridge, a healthcare logistics coordination system focused on mobility aid delivery. The project is currently in the research and validation stage, exploring workflows that connect clinics, NGOs, rehabilitation programs, and field teams through a shared operational process.",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "UI/UX Design",
      "System Architecture",
      "Workflow Design",
      "Healthcare Logistics",
    ],
    color: "from-emerald-500/35 via-teal-500/20 to-cyan-500/10",
    github: "https://github.com/Benson-Mwanake/MobiBridge.git",
    live: "https://mobibridge.co.ke",
  },
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
    color: "from-orange-500/40 via-amber-500/20 to-red-500/10",
    github: "https://github.com/Benson-Mwanake/Afya-ke",
    live: "https://afya-ke.netlify.app/",
  },
  {
    title: "GadgetReview",
    category: "Tech Product Review Platform",
    image: "/images/afyalink.png",
    description:
      "Responsive CRUD interface with authentication, protected routes, and dynamic filtering.",
    tech: ["React", "JavaScript", "JWT Auth", "REST APIs", "Python"],
    color: "from-cyan-400/35 via-blue-500/20 to-indigo-500/10",
    github: "https://github.com/Benson-Mwanake/GadgetReview",
    live: "https://gadgetreviewsite.netlify.app/",
  },
  {
    title: "GitHub Search App",
    category: "Developer Profile Finder",
    image: "/images/afyalink.png",
    description:
      "GitHub API search tool with debounced queries and real-time repository display.",
    tech: ["JavaScript", "GitHub API", "HTML5", "CSS3"],
    color: "from-fuchsia-500/35 via-violet-500/20 to-purple-500/10",
    github: "https://github.com/Benson-Mwanake/github-search-app",
    live: "https://benson-mwanake.github.io/github-search-app/",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const isAutoScrolling = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  // smooth scroll
  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;

    const child = container.children[index];
    if (!child) return;

    isAutoScrolling.current = true;

    setCurrentIndex(index);

    child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 500);
  };

  // track centered card
  const handleScroll = () => {
    if (isAutoScrolling.current) return;

    const container = scrollRef.current;
    if (!container) return;

    const children = Array.from(container.children);

    let closestIndex = 0;
    let closestDistance = Infinity;

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();

      const screenCenter = window.innerWidth / 2;
      const childCenter = rect.left + rect.width / 2;

      const distance = Math.abs(screenCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  // next
  const next = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToIndex(nextIndex);
  };

  // prev
  const prev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    scrollToIndex(prevIndex);
  };

  return (
    <section className="relative py-32 overflow-hidden" id="projects">
      {/* Header */}
      <div className="px-6 mb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tight">
          Selected Work
        </h2>

        <p className="text-muted-foreground text-lg mt-5 max-w-xl">
          Real projects shipped to production — built with React.
        </p>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex items-center gap-10
          overflow-x-auto scroll-smooth
          no-scrollbar
          px-[14vw]
        "
      >
        {projects.map((project, index) => {
          const isActive = currentIndex === index;

          return (
            <div
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                flex-shrink-0 cursor-pointer
                w-[85vw] sm:w-[70vw] lg:w-[38rem]
                transition-all duration-700 ease-out
                ${
                  isActive ? "scale-100 opacity-100" : "scale-[0.88] opacity-30"
                }
              `}
            >
              <motion.div
                whileHover={{
                  y: isActive ? -8 : -2,
                }}
                transition={{ duration: 0.35 }}
                className="
                  relative overflow-hidden
                  border border-border
                  bg-secondary
                  h-[36rem]
                "
              >
                {/* gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color}`}
                />

                {/* cinematic depth */}
                <div className="absolute inset-0 bg-black/35" />

                {/* radial spotlight */}
                <div
                  className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_45%)]
                  "
                />

                {/* glow */}
                <div
                  className={`
                    absolute -inset-10 blur-3xl opacity-40
                    bg-gradient-to-br ${project.color}
                  `}
                />

                {/* content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  {/* top actions */}
                  <div className="flex justify-end gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        w-11 h-11
                        border border-white/10
                        bg-black/30 backdrop-blur-md
                        flex items-center justify-center
                        hover:border-primary
                        hover:text-primary
                        transition-all duration-300
                      "
                    >
                      <Computer className="w-4 h-4" />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        w-11 h-11
                        border border-white/10
                        bg-black/30 backdrop-blur-md
                        flex items-center justify-center
                        hover:border-primary
                        hover:text-primary
                        transition-all duration-300
                      "
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* bottom text */}
                  <div>
                    <p className="text-primary text-xs uppercase tracking-[0.25em] mb-3">
                      {project.category}
                    </p>

                    <h3 className="text-4xl font-black mb-5 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="
                            px-4 py-2
                            text-sm
                            border border-white/10
                            bg-black/20 backdrop-blur-md
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* active spotlight */}
                {isActive && (
                  <div
                    className="
                      absolute inset-0
                      ring-1 ring-white/10
                    "
                  />
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-6 mt-14">
        <button
          onClick={prev}
          className="
            w-12 h-12
            border border-border
            flex items-center justify-center
            hover:border-primary
            hover:text-primary
            transition-all duration-300
          "
        >
          <ChevronLeft />
        </button>

        <p className="text-muted-foreground text-sm tracking-widest">
          {currentIndex + 1} / {projects.length}
        </p>

        <button
          onClick={next}
          className="
            w-12 h-12
            border border-border
            flex items-center justify-center
            hover:border-primary
            hover:text-primary
            transition-all duration-300
          "
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
