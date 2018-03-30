import React, { Component } from 'react';
import GeoLocation from './geolocation'
import GeoFencing from 'react-native-geo-fencing';

class GeoFence extends React.Component {

  // with navigator geolocation
componentDidMount() {
  const polygon = [
    { lat: 37.785834, lng: -122.406417 },
    { lat: 36.410834, lng: -121.985783 },
    { lat: 35.870564, lng: -122.498567 },
    { lat: 37.785834, lng: -122.406417 }
  ];

  let point = {
    lat: 36.785834,
    lng: -121.406417
  };

  GeoFencing.containsLocation(point, polygon)
    .then(() => console.warn('point is within polygon'))
    .catch(() => console.warn('point is NOT within polygon'))
}
 render() {
   return <GeoLocation/>
 }
}

export default GeoFence;