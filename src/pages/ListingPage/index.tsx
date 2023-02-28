import ListingCarousel from "../ListingPage/ListingCarousel"

import ListingNav from "../ListingPage/ListingNav"
import Navbar from "../../components/Navbar/Navbar/Navbar"
import StickyBottomNav from "./StickyBottomNav"

import ImageGrid from "./ImageGrid"
import ListingDetails from "./ListingDetails"
import Availability from "./Availability"

import ListingData from "../../assets/ListingsData.json"

import { useParams } from "react-router-dom"
import {
  ArrowUpTrayIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline"
import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"

export default function ListingPage() {
  const { listingId } = useParams()

  // fetches the proper listing based on the url listing id
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
            {thisListing?.isSuperhost ? (
              <li className="flex items-center gap-1 font-normal">
                <FaMedal className="h-3 " />
                Superhost
              </li>
            ) : null}

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

      <div className="relative flex md:gap-10  lg:justify-between">
        <ListingDetails data={thisListing} />
        <div>
          <Availability data={thisListing} />
        </div>
      </div>

      {/* <FooterMobile /> */}
      <StickyBottomNav />
    </div>
  )
}
