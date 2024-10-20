// components/VisualAnalyticsPieChart.tsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

const PieChartContainer = styled.div`
  padding: 20px;
  background: #e3dac9;
  border: solid 1px #ffff;
  border-radius: 8px;
`;

ChartJS.register(ArcElement, Tooltip, Legend);

const VisualAnalyticsPieChart = () => {
  const data = {
    labels: ['Distinction', 'Pass', 'Fail'],
    datasets: [
      {
        label: 'Grade Distribution',
        data: [25, 55, 20],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  return (
    <PieChartContainer>
      <Pie data={data} />
    </PieChartContainer>
  );
};

export default VisualAnalyticsPieChart;
