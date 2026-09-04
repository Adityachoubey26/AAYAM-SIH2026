import React, { useState } from 'react';
import {
  Compass,
  AlertTriangle,
  Droplets,
  HeartPulse,
  Home,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
} from 'lucide-react';
import {
  MOCK_HABITATIONS,
  MOCK_RELOCATION_SITES,
  RelocationSite,
  Habitation,
} from '../../data/mockDashboardData';

export const RelocationPlanningPage: React.FC = () => {
  const [selectedHab] = useState<Habitation>(MOCK_HABITATIONS[0]); // Village A
  const [selectedSite, setSelectedSite] = useState<RelocationSite>(MOCK_RELOCATION_SITES[1]); // Site B

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Relocation Decision Support & Safe Haven Matching
          </h2>
          <p className="text-xs text-slate-400">
            Algorithmic pairing of vulnerable communities with verified, capacity-screened destination safe zones
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-semibold">
            ● Decision Engine: Active & Auditable
          </span>
        </div>
      </div>

      {/* Selected Habitation Mission Brief Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0c1522] via-[#09101a] to-[#070b10] border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0 shadow-lg shadow-red-950/50">
            <Flame className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                Selected Endangered Habitation
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-red-500 text-slate-950 text-[10px] font-mono font-extrabold">
                {selectedHab.priority}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              {selectedHab.name}{' '}
              <span className="text-sm font-normal text-slate-400 font-mono">
                ({selectedHab.district}, {selectedHab.state})
              </span>
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Acute threat vector: <strong>{selectedHab.primaryHazard}</strong> • Egress route:{' '}
              <strong>{selectedHab.accessibility}</strong>
            </p>
          </div>
        </div>

        {/* Vital Population Metric */}
        <div className="flex items-center gap-4 border-l border-slate-800 pl-0 md:pl-6">
          <div>
            <div className="text-[11px] font-mono text-slate-400 uppercase">Population Requiring Relocation</div>
            <div className="text-3xl font-extrabold text-white font-mono mt-0.5">
              {selectedHab.population.toLocaleString()}
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-0.5">
              Estimated Safe Haven Demand: {selectedHab.population.toLocaleString()} Beds
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Relocation Sites Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">Recommended Relocation Sites</h3>
            <p className="text-xs text-slate-400">
              Ranked safe haven candidate zones screened for carrying capacity, utilities, and hazard clearance
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500">3 Candidate Zones Screened</span>
        </div>

        {/* 3 Relocation Site Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {MOCK_RELOCATION_SITES.map((site) => {
            const isBest = site.isBestRecommendation;
            const isInsufficient = site.suitability === 'Capacity insufficient';
            const isSelected = selectedSite.id === site.id;

            return (
              <div
                key={site.id}
                onClick={() => setSelectedSite(site)}
                className={`rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between border relative ${
                  isSelected ? 'ring-2 ring-emerald-400' : ''
                } ${
                  isBest
                    ? 'bg-gradient-to-b from-[#0d1c28] to-[#07131b] border-emerald-500 shadow-2xl shadow-emerald-950/60 ring-2 ring-emerald-500/40'
                    : isInsufficient
                    ? 'bg-[#090e15]/80 border-slate-800/80 opacity-85 hover:opacity-100 hover:border-slate-700'
                    : 'bg-[#090e15] border-slate-800 hover:border-slate-700 shadow-lg'
                }`}
              >
                {/* Top Badge for Best Recommendation */}
                {isBest && (
                  <div className="absolute -top-3.5 left-6 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10.5px] font-mono shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>HIGHEST AI RECOMMENDATION</span>
                  </div>
                )}

                <div>
                  {/* Card Title & Code */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {site.code} • {site.district}
                      </span>
                      <h4 className="text-base font-bold text-white mt-0.5">{site.name}</h4>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold whitespace-nowrap ${
                        isBest
                          ? 'bg-emerald-950 border border-emerald-400 text-emerald-300'
                          : isInsufficient
                          ? 'bg-red-950/80 border border-red-500/40 text-red-300'
                          : 'bg-yellow-950/80 border border-yellow-500/40 text-yellow-300'
                      }`}
                    >
                      {site.suitability}
                    </span>
                  </div>

                  {/* Capacity Progress Meter */}
                  <div className="p-3.5 rounded-xl bg-[#060a0f] border border-slate-800/80 space-y-2 mb-4 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Available Capacity:</span>
                      <span className={`font-bold ${site.availableCapacity < selectedHab.population ? 'text-red-400' : 'text-emerald-400'}`}>
                        {site.availableCapacity.toLocaleString()} / {site.maxCapacity.toLocaleString()} Vacant
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          site.availableCapacity < selectedHab.population ? 'bg-red-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${(site.currentOccupancy / site.maxCapacity) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Occupied: {site.currentOccupancy.toLocaleString()}</span>
                      <span>Max: {site.maxCapacity.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* 7 Required Criteria Metrics Grid */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        Safety Score
                      </span>
                      <span className="font-bold text-white">{site.safetyScore} / 100</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-cyan-400" />
                        Road Accessibility
                      </span>
                      <span className="font-semibold text-slate-200">{site.roadConnectivity} ({site.accessibilityScore}%)</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Droplets className="w-3.5 h-3.5 text-blue-400" />
                        Water Supply
                      </span>
                      <span className="font-semibold text-slate-200">{site.waterSource} ({site.waterSupplyScore}%)</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Home className="w-3.5 h-3.5 text-orange-400" />
                        Shelter Readiness
                      </span>
                      <span className="font-semibold text-slate-200">{site.shelterScore}% Verified</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <HeartPulse className="w-3.5 h-3.5 text-red-400" />
                        Medical Support
                      </span>
                      <span className="font-semibold text-slate-200">{site.medicalBeds} Beds ({site.medicalSupportScore}%)</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
                        Hazard Exposure
                      </span>
                      <span className={`font-bold ${site.hazardExposureScore <= 15 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                        {site.hazardExposureScore}% (Buffer Zone Cleared)
                      </span>
                    </div>
                  </div>

                  {/* Operational Notes */}
                  <p className="mt-4 text-[11px] text-slate-400 leading-relaxed font-sans bg-slate-900/30 p-2.5 rounded-lg border border-slate-800">
                    {site.notes}
                  </p>
                </div>

                {/* Card CTA Action */}
                <div className="pt-5 mt-4 border-t border-slate-800">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Relocation Order Signed: Pairing ${selectedHab.name} (2,840 pop) &rarr; ${site.name}. Transmitted to District Collector.`);
                    }}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs font-mono transition-all flex items-center justify-center gap-2 ${
                      isBest
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/25'
                        : isInsufficient
                        ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <span>{isBest ? 'Select & Issue Directive' : isInsufficient ? 'Capacity Inadequate' : 'Select Alternate Site'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default RelocationPlanningPage;
