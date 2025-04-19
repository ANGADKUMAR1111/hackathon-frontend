import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import Dashboard from './pages/Dashboard.tsx';
import PlatformSetup from './pages/PlatformSetup.tsx';
import AIAgent from './pages/AIAgent.tsx';
import Campaigns from './pages/Campaigns.tsx';
import LandingPage from './pages/LandingPage.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Promoters from './pages/Promoters.tsx';
import Settings from './pages/Settings.jsx';
import Help from './pages/Help.js';
import Leads from './pages/Leads.js';
import Payouts from './pages/Payouts.tsx';
import Navbar from './components/Navbar.tsx';
import Sidebar from './components/Sidebar.tsx';

// Styled components
const DashboardLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f7f9fc;
  margin-left: 240px; /* Adjust based on sidebar width */
`;

interface DashboardLayoutWrapperProps {
  children: React.ReactNode;
}

const DashboardLayoutWrapper: React.FC<DashboardLayoutWrapperProps> = ({ children }) => (
  <DashboardLayout>
    <Sidebar />
    <MainContent>
      <Navbar />
      {children}
    </MainContent>
  </DashboardLayout>
);

const App: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard-protected routes */}
      <Route path="/dashboard" element={
        <DashboardLayoutWrapper>
          <Dashboard />
        </DashboardLayoutWrapper>
      } />
      <Route path="/platform-setup" element={
        <DashboardLayoutWrapper>
          <PlatformSetup />
        </DashboardLayoutWrapper>
      } />
      <Route path="/ai-agent" element={
        <DashboardLayoutWrapper>
          <AIAgent />
        </DashboardLayoutWrapper>
      } />
      <Route path="/campaigns" element={
        <DashboardLayoutWrapper>
          <Campaigns />
        </DashboardLayoutWrapper>
      } />
      <Route path="/promoters" element={
        <DashboardLayoutWrapper>
          <Promoters />
        </DashboardLayoutWrapper>
      } />
      <Route path="/leads" element={
        <DashboardLayoutWrapper>
          <Leads />
        </DashboardLayoutWrapper>
      } />
      <Route path="/settings" element={
        <DashboardLayoutWrapper>
          <Settings />
        </DashboardLayoutWrapper>
      } />
      <Route path="/help" element={
        <DashboardLayoutWrapper>
          <Help />
        </DashboardLayoutWrapper>
      } />
      <Route path="/payouts" element={
        <DashboardLayoutWrapper>
          <Payouts />
        </DashboardLayoutWrapper>
      } />

      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;