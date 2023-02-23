import React, { useState } from "react"
import BottomNav from "../../components/BottomNav"
import Footer from "../../components/Footer"
import Listings from "../../components/Listings"
import HomepageCard from "../../components/Listings"
import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"
import ListingData from "../../assets/ListingsData.json"

function Homepage() {
  const [openMap, setOpenMap] = useState(false)

  // opens and closes the mapbox map
  const toogleMap = () => {
    setOpenMap((prevMode) => !prevMode)
  }

  return (
    <div className="relative px-6 md:px-20">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      {/* open the map with the sticky button and hides the homecards
      make a function for the button that opens and closes the map */}
      {openMap ? (
        <div className="h-[1000px] w-full">
          <MapApi />
        </div>
      ) : (
        <Listings data={ListingData}  />
      )}
      <div className="sticky bottom-0 z-10 bg-white">
        <StickyButton toogleMap={toogleMap} />
        <BottomNav />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

// you can see the scrolling of the homecards trought the nav
// prevent sticky button and bottom nav from showing the search modal
// populate the cards and swipe carousel with the api data so no key error
