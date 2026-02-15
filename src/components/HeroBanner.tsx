import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AvatarRow from "./AvatarRow";

const HeroBanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 12,
        y: (e.clientY / window.innerHeight - 0.5) * 8,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="relative z-40 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-foreground font-semibold text-xl tracking-wide font-body">
            Lyfex
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all">
            Register
          </button>
          <button className="px-5 py-2 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all">
            Login
          </button>
        </div>
      </nav>

      {/* === THREE LAYER BANNER === */}
      <div className="relative" style={{ minHeight: "calc(100vh - 72px)" }}>

        {/* LAYER 1 – TOP CURVED IMAGE STRIP */}
        <motion.div
          className="layer-strip layer-strip-top relative z-10"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="curve-top">
            <AvatarRow direction="left" speed={45} offset={0} cardSize={{ width: "150px", height: "180px" }} />
          </div>
          {/* Edge blur masks */}
          <div className="edge-blur-left" />
          <div className="edge-blur-right" />
        </motion.div>

        {/* LAYER 2 – MIDDLE ROW (flanking center) */}
        <motion.div
          className="layer-strip layer-strip-mid relative z-10 my-2"
          style={{
            transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <AvatarRow direction="right" speed={50} offset={-1} cardSize={{ width: "150px", height: "180px" }} />
          <div className="edge-blur-left" />
          <div className="edge-blur-right" />
        </motion.div>

        {/* LAYER 3 – BOTTOM CURVED IMAGE STRIP */}
        <motion.div
          className="layer-strip layer-strip-bottom relative z-10"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <div className="curve-bottom">
            <AvatarRow direction="left" speed={42} offset={-2} cardSize={{ width: "150px", height: "180px" }} />
          </div>
          <div className="edge-blur-left" />
          <div className="edge-blur-right" />
        </motion.div>

        {/* CENTER GRADIENT OVERLAY */}
        <div className="absolute inset-0 z-20 pointer-events-none center-gradient-overlay" />

        {/* Radial glow behind text */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 50% 50%, hsla(280, 60%, 30%, 0.5) 0%, hsla(36, 80%, 50%, 0.12) 40%, transparent 70%)",
          }}
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-1 font-display drop-shadow-lg"
          >
            Welcome to Your
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold italic gold-text mb-3 font-display"
          >
            Online Space{" "}
            <span className="animate-sparkle inline-block text-3xl md:text-5xl">✨</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-muted-foreground italic tracking-[0.3em] mb-10 font-display"
          >
            Observe &nbsp; Learn &nbsp; Discuss &nbsp; Support &nbsp; Pause
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
          >
            <button className="hero-btn-primary">
              Start a Discussion
            </button>
            <button className="hero-btn-secondary">
              Explore Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
