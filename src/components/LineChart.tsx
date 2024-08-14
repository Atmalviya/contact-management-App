import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface HistoricalData {
  cases: Record<string, number>;
}

const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const LineChart: React.FC = () => {
  const { data, error, isLoading } = useQuery<HistoricalData>({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {(error as Error).message}</div>;

  const chartData = {
    labels: data ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: 'Cases',
        data: data ? Object.values(data.cases) : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.4, 
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 100, 
        },
      },
    },
  };

  return (
    <div className="relative h-64 sm:h-96 md:h-128">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
