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
import { addDays, format } from "date-fns"
import { useEffect, useState } from "react"
import NavMobile from "../../components/Navbar/Navbar/NavMobile"
import MapApi from "../../components/MapApi"
import Footer from "../../components/Footer"

export default function Listingpage() {

  // forces the listing page to always open on the top of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { listingId } = useParams()

  // fetches the proper listing based on the url listing id
  const thisListing = ListingData.find((listing) => listing.id === listingId)

  // !checkin/out and calendar data

  // creates a start and end date starting from the current day so you can't go back
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  // stores the start and end date
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  // sets the start and end date in the calendar
  const handleSelection = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  // max date of 30 days from the current date selected
  const maxDate = addDays(startDate, 30)

  // formats the data so it can be shown in the navbar when a user select from the range picker
  const formattedStartDate = format(new Date(startDate), "dd MMM")
  const formattedendDate = format(new Date(endDate), "dd MMM")

  // calculate the number of days between the start and end date
  const daysInBetween = Math.round(
    (endDate.getTime() - startDate.getTime()) / 86400000
  )

  // !Price breakdown

  const price: number | undefined = thisListing?.price_per_night

  let priceTotal 
  if(price != undefined){
   priceTotal = price * daysInBetween}

  return (
    <div className="mx-auto max-w-[1200px] px-6">
      <div className="hidden md:block">
        <Navbar resetFilter={null} />
      </div>
      <NavMobile
        removeFixed={null}
        showFixed={null}
      />
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

            <li className="  font-semibold underline underline-offset-1">
              {thisListing?.host_location}
            </li>
          </ul>
          <div className="flex justify-around">
            <button aria-label="share" className="flex w-[80px] items-center gap-2 rounded-lg p-2 hover:bg-gray-100 ">
              <ArrowUpTrayIcon className="h-4" />
              <p>Share</p>
            </button>
             <button aria-label="save" className="flex w-[80px] items-center gap-2 rounded-lg p-2 hover:bg-gray-100 ">
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
        <ListingDetails
          minDate={new Date()}
          maxDate={maxDate}
          staticRanges={[]}
          inputRanges={[]}
          showDateDisplay={false}
          months={1}
          direction={"horizontal"}
          ranges={[selectionRange]}
          onChange={handleSelection}
          data={thisListing}
          daysInBetween={daysInBetween}
        />
        <div>
          <Availability data={thisListing} />
        </div>
      </div>
      <div className="hidden border-t-[1px] pt-8 pb-20 md:block ">
        <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
        <p className="mb-4">{thisListing?.host_location}</p>
        <div className="mb-10 h-[718px]  w-full border-2 ">
          <MapApi data={thisListing} />
        </div>
      </div>

      <StickyBottomNav
        formattedStartDate={formattedStartDate}
        formattedendDate={formattedendDate}
        priceTotal={priceTotal}
        pricePerNight={price}
      />
      <Footer />
    </div>
  )
}
