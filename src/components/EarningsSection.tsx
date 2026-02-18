import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Wallet, ArrowUpRight } from "lucide-react";

export default function EarningsSection() {
  const stats = [
    { label: "Total Earned", value: "₹12,450", icon: DollarSign, color: "text-green-400", bg: "from-green-500/20 to-green-500/5", border: "border-green-500/20", glow: "rgba(34,197,94,0.15)" },
    { label: "This Month", value: "₹3,200", icon: TrendingUp, color: "text-orange-400", bg: "from-orange-500/20 to-orange-500/5", border: "border-orange-500/20", glow: "rgba(249,115,22,0.15)" },
    { label: "Pending", value: "₹1,800", icon: Wallet, color: "text-yellow-400", bg: "from-yellow-500/20 to-yellow-500/5", border: "border-yellow-500/20", glow: "rgba(234,179,8,0.15)" },
    { label: "Withdrawn", value: "₹7,450", icon: ArrowUpRight, color: "text-blue-400", bg: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/20", glow: "rgba(59,130,246,0.15)" },
  ];

  return (
    <section className="py-24 bg-[#070B24] overflow-hidden relative">
      {/* BG GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* FLOATING PARTICLES */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-400/30"
          style={{
            width: `${3 + i}px`,
            height: `${3 + i}px`,
            left: `${5 + i * 12}%`,
            top: `${20 + (i % 4) * 18}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.3, 1] }}
          transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <motion.div
          className="flex items-start justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#142A14] border border-green-400/30 text-green-400 font-semibold">
              💰 EARNINGS
            </span>
            <p className="text-white/70 mt-4 text-lg">Track your income & withdraw anytime</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.3)" }}
            className="px-7 py-2.5 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            Withdraw
          </motion.button>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative rounded-2xl bg-gradient-to-br ${stat.bg} border ${stat.border} p-6 backdrop-blur-sm overflow-hidden cursor-pointer group`}
            >
              {/* BG GLOW */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow}, transparent 70%)` }}
              />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.bg} border ${stat.border} flex items-center justify-center mb-4 relative z-10`}>
                <stat.icon size={22} className={stat.color} />
              </div>
              <p className="text-white/60 text-sm relative z-10">{stat.label}</p>
              <motion.p
                className={`text-3xl font-bold ${stat.color} mt-1 relative z-10`}
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* EARNING BREAKDOWN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="rounded-2xl bg-white/3 border border-white/8 p-6 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-6">Earning Breakdown</h3>
          <div className="space-y-4">
            {[
              { source: "Live Sessions", amount: "₹5,200", sessions: 12, pct: 42, color: "from-orange-400 to-red-500" },
              { source: "Discussion Rooms", amount: "₹3,100", sessions: 8, pct: 25, color: "from-blue-400 to-purple-500" },
              { source: "Support Work", amount: "₹2,800", sessions: 5, pct: 22, color: "from-green-400 to-teal-500" },
              { source: "Pause Content", amount: "₹1,350", sessions: 15, pct: 11, color: "from-pink-400 to-rose-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="text-white font-medium">{item.source}</p>
                    <span className="text-green-400 font-bold">{item.amount}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.1, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-white/40 text-xs mt-1">{item.sessions} items</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
