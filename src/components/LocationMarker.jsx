import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { FaFireFlameSimple } from "react-icons/fa6";
import LocationInfoBox from "./LocationInfoBox";


const fireIcon = new L.divIcon({
  className: "custom-icon",
  html: `<div style="font-size:24px; color:red;">🔥</div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const LocationMarker = ({ lat, lng, event }) => {
  return (
    <Marker position={[lat, lng]} icon={fireIcon}>
      <Popup>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaFireFlameSimple style={{ color: "red", marginRight: "5px" }} />
          Fire Alert! Be cautious in this area.
        </div>
        <LocationInfoBox info={event} />
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
