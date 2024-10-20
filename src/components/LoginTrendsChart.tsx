'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

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

const LoginTrendsChart: React.FC = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Login Trends',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0',
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
        text: 'Login Trends Over Months',
      },
    },
  };

  return (
    <ChartContainer>
      <h2>Login Trends</h2>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default LoginTrendsChart;
