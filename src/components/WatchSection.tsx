import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const watchItems = [
  {
    title: "Successful Roadmap to UI UX",
    instructor: "Alex Rivera",
    views: 12,
    category: "UX UI Design",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&auto=format",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    accent: "#FF5C8D",
  },
  {
    title: "Perks of being a Data Scientist",
    instructor: "Jhon Philips",
    views: 36,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
    profileImage: "https://randomuser.me/api/portraits/men/45.jpg",
    accent: "#5B6DFF",
  },
  {
    title: "How Animation with AI works?",
    instructor: "Rahul Pahariya",
    views: 50,
    category: "AI & Animation",
    image: "https://images.unsplash.com/photo-1574717024453-354056acd7f5?w=800&auto=format",
    profileImage: "https://randomuser.me/api/portraits/men/68.jpg",
    accent: "#F09819",
  },
  {
    title: "Freelancing: From Zero to ₹1L/month",
    instructor: "Priya Sharma",
    views: 78,
    category: "Freelancing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format",
    profileImage: "https://randomuser.me/api/portraits/women/55.jpg",
    accent: "#11998e",
  },
];

export default function WatchSection() {
  return (
    <section className="py-24 bg-[#070B24] relative overflow-hidden">
      {/* AMBIENT GLOWS */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/8 via-transparent to-orange-500/8 blur-[140px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/6 rounded-full blur-[120px] pointer-events-none" />

      {/* FLOATING PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-pink-400/50"
          style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
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
              📍 WATCH 🎬
            </span>
            <p className="text-white/70 mt-4 text-lg">Sit back & watch real journeys.</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-7 py-2.5 rounded-full bg-orange-500 text-black font-medium hover:bg-orange-400 transition"
          >
            View all
          </motion.button>
        </motion.div>

        {/* CAROUSEL */}
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {watchItems.map((item, i) => (
              <CarouselItem key={i} className="lg:basis-1/3 md:basis-1/2 px-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="relative group cursor-pointer"
                >
                  {/* COLORED GLOW SHADOW */}
                  <div
                    className="absolute -bottom-2 left-4 right-4 h-full rounded-[28px] -z-10 opacity-60 group-hover:opacity-90 transition-opacity duration-500 blur-sm"
                    style={{ background: item.accent }}
                  />

                  {/* WHITE FRAME */}
                  <div className="absolute -inset-[5px] rounded-[30px] border-[2.5px] border-white/80 group-hover:border-white transition-colors duration-300" />

                  {/* MAIN CARD */}
                  <div className="relative bg-[#0F172A] rounded-[28px] overflow-hidden">
                    {/* IMAGE */}
                    <div className="relative h-[170px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* PROFILE AVATAR */}
                      <img
                        src={item.profileImage}
                        alt={item.instructor}
                        className="absolute bottom-[-22px] right-6 w-14 h-14 rounded-full border-4 border-white object-cover bg-white shadow-lg"
                      />

                      {/* CATEGORY */}
                      <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#FF9A3C] text-black text-xs font-bold">
                        {item.category}
                      </span>

                      {/* VIEWS */}
                      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#FFD84D] text-black text-xs font-bold flex items-center gap-1">
                        <Eye size={12} /> {item.views}k
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 pt-8">
                      <h3 className="text-xl font-bold text-white leading-snug">{item.title}</h3>
                      <p className="text-white/60 mt-2 text-sm">With {item.instructor}</p>
                    </div>
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
