import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldAlert, Users, Layers, MapPin, Sparkles, ChevronRight } from 'lucide-react';

export const WhatIsAayam: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'step-1',
      title: 'Hazard Data',
      badge: 'Input Streams',
      icon: Database,
      desc: 'Real-time telemetry from precipitation sensors, seismic stations, slope radar and satellite DEM elevation models.',
      metrics: 'Satellite GIS + Terrain telemetry',
    },
    {
      id: 'step-2',
      title: 'Risk Assessment',
      badge: 'Spatial Modeling',
      icon: ShieldAlert,
      desc: 'Algorithmic overlaying of active hazard vectors against terrain stability factors to generate granular threat grids.',
      metrics: 'Multi-hazard exposure indexing',
    },
    {
      id: 'step-3',
      title: 'Vulnerability Analysis',
      badge: 'Demographics',
      icon: Users,
      desc: 'Quantification of human exposure, elderly/child ratios, structural vulnerability and single-point egress chokepoints.',
      metrics: 'Habitation resilience scoring',
    },
    {
      id: 'step-4',
      title: 'Priority Identification',
      badge: 'Zonal Triage',
      icon: Layers,
      desc: 'Automatic classification into Red, Orange, Yellow, and Green zones to isolate habitations requiring immediate intervention.',
      metrics: 'Urgency tier categorization',
    },
    {
      id: 'step-5',
      title: 'Relocation Evaluation',
      badge: 'Capacity Screening',
      icon: MapPin,
      desc: 'Screening safe havens based on environmental carrying capacity, freshwater access, power, road connectivity and medical beds.',
      metrics: 'Safe haven capacity verification',
    },
    {
      id: 'step-6',
      title: 'AI Recommendation',
      badge: 'Decision Support',
      icon: Sparkles,
      desc: 'Synthesized, auditable operational briefs for district disaster authorities with transparent rationales and route plans.',
      metrics: 'Operational action directive',
    },
  ];

  return (
    <section id="what-is-aayam" className="relative py-24 bg-[#06090d] border-t border-slate-800/60 overflow-hidden">
      {/* Background Subtle Grid & Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/25 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-300 font-medium">
              The Intelligence Pipeline
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
            From Risk Detection to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Safer Decisions.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
            A continuous analytical pipeline transforming raw geospatial layers and census demographics into definitive authority action plans.
          </p>
        </div>

        {/* Grid of 6 Pipeline Nodes (Consistent 3-column layout matching Capabilities) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveStep(index)}
                className={`group relative rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer border hover:-translate-y-1 shadow-xl hover:shadow-2xl ${
                  isActive
                    ? 'bg-gradient-to-b from-[#111c2a] to-[#0c1522] border-emerald-500/60 shadow-emerald-950/50 ring-1 ring-emerald-500/30'
                    : 'bg-gradient-to-b from-[#0d141e]/90 to-[#080d14]/90 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Bar with Stage Number, Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-500 tracking-wider">
                        0{index + 1} //
                      </span>
                      <span className="text-xs font-mono text-emerald-400/90 font-medium px-2 py-0.5 rounded bg-emerald-950/50 border border-emerald-500/20">
                        {step.badge}
                      </span>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                        isActive
                          ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                          : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 group-hover:border-emerald-500/60'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Step Title (H3) */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-normal leading-snug group-hover:text-emerald-300 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description (Full text, consistent with website body text) */}
                  <p className="text-sm text-slate-400 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Footer Tag (Clean, unclipped telemetry stream) */}
                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">
                    {step.metrics}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      isActive
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                        : 'bg-slate-900 border-slate-800 text-slate-400 group-hover:text-white group-hover:border-slate-600'
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Telemetry Inspector Box of Selected Step */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#090e15]/80 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Pipeline Stage 0{activeStep + 1} Selected
              </p>
              <div className="text-base sm:text-lg font-bold text-white">
                {steps[activeStep].title}: <span className="text-slate-300 font-normal">{steps[activeStep].desc}</span>
              </div>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
              Status: Operational
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAayam;
