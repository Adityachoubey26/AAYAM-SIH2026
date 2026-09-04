import React, { useState } from 'react';
import {
  Search,
  Filter,
  ChevronRight,
  X,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { MOCK_HABITATIONS, Habitation } from '../../data/mockDashboardData';

export const HabitationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('ALL');
  const [selectedHab, setSelectedHab] = useState<Habitation | null>(null);

  const filteredHabitations = MOCK_HABITATIONS.filter((hab) => {
    const matchesSearch =
      hab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hab.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hab.primaryHazard.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPriority =
      priorityFilter === 'ALL' || hab.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto relative">
      
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white tracking-tight">
            Habitation Vulnerability Registry
          </h2>
          <p className="text-xs text-slate-400">
            Assessed settlements, demographic exposure, and real-time urgency triage
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, district, hazard..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-4 py-1.5 rounded-xl bg-[#090e15] border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 w-60 sm:w-72"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-[#090e15] border border-slate-800 p-1 rounded-xl text-xs font-mono">
            <Filter className="w-3 h-3 text-slate-400 ml-1.5" />
            {['ALL', 'IMMEDIATE', 'HIGH', 'MEDIUM'].map((p) => (
              <button
                key={p}
                onClick={() => setPriorityFilter(p)}
                className={`px-2.5 py-1 rounded-lg transition-all text-[11px] ${
                  priorityFilter === p
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Table / Grid of Habitations */}
      <div className="rounded-2xl bg-[#090e15] border border-slate-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-sans">
            <thead className="bg-[#0c131d] border-b border-slate-800 text-slate-400 uppercase font-mono text-[10.5px] tracking-wider">
              <tr>
                <th className="px-5 py-3.5">Habitation Name</th>
                <th className="px-5 py-3.5">Location</th>
                <th className="px-5 py-3.5">Population</th>
                <th className="px-5 py-3.5">Risk Score</th>
                <th className="px-5 py-3.5">Vulnerability</th>
                <th className="px-5 py-3.5">Priority</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredHabitations.map((hab) => {
                const isCrit = hab.priority === 'IMMEDIATE';
                const isHigh = hab.priority === 'HIGH';

                return (
                  <tr
                    key={hab.id}
                    onClick={() => setSelectedHab(hab)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer group"
                  >
                    {/* Name */}
                    <td className="px-5 py-4 font-bold text-white group-hover:text-emerald-300 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-300">
                          {hab.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div>{hab.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono font-normal">
                            Hazard: {hab.primaryHazard}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4 font-mono text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{hab.district}, {hab.state}</span>
                      </div>
                    </td>

                    {/* Population */}
                    <td className="px-5 py-4 font-mono font-semibold text-slate-200">
                      {hab.population.toLocaleString()}
                    </td>

                    {/* Risk Score */}
                    <td className="px-5 py-4 font-mono font-bold">
                      <span className={isCrit ? 'text-red-400' : isHigh ? 'text-orange-400' : 'text-yellow-400'}>
                        {hab.riskScore}
                      </span>
                      <span className="text-[10px] text-slate-500"> / 100</span>
                    </td>

                    {/* Vulnerability */}
                    <td className="px-5 py-4 font-mono text-slate-300">
                      {hab.vulnerabilityScore}%
                    </td>

                    {/* Priority */}
                    <td className="px-5 py-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold tracking-wide ${
                          isCrit
                            ? 'bg-red-950/80 border border-red-500/40 text-red-300'
                            : isHigh
                            ? 'bg-orange-950/80 border border-orange-500/40 text-orange-300'
                            : 'bg-yellow-950/80 border border-yellow-500/40 text-yellow-300'
                        }`}
                      >
                        {hab.priority}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4 font-mono text-[11px]">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            hab.status === 'Active Alert'
                              ? 'bg-red-500 animate-ping'
                              : hab.status === 'Relocation Staged'
                              ? 'bg-orange-400'
                              : 'bg-emerald-400'
                          }`}
                        />
                        {hab.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedHab(hab);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-emerald-950 hover:text-emerald-300 text-slate-400 transition-colors"
                        title="View Detailed Dossier"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-over Detailed Panel */}
      {selectedHab && (
        <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-[#070b10] border-l border-slate-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Header with Close */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                  Habitation Assessment Dossier
                </span>
                <h3 className="text-xl font-extrabold text-white">{selectedHab.name}</h3>
                <p className="text-xs text-slate-400 font-mono">{selectedHab.district}, {selectedHab.state}</p>
              </div>
              <button
                onClick={() => setSelectedHab(null)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 font-mono text-center">
              <div className="p-3 rounded-xl bg-[#090e15] border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Population</div>
                <div className="text-lg font-extrabold text-white mt-0.5">{selectedHab.population.toLocaleString()}</div>
              </div>
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/30">
                <div className="text-[10px] text-red-400 uppercase">Risk Score</div>
                <div className="text-lg font-extrabold text-red-300 mt-0.5">{selectedHab.riskScore}/100</div>
              </div>
              <div className="p-3 rounded-xl bg-[#090e15] border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase">Priority</div>
                <div className="text-sm font-extrabold text-orange-400 mt-1">{selectedHab.priority}</div>
              </div>
            </div>

            {/* Demographic Vulnerability Breakdown */}
            <div className="p-4 rounded-xl bg-[#090e15] border border-slate-800 space-y-3 text-xs">
              <span className="font-bold text-white font-mono uppercase tracking-wider">
                Vulnerable Demographics
              </span>
              <div className="grid grid-cols-2 gap-3 font-mono">
                <div>
                  <span className="text-slate-400">Children (&lt;10 yrs): </span>
                  <span className="text-white font-bold">{selectedHab.demographics.children}</span>
                </div>
                <div>
                  <span className="text-slate-400">Elderly (&gt;65 yrs): </span>
                  <span className="text-white font-bold">{selectedHab.demographics.elderly}</span>
                </div>
                <div>
                  <span className="text-slate-400">Disabled Persons: </span>
                  <span className="text-white font-bold">{selectedHab.demographics.disabled}</span>
                </div>
                <div>
                  <span className="text-slate-400">Households: </span>
                  <span className="text-white font-bold">{selectedHab.demographics.households}</span>
                </div>
              </div>
            </div>

            {/* Terrain & Infrastructure Constraints */}
            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#090e15] border border-slate-800 flex justify-between">
                <span className="text-slate-400">Egress Roads:</span>
                <span className="text-red-400 font-bold">{selectedHab.egressRoads} (Single Artery Chokepoint)</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090e15] border border-slate-800 flex justify-between">
                <span className="text-slate-400">Nearest Shelter Distance:</span>
                <span className="text-white font-bold">{selectedHab.nearestShelterDistanceKm} km</span>
              </div>
              <div className="p-3 rounded-xl bg-[#090e15] border border-slate-800 flex justify-between">
                <span className="text-slate-400">Primary Hazard Vector:</span>
                <span className="text-orange-400 font-bold">{selectedHab.primaryHazard}</span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => alert(`Relocation Workflow Dispatched for ${selectedHab.name}. Safe Haven Site B linked.`)}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Initiate Relocation Assessment for {selectedHab.name}</span>
            </button>
            <button
              onClick={() => setSelectedHab(null)}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-medium"
            >
              Close Panel
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default HabitationsPage;
