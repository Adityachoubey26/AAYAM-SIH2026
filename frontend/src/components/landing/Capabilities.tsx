import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Cpu, Compass, Warehouse, BellRing, ArrowUpRight } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: 'Geospatial Risk Intelligence',
      desc: 'Identify and visualize dynamic high-risk zones on an interactive command map with satellite DEM, rainfall radar, and slope instability layers.',
      icon: Globe,
      accent: 'emerald',
      tag: 'Multi-layer GIS',
    },
    {
      num: '02',
      title: 'Vulnerability Assessment',
      desc: 'Deep demographic and habitation vulnerability analysis assessing age dependencies, building structural resilience, and single-access isolation.',
      icon: Users,
      accent: 'emerald',
      tag: 'Demographic Index',
    },
    {
      num: '03',
      title: 'AI Risk Analysis',
      desc: 'Multi-modal AI models generate plain-English explanations of underlying risk factors, eliminating black-box uncertainty for disaster administrators.',
      icon: Cpu,
      accent: 'orange',
      tag: 'Auditable Reasoning',
    },
    {
      num: '04',
      title: 'Relocation Intelligence',
      desc: 'Algorithmic identification and comparative ranking of optimal relocation zones factoring safe distance, non-hazard terrain, and road connectivity.',
      icon: Compass,
      accent: 'emerald',
      tag: 'Safe Haven Matching',
    },
    {
      num: '05',
      title: 'Carrying Capacity Assessment',
      desc: 'Rigorous calculation of shelter footprint, potable water supply, sanitation, hospital beds, and supply lifeline durability at proposed destinations.',
      icon: Warehouse,
      accent: 'orange',
      tag: 'Resource Capacity',
    },
    {
      num: '06',
      title: 'Early Warning & Alerts',
      desc: 'Continuous hazard threshold monitoring surfaces critical environmental shifts and immediately flags emerging red-zone habitations.',
      icon: BellRing,
      accent: 'emerald',
      tag: 'Real-time Triage',
    },
  ];

  return (
    <section id="capabilities" className="relative py-24 bg-[#070b10] border-t border-slate-800/60 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-medium">
              Platform Architecture
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            Comprehensive Disaster <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Intelligence Capabilities
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            Equipping district magistrates, disaster mitigation cells, and state authorities with decisive tactical capabilities.
          </p>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            const isOrange = item.accent === 'orange';

            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0d141e]/90 to-[#080d14]/90 border border-slate-800/80 hover:border-slate-700 p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl flex flex-col justify-between"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    isOrange
                      ? 'bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.1),transparent_70%)]'
                      : 'bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_70%)]'
                  }`}
                />

                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                      {item.num} //
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                        isOrange
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 group-hover:border-orange-500/60'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title (H3) & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-normal leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {item.tag}
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-slate-600 transition-colors">
                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
