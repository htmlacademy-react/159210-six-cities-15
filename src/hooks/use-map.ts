import { useEffect, useState, useRef } from 'react';
import leaflet, {Map as LeafletMap} from 'leaflet';
import { CityMap, TYLE_LAYER_ATTRIBUTION, TYLE_LAYER_URL } from '../const';
import L from 'leaflet';

type UseMapProps = {
  mapContainerRef: React.RefObject<HTMLElement | null>;
  city: CityMap;
}

export default function useMap({ mapContainerRef, city }: UseMapProps): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (mapContainerRef.current !== null && !isRenderedRef.current) {
      const instance = L.map(mapContainerRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng
        },
        zoom: city.zoom
      });

      leaflet.tileLayer(TYLE_LAYER_URL,
        {
          attribution: TYLE_LAYER_ATTRIBUTION
        }
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapContainerRef, city]);

  return map;
}
