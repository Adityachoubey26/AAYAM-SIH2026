import React from 'react';
import { motion } from 'framer-motion';
import { Clock, SlidersHorizontal, ShieldCheck, PieChart, Sparkles } from 'lucide-react';

export const Impact: React.FC = () => {
  const impacts = [
    {
      title: 'Faster Risk Identification',
      highlight: 'Continuous Surveillance',
      desc: 'Compresses hazard identification from post-disaster response into proactive, automated early-warning telemetry.',
      icon: Clock,
      stat: 'Hours, not Weeks',
    },
    {
      title: 'Smarter Prioritization',
      highlight: 'Objective Triage',
      desc: 'Eliminates guesswork by synthesizing multi-variable terrain gradients, population density, and access chokepoints.',
      icon: SlidersHorizontal,
      stat: 'Multi-criteria Scoring',
    },
    {
      title: 'Safer Relocation Planning',
      highlight: 'Pre-vetted Havens',
      desc: 'Prevents secondary entrapment by rigorously auditing site stability, safe distances, and slope buffer zones.',
      icon: ShieldCheck,
      stat: 'Zero Hazard Overlap',
    },
    {
      title: 'Better Resource Allocation',
      highlight: 'Targeted Deployment',
      desc: 'Coordinates emergency shelter, medical, water, and logistical convoys directly to habitations facing acute danger.',
      icon: PieChart,
      stat: 'Optimized Lifelines',
    },
  ];

  return (
    <section id="impact" className="relative py-24 bg-[#070b10] border-t border-slate-800/60 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              Operational Outcomes
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Turning Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Into Defisive Action.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            AAYAM provides administrative authorities with the analytical clarity required to act proactively before disasters unfold.
          </p>
        </div>

        {/* 4 Impact Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#0b1017] to-[#070b10] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                    {item.highlight}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {item.stat}
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

export default Impact;
