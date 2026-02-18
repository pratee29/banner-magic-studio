import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const learnItems = [
  {
    title: "Motion Graphics",
    subtitle: "Create stunning animations",
    instructor: "Rahul Mehta",
    category: "Graphics",
    episode: "Ep: 1",
    gradient: "from-[#F7B733] via-[#E89A3C] to-[#8E3A59]",
    bg: "https://images.unsplash.com/photo-1574717024453-354056acd7f5?w=800&auto=format",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Full Stack Dev",
    subtitle: "React + Node.js mastery",
    instructor: "Priya Singh",
    category: "Development",
    episode: "Ep: 3",
    gradient: "from-[#667eea] via-[#764ba2] to-[#f093fb]",
    bg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "UI/UX Design",
    subtitle: "Figma to production",
    instructor: "Alex Rivera",
    category: "Design",
    episode: "Ep: 2",
    gradient: "from-[#11998e] via-[#38ef7d] to-[#11998e]",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    title: "Data Science",
    subtitle: "Python & ML basics",
    instructor: "Sarah Chen",
    category: "Data",
    episode: "Ep: 5",
    gradient: "from-[#FC466B] via-[#3F5EFB] to-[#FC466B]",
    bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    title: "Public Speaking",
    subtitle: "Own the stage",
    instructor: "David Kim",
    category: "Soft Skills",
    episode: "Ep: 1",
    gradient: "from-[#F7B733] via-[#E89A3C] to-[#8E3A59]",
    bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

export default function LearnSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#0A0F2D] overflow-hidden relative">
      {/* BG GLOW */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* FLOATING PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/40"
          style={{ left: `${10 + i * 15}%`, top: `${25 + (i % 3) * 22}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, delay: i * 0.35 }}
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
              <BookOpen size={18} /> LEARN 🤓
            </span>
            <p className="text-white/70 mt-4 text-lg">Learn casually, one sip at a time.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate('/learn')}
            className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
          >
            View all
          </motion.button>
        </motion.div>

        {/* SLIDER */}
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {learnItems.map((item, i) => (
              <CarouselItem key={i} className="lg:basis-1/3 md:basis-1/2 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  {/* INSTRUCTOR BADGE */}
                  <div className="flex items-center gap-2 mb-3 px-2">
                    <img src={item.avatar} alt={item.instructor} className="w-8 h-8 rounded-full object-cover border-2 border-orange-400/50" />
                    <span className="flex-1 text-center px-4 py-1.5 rounded-full bg-orange-400 text-black text-sm font-semibold">
                      With {item.instructor}
                    </span>
                  </div>

                  {/* CARD */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`relative h-[220px] rounded-[28px] overflow-hidden group cursor-pointer`}
                  >
                    {/* BG IMAGE */}
                    <img
                      src={item.bg}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* GRADIENT */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-5">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-yellow-400 text-black text-xs font-bold">{item.category}</span>
                        <span className="px-3 py-1 rounded-full bg-yellow-500/80 text-black text-xs font-bold">↗ {item.episode}</span>
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-bold">{item.title}</h3>
                        <p className="text-white/70 mt-1 text-sm">{item.subtitle}</p>
                      </div>
                    </div>

                    {/* HOVER SHINE */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)" }}
                    />
                  </motion.div>
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
