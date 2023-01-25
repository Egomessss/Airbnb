import React from "react"
import ListingCarousel from "../components/ListingCarousel"
import ListingNav from "../components/ListingNav"
import Navbar from "../components/Navbar"

function Listings() {
  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden">
        <ListingNav />
      </div>
      <ListingCarousel/>
    </div>
  )
}

export default Listings
