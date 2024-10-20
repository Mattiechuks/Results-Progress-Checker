'use client';
import styled from 'styled-components';

const SidebarItem = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 10px 20px;
  color: #ecf0f1;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center the options */
  align-items: center;
  background-color: ${({ active }) => (active ? '#34495e' : 'transparent')}; /* Highlight active section */

  &:hover {
    background-color: #34495e;
  }
`;

export default SidebarItem;
