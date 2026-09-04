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
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-300 font-semibold">
              The Intelligence Pipeline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Risk Detection to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Safer Decisions.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal">
            A continuous analytical pipeline transforming raw geospatial layers and census demographics into definitive authority action plans.
          </p>
        </div>

        {/* Visual Pipeline Desktop Flow (Horizontal & Connected) */}
        <div className="relative">
          {/* Animated Connecting Trace Line */}
          <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-6 z-0">
            <motion.div
              animate={{
                x: ['0%', '100%'],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
            />
          </div>

          {/* Grid of 6 Pipeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
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
                  className={`cursor-pointer rounded-xl p-4 transition-all duration-300 flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#0e1622] border-emerald-500/50 shadow-lg shadow-emerald-950/50 scale-[1.03]'
                      : 'bg-[#090e15]/90 border-slate-800/80 hover:border-slate-700 hover:bg-[#0c121b]'
                  }`}
                >
                  <div>
                    {/* Node Header Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                          isActive
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                            : 'bg-slate-800/60 border-slate-700/60 text-slate-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-semibold">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="text-sm font-bold text-white mb-1.5 flex items-center gap-1">
                      {step.title}
                    </h3>

                    {/* Badge */}
                    <span className="inline-block text-[10px] font-mono text-emerald-400/90 mb-2">
                      {step.badge}
                    </span>

                    {/* Concise Summary */}
                    <p className="text-xs text-slate-400 leading-normal line-clamp-3">
                      {step.desc}
                    </p>
                  </div>

                  {/* Active highlight indicator */}
                  <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-slate-500 truncate">
                      {step.metrics}
                    </span>
                    <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-600'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Telemetry Inspector Box of Selected Step */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#090e15]/80 border border-slate-800/80 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Pipeline Stage 0{activeStep + 1} Selected
              </p>
              <h4 className="text-base font-bold text-white">
                {steps[activeStep].title}: <span className="text-slate-300 font-normal">{steps[activeStep].desc}</span>
              </h4>
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
