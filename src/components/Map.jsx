import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const fireIcon = new L.Icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg', // Example fire alert icon
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25]
});

const Map = () => {
    return (
      <div className='map'>
         <MapContainer 
            center={[42.3265, -122.8756]} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{ width: '100vw', height: '100vh' }}
        >
            <TileLayer 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            {/* Fire Alert Marker */}
            <Marker position={[42.3265, -122.8756]} icon={fireIcon}>
                <Popup>
                    Fire Alert! Be cautious in this area.
                </Popup>
            </Marker>
        </MapContainer>
      </div>
    );
};

export default Map;
