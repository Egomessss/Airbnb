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
import { Link } from "react-router-dom"
import { AiOutlineArrowsAlt } from "react-icons/ai"

function MapApi({ data }) {
  const [showPopup, setShowPopup] = useState(true)

  const [selectedListingId, setSelectedListingId] = useState(null)

  const showPopUpAndLocation = (listingId) => {
    setSelectedListingId(listingId)
    setShowPopup(true)
  }

  let coordinates = []

  // if the data provided is an array map over it and return the array of coordinates that will displayed
  if (Array.isArray(data)) {
    coordinates = data.map((listing) => ({
      longitude: listing.longitude,
      latitude: listing.latitude,
    }))
    // if its not an array just pass an array with a single object
  } else {
    coordinates = [{ longitude: data.longitude, latitude: data.latitude }]
  }

  // get the center coordinates of the listings selected
  const center = coordinates.length
    ? getCenter(coordinates)
    : { longitude: 0, latitude: 0 }

  const [viewState, setViewState] = useState({
    longitude: typeof center === "object" ? center.longitude : 0,
    latitude: typeof center === "object" ? center.latitude : 0,
    zoom: 4,
  })

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
      {coordinates.map((listing, index) => (
        <div key={index}>
          <Marker
            onClick={() => showPopUpAndLocation(index)}
            longitude={listing.longitude}
            latitude={listing.latitude}
          >
            <FaMapMarkerAlt className="h-6 w-6 text-xl text-red-600" />
          </Marker>

          {/* popup if we click marker */}
          {selectedListingId === index && (
            <Popup
              className=""
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
              <img
                src={data.image1}
                alt=""
              />
              <p className="font-semibold">{data.city}</p>
              <Link to={`/ListingPage/${selectedListingId}`}>
                <AiOutlineArrowsAlt className="w-full rounded-lg bg-blue-500 text-xl text-white" />
              </Link>
            </Popup>
          )}
        </div>
      ))}
    </Map>
  )
}

export default MapApi
