import {
  StarIcon,
  LanguageIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import { addDays, format } from "date-fns"
import React, { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { CiLocationOn, CiCalendar } from "react-icons/ci"
import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
import { TbBeach } from "react-icons/tb"

import MapApi from "../../components/MapApi"
import MobileBtn from "../../components/MobileBtn"
import Availability from "./Availability"

// add conditional rending for the superhost and rare find properties

function ListingDetails({ data }) {

  // fetches the amenities data from the json file and splits the string into multiple strings
  const string = data.amenities
  // console.log(string)
  const splitToString = string.split(",")

  // !checkin/out and calendar data
  const [openChooseDates, setOpenChooseDates] = useState(false)

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
  const handleSelection = (ranges) => {
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

  return (
    <div className=" w-full md:w-[70%] mb-14">
      <div className="flex flex-col gap-2 py-6 md:hidden">
        <div>
          <h1 className="text-2xl font-semibold">{data.summary}</h1>
          <h1 className="text-2xl font-semibold">{data.property_type}</h1>
        </div>
        <div className="text-sm font-semibold">
          <ul className="flex gap-5 ">
            <li className="flex items-center">
              <StarIcon className="h-4" />
              {data.rating}
            </li>
            <li className="font-semibold underline underline-offset-1">
              {data.number_of_reviews} reviews
            </li>
            {data.isSuperHost ? (
              <li className="flex items-center gap-1 font-normal">
                <FaMedal className="h-3 " />
                Superhost
              </li>
            ) : null}
          </ul>
          <p className=" mt-1 font-semibold underline underline-offset-1">
            {data.host_location}
          </p>
        </div>
      </div>

      {/* body */}
      {/* fix this or remove */}

      <div className="flex border-t-[1px] py-6 md:hidden">
        <p>
          <span className="font-semibold">This is a rare find.</span> this
          listing is usually fully booked.
        </p>
        <SlDiamond className="block h-[32px] w-[42px] fill-[#E31C5F]" />
      </div>

      <div className="flex justify-between border-t-[1px] py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{data.room_type}</h3>
          <ul className="flex gap-2 text-sm">
            <li className="flex items-center">{data.accommodates} guests</li>
            <li>{data.bedrooms} bedrooms</li>
            <li>{data.beds} beds</li>
            <li>{data.bathrooms} bathrooms</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://a0.muscache.com/im/pictures/user/1f9954af-c6cb-425d-b975-d2a7e32ea999.jpg?im_w=240"
            alt=""
            className="h-[54px] w-[54px] rounded-full"
          />
          <FaMedal className="absolute bottom-1 -right-2  z-20 text-2xl text-yellow-500" />
        </div>
      </div>

      {/* add translation */}
      <div className="border-t-[1px] pt-8 pb-6">
        <div className="pt-8">
          <p className="leading-5">{data.description}</p>
        </div>

        <div className="md:h-[500px] border-t-[1px] pt-8 pb-6">
          <h2 className="mb-4 text-xl font-semibold">What this place offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {splitToString.map((amenitie) => {
              return (
                <div className="flex w-[250px] gap-2 whitespace-nowrap">
                  <TbBeach className="block h-[24px] w-[24px]" />
                  <p>{amenitie}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* adicionar mapa */}

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
          <p className="mb-4">{data.host_location}</p>
          <div className="h-[318px] w-full  border-black">
            <MapApi />
          </div>
        </div>

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          {" "}
          <h2 className="mb-4 text-xl font-semibold">7 nights in Luz, Lagos</h2>
          <div>
            {" "}
            <DateRangePicker
              minDate={new Date()}
              maxDate={maxDate}
              staticRanges={[]}
              inputRanges={[]}
              showDateDisplay={false}
              months={1}
              direction="horizontal"
              ranges={[selectionRange]}
              onChange={handleSelection}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
