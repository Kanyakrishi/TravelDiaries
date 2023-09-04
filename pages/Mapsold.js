import React, { useCallback, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import photos from "./../components/photos";
import SuperClusterAlgorithm from "./../utils/SuperClusterAlgorithm";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { InfoWindow } from "@react-google-maps";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const coordinates = useMemo(() => ({ lat: 32.998868, lng: -96.772436 }), []);
  const infoWindow = new InfoWindow();
  const onLoad = useCallback((map) => addMarkers(map), []);
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={coordinates}
        mapContainerClassName="map-container"
        onLoad={onLoad}
      >
        <Marker position={{ lat: 32.998868, lng: -96.772436 }} />
      </GoogleMap>
    </div>
  );
}

function addMarkers(map) {
  const markers = photos.map(([name, lat, lng]) => {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      animation: google.maps.Animation.DROP,
    });
    marker.addListener("click", ({ domEvent, latLng }) => {
      const infoWindow = new InfoWindow();
      const { target } = domEvent;
      infoWindow.close();
      infoWindow.setContent(name);
      infoWindow.open(marker.map, marker);
    });
    return marker;
  });

  new MarkerClusterer({
    markers,
    map,
    algorithm: new SuperClusterAlgorithm({ radius: 600 }),
  });
}
