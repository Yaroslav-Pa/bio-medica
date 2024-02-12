'use client';
import React, { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Change, MapLocation } from '../../variablesToChange/index';
import { Tabs } from './tabs/Tabs';
import { DataView } from './dataView/DataView';

const MapSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(
    Change.map['м. Запоріжжя'][0] as MapLocation
  );

  const Map = useMemo(
    () =>
      dynamic(() => import('./map/Map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div className="flex pb-20 pl-6 pr-6">
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-semibold mb-4">Адреса відділень</h2>
        <Tabs
          onTabClick={setSelectedLocation}
          selectedLocation={selectedLocation}
        ></Tabs>
      </div>

      <div className="w-3/4 p-4 relative">
        <h2 className="text-xl font-semibold mb-4">Карта відділень</h2>
        <Map
          selectedLocation={selectedLocation}
          markers={Object.values(Change.map).reduce(
            (acc, value) => [...acc, ...value],
            [] as MapLocation[]
          )}
        />
        <DataView location={selectedLocation} />
      </div>
    </div>
  );
};

export default MapSection;
