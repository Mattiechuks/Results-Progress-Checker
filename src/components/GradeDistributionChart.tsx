'use client';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

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

const GradeDistributionChart: React.FC = () => {
  const data = {
    labels: ['A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Grade Distribution',
        data: [10, 20, 30, 25, 15],
        backgroundColor: ['#4BC0C0', '#36A2EB', '#FFCE56', '#FF6384', '#AA64E2'],
        hoverBackgroundColor: ['#4BC0C0', '#36A2EB', '#FFCE56', '#FF6384', '#AA64E2'],
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
        text: 'Grade Distribution',
      },
    },
  };

  return (
    <ChartContainer>
      <h2>Grade Distribution</h2>
      <Doughnut data={data} options={options} />
    </ChartContainer>
  );
};

export default GradeDistributionChart;
