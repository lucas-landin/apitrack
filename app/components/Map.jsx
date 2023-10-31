'use client'
import { MapContainer, TileLayer, Marker  } from 'react-leaflet'
import L from "leaflet"
import "leaflet/dist/leaflet.css";

function getIcon(iconSize) {
 return L.icon({
   iconUrl:('/icon-location.svg'),
   iconSize: [iconSize]
 })
}

const Map = ({lat, lon}) => {
const position = [lat, lon]
    
  return (
    <MapContainer className='z-0' center={position} zoom={20} scrollWheelZoom={true} zoomControl={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position} icon={getIcon(40)} >
    </Marker>
  </MapContainer>
  )
}

export default Map