import React from "react"
import MapApi from "../../components/MapApi"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyButton from "../../components/StickyButton"
import SwipeCarouselFilter from "../../components/SwipeCarouselFilter"

function MapPage() {
  return (
    <div className="relative px-20">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <SwipeCarouselFilter />
      </div>
      <div className="h-[1080px] -mx-20">
      <MapApi />
      </div>
      <div className="sticky bottom-0 z-10 bg-white">
        <StickyButton />
      </div>
    </div>
  )
}

export default MapPage
