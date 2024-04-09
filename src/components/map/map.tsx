import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, CityMap, DetailedOffer } from '../../const';

type MapProps = {
  currentId: string | null;
  city: CityMap;
  offers: DetailedOffer[];
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [54, 78],
  iconAnchor: [27, 78],
});

export default function Map({ currentId, city, offers }: MapProps): JSX.Element {

  const mapContainerRef = useRef(null);
  const map = useMap({mapContainerRef, city});

  useEffect((): void => {

    if (map) {
      offers.forEach((offer): void => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          }, {
            icon: (currentId !== null && offer.id === currentId)
              ? currentCustomIcon
              : defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [currentId, map, offers]);

  return (<section className="cities__map map" ref={mapContainerRef}></section>);
}
