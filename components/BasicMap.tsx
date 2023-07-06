import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
} from "@react-google-maps/api";
const env = require("./../env-config");

interface BasicMapProps {
  centers: google.maps.LatLngLiteral[];
  hotelNames: string[];
}
const BasicMap = ({ centers, hotelNames }: BasicMapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: env.MAP_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(centers[0]);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        objectFit: "contain",
        width: "100%",
        height: "300px",
      }}
      center={centers[0]}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {centers.map((mark, index) => (
        <Marker key={index} position={mark} label={`${hotelNames[index]}`} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default BasicMap;
