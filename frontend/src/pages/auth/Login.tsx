import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [officerId, setOfficerId] = useState('NDMA-OFFICER-26191');
  const [passcode, setPasscode] = useState('••••••••••••');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#06090d] flex items-center justify-center p-4 relative overflow-hidden text-slate-100 selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Return to Landing link */}
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-emerald-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Public Portal</span>
        </Link>

        {/* Login Box */}
        <div className="rounded-3xl bg-[#090e15] border border-slate-800 p-8 shadow-2xl space-y-6">
          
          {/* Brand Header */}
          <div className="flex flex-col items-center text-center">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-3">
              <img src={logoImg} alt="AAYAM" className="h-12 w-auto object-contain" />
            </div>
            <h2 className="text-xl font-extrabold text-white tracking-tight">Authority Command Login</h2>
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mt-1">
              Disaster Intelligence Platform
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Official Credential / Officer ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#060a0f] border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500/60"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Security Access Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#060a0f] border border-slate-800 text-xs font-mono text-white focus:outline-none focus:border-emerald-500/60"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <span>Authenticating Officer...</span>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enter Authority Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

          {/* Security footnote */}
          <div className="pt-4 border-t border-slate-800/80 text-center text-[10px] font-mono text-slate-500 space-y-1">
            <div>RESTRICTED ACCESS // AUTHORIZED OFFICIALS ONLY</div>
            <div>CLERK MFA & GOVERNMENT CLOUD PROTOCOL</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;
