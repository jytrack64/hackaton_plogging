import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

function Map() {
  let { current, currentChange } = useState([""]);
  currentChange(current);

  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 12,
    });
  }, [mapRef]);

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <div
      className="map"
      style={{ width: "500px", height: "500px" }}
      ref={mapRef}
    ></div>
  );
}

function getLocation(props) {
  var watchId = navigator.geolocation.watchPosition(function (position) {
    console.log(position.coords);
  });

  if (navigator.geolocation) {
    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        alert(position.coords.latitude + " " + position.coords.longitude);
        let copy = ["position.coords.latitude", "position.coords.longitude"];
      },

      function (error) {
        console.error(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity,
      }
    );
  } else {
    alert("GPS를 지원하지 않습니다");
  }
}
getLocation();

export default Map;
