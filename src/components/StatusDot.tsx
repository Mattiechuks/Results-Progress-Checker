'use client';
import styled from 'styled-components';

interface StatusProps {
  status: 'Active' | 'Inactive';
}

const StatusDot = styled.span<StatusProps>`
  height: 10px;
  width: 10px;
  background-color: ${props => props.status === 'Active' ? 'green' : 'red'};
  border-radius: 50%;
  display: inline-block;
`;

export default StatusDot;
