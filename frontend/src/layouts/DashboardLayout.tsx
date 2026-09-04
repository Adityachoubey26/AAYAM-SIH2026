import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';

export const DashboardLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#04070b] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans">
      {/* Left Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Dynamic Nested Route Content */}
        <main className="flex-1 overflow-y-auto bg-[#04070b] p-3.5 sm:p-5 lg:p-6 custom-scrollbar">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
