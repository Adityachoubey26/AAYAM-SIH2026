import React from 'react';
import { motion } from 'framer-motion';
import { Radio, BarChart3, AlertOctagon, GitCompare, FileCheck2 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Collect',
      subtitle: 'Multi-source Data Ingestion',
      desc: 'Ingests satellite imagery, digital elevation models, precipitation radars, and ground survey census points.',
      icon: Radio,
      accent: 'emerald',
    },
    {
      num: '02',
      title: 'Analyse',
      subtitle: 'Dynamic Mathematical Modeling',
      desc: 'Computes spatial hazard exposure scores, slope instability coefficients, and community vulnerability metrics.',
      icon: BarChart3,
      accent: 'emerald',
    },
    {
      num: '03',
      title: 'Prioritize',
      subtitle: 'Zonal Urgency Classification',
      desc: 'Automatically triages endangered habitations into Red, Orange, Yellow, and Green priority response tiers.',
      icon: AlertOctagon,
      accent: 'orange',
    },
    {
      num: '04',
      title: 'Evaluate',
      subtitle: 'Comparative Capacity Audits',
      desc: 'Multi-criteria screening of candidate relocation sites evaluating water tables, medical proximity, and terrain stability.',
      icon: GitCompare,
      accent: 'emerald',
    },
    {
      num: '05',
      title: 'Recommend',
      subtitle: 'Operational Action Directives',
      desc: 'Delivers plain-English, transparent AI decision dossiers with prioritized relocation timelines for administrative sign-off.',
      icon: FileCheck2,
      accent: 'orange',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-[#06090d] border-t border-slate-800/60 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-medium">
              Operational Workflow
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            How AAYAM Operates <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              In High-Stakes Scenarios
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A battle-tested 5-stage progression from raw spatial feeds to finalized disaster-mitigation authority orders.
          </p>
        </div>

        {/* 5-Step Process Container with Animated Connecting Line */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-slate-800 z-0">
            <motion.div
              animate={{
                left: ['0%', '100%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute top-0 w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent -translate-x-1/2"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isOrange = step.accent === 'orange';

              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative flex flex-col items-center text-center p-5 rounded-2xl bg-[#0b1017]/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  {/* Step Circular Node */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 border relative shadow-xl transition-transform duration-300 group-hover:scale-110 ${
                      isOrange
                        ? 'bg-[#15110f] border-orange-500/40 text-orange-400 shadow-orange-950/40'
                        : 'bg-[#0a1512] border-emerald-500/40 text-emerald-400 shadow-emerald-950/40'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {/* Badge count */}
                    <div className="absolute -top-2 -right-2 px-1.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono text-slate-300">
                      {step.num}
                    </div>
                  </div>

                  {/* Title (H3) & Subtitle */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-normal leading-snug group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-emerald-400/90 mb-3 font-medium">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
