import React, { useState } from 'react';
import {
  Droplets,
  Mountain,
  CloudRain,
  CloudLightning,
  Layers,
} from 'lucide-react';
import DashboardRiskMap from '../../components/dashboard/DashboardRiskMap';
import { MOCK_HAZARDS, HazardCategory } from '../../data/mockDashboardData';

export const HazardsPage: React.FC = () => {
  const [selectedHazard, setSelectedHazard] = useState<HazardCategory>(MOCK_HAZARDS[0]);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Hazard Surveillance & Geospatial Threat Corridors
          </h2>
          <p className="text-xs text-slate-400">
            Real-time radar feeds, slope instability monitoring, and historical event correlations
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
            ● 5 Hazard Vectors Active
          </span>
        </div>
      </div>

      {/* 5 Hazard Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {MOCK_HAZARDS.map((haz) => {
          const isSelected = selectedHazard.id === haz.id;
          const Icon =
            haz.name === 'Flood'
              ? Droplets
              : haz.name === 'Landslide'
              ? Mountain
              : haz.name === 'Heavy Rainfall'
              ? CloudRain
              : haz.name === 'Cloudburst'
              ? CloudLightning
              : Layers;

          return (
            <div
              key={haz.id}
              onClick={() => setSelectedHazard(haz)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#0d1624] border-emerald-500/60 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30'
                  : 'bg-[#090e15] border-slate-800/80 hover:border-slate-700 hover:bg-[#0c121b]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${haz.accentColor}15`,
                      borderColor: `${haz.accentColor}40`,
                      color: haz.accentColor,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold"
                    style={{
                      backgroundColor: `${haz.accentColor}20`,
                      color: haz.accentColor,
                    }}
                  >
                    {haz.severity}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1">{haz.name}</h3>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {haz.primaryDriver}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/80 space-y-1 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-500">Affected Area:</span>
                  <span className="font-bold text-slate-300">{haz.affectedAreaSqKm} km²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Habitations:</span>
                  <span className="font-bold text-white">{haz.habitationsExposed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Historical:</span>
                  <span className="font-bold text-orange-400">{haz.historicalOccurrences} Events</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Map Visualization & Detail Dossier Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left 8 Cols: Large Hazard Map Display */}
        <div className="lg:col-span-8 space-y-4">
          <DashboardRiskMap />
        </div>

        {/* Right 4 Cols: Selected Hazard Specific Detail Panel */}
        <div className="lg:col-span-4 rounded-2xl bg-[#090e15] border border-slate-800 p-5 shadow-xl space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Vector Intelligence Detail
              </span>
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <span>{selectedHazard.name} Threat Profile</span>
              </h3>
            </div>
            <span
              className="px-2.5 py-1 rounded-full text-xs font-mono font-bold"
              style={{
                backgroundColor: `${selectedHazard.accentColor}25`,
                color: selectedHazard.accentColor,
              }}
            >
              {selectedHazard.severity}
            </span>
          </div>

          {/* Key Stats Metric Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-slate-500 text-[10px] block">AFFECTED REGION</span>
              <span className="text-lg font-bold text-white mt-1 block">{selectedHazard.affectedAreaSqKm} sq km</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-slate-500 text-[10px] block">COMMUNITIES AT RISK</span>
              <span className="text-lg font-bold text-orange-400 mt-1 block">{selectedHazard.habitationsExposed} Habitations</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-slate-500 text-[10px] block">HISTORICAL OCCURRENCES</span>
              <span className="text-lg font-bold text-white mt-1 block">{selectedHazard.historicalOccurrences} Recorded</span>
            </div>
            <div className="p-3 rounded-xl bg-[#060a0f] border border-slate-800">
              <span className="text-slate-500 text-[10px] block">SEASONAL TREND</span>
              <span className="text-lg font-bold text-red-400 mt-1 block">{selectedHazard.trend}</span>
            </div>
          </div>

          {/* Environmental Trigger Rationale */}
          <div className="p-4 rounded-xl bg-[#060a0f] border border-slate-800 text-xs space-y-2">
            <div className="font-bold text-white font-mono uppercase text-[11px]">Primary Physical Driver</div>
            <p className="text-slate-300 leading-relaxed font-normal">
              {selectedHazard.primaryDriver}. Satellite radar interferometry indicates ground deformation acceleration under continuous precipitation saturation.
            </p>
          </div>

          {/* Operational Mitigation Recommendation */}
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2">
            <div className="font-bold text-emerald-300 font-mono uppercase text-[11px]">Command Guidance</div>
            <p className="text-slate-300 leading-relaxed">
              Maintain standby status on primary evacuation corridors. Pre-stage heavy earth-moving equipment at Karanprayag transit hub to ensure continuous road clearance.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default HazardsPage;
