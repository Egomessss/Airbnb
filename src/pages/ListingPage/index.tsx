import React from "react"
import ListingCarousel from "../ListingPage/ListingCarousel"
import ListingInfo from "../ListingPage/ListingInfo"
import ListingNav from "../ListingPage/ListingNav"
import Navbar from "../../components/Navbar/Navbar"
import StickyBottomNav from "./StickyBottomNav"
import Footer from "../../components/Footer"
import FooterMobile from "./FooterMobile"

function Listings() {
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

export default Listings
