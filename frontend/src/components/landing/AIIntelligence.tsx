import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, CheckCircle2, Activity } from 'lucide-react';

export const AIIntelligence: React.FC = () => {
  const aiPillars = [
    { label: 'Risk Interpretation', desc: 'Translates complex spatial indices into actionable threat narratives.' },
    { label: 'Vulnerability Analysis', desc: 'Factors age ratios, disabled access, and building construction resilience.' },
    { label: 'Priority Explanation', desc: 'Explains precisely why Sector A demands intervention ahead of Sector B.' },
    { label: 'Relocation Recommendation', desc: 'Mathematically pairs endangered communities with verified safe zones.' },
    { label: 'Decision Support', desc: 'Empowers district magistrates with legally defensible mitigation orders.' },
  ];

  return (
    <section id="ai-intelligence" className="relative py-24 bg-[#070b10] border-t border-slate-800/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Conceptual Framing */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-300 font-medium">
                Transparent Decision Engine
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.2]">
              AI That Explains <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                The Exact Risk.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              Not a chatbot. AAYAM employs geospatial deep-reasoning models designed specifically for emergency authorities, providing transparent, auditable explanations behind every risk score and relocation directive.
            </p>

            {/* AI Pillars List */}
            <div className="space-y-3 pt-2">
              {aiPillars.map((pillar) => (
                <div key={pillar.label} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#0b1118]/60 border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white tracking-wide">{pillar.label}: </span>
                    <span className="text-xs text-slate-400">{pillar.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-Tech Mock Intelligence Command Panel */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl bg-[#090e15] border border-slate-800 shadow-2xl overflow-hidden relative"
            >
              {/* Terminal Header */}
              <div className="bg-[#0c131c] px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5 font-medium">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                    AAYAM-GEO-REASONER // AUDIT_FEED: #26191
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300">
                    TELEMETRY: LIVE
                  </span>
                  <span className="text-xs font-mono text-slate-500">LAT: 42ms</span>
                </div>
              </div>

              {/* Panel Body */}
              <div className="p-6 sm:p-7 space-y-6">
                {/* Sector & Assessment Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium">
                      Target Habitation Sector
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 flex items-center gap-2 tracking-normal leading-snug">
                      Himalayan Valley Sector 7A
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-normal">
                        Chamoli Basin
                      </span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs font-mono uppercase text-slate-400">Risk Score</div>
                      <div className="text-2xl font-mono font-extrabold text-red-400">87 / 100</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-red-950/70 border border-red-500/50 text-red-300 font-mono text-xs font-bold animate-pulse">
                      CRITICAL
                    </div>
                  </div>
                </div>

                {/* Key Contributing Risk Factors */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-medium">
                    <Activity className="w-3.5 h-3.5 text-orange-400" />
                    Key Risk Drivers Identified by AI
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#0d141e] border border-slate-800/80">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Extreme Rainfall Exposure</span>
                        <span className="text-orange-400 font-mono">89 mm/24h</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-orange-400 rounded-full" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0d141e] border border-slate-800/80">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Steep Slope Gradient</span>
                        <span className="text-red-400 font-mono">&gt; 42° Slope</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[94%] h-full bg-red-400 rounded-full" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0d141e] border border-slate-800/80">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Egress Bottleneck</span>
                        <span className="text-yellow-400 font-mono">Single Road</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[78%] h-full bg-yellow-400 rounded-full" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0d141e] border border-slate-800/80">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-medium">Vulnerable Demographics</span>
                        <span className="text-red-400 font-mono">42% Dependent</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[84%] h-full bg-red-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation Output Box */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-[#0d171d] to-[#0d171d] border border-emerald-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Recommended Action Directive
                    </span>
                    <span className="text-xs font-mono text-emerald-400/90 font-medium px-2 py-0.5 bg-emerald-900/40 rounded">
                      TIMEFRAME: &lt; 72 HOURS
                    </span>
                  </div>

                  <p className="text-sm text-slate-200 font-medium mb-3">
                    Immediate relocation planning recommended for 2,840 residents in Sector 7A.
                  </p>

                  <div className="p-3 rounded-lg bg-black/40 border border-emerald-500/20 text-xs text-slate-300 space-y-1">
                    <div>
                      <strong className="text-emerald-300">Target Relocation Haven:</strong> Safe Haven B (Upper Plateau)
                    </div>
                    <div>
                      <strong className="text-emerald-300">Capacity Justification:</strong> Adequate carrying capacity (3,500 slots), zero slope creep, 100% verified water access, and redundant 2-lane road ingress.
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500 border-t border-slate-800/60">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>CONFIDENCE: 94.6% • MODEL VERSION: SIH-26191-R4</span>
                  </div>
                  <span className="text-slate-400 font-semibold">VERIFIED FOR DISASTER AUTHORITIES</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIIntelligence;
