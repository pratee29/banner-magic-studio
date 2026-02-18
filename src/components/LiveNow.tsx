import { useState } from "react";
import { Users, Plus, Radio } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CreateLiveSessionModal from "./CreateLiveSessionModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const liveRooms = [
  {
    title: "Python",
    subtitle: "Coding",
    host: "Sarah Chen",
    users: 124,
    mode: "Discussion",
    gradient: "from-[#E6B800] via-[#E89A3C] to-[#D66B6B]",
    bg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format",
  },
  {
    title: "UI Design",
    subtitle: "Workshop",
    host: "Alex Rivera",
    users: 89,
    mode: "Learning",
    gradient: "from-[#7F00FF] via-[#9F44FF] to-[#C77DFF]",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
  },
  {
    title: "Public",
    subtitle: "Speaking",
    host: "Priya Sharma",
    users: 156,
    mode: "Practice",
    gradient: "from-[#FF512F] via-[#F09819] to-[#FFD200]",
    bg: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format",
  },
  {
    title: "Android Dev",
    subtitle: "Live Coding",
    host: "David Kim",
    users: 98,
    mode: "Observe",
    gradient: "from-[#11998e] via-[#38ef7d] to-[#11998e]",
    bg: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=800&auto=format",
  },
];

export default function LiveNow({ userRole }: { userRole?: string }) {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (userRole === 'CREATE') {
      navigate('/live-sessions');
    } else {
      navigate('/subscription');
    }
  };

  return (
    <>
      <CreateLiveSessionModal open={showCreate} onClose={() => setShowCreate(false)} />
      <section className="py-24 bg-[#070B24] overflow-hidden relative">

        {/* BG GLOW BLOBS */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* FLOATING DOTS */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-orange-400/40"
            style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="flex items-center justify-between mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-3 h-3 bg-red-500 rounded-full"
                />
                <h2 className="text-4xl font-bold text-white">
                  Live <span className="text-orange-400">Now</span>
                </h2>
              </div>
              <p className="text-white/60 text-lg">People talking. Ideas flowing. No scripts.</p>
            </div>

            <div className="flex items-center gap-3">
              {userRole && (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCreate}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold flex items-center gap-2 transition"
                >
                  <Plus size={18} /> {userRole === 'CREATE' ? 'Create Live Session' : '🔒 Create (Upgrade)'}
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/live-sessions')}
                className="px-6 py-2 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
              >
                View all
              </motion.button>
            </div>
          </motion.div>

          {/* CAROUSEL */}
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {liveRooms.map((room, i) => (
                <CarouselItem key={i} className="basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center">
                  <div className="w-full max-w-[380px]">
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.12 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="relative group cursor-pointer rounded-3xl overflow-hidden"
                      style={{ height: "200px" }}
                    >
                      {/* BG IMAGE */}
                      <img
                        src={room.bg}
                        alt={room.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* GRADIENT OVER IMAGE */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${room.gradient} opacity-75`} />
                      <div className="absolute inset-0 bg-black/30" />

                      {/* CONTENT */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-5">
                        <div className="flex items-center justify-between">
                          <motion.span
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center gap-1.5 text-xs bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white font-semibold"
                          >
                            <motion.span
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                              className="w-2 h-2 bg-yellow-300 rounded-full"
                            />
                            LIVE
                          </motion.span>
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                            {room.mode}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-white text-3xl font-bold leading-tight">{room.title}</h3>
                          <p className="text-white/80 text-sm mt-1">{room.subtitle}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-white/80 text-sm">by {room.host}</span>
                          <span className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                            <Users size={14} /> {room.users}
                          </span>
                        </div>
                      </div>

                      {/* HOVER GLOW RING */}
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-orange-400/50 transition-all duration-500" />
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 sm:-left-10 bg-orange-500 text-black hover:opacity-90 border-0" />
            <CarouselNext className="-right-6 sm:-right-10 bg-orange-500 text-black hover:opacity-90 border-0" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
