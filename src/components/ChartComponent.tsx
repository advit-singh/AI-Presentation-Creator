import React from 'react';
    import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
    import { Bar, Line, Pie } from 'react-chartjs-2';

    ChartJS.register(ArcElement, Tooltip, Legend);

    interface ChartComponentProps {
      chartType: 'bar' | 'line' | 'pie';
      chartData: any; // Replace with a more specific type if needed
    }

    const ChartComponent: React.FC<ChartComponentProps> = ({ chartType, chartData }) => {
      const renderChart = () => {
        switch (chartType) {
          case 'bar':
            return <Bar data={chartData} />;
          case 'line':
            return <Line data={chartData} />;
          case 'pie':
            return <Pie data={chartData} />;
          default:
            return null;
        }
      };

      return <div>{renderChart()}</div>;
    };

    export default ChartComponent;
