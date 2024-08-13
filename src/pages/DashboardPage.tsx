import React from 'react';
import LineChart from '../components/LineChart';
import Map from '../components/Map';

const DashboardPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1>
      <div className="mb-8">
        <LineChart />
      </div>
      <Map />
    </div>
  );
};

export default DashboardPage;
