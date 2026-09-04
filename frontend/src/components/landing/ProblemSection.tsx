import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain, Users, Truck, AlertTriangle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problemCards = [
    {
      number: '01',
      title: 'Hazard Exposure',
      desc: 'Understand where floods, landslides, heavy rainfall and other geological hazards threaten human settlements in fragile topographies.',
      icon: CloudRain,
      accent: 'orange',
      tags: ['Flash Floods', 'Slope Creep', 'Seismic Triggers'],
    },
    {
      number: '02',
      title: 'Population Vulnerability',
      desc: 'Identify communities that face compounded difficulty during evacuation due to demographic isolation, structural fragility, and chokepoints.',
      icon: Users,
      accent: 'emerald',
      tags: ['Habitation Density', 'Age Index', 'Egress Limits'],
    },
    {
      number: '03',
      title: 'Relocation Constraints',
      desc: 'Evaluate terrain accessibility, carrying capacity, shelter readiness, potable water, and medical resources before secondary disasters strike.',
      icon: Truck,
      accent: 'slate',
      tags: ['Carrying Capacity', 'Safe Havens', 'Medical Access'],
    },
  ];

  return (
    <section id="problem" className="relative py-24 bg-[#070b10] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 mb-4">
            <AlertTriangle className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-medium">
              The Reality of Vulnerability
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Disaster Risk Is Not Just <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
              About the Hazard.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A disaster turns catastrophic when hazard-exposed geographical sectors intersect with dense, vulnerable populations, crippled transportation arteries, and severely constrained relocation capacity.
          </p>
        </div>

        {/* 3 Geospatial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problemCards.map((card, idx) => {
            const Icon = card.icon;
            const isOrange = card.accent === 'orange';
            const isEmerald = card.accent === 'emerald';

            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0e1622]/90 to-[#0a0f16]/90 border border-slate-800/80 hover:border-slate-700 p-7 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Top Corner Glow on Hover */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                    isOrange
                      ? 'bg-orange-500/10 blur-xl'
                      : isEmerald
                      ? 'bg-emerald-500/10 blur-xl'
                      : 'bg-slate-400/5 blur-xl'
                  }`}
                />

                <div>
                  {/* Card Header: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                      {card.number}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-colors ${
                        isOrange
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                          : isEmerald
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Sub-tags / Dimension Indicators */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#070c12] border border-slate-800 text-[11px] font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
