// components/admin/Settings.tsx
'use client';
import React from 'react';
import styled from 'styled-components';
import GeneralSettings from '@/components/GeneralSettings';
import UserRolePermissionTable from '@/components/UserRolePermissionTable';
import SecuritySettings from '@/components/SecuritySettings';

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  width: 98.2vw;
  padding: 20px;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 100px;
    width: 82%;
    min-width: 79.8%;
    margin: auto;
  }


 @media (max-width: 600px) {
    position: relative;
    width: 79%;
    min-width: 79.8%;
    margin: auto;
  
 }

`;



const Settings: React.FC = () => {
  return (
    <SettingsContainer>
      <GeneralSettings />
      <UserRolePermissionTable />
      <SecuritySettings />
    </SettingsContainer>
  );
};

export default Settings;
