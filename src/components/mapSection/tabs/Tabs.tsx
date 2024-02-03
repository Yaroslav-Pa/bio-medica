import { Change, MapLocation } from '@/variablesToChange';
import React from 'react';

export const Tabs = ({
  selectedLocation,
  onTabClick,
}: {
  selectedLocation: MapLocation;
  onTabClick: (location: MapLocation) => void;
}) => {
  return (
    <div className="space-y-2">
      {Object.keys(Change.map).map((cityName) => (
        <div key={cityName}>
          <div>{cityName}</div>
          {Change.map[cityName].map((location: MapLocation) => (
            <div
              key={location.address}
              className={`cursor-pointer p-2 rounded ${
                selectedLocation.address === location.address
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => onTabClick(location)}
            >
              {location.address}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
