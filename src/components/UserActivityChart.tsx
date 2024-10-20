'use client';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  background-color: #2c2c2c;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const UserActivityChart: React.FC = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'User Activity',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'User Activity Over the Week',
      },
    },
  };

  return (
    <ChartContainer>
      <h2>User Activity</h2>
      <Bar data={data} options={options} />
    </ChartContainer>
  );
};

export default UserActivityChart;
