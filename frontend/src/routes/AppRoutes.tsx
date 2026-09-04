import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

import LandingPage from '../pages/landing/LandingPage';
import Dashboard from '../pages/dashboard/Dashboard';
import RiskMapPage from '../pages/risk-map/RiskMapPage';
import HabitationsPage from '../pages/habitations/HabitationsPage';
import HabitationDetailsPage from '../pages/habitations/HabitationDetailsPage';
import HazardsPage from '../pages/hazards/HazardsPage';
import HazardDetailsPage from '../pages/hazards/HazardDetailsPage';
import RelocationSitesPage from '../pages/relocation/RelocationSitesPage';
import RelocationPlanningPage from '../pages/relocation/RelocationPlanningPage';
import AIAnalysisPage from '../pages/ai-analysis/AIAnalysisPage';
import AIRecommendationPage from '../pages/ai-analysis/AIRecommendationPage';
import Login from '../pages/auth/Login';
import Unauthorized from '../pages/auth/Unauthorized';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public High-Impact Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected / Authority Command Platform Layout Routes */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/risk-map" element={<RiskMapPage />} />
          <Route path="/habitations" element={<HabitationsPage />} />
          <Route path="/habitations/:id" element={<HabitationDetailsPage />} />
          <Route path="/hazards" element={<HazardsPage />} />
          <Route path="/hazards/:id" element={<HazardDetailsPage />} />
          <Route path="/relocation" element={<RelocationSitesPage />} />
          <Route path="/relocation/planning" element={<RelocationPlanningPage />} />
          <Route path="/ai-analysis" element={<AIAnalysisPage />} />
          <Route path="/ai-analysis/recommendation" element={<AIRecommendationPage />} />
        </Route>

        {/* Authentication & Access Layout Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
