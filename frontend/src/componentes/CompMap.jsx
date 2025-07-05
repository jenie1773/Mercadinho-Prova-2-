import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const sedes = [
  { id: 1, nome: "Sede Central", lat: -29.1725, lng: -51.5194 },
  { id: 2, nome: "Sede Regional", lat: -29.1500, lng: -51.5500 },
];

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

export function CompMap() {
  const [userPosition, setUserPosition] = useState(null);
  const [nearestSede, setNearestSede] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setUserPosition([latitude, longitude]);

      const nearest = findNearestSede(latitude, longitude, sedes);
      setNearestSede(nearest);
    });
  }, []);

  function findNearestSede(userLat, userLng, sedes) {
    let nearest = null;
    let minDistance = Infinity;

    sedes.forEach(sede => {
      const dist = getDistanceFromLatLonInKm(userLat, userLng, sede.lat, sede.lng);
      if (dist < minDistance) {
        minDistance = dist;
        nearest = sede;
      }
    });

    return nearest;
  }

  return (
    <div className="h-96 w-full mt-8">
      {userPosition && nearestSede ? (
        <MapContainer center={userPosition} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={userPosition}  icon={redIcon}>
            <Popup>Você está aqui</Popup>
          </Marker>
          <Marker position={[nearestSede.lat, nearestSede.lng]}>
            <Popup>{nearestSede.nome}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Localizando...</p>
      )}
    </div>
  );
}
