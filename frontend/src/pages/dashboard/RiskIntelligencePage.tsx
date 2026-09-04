import React, { useState } from 'react';
import {
  Activity,
  Mountain,
  CloudRain,
  Compass,
  Users,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import DashboardRiskMap from '../../components/dashboard/DashboardRiskMap';
import { MOCK_HABITATIONS, Habitation } from '../../data/mockDashboardData';

export const RiskIntelligencePage: React.FC = () => {
  const [selectedHab, setSelectedHab] = useState<Habitation>(MOCK_HABITATIONS[0]);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header Summary Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0d1724] via-[#090e15] to-[#070b10] border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">
                Multi-Hazard Spatial Engine
              </span>
              <span className="px-2 py-0.2 rounded-full bg-orange-950 border border-orange-500/30 text-[10px] font-mono text-orange-300">
                ACTIVE MONITORING
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">
              Risk Intelligence & Terrain Vulnerability
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-500">Selected Sector: </span>
            <span className="font-bold text-emerald-400">{selectedHab.name} ({selectedHab.district})</span>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-500/30 text-red-300 font-bold">
            Risk: {selectedHab.riskScore} / 100
          </div>
        </div>
      </div>

      {/* Main Grid: Left Map & Habitation Selector, Right Detailed Risk Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 7 Cols: Map View & Quick Habitation Selector */}
        <div className="lg:col-span-7 space-y-4">
          <DashboardRiskMap
            onSelectHabitation={(hab) => setSelectedHab(hab)}
            selectedHabitationId={selectedHab.name}
          />

          {/* Habitation Quick Switcher */}
          <div className="p-4 rounded-2xl bg-[#090e15] border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="font-bold text-white uppercase tracking-wider font-mono">
                Select Habitation for Granular Audit
              </span>
              <span className="text-slate-400 font-mono">8 Monitored</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {MOCK_HABITATIONS.map((hab) => (
                <button
                  key={hab.id}
                  onClick={() => setSelectedHab(hab)}
                  className={`p-2 rounded-xl border text-left text-xs transition-all ${
                    selectedHab.id === hab.id
                      ? 'bg-emerald-950/50 border-emerald-500/50 text-white font-bold'
                      : 'bg-[#060a0f] border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  <div className="truncate font-semibold">{hab.name}</div>
                  <div className="text-[10px] font-mono text-slate-500">{hab.district}</div>
                  <div className="mt-1 flex items-center justify-between font-mono text-[10px]">
                    <span className={hab.riskLevel === 'Critical' ? 'text-red-400' : 'text-orange-400'}>
                      {hab.riskLevel}
                    </span>
                    <span className="font-bold">{hab.riskScore}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Deep Risk Matrix & Visual Indicators */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Target Profile Card */}
          <div className="rounded-2xl bg-[#090e15] border border-slate-800 p-5 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                  Target Habitation Profile
                </span>
                <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <span>{selectedHab.name}</span>
                  <span className="text-xs font-normal text-slate-400 font-mono">({selectedHab.district}, {selectedHab.state})</span>
                </h3>
              </div>

              <div className="text-right">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                    selectedHab.riskLevel === 'Critical'
                      ? 'bg-red-950 border border-red-500/40 text-red-300'
                      : 'bg-orange-950 border border-orange-500/40 text-orange-300'
                  }`}
                >
                  {selectedHab.riskLevel}
                </span>
              </div>
            </div>

            {/* Score Big Display */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#060a0f] border border-slate-800">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Composite Risk Score</div>
                <div className="text-3xl font-extrabold text-white flex items-baseline gap-1 mt-1">
                  <span className={selectedHab.riskScore >= 80 ? 'text-red-400' : 'text-orange-400'}>
                    {selectedHab.riskScore}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">/ 100</span>
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase">Vulnerability Index</div>
                <div className="text-3xl font-extrabold text-white flex items-baseline gap-1 mt-1">
                  <span className="text-orange-400">{selectedHab.vulnerabilityScore}</span>
                  <span className="text-xs text-slate-500 font-mono">/ 100</span>
                </div>
              </div>
            </div>

            {/* Risk Factors Breakdown Progress Meters */}
            <div className="space-y-3.5 pt-1">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Individual Component Indices
              </span>

              {/* Hazard Exposure */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                    Hazard Exposure
                  </span>
                  <span className="text-white font-bold">{selectedHab.hazardExposure}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-red-500" style={{ width: `${selectedHab.hazardExposure}%` }} />
                </div>
              </div>

              {/* Terrain Gradient Risk */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-orange-400" />
                    Terrain Risk (Slope &gt; 38°)
                  </span>
                  <span className="text-white font-bold">{selectedHab.terrainRisk}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-orange-500" style={{ width: `${selectedHab.terrainRisk}%` }} />
                </div>
              </div>

              {/* Rainfall Exposure */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <CloudRain className="w-3.5 h-3.5 text-purple-400" />
                    Rainfall Exposure (IMD Radar)
                  </span>
                  <span className="text-white font-bold">{selectedHab.rainfallExposure}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-purple-500" style={{ width: `${selectedHab.rainfallExposure}%` }} />
                </div>
              </div>

              {/* Population Exposure */}
              <div className="space-y-1 text-xs">
                <div className="flex justify-between font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-cyan-400" />
                    Population Density Exposure
                  </span>
                  <span className="text-white font-bold">{selectedHab.vulnerabilityScore}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full rounded-full bg-cyan-500" style={{ width: `${selectedHab.vulnerabilityScore}%` }} />
                </div>
              </div>

              {/* Accessibility */}
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono mt-3">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  Egress Route Status:
                </span>
                <span className="font-bold text-red-400">
                  {selectedHab.accessibility} ({selectedHab.egressRoads} Access Artery)
                </span>
              </div>
            </div>

            {/* Demographic Triage Pill Box */}
            <div className="pt-2 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400 mb-2">Vulnerable Demographic Cohorts:</div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-white font-bold">{selectedHab.demographics.children}</div>
                  <div className="text-[10px] text-slate-500">Children (&lt;10)</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-white font-bold">{selectedHab.demographics.elderly}</div>
                  <div className="text-[10px] text-slate-500">Elderly (&gt;65)</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                  <div className="text-white font-bold">{selectedHab.demographics.disabled}</div>
                  <div className="text-[10px] text-slate-500">Mobility Impaired</div>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="pt-3">
              <button
                onClick={() => alert(`Relocation Directive Initialized for ${selectedHab.name}. Recommended Destination: Site B (Karanprayag Haven).`)}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Trigger Relocation Protocol for {selectedHab.name}</span>
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RiskIntelligencePage;
