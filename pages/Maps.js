import React, { useMemo, useState } from "react";
import Image from "next/image";
import Header from "./../components/Header";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import photoData from "./Photos";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map/>;
}

function Map() {
  const coordinates = useMemo(() => ({ lng: -96.808891, lat: 32.779167}), []);
  const [selectedPark, setSelectedPark] = useState(null);
  return (
    <div>
      <Header />
      <div className="m-5 shadow-md items-center">
        <GoogleMap
          zoom={10}
          center={coordinates}
          mapContainerClassName="map-container"
        >
          {photoData.map((park) => (
            <Marker
              key={park.properties.ID}
              position={{
                lat: park.geometry.coordinates[1],
                lng: park.geometry.coordinates[0],
              }}
              animation={google.maps.Animation.DROP}
              onClick={() => {
                setSelectedPark(park);
              }}
            />
          ))}
          {console.log(selectedPark)}

          {selectedPark && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedPark(null);
              }}
              position={{
                lat: selectedPark.geometry.coordinates[1],
                lng: selectedPark.geometry.coordinates[0],
              }}
            >
              <div>
                <h2 className="font-semibold">
                  {selectedPark.properties.NAME}
                </h2>
                <p>{selectedPark.properties.DESCRIPTION}</p>
                <Image
                  src={selectedPark.properties.PICTURE}
                  alt="Photo"
                  objectFit="contain"
                  objectPosition="left"
                  width={150}
                  height={150}
                />
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  );
}
