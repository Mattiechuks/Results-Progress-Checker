'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import ProfileIcon from '@/components/ProfileIcon';
import ProgressOverview from '@/components/student/ProgressOverview';
import styled from 'styled-components';
import ResultOption from '@/components/student/ResultOption';
import SimpleSettings from '@/components/student/SimpleSettings';

const StudentDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <ProgressOverview />;
      case 'result':
        return <ResultOption />;
      case 'settings':
        return <SimpleSettings />;
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
        <SidebarItem active={activeSection === 'result'} onClick={() => setActiveSection('result')}>
          Result
        </SidebarItem>
        <SidebarItem active={activeSection === 'settings'} onClick={() => setActiveSection('settings')}>
          Settings
        </SidebarItem>
        <SidebarItem active={false}>
          <Link href="/login">Log Out</Link>
        </SidebarItem>
      </Sidebar>
      <MainContent>
        <SectionTitle>{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</SectionTitle>
        {renderSection()}
      </MainContent>
    </Container>
  );
};

export default StudentDashboard;

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
