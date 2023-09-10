import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map/>;
}

function Map() {
    const coordinates = useMemo(() => ({ lat: 44, lng: -80 }), []);
    const mapStyles = {
        width: "100%",
        height: "100%",
    };
  return (
    <div>
      <GoogleMap
        zoom={5}
        center={coordinates}
        mapContainerClassName="map-container"
        style={mapStyles}
      >
        <Marker position={{ lat: 44, lng: -80 }} />
      </GoogleMap>
    </div>
  );
}
