import { motion } from "framer-motion";
import CurvedAvatarRow from "./CurvedAvatarRow";
import FloatingParticles from "./FloatingParticles";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-foreground font-semibold text-xl tracking-wide" style={{ fontFamily: "var(--font-body)" }}>
            Lyfex
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="btn-register">
            Register
          </button>
          <button className="btn-login">
            Login
          </button>
        </div>
      </nav>

      {/* Avatar Grid - Curved Rows */}
      <div className="relative">
        <div className="space-y-[-30px]">
          <CurvedAvatarRow direction="left" speed={45} curveIntensity={35} rowIndex={0} />
          <CurvedAvatarRow direction="right" speed={50} curveIntensity={30} rowIndex={1} />
          <CurvedAvatarRow direction="left" speed={42} curveIntensity={35} rowIndex={2} />
          <CurvedAvatarRow direction="right" speed={48} curveIntensity={30} rowIndex={3} />
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none banner-overlay" />

        {/* Center radial glow */}
        <div className="absolute inset-0 z-10 pointer-events-none center-glow" />

        {/* Vignette edges */}
        <div className="absolute inset-0 z-10 pointer-events-none vignette" />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ background: "var(--gold-gradient)" }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 drop-shadow-lg"
          style={{ fontFamily: "var(--font-display)", textShadow: "0 0 40px hsla(36, 80%, 50%, 0.15)" }}
        >
          Welcome to Your
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold italic gold-text mb-3 drop-shadow-lg"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Online Space{" "}
          <motion.span
            animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block"
          >
            ✨
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground italic tracking-[0.3em] mb-10"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Observe &nbsp; Learn &nbsp; Discuss &nbsp; Support &nbsp; Pause
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-5 pointer-events-auto"
        >
          <button className="btn-hero animate-float">
            Start a Discussion
          </button>
          <button className="btn-hero animate-float" style={{ animationDelay: "0.5s" }}>
            Explore Now
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
      />
    </section>
  );
};

export default HeroBanner;
