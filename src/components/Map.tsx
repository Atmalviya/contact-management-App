import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface CountryInfo {
  _id: string;
  lat: number;
  long: number;
}

interface Country {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: CountryInfo;
}

const fetchCountriesData = async (): Promise<Country[]> => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const Map: React.FC = () => {
  const { data, error, isLoading } = useQuery<Country[]>({
    queryKey: ['countriesData'],
    queryFn: fetchCountriesData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {(error as Error).message}</div>;

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((country) => (
        <Marker
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <strong>{country.country}</strong><br />
            Active: {country.active}<br />
            Recovered: {country.recovered}<br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
