"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const customIcon = new L.Icon({
  iconUrl: "/icons/leaflet/marker-icon.png",
  iconRetinaUrl: "/icons/leaflet/marker-icon-2x.png",
  shadowUrl: "/icons/leaflet/marker-shadow.png",
  iconSize: [35, 55],
  iconAnchor: [17, 55],
  popupAnchor: [0, -40],
  shadowSize: [50, 50],
});

export default function MapLeaflet() {
    const position = [35.663739, 51.438591];

  return (
    <MapContainer
    
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{
        height: "250px",
        width: "100%",
        borderRadius: "16px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        overflow: "hidden",
        border: "3px solid #16277B",
      }}
      attributionControl={false}
    >
        
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Tooltip
          permanent
          direction="top"
          offset={[110, -55]}
          className="custom-tooltip"
        >
          دبستان شهید جهان آرا
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
