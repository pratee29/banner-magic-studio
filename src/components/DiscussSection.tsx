import { useState } from "react";
import { Calendar, Clock, Plus, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CreateDiscussionModal from "./CreateDiscussionModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const discussItems = [
  {
    title: "Will AI-Powered Robots Replace Human Jobs?",
    speaker: "Dr. James Martinez",
    category: "Future Tech",
    date: "Today",
    time: "6 PM",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format",
  },
  {
    title: "Is AI-Generated Art the Future of Creativity?",
    speaker: "Emma Thompson",
    category: "Art & AI",
    date: "Today",
    time: "7 PM",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bg: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&auto=format",
  },
  {
    title: "Why Communication Skills Matter More Than Code",
    speaker: "Sarah Chen",
    category: "Career",
    date: "Tomorrow",
    time: "5 PM",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    bg: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format",
  },
  {
    title: "The Rise of Freelancing in India 2025",
    speaker: "Rahul Mehta",
    category: "Freelance",
    date: "Today",
    time: "8 PM",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format",
  },
];

export default function DiscussSection({ userRole }: { userRole?: string }) {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (userRole === 'CREATE') {
      navigate('/discuss');
    } else {
      navigate('/subscription');
    }
  };

  return (
    <>
      <CreateDiscussionModal open={showCreate} onClose={() => setShowCreate(false)} />
      <section className="py-24 bg-[#070B24] overflow-hidden relative">

        {/* BG IMAGE LAYER */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* GLOW BLOBS */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* FLOATING PARTICLES */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-pink-400/50"
            style={{ left: `${10 + i * 11}%`, top: `${15 + (i % 4) * 20}%` }}
            animate={{ y: [0, -22, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.5, 1] }}
            transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
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
                <MessageCircle size={18} /> DISCUSS 🤓
              </span>
              <p className="text-white/70 mt-4 text-lg">Talk, ask & share freely</p>
            </div>
            <div className="flex items-center gap-3">
              {userRole && (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCreate}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold flex items-center gap-2 transition"
                >
                  <Plus size={18} /> {userRole === 'CREATE' ? 'Create Discussion' : '🔒 Create (Upgrade)'}
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/discuss')}
                className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
              >
                View all
              </motion.button>
            </div>
          </motion.div>

          {/* SLIDER */}
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {discussItems.map((item, i) => (
                <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center">
                  <div className="w-full max-w-[360px] flex justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      whileHover={{ y: -6 }}
                      className="relative w-full max-w-[340px] aspect-square rounded-[600px_600px_1260px_600px] border-[3px] sm:border-[5px] bg-[conic-gradient(from_90deg,_#fb923c_0deg_180deg,_#ec4899_180deg_360deg)] flex items-center justify-center cursor-pointer group"
                    >
                      {/* INNER CARD */}
                      <div className="w-[85%] aspect-square rounded-full bg-[#0f172a] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden">
                        {/* BG TINT */}
                        <div
                          className="absolute inset-0 opacity-20 rounded-full"
                          style={{
                            backgroundImage: `url(${item.bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a]/90 rounded-full" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          {/* CATEGORY */}
                          <div className="flex justify-center">
                            <span className="px-3 py-1 rounded-full bg-pink-500 text-white text-xs sm:text-sm font-medium">
                              {item.category}
                            </span>
                          </div>

                          {/* CONTENT */}
                          <div className="text-center">
                            <h3 className="text-white text-sm sm:text-base font-semibold leading-snug">{item.title}</h3>
                            <div className="flex items-center justify-center gap-2 mt-3">
                              <img src={item.avatar} alt={item.speaker} className="w-6 h-6 rounded-full object-cover border border-orange-400/50" />
                              <p className="text-white/70 text-xs">with {item.speaker}</p>
                            </div>
                          </div>

                          {/* META */}
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-black text-xs">
                              <Calendar size={10} /> {item.date}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500 text-black text-xs">
                              <Clock size={10} /> {item.time}
                            </span>
                          </div>

                          {/* CTA */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full px-4 py-2 rounded-full bg-pink-500 text-white font-medium text-sm hover:opacity-90 transition"
                          >
                            Join Discussion →
                          </motion.button>
                        </div>
                      </div>

                      {/* PULSE GLOW */}
                      <motion.div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ boxShadow: "0 0 40px rgba(249,115,22,0.2)" }}
                      />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 sm:-left-10 bg-orange text-black hover:opacity-90" />
            <CarouselNext className="-right-6 sm:-right-10 bg-orange text-black hover:opacity-90" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
