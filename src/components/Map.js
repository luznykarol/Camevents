import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import LazyLoad from "react-lazyload";

const MapComponent = () => {
  return (
    <LazyLoad>
      <GoogleMap
        defaultCenter={{ lat: 52.21966400002641, lng: 20.98528072729993 }}
        // defaultOptions={{ styles: exampleMapStyles }}
        defaultZoom={8}
        // defaultCenter={{ lat: -118.24696816732424, lng: -34.04975044659588 }}
      >
        {/* <Marker
          position={{ lat: -118.24696816732424, lng: -118.24696816732424 }}
          // icon={{ url: Pin }}
        /> */}
      </GoogleMap>
    </LazyLoad>
  );
};

export default withScriptjs(withGoogleMap(MapComponent));

// const exampleMapStyles = [
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#e9e9e9',
//       },
//       {
//         lightness: 17,
//       },
//     ],
//   },
//   {
//     featureType: 'landscape',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#f5f5f5',
//       },
//       {
//         lightness: 20,
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//       {
//         lightness: 17,
//       },
//     ],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//       {
//         lightness: 29,
//       },
//       {
//         weight: 0.2,
//       },
//     ],
//   },
//   {
//     featureType: 'road.arterial',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//       {
//         lightness: 18,
//       },
//     ],
//   },
//   {
//     featureType: 'road.local',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#ffffff',
//       },
//       {
//         lightness: 16,
//       },
//     ],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#f5f5f5',
//       },
//       {
//         lightness: 21,
//       },
//     ],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#dedede',
//       },
//       {
//         lightness: 21,
//       },
//     ],
//   },
//   {
//     elementType: 'labels.text.stroke',
//     stylers: [
//       {
//         visibility: 'on',
//       },
//       {
//         color: '#ffffff',
//       },
//       {
//         lightness: 16,
//       },
//     ],
//   },
//   {
//     elementType: 'labels.text.fill',
//     stylers: [
//       {
//         saturation: 36,
//       },
//       {
//         color: '#333333',
//       },
//       {
//         lightness: 40,
//       },
//     ],
//   },
//   {
//     elementType: 'labels.icon',
//     stylers: [
//       {
//         visibility: 'off',
//       },
//     ],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [
//       {
//         color: '#f2f2f2',
//       },
//       {
//         lightness: 19,
//       },
//     ],
//   },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry.fill',
//     stylers: [
//       {
//         color: '#fefefe',
//       },
//       {
//         lightness: 20,
//       },
//     ],
//   },
//   {
//     featureType: 'administrative',
//     elementType: 'geometry.stroke',
//     stylers: [
//       {
//         color: '#fefefe',
//       },
//       {
//         lightness: 17,
//       },
//       {
//         weight: 1.2,
//       },
//     ],
//   },
// ]