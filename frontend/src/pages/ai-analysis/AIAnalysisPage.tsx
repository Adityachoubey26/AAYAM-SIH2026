import React, { useState } from 'react';
import {
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
  RotateCw,
  FileCheck,
} from 'lucide-react';

export const AIAnalysisPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const triggerReanalysis = () => {
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 1200);
  };

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-[10.5px] font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              EXPLAINABLE GEOSPATIAL REASONER (NOT A CHATBOT)
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            AI Decision Support & Spatial Reasoning Dossier
          </h2>
          <p className="text-xs text-slate-400">
            Transparent, auditable algorithmic evaluation of multi-hazard habitations and safe-haven pairing
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={triggerReanalysis}
            disabled={isProcessing}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-slate-200 hover:text-white text-xs font-mono font-semibold transition-all flex items-center gap-2"
          >
            <RotateCw className={`w-3.5 h-3.5 text-emerald-400 ${isProcessing ? 'animate-spin' : ''}`} />
            <span>{isProcessing ? 'Synthesizing Telemetry...' : 'Re-run Decision Engine'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: AI Reasoning Assessment Panel & Live Inference Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 7 Cols: Primary AI Risk Assessment Panel */}
        <div className="lg:col-span-7 rounded-2xl bg-gradient-to-b from-[#0b141f] to-[#070b10] border border-emerald-500/30 p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Top Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Panel Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold">
                  AUTONOMOUS DIRECTIVE SUMMARY
                </span>
                <h3 className="text-xl font-extrabold text-white">AI RISK ASSESSMENT</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 font-mono text-xs font-bold animate-pulse">
                CRITICAL LEVEL
              </span>
            </div>
          </div>

          {/* Location & Score Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Location */}
            <div className="p-4 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">LOCATION</span>
              <span className="text-base font-bold text-white mt-1 block">Demo Himalayan Valley</span>
              <span className="text-[10px] font-mono text-slate-400">Chamoli Sector 4</span>
            </div>

            {/* Risk Score */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
              <span className="text-[10px] font-mono text-red-400 uppercase block">RISK SCORE</span>
              <span className="text-2xl font-extrabold text-red-300 mt-0.5 block">87 / 100</span>
              <span className="text-[10px] font-mono text-red-400/80">Hazard Exposure: Acute</span>
            </div>

            {/* Risk Level */}
            <div className="p-4 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">RISK LEVEL</span>
              <span className="text-xl font-extrabold text-white mt-1 block">CRITICAL</span>
              <span className="text-[10px] font-mono text-emerald-400">Triage Priority 1</span>
            </div>

          </div>

          {/* Key Factors Section */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
              Key Contributing Risk Factors (Quantified)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-slate-300">High rainfall exposure (&gt;78mm/h)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-orange-400" />
                <span className="text-slate-300">Steep terrain (Mean slope 42.6°)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="text-slate-300">Poor accessibility (Single egress)</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span className="text-slate-300">High population vulnerability (89%)</span>
              </div>
            </div>
          </div>

          {/* Recommended Action Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-red-950/40 via-[#150a0a] to-[#0d0909] border border-red-500/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
                PRIMARY OPERATIONAL DIRECTIVE
              </span>
              <span className="text-[10px] font-mono text-red-300">TIMELINE: IMMEDIATE</span>
            </div>
            <div className="text-lg font-extrabold text-white">
              Immediate relocation planning & phased community evacuation
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Model recommends mobilizing district disaster task force within 4 hours to begin staged evacuation of vulnerable demographics before the forecasted rainfall peak.
            </p>
          </div>

          {/* Recommended Relocation Site & Detailed Reason */}
          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-bold text-emerald-300 uppercase">
                  Recommended Relocation Site
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400">SITE B (Karanprayag Greenfield Haven)</span>
            </div>

            <div className="text-sm font-bold text-white">
              Why Site B was algorithmically chosen over Site A and Site C:
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              <strong className="text-emerald-300">Reason:</strong> Site B provides <strong>adequate capacity</strong> (3,400 vacancies available for 2,840 evacuees), <strong>significantly lower hazard exposure</strong> (12% vs 18% and 28%), and <strong>superior all-weather road accessibility</strong> with 120 dedicated medical beds and deep aquifer potable supply.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Audited against NDMA Capacity Standard Guidelines</span>
            </div>
          </div>

          {/* Signoff Button */}
          <div className="pt-2">
            <button
              onClick={() => alert('AI Relocation Recommendation Dossier Approved. Transmitted to District Collector & State Emergency Operations Centre.')}
              className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono tracking-wide shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
            >
              <FileCheck className="w-4 h-4" />
              <span>Sign Off & Issue Administrative Relocation Directive</span>
            </button>
          </div>

        </div>

        {/* Right 5 Cols: Live AI Geospatial Telemetry Feed Console */}
        <div className="lg:col-span-5 rounded-2xl bg-[#090e15] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Terminal Title Bar */}
          <div className="bg-[#0c131d] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 font-semibold ml-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                INFERENCE_LOG // AAYAM-GEO-01
              </span>
            </div>

            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              HEURISTIC: V4.2
            </span>
          </div>

          {/* Log Stream Body */}
          <div className="p-4 font-mono text-xs space-y-3 text-slate-400 overflow-y-auto max-h-[560px]">
            <div className="text-emerald-400 font-semibold">[08:24:01] &gt; Ingesting Sentinel-1 SAR elevation differential...</div>
            <div className="pl-3 border-l border-slate-800 text-[11px] text-slate-400">
              - Target sector: Demo Himalayan Valley (Chamoli)<br />
              - Elevation gradient: 2,410m to 3,180m ASL<br />
              - Ground deformation: +14.2mm in last 48h
            </div>

            <div className="text-orange-400 font-semibold">[08:24:02] &gt; Computing multi-criteria hazard vectors...</div>
            <div className="pl-3 border-l border-slate-800 text-[11px] text-slate-400">
              - Landslide instability index: 0.91 (CRITICAL)<br />
              - Flash flood runoff coefficient: 0.88<br />
              - Precipitation threshold exceeded by 142%
            </div>

            <div className="text-purple-400 font-semibold">[08:24:03] &gt; Vulnerability demographic weighting...</div>
            <div className="pl-3 border-l border-slate-800 text-[11px] text-slate-400">
              - Total population: 2,840<br />
              - Vulnerable cohort ratio: 38.3% (Elderly + Children)<br />
              - Egress road redundancy: 0 (Single road failure = Isolation)
            </div>

            <div className="text-emerald-400 font-semibold">[08:24:04] &gt; Safe Haven Capacity Matching & Optimization...</div>
            <div className="pl-3 border-l border-slate-800 text-[11px] space-y-1">
              <div className="text-red-400">✗ Screening Site A: Capacity 220 &lt; 2,840 &rarr; REJECTED (Deficit 2,620)</div>
              <div className="text-emerald-300 font-bold">✓ Screening Site B: Capacity 3,400 &gt; 2,840 &rarr; MATCH OPTIMAL (Slack +560)</div>
              <div className="text-yellow-400">? Screening Site C: Capacity 1,050 &lt; 2,840 &rarr; PARTIAL ONLY</div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-[11px] mt-4">
              <strong>[DECISION COMPLETE]</strong> Recommendation verified with 98.4% confidence score. Transparent audit trail generated.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AIAnalysisPage;
