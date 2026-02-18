import { useState } from "react";
import { Palette, FileText, Globe, Plus, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CreateSupportWorkModal from "./CreateSupportWorkModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const supportItems = [
  {
    title: "Create a Logo",
    description: "Need a visual identity? Let's figure it out together.",
    icon: Palette,
    budget: "₹5k - ₹20k",
    timeline: "2–3 weeks",
    bg: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format",
    accentFrom: "#F7B733",
    accentTo: "#FC4A1A",
  },
  {
    title: "Write a Thesis",
    description: "Structured writing with clarity & originality.",
    icon: FileText,
    budget: "₹5k - ₹20k",
    timeline: "2–3 weeks",
    bg: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format",
    accentFrom: "#8E2DE2",
    accentTo: "#4A00E0",
  },
  {
    title: "Create a Webpage",
    description: "Simple, fast & modern web presence.",
    icon: Globe,
    budget: "₹5k - ₹20k",
    timeline: "2–3 weeks",
    bg: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format",
    accentFrom: "#11998e",
    accentTo: "#38ef7d",
  },
  {
    title: "UI Review",
    description: "Get expert feedback on your product design.",
    icon: Briefcase,
    budget: "₹3k - ₹10k",
    timeline: "1 week",
    bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format",
    accentFrom: "#FF512F",
    accentTo: "#F09819",
  },
];

export default function SupportSection({ userRole }: { userRole?: string }) {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (userRole === 'CREATE') {
      navigate('/support');
    } else {
      navigate('/subscription');
    }
  };

  return (
    <>
      <CreateSupportWorkModal open={showCreate} onClose={() => setShowCreate(false)} />
      <section className="py-24 bg-[#0A0F2D] overflow-hidden relative">

        {/* BG GLOW */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/8 rounded-full blur-[100px] pointer-events-none" />

        {/* FLOATING PARTICLES */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/30"
            style={{
              width: `${4 + i * 2}px`,
              height: `${4 + i * 2}px`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 30}%`,
            }}
            animate={{ y: [0, -25, 0], rotate: [0, 180, 360], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 5 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
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
                📍 SUPPORT 🤝
              </span>
              <p className="text-white/70 mt-4 text-lg">Get help, give help</p>
            </div>
            <div className="flex items-center gap-3">
              {userRole && (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCreate}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold flex items-center gap-2 transition"
                >
                  <Plus size={18} /> {userRole === 'CREATE' ? 'Publish Work' : '🔒 Publish (Upgrade)'}
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/support')}
                className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
              >
                View all
              </motion.button>
            </div>
          </motion.div>

          {/* SLIDER */}
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {supportItems.map((item, i) => (
                <CarouselItem key={i} className="lg:basis-1/3 md:basis-1/2 px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="relative h-[300px] rounded-[32px] overflow-hidden group cursor-pointer"
                  >
                    {/* BG IMAGE */}
                    <img
                      src={item.bg}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* GRADIENT OVERLAY */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.accentFrom}cc, ${item.accentTo}99, #0a0f2d)`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* CONTENT */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <item.icon size={26} className="text-white" />
                      </div>

                      <div>
                        <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Budget</span>
                          <span className="text-yellow-300 font-bold">{item.budget}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/60">Timeline</span>
                          <span className="text-white/80">{item.timeline}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.03 }}
                          className="w-full mt-2 py-2.5 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 text-white font-medium text-sm hover:bg-white/25 transition"
                        >
                          Get Quote →
                        </motion.button>
                      </div>
                    </div>

                    {/* SHINE ON HOVER */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)" }}
                    />
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
