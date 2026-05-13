import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background text-white"
    >
      {/* Background split */}
      <div className="absolute inset-0 grid grid-cols-2">
        <motion.div
          className="bg-secondary"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
        <motion.div
          className="bg-background"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: [0.6, 0.01, 0.05, 0.95] }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{
          x: mouse.x,
          y: mouse.y,
        }}
      >
        {/* Subtitle */}
        <motion.p
          className="text-primary text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Frontend Software Engineer
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-7xl md:text-9xl font-display font-black mb-6 tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.4,
            duration: 0.8,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          Benson <br />
          <span className="text-primary">Mwanake</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light tracking-wide leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          React-focused engineer building clean, performant, and scalable user
          interfaces with strong attention to UX and real-world performance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-12 flex gap-6 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 0.8,
            ease: [0.6, 0.01, 0.05, 0.95],
          }}
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-primary text-background font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border border-border text-foreground font-medium tracking-wide hover:bg-secondary transition-colors"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
