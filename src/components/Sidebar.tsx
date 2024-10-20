'use client';

import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  children: ReactNode;
}

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: 200px;
  height: 100%;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 20px;
  padding-top: 150px;
  position: fixed;
  left: 0;
  top: 0;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 30%;
    height: 100vh;
    padding-top: 80px;
  }
`;

const ToggleButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 103px;
  left: ${({ isOpen }) => (isOpen ? '0' : '0')};
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: left 0.3s ease-in-out, transform 0.3s ease-in-out;
  background-color: #191919;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000; /* Ensure the button is on top of other elements */

  @media (max-width: 768px) {
    top: 63px;
    left: ${({ isOpen }) => (isOpen ? 'calc(20px)' : '9px')};
  }
`;

const Arrow = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #b23;
`;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, children }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        {children}
      </SidebarContainer>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <Arrow />
      </ToggleButton>
    </>
  );
};

export default Sidebar;
