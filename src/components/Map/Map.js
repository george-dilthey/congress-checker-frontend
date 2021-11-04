import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import {setMapLocation} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2RpbHRoZXkiLCJhIjoiY2t2azlpOGY2ZDQydTMybnpkMGtlNzNxcyJ9.TCQKJMDL492TVA6FYl6neg';

const Map = ({lon, lat, zoom, setMapLocation}) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: zoom
    });

    map.on('move', () => {
      const lon = map.getCenter().lng.toFixed(4);
      const lat = map.getCenter().lat.toFixed(4);
      const zoom = map.getZoom().toFixed(2);
      setMapLocation(lon, lat, zoom)
    });

    return () => map.remove();
  }, []);
  
  return (
    <div>
      <div className='topLabel'>
        <div>
          Longitude: {lon} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.mapLocation
}

export default connect(mapStateToProps, { setMapLocation })(Map);