import React, { useState } from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import Listings from "../../components/Listings"

import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import ListingData from "../../assets/ListingsData.json"
import { useSearchParams } from "react-router-dom"

function Homepage() {
  // opens and closes the mapbox map
  const [openMap, setOpenMap] = useState(false)

  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  // filter settings
  const [searchParams, setSearchParams] = useSearchParams()

  const filter = searchParams.get("filter")

  function setFilter(filter) {
    setSearchParams({ filter: filter })
  }


  return (
    <div className="relative px-6 md:px-20">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter
          ListingData={ListingData}
          setFilter={setFilter}
        />
      </div>
      <div>
        {/* open the map with the sticky button and hides the homecards
      make a function for the button that opens and closes the map */}
        {openMap ? (
          <div className="h-[1000px] w-full">
            <MapApi />
          </div>
        ) : (
          // if filter data is passed we render the listings with the filter queries
          // if no filter data is passed we render it normally

          <Listings
            data={ListingData.filter(
              (listing) => !filter || listing.type_of_location === filter
            )}
          />
        )}
      </div>

      <div className="sticky bottom-0 z-10 bg-white mb-10">
        <StickyButton toogleMap={toogleMap} />
        <BottomNav />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

