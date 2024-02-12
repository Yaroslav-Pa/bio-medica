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
              className={`cursor-pointer transition-colors ml-5 p-2 rounded border-2 border-solid ${
                selectedLocation.address === location.address
                  ? 'border-thirdColor'
                  : 'hover:bg-firstColor border-secondColor'
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
