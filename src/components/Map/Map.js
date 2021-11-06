import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import {setMapLocation, setHoveredStateName} from '../../redux/actionCreators'
import { connect } from "react-redux";
import './Map.css';
import MemberMapCard from '../MemberMapCard/MemberMapCard.js'
import { Provider } from "react-redux";
import store from '../../redux/store';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2RpbHRoZXkiLCJhIjoiY2t2azlpOGY2ZDQydTMybnpkMGtlNzNxcyJ9.TCQKJMDL492TVA6FYl6neg';

const Map = ({hoveredStateName, mapLocation, mapLocation: {lon, lat, zoom}, setMapLocation, setHoveredStateName}) => {
  const mapContainerRef = useRef(null);
  const hoveredStateNameRef = useRef(null)
  const memberMapCardRef = useRef(new mapboxgl.Popup());


  useEffect(() => {
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
    
      let hoveredStateId = null

      map.on('move', () => {
        const lon = map.getCenter().lng.toFixed(4);
        const lat = map.getCenter().lat.toFixed(4);
        const zoom = map.getZoom().toFixed(2);
        setMapLocation(lon, lat, zoom)
      });

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

      map.on('click', 'state-fills', (e) => {
        const coordinates = e.lngLat;

        const memberMapCardNode = document.createElement('div');
        ReactDOM.render(<Provider store={store}><MemberMapCard hoveredStateName={hoveredStateNameRef.current} /></Provider>, memberMapCardNode);
         
        memberMapCardRef.current
          .setLngLat(coordinates)
          .setDOMContent(memberMapCardNode)
          .addTo(map);
      });
    });

    return () => map.remove();
  }, []);
  
  return (
    <div>
      <div className='topLabel'>
        <div>
          Longitude: {lon} | Latitude: {lat} | Zoom: {zoom} | Hovered State: {hoveredStateName}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mapLocation: state.mapLocation,
    hoveredStateName: state.hoveredStateName
  };
};

export default connect(mapStateToProps, { setMapLocation, setHoveredStateName })(Map);