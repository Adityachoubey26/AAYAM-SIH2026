import React from 'react';
import { motion } from 'framer-motion';

interface SectionConnectorProps {
  label?: string;
}

export const SectionConnector: React.FC<SectionConnectorProps> = ({ label }) => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-6 overflow-hidden pointer-events-none select-none">
      {/* Ambient background glow bridge */}
      <div className="absolute w-48 h-16 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2" />

      {/* Vertical drawing line */}
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 32, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-px bg-gradient-to-b from-transparent via-emerald-400/40 to-emerald-400"
        />

        {/* Pulse beacon node */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="relative my-1 flex items-center justify-center"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <div className="absolute w-4 h-4 rounded-full border border-emerald-400/30 animate-ping" />
        </motion.div>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: 32, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="w-px bg-gradient-to-b from-emerald-400 via-emerald-400/40 to-transparent"
        />
      </div>

      {label && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-2 text-[10px] font-mono tracking-widest text-slate-500 uppercase font-medium"
        >
          {label}
        </motion.span>
      )}
    </div>
  );
};

export default SectionConnector;
