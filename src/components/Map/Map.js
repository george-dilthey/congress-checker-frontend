import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import {setMapLocation, setHoveredStateName, getMembers} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css';
import MemberContainer from '../../containers/MemberContainer/MemberContainer.js'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2RpbHRoZXkiLCJhIjoiY2t2azlpOGY2ZDQydTMybnpkMGtlNzNxcyJ9.TCQKJMDL492TVA6FYl6neg';

const Map = ({hoveredStateName, mapLocation, mapLocation: {lon, lat, zoom}, setMapLocation, setHoveredStateName, getMembers}) => {
  const mapContainerRef = useRef(null);
  const memberContainerRef = useRef(document.createElement('div'));

  const hoveredStateNameRef = useRef(null)
  const popupRef = useRef(new mapboxgl.Popup());

  const [clickedStateName, setClickedStateName] = useState(null)
  const [map, setMap] = useState(null)

  useEffect(() => {
    getMembers()

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lon, lat],
      zoom: zoom
    });

    map.on('load', () => {
      map.addSource('states', {
      'type': 'geojson',
      'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
      });
      
      map.addLayer({
        'id': 'state-fills',
        'type': 'fill',
        'source': 'states',
        'layout': {},
        'paint': {
          'fill-color': '#627BC1',
          'fill-opacity': [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            0.7,
            0.5
          ]
        }
      });
         
      map.addLayer({
        'id': 'state-borders',
        'type': 'line',
        'source': 'states',
        'layout': {},
        'paint': {
          'line-color': '#627BC1',
          'line-width': 2
        }
      });
    
      map.on('move', () => {
        const lon = map.getCenter().lng.toFixed(4);
        const lat = map.getCenter().lat.toFixed(4);
        const zoom = map.getZoom().toFixed(2);
        setMapLocation(lon, lat, zoom)
      });

      map.on('click', 'state-fills', (e) => {
        const coordinates = e.lngLat;
        setClickedStateName(e.features[0].properties.STATE_NAME)

        popupRef.current
          .setLngLat(coordinates)
          .setDOMContent(memberContainerRef.current)
          .addTo(map);

      });

      setMap(map)
    });

    return () => map.remove()
  },[]); // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    if(map){
      let hoveredStateId = null

      map.on('mousemove', 'state-fills', (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.setFeatureState(
              { source: 'states', id: hoveredStateId },
              { hover: false }
            );
          }
          
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: true }
          );

          let featureStateName = e.features[0].properties.STATE_NAME
        
          if(hoveredStateNameRef.current !== featureStateName){
            hoveredStateNameRef.current = featureStateName
            setHoveredStateName(featureStateName)
          }
        }
      });

      map.on('mouseenter', 'state-fills', () => {
        map.getCanvas().style.cursor = 'pointer';
      });

      map.on('mouseleave', 'state-fills', () => {
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: 'states', id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
        map.getCanvas().style.cursor = '';
      });
    }
  });

  return (
    <div>
      <div className='topLabel'>
        <div>
          Longitude: {lon} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
      {ReactDOM.createPortal(<MemberContainer clickedStateName = {clickedStateName} />, memberContainerRef.current)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mapLocation: state.mapLocation,
    hoveredStateName: state.hoveredStateName,
  };
};

export default connect(mapStateToProps, { setMapLocation, setHoveredStateName, getMembers })(Map);