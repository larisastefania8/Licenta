import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


mapboxgl.accessToken = 'pk.eyJ1IjoibGFyaXNhMDEiLCJhIjoiY2tyd2lvemU3MGgxazJ1bzI3NXFxMnprNCJ9.4Um3hVEMkIvDbZ-FdcvjVA';


function Map(){
 


  const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(26.1025);
const [lat, setLat] = useState(44.4268);
const [zoom, setZoom] = useState(9);
  
  useEffect(() => {
  

  if (map.current) return; // initialize map only once
  map.current = new mapboxgl.Map({
  container: mapContainer.current,
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [lng, lat],
  zoom: zoom
  });
  });


  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });
    return (
      <div>
      <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
      </div>
      );



}


export default  Map
{}