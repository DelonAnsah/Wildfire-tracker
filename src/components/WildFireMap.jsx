import React, { useContext } from 'react'
import WildFireContext from '../context/WildFireContext';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import Loader from './Loader';



const WildFireMap = () => {

  const { wildFires, loading } = useContext(WildFireContext);

  const markers = wildFires.map((ev, index) => {

    // Extract latitude and longitude
    const lat = ev.geometries[0].coordinates[1];
    const lng = ev.geometries[0].coordinates[0];
    return <LocationMarker key={index} lat={lat} lng={lng} event={ev}  />;
  }

  )

  return (
    <>
      {!loading ?
        <section className='w-screen h-screen relative '>
          <MapContainer center={[42.3265, -122.8756]} zoom={13} style={{ width: '100vw', height: '100vh' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers}
          </MapContainer>
        </section>
        : <Loader />}

    </>
  )
}

export default WildFireMap
