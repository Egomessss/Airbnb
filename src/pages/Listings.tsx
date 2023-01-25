import React from "react"
import ListingCarousel from "../components/ListingCarousel"
import ListingInfo from "../components/ListingInfo"
import ListingNav from "../components/ListingNav"
import Navbar from "../components/Navbar"

function Listings() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden">
        <ListingNav />
      </div>
      <ListingCarousel/>
      <ListingInfo/>
    </div>
  )
}

export default Listings
