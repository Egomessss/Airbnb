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
import Calendar from "../../components/Calendar"
import { DateRangePicker } from "react-date-range"
import MapApi from "../../components/MapApi"
import Info from "./Info"

export default function ListingPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <Navbar />
      <ListingNav />
      <ImageGrid />

      {/* mobile */}
      <ListingCarousel />

      <div className="relative flex justify-between">
        <ListingDetails />
        <Availability />
      </div>
        <Info>
          <div className=" w-full h-[500px]">
            <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
            <p className="mb-4">Luz, Lagos, Faro, Portugal</p>
            <MapApi />
          </div>
        </Info>
      {/* <ListingInfo /> */}
      <FooterMobile />
      <StickyBottomNav />
    </div>
  )
}
