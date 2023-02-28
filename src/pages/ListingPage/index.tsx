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
import {
  ArrowUpTrayIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline"
import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
// pass data from json dynamically
// pass data to dynamic routees

export default function ListingPage() {
  const { listingId } = useParams()

  // console.log(listingId)

  const thisListing = ListingData.find((listing) => listing.id === listingId)

  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <ListingNav />
      <div className="hidden flex-col py-6 md:flex">
        <h1 className="text-2xl font-semibold">{thisListing?.summary}</h1>
        <div className="flex justify-between text-sm font-semibold">
          <ul className="flex items-center gap-5 ">
            <li className="flex items-center">
              <StarIcon className="h-4" />
              {thisListing?.rating}
            </li>
            <li className="font-semibold underline underline-offset-1">
              {thisListing?.number_of_reviews} reviews
            </li>
            {/* {data.data.isSuperHost == true  } */}
            <li className="flex items-center gap-1 font-normal">
              <FaMedal className="h-3 " />
              Superhost
            </li>
            <li className=" mt-1 font-semibold underline underline-offset-1">
              {thisListing?.host_location}
            </li>
          </ul>
          <div className="flex justify-around">
            <button className="flex w-[80px] items-center gap-2 rounded-lg p-2 hover:bg-gray-100 ">
              <ArrowUpTrayIcon className="h-4" />
              <p>Share</p>
            </button>
            <button className="flex w-[80px] items-center gap-2 rounded-lg p-2 hover:bg-gray-100 ">
              <HeartIcon className="h-4" />
              <p>Save</p>
            </button>
          </div>
        </div>
      </div>

      <ImageGrid thisListing={thisListing} />
      {/* mobile */}
      <ListingCarousel thisListing={thisListing} />

      <div className="relative flex lg:justify-between  gap-10">
        <ListingDetails data={thisListing} />
        <div> <Availability data={thisListing} /></div>
       
      </div>
     
        <div className=" mb-20 h-[500px] w-full border-t-[1px] pt-8 pb-6">
          <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
          <p className="mb-4">{thisListing?.host_location}</p>
          {/* <MapApi /> */}
        </div>
      
      {/* <ListingInfo /> */}
      {/* <FooterMobile /> */}
      {/* <StickyBottomNav /> */}
    </div>
  )
}
