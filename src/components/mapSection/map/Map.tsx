import React from 'react';
import { MapLocation } from '@/variablesToChange';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { ChangeView } from './ChangeView';

const customIcon = new Icon({
  iconUrl: '/map-marker.webp',
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

export default function Map({
  selectedLocation: { coordinates },
  markers,
}: {
  selectedLocation: MapLocation;
  markers: MapLocation[];
}) {
  return (
    <MapContainer
      center={coordinates}
      zoom={100}
      scrollWheelZoom={false}
      style={{ height: '100%', minHeight: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView center={coordinates} />
      {markers.map((marker) => (
        <Marker position={marker.coordinates} icon={customIcon}>
          <Popup>
            {marker.address}
            <br /> {marker.phone}
            <br /> {marker.schedule.weekdays}{' '}
            {marker.schedule.saturday && (
              <>
                <br /> {marker.schedule.saturday}
              </>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
