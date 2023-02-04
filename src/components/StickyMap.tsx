import React, { useState } from "react"
import Map from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

function MapApi() {
  // const API_KEY = process.env.REACT_APP_MapboxAccessToken
  

  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    longitude: -122.4,
    latitude: 37.8,
    zoom: 11,
  })

  return (
    <Map
      mapStyle="mapbox://styles/edmilsong/cl5bpa07c000114qn9j3h2bj8"
      // Environmental key for my mapbox api
      mapboxAccessToken="pk.eyJ1IjoiZWRtaWxzb25nIiwiYSI6ImNsNWJwN3QwYzA5dmEza3MwY3Uyd20wdHQifQ.j1osfvQiPNdQyUpd7N4MkA"
      {...viewState}
    ></Map>
  )
}

export default MapApi

// !Ensure you add .env to the .gitignore file to prevent git from tracking it.
