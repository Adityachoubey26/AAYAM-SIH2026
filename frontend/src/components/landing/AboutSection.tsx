import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

export const AboutSection: React.FC = () => {
  const pillars = [
    { label: 'Hazard & Terrain', desc: 'Geotechnical slope analysis, precipitation radar, and seismic vectors.' },
    { label: 'Demographic Vulnerability', desc: 'Socioeconomic vulnerability scoring, habitation density, and age ratios.' },
    { label: 'Carrying Capacity', desc: 'Environmental, hydrological, and logistical limits of candidate safe zones.' },
    { label: 'AI Spatial Reasoning', desc: 'Explainable LLM & heuristic models generating actionable decision briefs.' },
    { label: 'Authority Decision Support', desc: 'Clear command dashboards for district and state emergency managers.' },
    { label: 'Humanitarian Relocation', desc: 'Safe, sustainable evacuation and community re-establishment planning.' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#070b10] border-t border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem & Philosophical Grounding */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="p-4 rounded-2xl bg-[#090e15] border border-slate-800 shadow-2xl mb-6 flex items-center justify-center">
              <img
                src={logoImg}
                alt="AAYAM Emblem"
                className="w-48 sm:w-60 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
              />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                Six Perspectives • One Solution
              </span>
              <h3 className="text-xl font-bold text-white">
                The AAYAM Philosophy
              </h3>
              <p className="text-xs text-slate-400 max-w-sm">
                A multidimensional paradigm integrating environmental science, demographics, and high-performance geospatial algorithms.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Problem Statement Alignment */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300 font-semibold">
                About The Platform
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Unifying Disaster Intelligence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Into a Single Command Layer
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              AAYAM is engineered for the <strong className="text-white">Smart India Hackathon 2026 (Problem Statement: SIH26191)</strong> to address a persistent crisis in fragile topographies: disaster authorities lack a synchronized system that pairs real-time hazard detection with community vulnerability and verified safe-haven carrying capacities.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              By consolidating satellite GIS layers, demographic vulnerability indexes, environmental carrying capacity audits, and transparent AI reasoning into one authoritative portal, AAYAM empowers decision-makers to move from reactive crisis management to proactive life-saving prevention.
            </p>

            {/* 6 Core Pillars */}
            <div id="team" className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {pillars.map((pillar) => (
                <div key={pillar.label} className="p-3 rounded-xl bg-[#090e15] border border-slate-800/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{pillar.label}</h4>
                    <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
