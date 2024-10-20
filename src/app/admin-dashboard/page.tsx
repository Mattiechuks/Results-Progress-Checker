'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import ProfileIcon from '@/components/ProfileIcon';
import SummaryStats from '@/components/SummaryStats';
import StudentSearch from '@/components/StudentSearch';
import RecentActivity from '@/components/RecentActivity';
import Notifications from '@/components/Notifications';
import ProgressTracker from '@/components/ProgressTracker';
import VisualAnalytics from '@/components/VisualAnalytics';
import Analytics from '@/components/admin/Analytics';
import ResultUpload from '@/components/admin/ResultUpload';
import DashboardSection from '@/components/DashboardSection';
import Settings from '@/components/admin/Settings';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  margin: 0;
  left: 50px;
  top: 65px;
  padding-top: 0;
  display: flex;
  flex-direction: row;
  background-color: #b23;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  @media (max-width: 768px) {
    top: 60px;
    left: 62px;
  }
`;

const MainContent = styled.div`
  position: relative;
  justify-content: center;
  margin: auto;
  margin-right: 20px;
  padding: 20px;
  padding-bottom: 150px;
  padding-left: 0;
  width: 60%;
  @media (min-width: 768px) {
    margin-right: 30px;
    width: 78%;
  }
`;

const SectionTitle = styled.h2`
  position: relative;
  left: 40px;
  margin-bottom: 10px;
  font-size: 30px;
  color: #2c3e50;
`;

const PlaceholderText = styled.p`
  color: #191919;
`;

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <>
            <SummaryStats />
            <StudentSearch />
            <RecentActivity />
            <Notifications />
            <ProgressTracker />
            <VisualAnalytics />
          </>
        );
      case 'analytics':
        return <Analytics />;
      case 'result-upload':
        return <ResultUpload />;
      case 'settings':
        return <Settings />;
      default:
        return <PlaceholderText>Select a section</PlaceholderText>;
    }
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
        <ProfileIcon />
        <SidebarItem active={activeSection === 'overview'} onClick={() => setActiveSection('overview')}>
          Dashboard
        </SidebarItem>
        <SidebarItem active={activeSection === 'analytics'} onClick={() => setActiveSection('analytics')}>
          Analytics
        </SidebarItem>
        <SidebarItem active={activeSection === 'result-upload'} onClick={() => setActiveSection('result-upload')}>
          Result Upload
        </SidebarItem>
        <SidebarItem active={activeSection === 'settings'} onClick={() => setActiveSection('settings')}>
          Settings
        </SidebarItem>
        <SidebarItem active={false}>
          <Link href="/login/admin">Log Out</Link>
        </SidebarItem>
      </Sidebar>
      <MainContent>
        <DashboardSection>
          <SectionTitle>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</SectionTitle>
          {renderSection()}
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default AdminDashboard;
