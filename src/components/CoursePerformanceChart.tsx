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

const CoursePerformanceChart: React.FC = () => {
  const data = {
    labels: ['Course A', 'Course B', 'Course C', 'Course D'],
    datasets: [
      {
        label: 'Performance',
        data: [35, 25, 20, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
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
        text: 'Course Performance Distribution',
      },
    },
  };

  return (
    <ChartContainer>
      <h2>Course Performance Distribution</h2>
      <Pie data={data} options={options} />
    </ChartContainer>
  );
};

export default CoursePerformanceChart;
