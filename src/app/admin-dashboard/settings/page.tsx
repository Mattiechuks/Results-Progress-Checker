'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import DashboardSection from '@/components/DashboardSection';
import ProfileIcon from '@/components/ProfileIcon';
import GeneralSettings from '@/components/GeneralSettings';
import UserRolePermissionTable from '@/components/UserRolePermissionTable';
import SecuritySettings from '@/components/SecuritySettings';
import styled from 'styled-components';

const SettingsPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}>
        <ProfileIcon>👤</ProfileIcon>
        <Link href="/admin-dashboard">
          <SidebarItem>Admin Dashboard</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/analytics">
          <SidebarItem>Analytics</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/result-upload">
          <SidebarItem>Result-Upload</SidebarItem>
        </Link>
        <Link href="/admin-dashboard/settings">
          <SidebarItem>Settings</SidebarItem>
        </Link>
        <Link href="/login">
          <SidebarItem>Log Out</SidebarItem>
        </Link>
      </Sidebar>
      <MainContent>
        <DashboardSection>
        <SectionTitle>Settings</SectionTitle>
        <GeneralSettings />
        <UserRolePermissionTable />
        <SecuritySettings />
        </DashboardSection>
      </MainContent>
    </Container>
  );
};

export default SettingsPage;

const Container = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #b23;
  width: 98.2vw;
  @media (min-width: 768px) {
    margin-top: 90px;
    width: 98.2vw;
  }
`;

const MainContent = styled.div`
  justify-content: center;
  margin: auto;
  margin-right:20px;
  padding: 20px;
  padding-left: 0; 
  width: 55%;
  
  @media (min-width: 768px) {
    margin-right: 30px;
    width: 78%;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 20px;
  color: #2c3e50;
`;

const PlaceholderText = styled.p`
  color: #191919;
`;
const UploadButton = styled.button`
  padding: 12px 24px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;