'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
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

const PassFailChart: React.FC = () => {
  const data = {
    labels: ['Pass', 'Fail'],
    datasets: [
      {
        label: 'Pass/Fail Rates',
        data: [75, 25],
        backgroundColor: ['#4BC0C0', '#FF6384'],
        hoverBackgroundColor: ['#4BC0C0', '#FF6384'],
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
        text: 'Overall Pass/Fail Rates',
      },
    },
  };

  return (
    <ChartContainer>
      <h2>Pass/Fail Rates</h2>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
};

export default PassFailChart;
