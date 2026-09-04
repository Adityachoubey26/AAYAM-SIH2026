import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';
import LandingPage from '../pages/landing/LandingPage';
import Dashboard from '../pages/dashboard/Dashboard';
import RiskIntelligencePage from '../pages/dashboard/RiskIntelligencePage';
import HabitationsPage from '../pages/habitations/HabitationsPage';
import HazardsPage from '../pages/hazards/HazardsPage';
import VulnerabilityPage from '../pages/dashboard/VulnerabilityPage';
import RelocationPlanningPage from '../pages/relocation/RelocationPlanningPage';
import CapacityPage from '../pages/dashboard/CapacityPage';
import AIAnalysisPage from '../pages/ai-analysis/AIAnalysisPage';
import AlertsPage from '../pages/dashboard/AlertsPage';
import Login from '../pages/auth/Login';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public High-Impact Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Authority Command Platform Routes under DashboardLayout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="risk-intelligence" element={<RiskIntelligencePage />} />
          <Route path="habitations" element={<HabitationsPage />} />
          <Route path="hazards" element={<HazardsPage />} />
          <Route path="vulnerability" element={<VulnerabilityPage />} />
          <Route path="relocation" element={<RelocationPlanningPage />} />
          <Route path="capacity" element={<CapacityPage />} />
          <Route path="ai-analysis" element={<AIAnalysisPage />} />
          <Route path="alerts" element={<AlertsPage />} />
        </Route>

        {/* Shorthand / Direct Route Compatibility */}
        <Route path="/risk-map" element={<Navigate to="/dashboard/risk-intelligence" replace />} />
        <Route path="/habitations" element={<Navigate to="/dashboard/habitations" replace />} />
        <Route path="/hazards" element={<Navigate to="/dashboard/hazards" replace />} />
        <Route path="/relocation" element={<Navigate to="/dashboard/relocation" replace />} />
        <Route path="/ai-analysis" element={<Navigate to="/dashboard/ai-analysis" replace />} />

        {/* Authentication Portal */}
        <Route path="/login" element={<Login />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
