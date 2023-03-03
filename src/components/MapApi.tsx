import { useState } from "react"
import Map, {
  GeolocateControl,
  NavigationControl,
  Marker,
  Popup,
} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"

import getCenter from "geolib/es/getCenter"
import { FaMapMarkerAlt } from "react-icons/fa"

function MapApi({ data }) {
  const [showPopup, setShowPopup] = useState(true)
  console.log(showPopup)

  const [selectedListingId, setSelectedListingId] = useState(null)
  // console.log(selectedListingId)

  // const [selectedLocation, setSelectedLocation] = useState({})
  // console.log(selectedLocation)

  const showPopUpAndLocation = (listingId) => {
    setSelectedListingId(listingId)
    setShowPopup(true)
  }

  // const API_KEY = process.env.REACT_APP_MapboxAccessToken

  // fetches the coordinates from the listing results
  const coordinates = data.map((listing: any) => ({
    longitude: listing.longitude,
    latitude: listing.latitude,
  }))

  // center of all the locations

  const center = getCenter(coordinates)

  console.log(center)

  const [viewState, setViewState] = useState({
    longitude: typeof center === "object" ? center.longitude : 0,
    latitude: typeof center === "object" ? center.latitude : 0,
    zoom: 4,
  })

  // console.log(viewState)

  return (
    <Map
      mapStyle="mapbox://styles/edmilsong/cl5bpa07c000114qn9j3h2bj8"
      // Environmental key for my mapbox api
      mapboxAccessToken="pk.eyJ1IjoiZWRtaWxzb25nIiwiYSI6ImNsNWJwN3QwYzA5dmEza3MwY3Uyd20wdHQifQ.j1osfvQiPNdQyUpd7N4MkA"
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
    >
      <NavigationControl position="bottom-right" />
      <GeolocateControl position="bottom-right" />
      {data.map((listing) => (
        <div key={listing.id}>
          <Marker
            onClick={() => showPopUpAndLocation(listing.id)}
            longitude={listing.longitude}
            latitude={listing.latitude}
            
          >
            {/* <p>Marker</p> */}
            <FaMapMarkerAlt className="h-6 w-6 text-xl text-red-600" />
          </Marker>

          {/* popup if we click marker */}
          {selectedListingId === listing.id && (
            <Popup
              latitude={listing.latitude}
              longitude={listing.longitude}
              anchor="bottom"
              closeOnClick={false}
              closeOnMove
              closeButton={false}
              onClose={() => {
                setShowPopup(false)
                setSelectedListingId(null)
              }}
            >
              {listing.name}
            </Popup>
          )}
        </div>
      ))}
    </Map>
  )
}

export default MapApi

// !Ensure you add .env to the .gitignore file to prevent git from tracking it.
