// components/VisualAnalyticsBarChart.tsx
import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const BarChartContainer = styled.div`
  padding: 20px;
  background: #191919;
  border-radius: 8px;
`;

ChartJS.register(BarElement, CategoryScale, LinearScale);

const VisualAnalyticsBarChart = () => {
  const data = {
    labels: ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4'],
    datasets: [
      {
        label: 'Average GPA',
        data: [3.2, 3.5, 3.1, 3.6],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
      },
    },
  };

  return (
    <BarChartContainer>
      <Bar data={data} options={options} />
    </BarChartContainer>
  );
};

export default VisualAnalyticsBarChart;
