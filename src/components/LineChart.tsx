import { useQuery } from '@tanstack/react-query';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const fetchHistoricalData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const LineChart = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['historicalData'],
    queryFn: fetchHistoricalData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {(error as Error).message}</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
