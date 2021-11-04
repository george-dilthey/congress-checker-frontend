import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2RpbHRoZXkiLCJhIjoiY2t2azlpOGY2ZDQydTMybnpkMGtlNzNxcyJ9.TCQKJMDL492TVA6FYl6neg';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [5, 34],
      zoom: 1.4
    });

    return () => map.remove();
  }, []);
  
  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default Map;