import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignIn, useAuth } from '@clerk/clerk-react';
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Radio,
  FileCheck,
  AlertCircle,
  KeyRound,
  ExternalLink,
} from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';
import { ENV } from '../../config/env';

/**
 * Authority Login Page for AAYAM Disaster Intelligence Platform
 * Split screen layout:
 * Left side: AAYAM branding, clearance statement, and authority instructions
 * Right side: Clerk Authentication component (<SignIn />)
 */
export const Login: React.FC = () => {
  const [clerkKey, setClerkKey] = useState<string>(() => {
    return (
      ENV.CLERK_PUBLISHABLE_KEY ||
      (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') || '' : '')
    );
  });

  return (
    <div className="min-h-screen bg-[#05080c] text-slate-100 flex flex-col relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      {/* Geospatial Ambient Lighting & Topo Contour Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 -right-32 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[140px]" />
        
        {/* Subtle geospatial grid lines */}
        <div
          className="w-full h-full opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />

        {/* Diagonal coordinate sweep line */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/10 via-transparent to-slate-900/10" />
      </div>

      {/* Top Bar Navigation */}
      <div className="relative z-20 px-6 py-4 flex items-center justify-between border-b border-slate-800/60 bg-[#05080c]/80 backdrop-blur-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-emerald-400 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Return to Public Landing</span>
        </Link>

        <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 font-semibold">SDMA / NDMA SECURE GATEWAY</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-slate-500 hidden sm:inline">GOV CLOUD CLASSIFIED</span>
        </div>
      </div>

      {/* Main Split Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row relative z-10">
        
        {/* Left Side: AAYAM Branding & Authority Statement */}
        <div className="lg:w-[48%] xl:w-[45%] p-8 sm:p-12 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-gradient-to-b from-[#060a10]/90 to-[#040609]/95 backdrop-blur-xl">
          <div>
            {/* Logo and Brand Title */}
            <div className="flex items-center gap-3.5">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/25 shadow-lg shadow-emerald-950/40">
                <img src={logoImg} alt="AAYAM" className="h-11 w-auto object-contain" />
              </div>
              <div>
                <div className="text-2xl font-black tracking-wider text-white flex items-center gap-2">
                  <span>AAYAM</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-semibold uppercase">
                    SIH 2026
                  </span>
                </div>
                <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  Disaster Intelligence & Relocation Platform
                </p>
              </div>
            </div>

            {/* Core Statement */}
            <div className="mt-10 sm:mt-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>RESTRICTED ACCESS PORTAL</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.15]">
                Secure access to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
                  AAYAM Disaster Intelligence
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-2">
                This portal is strictly intended for authorized disaster-management personnel,
                district emergency magistrates, and state response coordination units.
              </p>
            </div>

            {/* Security Pillars / Clearance Verification */}
            <div className="mt-10 space-y-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0 text-emerald-400 mt-0.5">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    Live Geospatial Red-Zone Intelligence
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Automated slope radar, multi-hazard triggers, and habitation triage telemetry across Uttarakhand & Himalayan corridors.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 shrink-0 text-orange-400 mt-0.5">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    Carrying Capacity & Safe Relocation Planning
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Resource threshold audits, safe-haven matching, and AI explainable legal relocation dossiers for district decision makers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 shrink-0 text-emerald-400 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide">
                    Clerk MFA & Level-4 Cryptographic Session
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                    Personnel sessions are verified and logged in compliance with national disaster response data governance standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Metadata */}
          <div className="pt-8 mt-8 border-t border-slate-800/70 text-[10px] font-mono text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>PROBLEM ID: SIH26191 // TEAM AAYAM</div>
            <div>STATUS: OPERATIONAL 24x7</div>
          </div>
        </div>

        {/* Right Side: Clerk Authentication Component */}
        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative bg-[#05080c]/60">
          <div className="w-full max-w-md">
            
            {clerkKey ? (
              <ClerkSignInSection />
            ) : (
              <ClerkSetupSection onKeySaved={(key) => setClerkKey(key)} />
            )}

            {/* Security Footnote */}
            <div className="mt-8 text-center text-[10px] font-mono text-slate-500 space-y-1">
              <div className="flex items-center justify-center gap-1.5 text-slate-400">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span>GOVERNMENT DISASTER MANAGEMENT AUTHORITY CLEARANCE REQUIRED</span>
              </div>
              <div>UNAUTHORIZED ATTEMPTS ARE LOGGED AND REPORTED TO CYBER RESPONSE UNITS</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * Rendered when Clerk Publishable Key is active in the environment or session
 */
const ClerkSignInSection: React.FC = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  // If already authenticated with Clerk, navigate straight to authority dashboard
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isLoaded, isSignedIn, navigate]);

  return (
    <div className="w-full">
      <div className="mb-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-emerald-400 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>CLERK AUTHENTICATION ACTIVE</span>
        </div>
      </div>

      <div className="clerk-auth-container flex justify-center">
        <SignIn
          routing="path"
          path="/login"
          fallbackRedirectUrl="/dashboard"
          signUpUrl={undefined}
          appearance={{
            variables: {
              colorPrimary: '#10b981',
              colorBackground: '#090e15',
              colorInputBackground: '#060a0f',
              colorInputText: '#f8fafc',
              colorText: '#f1f5f9',
              colorTextSecondary: '#94a3b8',
              borderRadius: '0.75rem',
            },
            elements: {
              rootBox: 'w-full',
              card: 'bg-[#090e15] border border-slate-800 shadow-2xl rounded-3xl p-6 sm:p-8',
              headerTitle: 'text-white font-extrabold text-xl tracking-tight',
              headerSubtitle: 'text-slate-400 text-xs font-normal mt-1',
              formButtonPrimary:
                'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs tracking-wide py-3 rounded-xl shadow-lg shadow-emerald-500/20 transition-all',
              formFieldInput:
                'bg-[#060a0f] border-slate-800 text-white rounded-xl focus:border-emerald-500 focus:ring-emerald-500/30 text-xs py-2.5',
              formFieldLabel: 'text-slate-300 text-xs font-mono font-medium',
              footerAction: 'hidden',
              identityPreviewText: 'text-white text-xs',
              dividerLine: 'bg-slate-800',
              dividerText: 'text-slate-500 text-xs font-mono',
              socialButtonsBlockButton:
                'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800 hover:text-white rounded-xl text-xs py-2.5',
              socialButtonsBlockButtonText: 'text-xs font-semibold',
            },
          }}
        />
      </div>
    </div>
  );
};

/**
 * Setup and Quick Demo Section shown when Clerk Publishable Key hasn't been set in .env yet
 */
interface ClerkSetupSectionProps {
  onKeySaved: (key: string) => void;
}

const ClerkSetupSection: React.FC<ClerkSetupSectionProps> = ({ onKeySaved }) => {
  const navigate = useNavigate();
  const [inputKey, setInputKey] = useState('');
  const [error, setError] = useState('');
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputKey.startsWith('pk_test_') && !inputKey.startsWith('pk_live_')) {
      setError('Clerk Publishable Key must start with pk_test_ or pk_live_');
      return;
    }
    localStorage.setItem('aayam_clerk_pk', inputKey.trim());
    onKeySaved(inputKey.trim());
    window.location.reload();
  };

  const handleDemoBypass = () => {
    setIsDemoLoading(true);
    localStorage.setItem('aayam_auth_session', 'true');
    setTimeout(() => {
      setIsDemoLoading(false);
      navigate('/dashboard');
    }, 400);
  };

  return (
    <div className="rounded-3xl bg-[#090e15] border border-slate-800 p-8 shadow-2xl space-y-6">
      <div className="flex flex-col items-center text-center">
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 mb-3 text-emerald-400">
          <KeyRound className="w-6 h-6" />
        </div>
        <h2 className="text-xl font-extrabold text-white tracking-tight">
          Clerk Authentication Gateway
        </h2>
        <p className="text-xs text-slate-400 mt-1 max-w-xs">
          Provide your Clerk Publishable Key or enter demo evaluation mode to access the Authority Command Platform.
        </p>
      </div>

      {/* Enter Clerk Key Form */}
      <form onSubmit={handleSaveKey} className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-slate-400 mb-1.5">
            Clerk Publishable Key (<code className="text-emerald-400">VITE_CLERK_PUBLISHABLE_KEY</code>)
          </label>
          <input
            type="text"
            placeholder="pk_test_..."
            value={inputKey}
            onChange={(e) => {
              setInputKey(e.target.value);
              setError('');
            }}
            className="w-full px-4 py-2.5 rounded-xl bg-[#060a0f] border border-slate-800 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60"
          />
          {error && (
            <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
              <AlertCircle className="w-3 h-3" />
              <span>{error}</span>
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!inputKey.trim()}
          className="w-full py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs tracking-wide shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Save Key & Mount Clerk Auth</span>
        </button>
      </form>

      {/* Divider */}
      <div className="relative flex py-1 items-center">
        <div className="flex-grow border-t border-slate-800" />
        <span className="flex-shrink mx-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          OR QUICK EVALUATION
        </span>
        <div className="flex-grow border-t border-slate-800" />
      </div>

      {/* Demo Evaluation Session Button */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={handleDemoBypass}
          disabled={isDemoLoading}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 group"
        >
          {isDemoLoading ? (
            <div className="w-4 h-4 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Enter Authority Command (Evaluation Session)</span>
            </>
          )}
        </button>

        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-[11px] text-slate-400 font-mono space-y-1">
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ExternalLink className="w-3 h-3" />
            <span>Production Setup:</span>
          </div>
          <p className="text-slate-500 text-[10.5px]">
            Add <span className="text-slate-300">VITE_CLERK_PUBLISHABLE_KEY=pk_test_...</span> to{' '}
            <code className="text-slate-400">frontend/.env</code> for automatic zero-config production sign-in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
