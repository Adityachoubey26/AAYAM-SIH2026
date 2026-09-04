import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSignIn, useAuth } from '@clerk/clerk-react';
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Clock,
  Compass,
  Radio,
  AlertCircle,
} from 'lucide-react';
import logoImg from '../../assets/logo_AAYAM.png';
import mapBg from '../../assets/login_geospatial_bg.jpg';
import { ENV } from '../../config/env';

/**
 * AAYAM Authority Portal Login Page UI
 * Fully integrated with Clerk authentication while preserving 100% of the visual design.
 */
export const Login: React.FC = () => {
  const hasClerkKey = Boolean(
    ENV.CLERK_PUBLISHABLE_KEY ||
    (typeof window !== 'undefined' ? localStorage.getItem('aayam_clerk_pk') : '')
  );

  return (
    <div className="min-h-screen bg-[#03060a] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* ---------------------------------------------------- */}
      {/* SATELLITE TERRAIN & GEOSPATIAL BACKGROUND OVERLAY */}
      {/* ---------------------------------------------------- */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dark Satellite Map Asset */}
        <img
          src={mapBg}
          alt="India Geospatial Risk Map"
          className="w-full h-full object-cover object-[30%_center] opacity-45 scale-100 transform mix-blend-screen"
        />

        {/* Deep vignette & ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060a]/90 via-[#03060a]/50 to-[#03060a]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#03060a] via-transparent to-[#03060a]/80" />

        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-600/5 rounded-full blur-[160px]" />

        {/* Animated Geospatial Radar & Telemetry Nodes across Indian Subcontinent */}
        <div className="absolute top-[48%] left-[45%] hidden md:block">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
          </span>
        </div>

        <div className="absolute top-[58%] left-[42%] hidden md:block">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 duration-1000" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          </span>
        </div>

        <div className="absolute top-[65%] left-[46%] hidden md:block">
          <span className="relative flex h-2 w-2">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400/80 shadow-[0_0_6px_#f59e0b]" />
          </span>
        </div>
      </div>

      {/* ---------------------------------------------------- */}
      {/* TOP HEADER NAVIGATION                                */}
      {/* ---------------------------------------------------- */}
      <header className="relative z-20 px-6 sm:px-12 pt-6 sm:pt-8 flex items-center justify-between">
        {/* Left: AAYAM Official Logo & Tagline */}
        <Link to="/" className="flex flex-col group">
          <img
            src={logoImg}
            alt="AAYAM Logo"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <span className="text-[7.5px] sm:text-[8px] font-mono tracking-[0.28em] text-slate-400 uppercase mt-1.5 font-medium">
            DISASTER INTELLIGENCE FOR A SAFER TOMORROW
          </span>
        </Link>

        {/* Center: Hindi & English Motto */}
        <div className="hidden md:flex flex-col items-center text-center">
          <span className="text-xs sm:text-[13px] font-semibold text-slate-200 tracking-wider">
            भारत सुरक्षित
          </span>
          <span className="text-[8.5px] font-mono tracking-[0.24em] text-slate-400 uppercase mt-0.5">
            A STRONGER SAFER TOMORROW
          </span>
        </div>

        {/* Right: Hackathon Classification & Status Bar */}
        <div className="flex flex-col items-end">
          <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.2em] text-slate-300 uppercase font-semibold">
            SMART INDIA HACKATHON 2026
          </span>
          <div className="flex items-center gap-1 mt-1.5">
            <span className="w-6 h-0.5 rounded-full bg-emerald-500" />
            <span className="w-1.5 h-0.5 rounded-full bg-orange-500" />
            <span className="w-4 h-0.5 rounded-full bg-slate-700" />
          </div>
        </div>
      </header>

      {/* ---------------------------------------------------- */}
      {/* MAIN TWO-PART EXPERIENCE CONTAINER                   */}
      {/* ---------------------------------------------------- */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 py-8 sm:py-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================================================ */}
          {/* LEFT: BRANDING & CLEARANCE INFORMATION            */}
          {/* ================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center"
          >
            {/* Authority Portal Label with Orange Accent */}
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.22em] text-emerald-400 uppercase">
                AUTHORITY PORTAL
              </div>
              <div className="w-7 h-[2px] bg-orange-500 mt-1" />
            </div>

            {/* Main Section Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.12] mt-4">
              Secure Access to <br />
              <span className="text-emerald-400">Disaster Intelligence</span>
              <span className="text-orange-500">.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-[15px] text-slate-300 font-normal leading-relaxed max-w-lg mt-4">
              Access real-time hazard intelligence, risk monitoring and emergency response operations from one secure command interface.
            </p>

            {/* Small Status Indicator: AAYAM SYSTEM OPERATIONAL */}
            <div className="mt-7">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#090e15]/80 border border-slate-800/90 shadow-xl backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase leading-tight font-medium">
                    AAYAM SYSTEM
                  </span>
                  <span className="text-xs font-semibold text-white leading-tight mt-0.5">
                    Operational
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Telemetry Pillars (MONITOR, ANALYZE, RESPOND) */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-slate-800/60 max-w-lg">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                    MONITOR
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-normal">
                  Real-time insights
                </span>
              </div>

              <div className="flex flex-col border-l border-slate-800/80 pl-4">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                    ANALYZE
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-normal">
                  Predict & Prepare
                </span>
              </div>

              <div className="flex flex-col border-l border-slate-800/80 pl-4">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Radio className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-200">
                    RESPOND
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-normal">
                  Faster, Together
                </span>
              </div>
            </div>

            {/* Bottom Left Sub-text */}
            <div className="flex items-center gap-2.5 mt-8 text-[9px] font-mono tracking-widest text-slate-500 uppercase">
              <span className="w-5 h-[2px] bg-emerald-500 rounded-full" />
              <span>SAFER COMMUNITIES &bull; STRONGER INDIA</span>
            </div>
          </motion.div>

          {/* ================================================ */}
          {/* RIGHT: AUTHORITY LOGIN CARD (CLERK CONNECTED)     */}
          {/* ================================================ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
          >
            {hasClerkKey ? <ClerkAuthCard /> : <DevFallbackCard />}
          </motion.div>

        </div>
      </main>

      {/* ---------------------------------------------------- */}
      {/* FOOTER SECTION                                       */}
      {/* ---------------------------------------------------- */}
      <footer className="relative z-20 px-6 sm:px-12 pb-6 pt-2">
        {/* Right Aligned Quote Area */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between pb-5 gap-4">
          <div className="hidden lg:block text-xs font-mono text-slate-500">
            SECURE GEOSPATIAL INTELLIGENCE PLATFORM
          </div>

          <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
            <p className="text-xs sm:text-[13px] font-serif italic text-slate-400 tracking-wide">
              &ldquo;From Data to Action, For a Safer Tomorrow.&rdquo;
            </p>
            <div className="flex items-center gap-2 mt-1 text-[8.5px] font-mono tracking-widest text-slate-500 uppercase">
              <span>PEOPLE</span>
              <span>&bull;</span>
              <span>TECHNOLOGY</span>
              <span>&bull;</span>
              <span>RESILIENT INDIA</span>
              <span className="w-4 h-[2px] bg-emerald-500 rounded-full ml-1" />
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Line & Centered Copyright */}
        <div className="max-w-7xl mx-auto pt-4 border-t border-slate-800/80 flex flex-col items-center text-center">
          <div className="text-xs font-mono text-slate-400 font-medium">
            AAYAM &mdash; Disaster Intelligence &amp; Emergency Response
          </div>
          <div className="text-[10px] font-mono text-slate-500 mt-0.5">
            Authorized access only
          </div>
        </div>
      </footer>

    </div>
  );
};

/**
 * Clerk Authenticated Login Card
 * Uses useSignIn() and useAuth() while strictly retaining the exact UI design
 */
const ClerkAuthCard: React.FC = () => {
  const navigate = useNavigate();
  const { isLoaded: isAuthLoaded, isSignedIn } = useAuth();
  const { isLoaded, signIn, setActive } = useSignIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If already signed in with Clerk, redirect directly to dashboard
  useEffect(() => {
    if (isAuthLoaded && isSignedIn) {
      navigate('/dashboard', { replace: true });
    }
  }, [isAuthLoaded, isSignedIn, navigate]);

  // Handle Email and Password submission via Clerk
  const handleEmailPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) return;
    setError(null);
    setIsSubmitting(true);

    try {
      const result = await signIn.create({
        identifier: email.trim(),
        password: password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        localStorage.setItem('aayam_auth_session', 'true');
        navigate('/dashboard');
      } else {
        setError(`Additional verification step required: ${result.status}. Please check your email.`);
      }
    } catch (err: any) {
      console.error('Clerk login error:', err);
      const msg =
        err.errors?.[0]?.longMessage ||
        err.errors?.[0]?.message ||
        'Authentication failed. Please verify your officer credentials.';
      setError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google OAuth via Clerk
  const handleGoogleSignIn = async () => {
    if (!isLoaded || !signIn) return;
    setError(null);
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: `${window.location.origin}/sso-callback`,
        redirectUrlComplete: `${window.location.origin}/dashboard`,
      });
    } catch (err: any) {
      console.error('Google OAuth error:', err);
      setError(err.errors?.[0]?.message || 'Google authentication could not be started.');
    }
  };

  // Handle Microsoft OAuth via Clerk
  const handleMicrosoftSignIn = async () => {
    if (!isLoaded || !signIn) return;
    setError(null);
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_microsoft',
        redirectUrl: `${window.location.origin}/sso-callback`,
        redirectUrlComplete: `${window.location.origin}/dashboard`,
      });
    } catch (err: any) {
      console.error('Microsoft OAuth error:', err);
      setError(err.errors?.[0]?.message || 'Microsoft authentication could not be started.');
    }
  };

  return (
    <div className="w-full max-w-[440px] rounded-3xl bg-[#0a0f16]/90 border border-slate-800/80 hover:border-emerald-500/30 shadow-[0_0_50px_rgba(0,0,0,0.85)] backdrop-blur-xl p-8 sm:p-9 relative overflow-hidden transition-all duration-300 group">
      
      {/* Soft Ambient Corner Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />

      {/* Card Header: AUTHORITY ACCESS */}
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>AUTHORITY ACCESS</span>
      </div>

      {/* Card Title & Subtitle */}
      <h2 className="text-2xl sm:text-[28px] font-extrabold text-white tracking-tight mt-3">
        Welcome back
      </h2>
      <p className="text-xs sm:text-[13px] text-slate-400 mt-1 font-normal leading-relaxed">
        Sign in to continue to the AAYAM Authority Portal.
      </p>

      {/* Error Alert Display */}
      {error && (
        <div className="mt-4 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono flex items-start gap-2 animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span className="leading-snug">{error}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleEmailPasswordSubmit} className="mt-6 space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060a0f]/90 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40 transition-all font-sans"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#060a0f]/90 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40 transition-all font-sans"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password Row */}
        <div className="flex items-center justify-between pt-0.5 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => alert('Password reset directions have been routed to your registered SDMA officer email.')}
            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Forgot password?
          </button>
        </div>

        {/* Primary Sign In Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#4d864f] to-[#3f7543] hover:from-[#579459] hover:to-[#46824b] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all group disabled:opacity-75"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      {/* OR Divider */}
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-slate-800" />
        <span className="flex-shrink mx-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          OR
        </span>
        <div className="flex-grow border-t border-slate-800" />
      </div>

      {/* Social / Identity Sign-In Handlers via Clerk */}
      <div className="space-y-2.5">
        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full py-2.5 px-4 rounded-xl bg-[#060a0f] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Microsoft Button */}
        <button
          type="button"
          onClick={handleMicrosoftSignIn}
          className="w-full py-2.5 px-4 rounded-xl bg-[#060a0f] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 21 21">
            <path fill="#f25022" d="M1 1h9v9H1z" />
            <path fill="#00a4ef" d="M1 11h9v9H1z" />
            <path fill="#7fba00" d="M11 1h9v9h-9z" />
            <path fill="#ffb900" d="M11 11h9v9h-9z" />
          </svg>
          <span>Continue with Microsoft</span>
        </button>
      </div>

      {/* Request Access Link */}
      <div className="text-center text-xs mt-6 text-slate-400">
        <span>New authority user? </span>
        <button
          type="button"
          onClick={() => alert('Authority Onboarding: Contact NDMA/SDMA administrator or email support@aayam-disaster.gov.in for role-based credentials.')}
          className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <span>Request access</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};

/**
 * Development Fallback Card
 * Used when no Clerk publishable key is detected in the environment.
 */
const DevFallbackCard: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    localStorage.setItem('aayam_auth_session', 'true');
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 450);
  };

  return (
    <div className="w-full max-w-[440px] rounded-3xl bg-[#0a0f16]/90 border border-slate-800/80 hover:border-emerald-500/30 shadow-[0_0_50px_rgba(0,0,0,0.85)] backdrop-blur-xl p-8 sm:p-9 relative overflow-hidden transition-all duration-300 group">
      
      {/* Soft Ambient Corner Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />

      {/* Card Header: AUTHORITY ACCESS */}
      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
        <ShieldCheck className="w-4 h-4 text-emerald-400" />
        <span>AUTHORITY ACCESS</span>
      </div>

      {/* Card Title & Subtitle */}
      <h2 className="text-2xl sm:text-[28px] font-extrabold text-white tracking-tight mt-3">
        Welcome back
      </h2>
      <p className="text-xs sm:text-[13px] text-slate-400 mt-1 font-normal leading-relaxed">
        Sign in to continue to the AAYAM Authority Portal.
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Email Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#060a0f]/90 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40 transition-all font-sans"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#060a0f]/90 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40 transition-all font-sans"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password Row */}
        <div className="flex items-center justify-between pt-0.5 text-xs">
          <label className="flex items-center gap-2 cursor-pointer text-slate-300 hover:text-white select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-3.5 h-3.5 rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-emerald-500"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            onClick={() => alert('Password reset directives have been routed to the SDMA security officer.')}
            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            Forgot password?
          </button>
        </div>

        {/* Primary Sign In Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-[#4d864f] to-[#3f7543] hover:from-[#579459] hover:to-[#46824b] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all group disabled:opacity-75"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </form>

      {/* OR Divider */}
      <div className="relative flex py-4 items-center">
        <div className="flex-grow border-t border-slate-800" />
        <span className="flex-shrink mx-3 text-[10px] font-mono text-slate-500 uppercase tracking-wider">
          OR
        </span>
        <div className="flex-grow border-t border-slate-800" />
      </div>

      {/* Social / Identity Sign-In Placeholders */}
      <div className="space-y-2.5">
        {/* Google Button */}
        <button
          type="button"
          onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#060a0f] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
            />
            <path
              fill="#FBBC05"
              d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
            />
            <path
              fill="#EA4335"
              d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.93 6.72-4.93z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        {/* Microsoft Button */}
        <button
          type="button"
          onClick={() => handleSubmit({ preventDefault: () => {} } as any)}
          className="w-full py-2.5 px-4 rounded-xl bg-[#060a0f] hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-3 transition-colors shadow-sm"
        >
          <svg className="w-4 h-4" viewBox="0 0 21 21">
            <path fill="#f25022" d="M1 1h9v9H1z" />
            <path fill="#00a4ef" d="M1 11h9v9H1z" />
            <path fill="#7fba00" d="M11 1h9v9h-9z" />
            <path fill="#ffb900" d="M11 11h9v9h-9z" />
          </svg>
          <span>Continue with Microsoft</span>
        </button>
      </div>

      {/* Request Access Link */}
      <div className="text-center text-xs mt-6 text-slate-400">
        <span>New authority user? </span>
        <button
          type="button"
          onClick={() => alert('Access request form: Please submit your NDMA/SDMA officer token or district magistrate credentials to support@aayam-disaster.gov.in.')}
          className="text-orange-400 hover:text-orange-300 font-semibold inline-flex items-center gap-1 transition-colors"
        >
          <span>Request access</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};

export default Login;
