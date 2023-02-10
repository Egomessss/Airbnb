import React from "react"
import ListingCarousel from "../ListingPage/ListingCarousel"
import ListingInfo from "../ListingPage/ListingInfo"
import ListingNav from "../ListingPage/ListingNav"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyBottomNav from "./StickyBottomNav"

import FooterMobile from "./FooterMobile"

export default function ListingPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden">
        <ListingNav />
      </div>
      <ListingCarousel />
      <ListingInfo />
      <FooterMobile/>
      <StickyBottomNav/>
    </div>
  )
}


