import React from 'react';
import {
  Layers,
  Droplets,
  Home,
  HeartPulse,
  Utensils,
  Compass,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { MOCK_RELOCATION_SITES } from '../../data/mockDashboardData';

export const CapacityPage: React.FC = () => {
  const totalMax = MOCK_RELOCATION_SITES.reduce((acc, s) => acc + s.maxCapacity, 0);
  const totalOcc = MOCK_RELOCATION_SITES.reduce((acc, s) => acc + s.currentOccupancy, 0);
  const totalAvail = MOCK_RELOCATION_SITES.reduce((acc, s) => acc + s.availableCapacity, 0);
  const overallOccupancyRate = Math.round((totalOcc / totalMax) * 100);

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      
      {/* Header & Demo Data Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono text-[10.5px] font-bold">
              DEMO DATA SIMULATION
            </span>
          </div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Relocation Site Carrying Capacity & Critical Lifelines
          </h2>
          <p className="text-xs text-slate-400">
            Real-time threshold screening for potable water, shelter, medical beds, and rations
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
            Total Havens Screened: <strong className="text-white">{MOCK_RELOCATION_SITES.length}</strong>
          </span>
        </div>
      </div>

      {/* Top 3 Core Capacity Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Max Capacity */}
        <div className="p-6 rounded-2xl bg-[#090e15] border border-slate-800 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>MAXIMUM DESIGN CAPACITY</span>
            <Building2 className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
            {totalMax.toLocaleString()}
          </div>
          <p className="text-xs text-slate-400">
            Total humanitarian capacity across all designated green haven zones [DEMO DATA]
          </p>
        </div>

        {/* Current Occupancy */}
        <div className="p-6 rounded-2xl bg-[#090e15] border border-orange-500/30 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-orange-400">
            <span>CURRENT OCCUPANCY</span>
            <Layers className="w-4 h-4 text-orange-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-orange-300 font-mono">
            {totalOcc.toLocaleString()}{' '}
            <span className="text-sm font-normal text-slate-400 font-mono">({overallOccupancyRate}%)</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-orange-500" style={{ width: `${overallOccupancyRate}%` }} />
          </div>
          <p className="text-xs text-slate-400">
            Sheltered individuals currently accommodated in transit enclaves
          </p>
        </div>

        {/* Available Capacity */}
        <div className="p-6 rounded-2xl bg-[#090e15] border border-emerald-500/30 shadow-xl space-y-2">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <span>AVAILABLE NET CAPACITY</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono">
            {totalAvail.toLocaleString()}{' '}
            <span className="text-sm font-normal text-slate-400 font-mono">({100 - overallOccupancyRate}%)</span>
          </div>
          {/* Progress bar */}
          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: `${100 - overallOccupancyRate}%` }} />
          </div>
          <p className="text-xs text-slate-400">
            Immediate vacancy ready to absorb priority evacuation triage
          </p>
        </div>

      </div>

      {/* Critical Lifelines Overview Grid for Each Relocation Site */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white tracking-tight">
            Site-by-Site Carrying Capacity Breakdown
          </h3>
          <span className="text-xs font-mono text-amber-400/90 font-medium">
            SIMULATED DEMO TELEMETRY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {MOCK_RELOCATION_SITES.map((site) => {
            const occupancyPct = Math.round((site.currentOccupancy / site.maxCapacity) * 100);

            return (
              <div
                key={site.id}
                className="p-6 rounded-2xl bg-[#090e15] border border-slate-800 shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Site Title */}
                  <div className="flex items-start justify-between border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">{site.code}</span>
                      <h4 className="text-base font-bold text-white">{site.name}</h4>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        site.suitability === 'Suitable'
                          ? 'bg-emerald-950 border border-emerald-500/40 text-emerald-300'
                          : site.suitability === 'Capacity insufficient'
                          ? 'bg-red-950 border border-red-500/40 text-red-300'
                          : 'bg-yellow-950 border border-yellow-500/40 text-yellow-300'
                      }`}
                    >
                      {site.suitability}
                    </span>
                  </div>

                  {/* Capacity Bar */}
                  <div className="space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Capacity Utilization:</span>
                      <span className="font-bold text-white">{occupancyPct}% ({site.currentOccupancy}/{site.maxCapacity})</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${occupancyPct >= 85 ? 'bg-red-500' : 'bg-emerald-500'}`}
                        style={{ width: `${occupancyPct}%` }}
                      />
                    </div>
                    <div className="text-[11px] text-emerald-400 font-bold">
                      Available: {site.availableCapacity.toLocaleString()} persons
                    </div>
                  </div>

                  {/* 5 Lifeline Indicators */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800 font-mono text-xs">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">
                      Essential Lifeline Thresholds (DEMO DATA)
                    </span>

                    {/* Water */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Droplets className="w-3.5 h-3.5 text-blue-400" />
                        Water Supply
                      </span>
                      <span className="font-bold text-white">{site.waterSupplyScore}% Verified</span>
                    </div>

                    {/* Shelter */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Home className="w-3.5 h-3.5 text-orange-400" />
                        Shelter Readiness
                      </span>
                      <span className="font-bold text-white">{site.shelterScore}%</span>
                    </div>

                    {/* Medical */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span className="text-slate-400 flex items-center gap-2">
                        <HeartPulse className="w-3.5 h-3.5 text-red-400" />
                        Medical Support
                      </span>
                      <span className="font-bold text-white">{site.medicalBeds} Beds ({site.medicalSupportScore}%)</span>
                    </div>

                    {/* Food */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Utensils className="w-3.5 h-3.5 text-yellow-400" />
                        Food Logistics
                      </span>
                      <span className="font-bold text-white">{site.foodLogisticsScore}% Supply</span>
                    </div>

                    {/* Road Accessibility */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Compass className="w-3.5 h-3.5 text-emerald-400" />
                        Road Accessibility
                      </span>
                      <span className="font-bold text-emerald-400">{site.roadConnectivity}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="text-[10px] font-mono text-slate-500 pt-3 border-t border-slate-800">
                  REF: CAPACITY-AUDIT // DEMO DATA ONLY
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default CapacityPage;
