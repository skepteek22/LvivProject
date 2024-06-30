import React, { useState, useRef, useEffect } from 'react';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import tt from '@tomtom-international/web-sdk-maps';
import './MapItem.scss';

const API_KEY = 'ZytKZGKjYoAutnB2bAOsTSkzLZRprtt4';
const LVIV_CENTER = [24.031111, 49.842957];
const MAX_RESULTS = 100;

function MapItem({ category }) {
  const mapElement = useRef();
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState({});

  useEffect(() => {
    const loadMap = async () => {
      const mapInstance = tt.map({
        key: API_KEY,
        container: mapElement.current,
        center: LVIV_CENTER,
        language: 'en',
        zoom: 10,
      });

      setMap(mapInstance);
    };

    loadMap();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  const addMarkers = async (category) => {
    try {
      Object.values(markers).forEach((categoryMarkers) => {
        categoryMarkers.forEach((marker) => marker.remove());
      });

      const response = await fetch(
        `https://api.tomtom.com/search/2/categorySearch/${category}.json?key=${API_KEY}&lat=${LVIV_CENTER[1]}&lon=${LVIV_CENTER[0]}&radius=10000&limit=${MAX_RESULTS}`
      );
      const data = await response.json();

      if (data.results) {
        const newMarkers = data.results.map((result) => {
          const marker = new tt.Marker().setLngLat([result.position.lon, result.position.lat]);
          const name = result.poi.name;
          const address = result.address.streetName + ' ' + result.address.streetNumber;
          marker.setPopup(new tt.Popup({ offset: [0, -35] }).setHTML(`<b>Name: </b>${name}<br/><b>Address: </b>${address}`));
          marker.addTo(map);
          return marker;
        });
        setMarkers({ ...markers, [category]: newMarkers });
      }
    } catch (error) {
      console.error('Помилка при додаванні маркерів:', error);
    }
  };

  useEffect(() => {
    if (category) {
      addMarkers(category);
    }
  }, [category]);

  return <div ref={mapElement} className="mapDiv" />;
}

export default MapItem;
