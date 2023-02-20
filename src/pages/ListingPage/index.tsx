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

import ListingData from "../../assets/ListingsData.json"

import { useParams } from "react-router-dom"
// pass data from json dynamically
// pass data to dynamic routees

export default function ListingPage() {
  const { listingId } = useParams()

  // console.log(listingId)

  const thisListing = ListingData.find((listing) => listing.id === listingId)

  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <Navbar />
      <ListingNav />
      {/* <ImageGrid images={thisListing?.images} /> */}
      {/* mobile */}
      {/* <ListingCarousel /> */}

      {/* <div className="relative flex justify-between">
        <ListingDetails />
        <Availability />
      </div>
      <Info>
        <div className=" mb-20 h-[500px] w-full">
          <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
          <p className="mb-4">Luz, Lagos, Faro, Portugal</p>
          <MapApi />
        </div>
      </Info> */}
      {/* <ListingInfo /> */}
      {/* <FooterMobile /> */}
      {/* <StickyBottomNav /> */}
    </div>
  )
}
