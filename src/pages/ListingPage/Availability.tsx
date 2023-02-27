import { StarIcon } from "@heroicons/react/24/solid"
import { addDays, format } from "date-fns"
import React, { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { CiKeyboard } from "react-icons/ci"
import { SlDiamond } from "react-icons/sl"

import ListingDatePicker from "./ListingDatePicker"

function Availability({ data }) {
  //! modal state
  const [datePopOver, setDatePopOver] = useState(false)

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

  // clears the selection
  const clearSelection = () => {
    setStartDate(new Date())
    setEndDate(new Date())
  }

  // max date of 30 days from the current date selected
  const maxDate = addDays(startDate, 30)

  // formats the data so it can be shown in the navbar when a user select from the range picker
  const formattedStartDate = format(new Date(startDate), "P")
  const formattedendDate = format(new Date(endDate), "P")

  // calculate the number of days between the start and end date
  const daysInBetween = Math.round(
    (endDate.getTime() - startDate.getTime()) / 86400000
  )
  // closes the modal
  const closeBtn = () => setDatePopOver(false)

  console.log(daysInBetween)

  // !Price

  const [price, setPrice] = useState(data.price_per_night)

  const priceTotal = ()=>{
    price * daysInBetween
  }

  // ? add minimum date for the calendar
  // ? add a price total after we set the range
  // ? add guests pop up
  // ? add the conditional rendering for the add dates and 1 guests
  // ?add the reserving pop over

  return (
    <div className="sticky top-2 hidden flex-col  bg-scroll md:flex ">
      <div className=" mt-6 h-[302px] w-[372px] gap-5 rounded-xl border-[1px]  p-4 shadow-lg">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-medium">{price}€ night</h1>
          <div>
            <ul className="flex items-center gap-2 text-sm font-medium">
              <li>
                <StarIcon className="h-4" />
              </li>
              <li>4.89</li>
              <li className="text-gray-500 underline">
                <a href="">111 Reviews</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid h-24 grid-cols-2 grid-rows-2 rounded-xl border-[1px] border-gray-500 text-xs">
          <button
            className="col-span-2 border-r-[1px] border-gray-500 active:rounded-lg active:border-2 active:border-black"
            onClick={() => setDatePopOver(true)}
          >
            <div className="flex justify-around">
              <p className="font-medium uppercase ">Check-in</p>
              <p className="font-medium uppercase">Checkout</p>
            </div>
            <div className="flex justify-around">
              <p>add dates</p>
              <p>add dates</p>
            </div>
          </button>

          <button className="col-span-2  border-t-[1px] border-gray-500 px-14 text-left">
            {" "}
            <p className="font-medium uppercase">Guests</p>
            <p>1 guest</p>
          </button>
        </div>
        <div className="mt-4">
          <button className="w-full  rounded-xl bg-[#DA0A65] p-3 font-semibold text-white">
            Reserve
          </button>
        </div>
      </div>
      {data.isRareFind ? (
        <div className=" mt-6 flex h-[92px] w-[372px] items-center justify-center  gap-2 rounded-xl border-[1px]  bg-scroll p-2 shadow-lg ">
          <div className="w-3/4">
            <p>
              <span className="font-semibold">This is a rare find.</span>{" "}
              Pedro's place on Airbnb is usually fully booked.
            </p>
          </div>
          <SlDiamond className="block h-[32px] w-[32px] fill-[#E31C5F]" />
        </div>
      ) : null}

      {datePopOver && (
        <div className="absolute top-24 right-0 z-50 rounded-xl border-[1px] bg-white p-6 shadow-lg">
          <div className="flex justify-between">
            <div>
              <p>{daysInBetween} nights</p>
              <p>Minimum stay: </p>
            </div>
            <div className="flex w-[300px] gap-4 rounded-lg border-[1px] p-2">
              <button className=" w-1/2 border-r-[1px] border-gray-500 px-2 text-left">
                <p className="text-[10px] font-medium  uppercase">Check-in</p>
                <p>{formattedStartDate}</p>
              </button>
              <button className=" w-1/2  border-gray-500 px-2 text-left">
                <p className="text-[10px] font-medium uppercase">Checkout</p>
                <p>{formattedendDate}</p>
              </button>
            </div>
          </div>

          <DateRangePicker
            minDate={new Date()}
            maxDate={maxDate}
            staticRanges={[]}
            inputRanges={[]}
            showDateDisplay={false}
            months={2}
            direction="horizontal"
            ranges={[selectionRange]}
            onChange={handleSelection}
          />
          <div className=" flex justify-between">
            <CiKeyboard className="text-3xl" />
            <div className="flex gap-3">
              <button
                onClick={clearSelection}
                className="font-medium underline"
              >
                Clear dates
              </button>
              <button
                onClick={closeBtn}
                className="rounded-lg bg-black py-1 px-3 font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Availability
