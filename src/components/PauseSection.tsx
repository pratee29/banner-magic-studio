import { useState } from "react";
import { Eye, Plus, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CreatePauseContentModal from "./CreatePauseContentModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const pauseItems = [
  {
    title: "Meditation for Focus",
    views: 5600,
    duration: "10 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format",
  },
  {
    title: "Nature Sounds",
    views: 8200,
    duration: "15 min",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format",
  },
  {
    title: "Breathing Exercises",
    views: 4300,
    duration: "8 min",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format",
  },
  {
    title: "Calming Music",
    views: 9100,
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format",
  },
];

export default function PauseSection({ userRole }: { userRole?: string }) {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (userRole === 'CREATE') {
      navigate('/pause');
    } else {
      navigate('/subscription');
    }
  };

  return (
    <>
      <CreatePauseContentModal open={showCreate} onClose={() => setShowCreate(false)} />
      <section className="py-24 bg-[#070B24] overflow-hidden relative">

        {/* AMBIENT BG */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&auto=format')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(4px)",
          }}
        />
        <div className="absolute inset-0 bg-[#070B24]/85" />

        {/* GLOW BLOBS */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-[140px] pointer-events-none" />

        {/* FLOATING PARTICLES */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/40"
            style={{ left: `${8 + i * 13}%`, top: `${20 + (i % 3) * 25}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.4 }}
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
                📍 PAUSE 🧘
              </span>
              <p className="text-white/70 mt-4 text-lg">Refresh, relax & reset your mind</p>
            </div>
            <div className="flex items-center gap-3">
              {userRole && (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCreate}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold flex items-center gap-2 transition"
                >
                  <Plus size={18} /> {userRole === 'CREATE' ? 'Create Pause Content' : '🔒 Create (Upgrade)'}
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/pause')}
                className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
              >
                View all
              </motion.button>
            </div>
          </motion.div>

          {/* SLIDER */}
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {pauseItems.map((item, index) => (
                <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    whileHover={{ y: -8 }}
                    className="relative h-[280px] rounded-[28px] overflow-hidden group cursor-pointer"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* PLAY BUTTON HOVER */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center"
                      >
                        <Play size={24} className="text-white ml-1" fill="white" />
                      </motion.div>
                    </motion.div>

                    {/* DURATION BADGE */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/80 backdrop-blur-sm text-white text-xs font-semibold">
                      {item.duration}
                    </div>

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                        <Eye size={13} />
                        <span>{(item.views / 1000).toFixed(1)}k views</span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                    </div>

                    {/* RING ON HOVER */}
                    <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10 group-hover:ring-purple-400/50 transition-all duration-500" />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-8 bg-orange-500 text-black hover:bg-orange-400" />
            <CarouselNext className="-right-8 bg-orange-500 text-black hover:bg-orange-400" />
          </Carousel>
        </div>
      </section>
    </>
  );
}
