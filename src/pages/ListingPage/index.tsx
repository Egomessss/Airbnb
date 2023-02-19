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
      <Navbar />
      <ListingNav />
      <ImageGrid />

      {/* mobile */}
      <ListingCarousel />

      <div className="relative flex">
        <ListingDetails />
        <Availability />
      </div>

      {/* <ListingInfo /> */}
      <FooterMobile />
      <StickyBottomNav />
    </div>
  )
}
