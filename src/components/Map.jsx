import { useSearchParams, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useAppState } from "../hooks";
import { useEffect } from "react";


function Recenter({ center }) {
  const map = useMap();
  useEffect(() => {
    if (!map || !center) return;
    const lat = parseFloat(center.lat);
    const lng = parseFloat(center.lng);
    if (!isNaN(lat) && !isNaN(lng)) {
      // use setView so the map recenters immediately when center changes
      map.setView([lat, lng], map.getZoom());
    }
  }, [center, map]);
  return null;
}

export default function Map() {

  // const [searchParams, setSearchParams] = useSearchParams();
  // const lat = searchParams.get("lat");
  // const lng = searchParams.get("lng");

  const {center, cities} = useAppState();

  const fallback = { lat: 51.505, lng: -0.09 };
  const current = center && center.lat != null && center.lng != null
    ? { lat: parseFloat(center.lat), lng: parseFloat(center.lng) }
    : fallback;


  return (
    <MapContainer
      center={[center.lat, center.lng]}
      zoom={10}
      scrollWheelZoom={true}
      className="h-full w-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* recenter map when app state center changes */}
      <Recenter center={current} />

      {/* render marker only for valid coords */}
      {!isNaN(current.lat) && !isNaN(current.lng) && (
        <Marker position={[current.lat, current.lng]}>
          <Popup>
            {cities[0]?.name}
          </Popup>
        </Marker>
      )}
      
    </MapContainer>
  );
}

{
  /* <div className="p-8 text-white">Map Content</div>
      <div className="text-white font-bold">
        latitude of city {lat} and langtitude:- {lng}
      </div>
      <button
        onClick={() => {
          setSearchParams({ lat: 20, lng: 45 });
        }}
        className="text-white font-bold bg-amber-800 rounded-4xl px-3 mt-3 hover:bg-amber-700 "
      >
        Tap to Change Position across whole app
      </button> */
}
