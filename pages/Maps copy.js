import React, { useCallback, useMemo, useState, useEffect } from "react";
import photos from "./../components/photos";
import SuperClusterAlgorithm from "./../utils/SuperClusterAlgorithm";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import {
  useLoadScript,
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
const parkData = [
  {
    type: "Feature",
    properties: {
      PARK_ID: 960,
      FACILITYID: 28014,
      NAME: "Bearbrook Skateboard Park",
      NAME_FR: "Planchodrome Bearbrook",
      ADDRESS: "8720 Russell Road",
      ADDRESS_FR: "8720, chemin Russell",
      FACILITY_T: "flat",
      FACILITY_1: "plat",
      ACCESSCTRL: "no/non",
      ACCESSIBLE: "no/non",
      OPEN: null,
      NOTES: "Outdoor",
      MODIFIED_D: "2018/01/18",
      CREATED_DA: null,
      FACILITY:
        "Neighbourhood : smaller size facility to service population of 10,000 or less",
      FACILITY_F:
        "De voisinage : petite installation assurant des services à 10 000 résidents ou moins.",
      DESCRIPTIO: "Flat asphalt surface, 5 components",
      DESCRIPT_1: "Surface d'asphalte plane, 5 modules",
      PICTURE_LI: null,
      PICTURE_DE: null,
      PICTURE__1: null,
    },
    geometry: {
      type: "Point",
      coordinates: [-75.3372987731628, 45.383321536272049],
    },
  },
  {
    type: "Feature",
    properties: {
      PARK_ID: 1219,
      FACILITYID: 28001,
      NAME: "Bob MacQuarrie Skateboard Park (SK8 Extreme Park)",
      NAME_FR: "Planchodrome Bob-MacQuarrie (Parc SK8 Extreme)",
      ADDRESS: "1490 Youville Drive",
      ADDRESS_FR: "1490, promenade Youville",
      FACILITY_T: "other",
      FACILITY_1: "autre",
      ACCESSCTRL: "no/non",
      ACCESSIBLE: "no/non",
      OPEN: null,
      NOTES: "Outdoor",
      MODIFIED_D: "2018/01/18",
      CREATED_DA: null,
      FACILITY:
        "Community: mid size facility to service population of 40,000 plus",
      FACILITY_F:
        "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
      DESCRIPTIO:
        "Flat asphalt surface, 10 components, City run learn to skateboard programs, City run skateboard camps in summer",
      DESCRIPT_1:
        "Surface d'asphalte plane, 10 modules, programmes et camps de planche à roulettes en été géré par la Ville",
      PICTURE_LI: null,
      PICTURE_DE: null,
      PICTURE__1: null,
    },
    geometry: {
      type: "Point",
      coordinates: [-75.546518086577947, 45.467134581917357],
    },
  },
  {
    type: "Feature",
    properties: {
      PARK_ID: 1157,
      FACILITYID: 28002,
      NAME: "Walter Baker Skateboard Park",
      NAME_FR: "Planchodrome Walter-Baker",
      ADDRESS: "100 Charlie Rogers Place",
      ADDRESS_FR: "100, place Charlie Rogers",
      FACILITY_T: "bowl",
      FACILITY_1: "bol",
      ACCESSCTRL: "no/non",
      ACCESSIBLE: "no/non",
      OPEN: null,
      NOTES: "Outdoor",
      MODIFIED_D: "2018/01/18",
      CREATED_DA: null,
      FACILITY:
        "Community : mid size facility to service population of 40,000 plus",
      FACILITY_F:
        "Communautaire : installation de taille moyenne assurant des services à 40 000 résidents ou plus.",
      DESCRIPTIO: "Concrete bowl, 7,000 sq ft",
      DESCRIPT_1: "Bol de béton, 7 000 pi2",
      PICTURE_LI: null,
      PICTURE_DE: null,
      PICTURE__1: null,
    },
    geometry: {
      type: "Point",
      coordinates: [-75.898610599532319, 45.295014379864874],
    },
  },
  {
    type: "Feature",
    properties: {
      PARK_ID: 9,
      FACILITYID: 28006,
      NAME: "Roving Skateboard Park Location",
      NAME_FR: "Lieu de planchodrome itinérant",
      ADDRESS: "2785 8th Line Road",
      ADDRESS_FR: "2785, chemin 8th Line",
      FACILITY_T: "other",
      FACILITY_1: "autre",
      ACCESSCTRL: "no/non",
      ACCESSIBLE: "no/non",
      OPEN: null,
      NOTES: "Outdoor - Mobile",
      MODIFIED_D: "2018/01/18",
      CREATED_DA: null,
      FACILITY: "Metcalfe Community Centre - Roving Skateboard Park Location",
      FACILITY_F:
        "Centre communautaire de Metcalfe - Lieu de planchodrome itinérant",
      DESCRIPTIO: "Flat surface, 5 components",
      DESCRIPT_1: "Surface plane, 5 modules",
      PICTURE_LI: null,
      PICTURE_DE: null,
      PICTURE__1: null,
    },
    geometry: {
      type: "Point",
      coordinates: [-75.468561642270757, 45.23032561834377],
    },
  },
  {
    type: "Feature",
    properties: {
      PARK_ID: 1160,
      FACILITYID: 28007,
      NAME: "Roving Skateboard Park Location",
      NAME_FR: "Lieu de planchodrome itinérant",
      ADDRESS: "10 Warner Colpitts Lane",
      ADDRESS_FR: "10, ruelle Warner Colpitts",
      FACILITY_T: "flat",
      FACILITY_1: "plat",
      ACCESSCTRL: "yes/oui",
      ACCESSIBLE: "no/non",
      OPEN: null,
      NOTES: "Indoor - Summer",
      MODIFIED_D: "2018/03/07",
      CREATED_DA: null,
      FACILITY:
        "Johnny Leroux Stittsville Community Arena - Roving Skateboard Park Location",
      FACILITY_F:
        "Aréna communautaire de Stittsville Johnny-Leroux - Lieu de planchodrome itinérant",
      DESCRIPTIO: "Flat surface, 5 components",
      DESCRIPT_1: "Surface plane, 5 modules",
      PICTURE_LI: null,
      PICTURE_DE: null,
      PICTURE__1: null,
    },
    geometry: {
      type: "Point",
      coordinates: [-75.926651366520872, 45.260659774950561],
    },
  },
];
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
}

function Map() {
  const coordinates = useMemo(() => ({ lat: 32.998868, lng: -96.772436 }), []);
  const [selectedPark, setSelectedPark] = useState(null);

  //   const onLoad = useCallback(map => addMarkers(map), [])
  return (
    <div>
      <GoogleMap
        zoom={10}
        center={coordinates}
        mapContainerClassName="map-container"
      >
        {parkData.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[1],
              lng: park.geometry.coordinates[0],
            }}
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
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}
