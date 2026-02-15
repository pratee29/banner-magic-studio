import { motion } from "framer-motion";
import AvatarRow from "./AvatarRow";

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
          <button className="px-5 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all">
            Register
          </button>
          <button className="px-5 py-2 rounded-full border border-primary text-primary font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all">
            Login
          </button>
        </div>
      </nav>

      {/* Avatar Grid with 3D Perspective */}
      <div className="perspective-banner relative">
        <div className="curved-row space-y-4 py-4">
          <AvatarRow direction="left" speed={35} offset={0} />
          <AvatarRow direction="right" speed={40} offset={-2} />
          <AvatarRow direction="left" speed={32} offset={-4} />
          <AvatarRow direction="right" speed={38} offset={-1} />
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "var(--dark-overlay)" }}
        />

        {/* Radial glow center */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center 60%, hsla(36, 80%, 50%, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Welcome to Your
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold italic gold-text mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Online Space{" "}
          <span className="animate-sparkle inline-block">✨</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground italic tracking-widest mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Observe &nbsp; Learn &nbsp; Discuss &nbsp; Support &nbsp; Pause
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 pointer-events-auto"
        >
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 hover:scale-105 transition-all shadow-lg animate-float">
            Start a Discussion
          </button>
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 hover:scale-105 transition-all shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
            Explore Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
