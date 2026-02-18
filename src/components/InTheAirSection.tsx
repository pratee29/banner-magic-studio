import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const inTheAirItems = [
  { rank: 1, title: "Motion Graphics", description: "Create stunning animations", category: "Discussion", isLive: true, bg: "https://images.unsplash.com/photo-1574717024453-354056acd7f5?w=400&auto=format" },
  { rank: 2, title: "UX UI Design", description: "User centered design", category: "Learning", isLive: false, bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format" },
  { rank: 3, title: "Full Stack Dev", description: "Build complete apps", category: "Discussion", isLive: true, bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format" },
  { rank: 4, title: "Data Science", description: "ML & Python tricks", category: "Learning", isLive: false, bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&auto=format" },
  { rank: 5, title: "Public Speaking", description: "Own every room", category: "Skill", isLive: true, bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format" },
  { rank: 6, title: "Freelancing 2025", description: "Earn from anywhere", category: "Career", isLive: false, bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format" },
  { rank: 7, title: "AI Tools", description: "Work smarter daily", category: "Tech", isLive: true, bg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&auto=format" },
  { rank: 8, title: "Investing Basics", description: "Grow your money", category: "Finance", isLive: false, bg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format" },
];

export default function InTheAirSection() {
  return (
    <section className="py-24 bg-[#0A0F2D] overflow-hidden relative">
      {/* BG */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-500/8 rounded-full blur-[110px] pointer-events-none" />

      {/* FLOATING PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-orange-400/50"
          style={{ left: `${12 + i * 14}%`, top: `${15 + (i % 3) * 28}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-start justify-between mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#2A1E14] border border-orange-400/30 text-orange-400 font-semibold">
              <TrendingUp size={18} /> IN THE AIR ☁️
            </span>
            <p className="text-white/70 mt-4 text-lg">What everyone is talking about right now</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
          >
            View all
          </motion.button>
        </motion.div>

        {/* SLIDER */}
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {inTheAirItems.map((item, i) => (
              <CarouselItem key={i} className="basis-1/2 sm:basis-1/3 lg:basis-1/4 flex justify-center px-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="relative w-full max-w-[200px] aspect-[2/3] rounded-[100px] overflow-hidden group cursor-pointer"
                >
                  {/* BG IMAGE */}
                  <img
                    src={item.bg}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#1a0a2e]/60 to-[#4A2E24]/90" />
                  <div className="absolute inset-0 rounded-[100px] ring-1 ring-orange-400/50 group-hover:ring-orange-400 transition-all duration-500" />

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col items-center text-center px-4 py-6">
                    {/* RANK */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white flex items-center justify-center text-lg font-bold shadow-lg"
                    >
                      {item.rank}
                    </motion.div>

                    {/* CATEGORY */}
                    <span className="mt-3 px-2 py-0.5 rounded-full bg-orange-500/30 text-orange-300 text-xs border border-orange-500/30">
                      {item.category}
                    </span>

                    {/* TITLE */}
                    <h3 className="mt-4 text-white text-sm font-bold leading-snug">{item.title}</h3>
                    <p className="mt-1 text-white/60 text-xs">{item.description}</p>

                    {/* LIVE TAG */}
                    {item.isLive && (
                      <motion.span
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="mt-auto px-3 py-1 rounded-full bg-orange-500 text-black text-xs font-bold flex items-center gap-1"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        LIVE
                      </motion.span>
                    )}
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-8 bg-orange-500 text-black hover:bg-orange-400" />
          <CarouselNext className="-right-8 bg-orange-500 text-black hover:bg-orange-400" />
        </Carousel>
      </div>
    </section>
  );
}
