import React from "react"
import ListingCarousel from "../ListingPage/ListingCarousel"
import ListingInfo from "../ListingPage/ListingInfo"
import ListingNav from "../ListingPage/ListingNav"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyBottomNav from "./StickyBottomNav"

import FooterMobile from "./FooterMobile"
import ImageGrid from "./ImageGrid"
import ListingDetails from "./ListingDetails"
import Availability from "./Availability"

export default function ListingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden">
        <ListingNav />
      </div>
      <div className="flex md:hidden">
        <ListingCarousel />
      </div>
      <div>
        <ImageGrid />
      </div>
      <div className="flex relative">
        <div className="max-w-[60%]">
          <ListingDetails />
        </div>
        <div>
          <Availability />
        </div>
      </div>

      {/* <ListingInfo /> */}
      <FooterMobile />
      <StickyBottomNav />
    </div>
  )
}
