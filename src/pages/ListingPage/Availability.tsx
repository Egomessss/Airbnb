import { MinusIcon, PlusIcon, StarIcon } from "@heroicons/react/24/solid"
import { addDays, format } from "date-fns"
import React, { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { CiKeyboard } from "react-icons/ci"
import { SlDiamond } from "react-icons/sl"

// import ListingDatePicker from "./ListingDatePicker"

function Availability({ data }) {
  //! modal state
  const [datePopOver, setDatePopOver] = useState(false)
  const [guestPopOver, setGuestPopOver] = useState(false)

  //! Guest popover data

  const [guests, setGuests] = useState(1)

  // if guest over 10 prevent further clicks
  const handleIncrementClickGuests = () => {
    if (guests < 10) {
      setGuests(guests + 1)
    }
  }

  // minimum always 1 never below
  const handleDecrementClickGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  const handleGuestPopOver = () =>
    setGuestPopOver((prevGuestPopOver) => !prevGuestPopOver)

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
  const formattedEndDate = format(new Date(endDate), "P")

  // calculate the number of days between the start and end date
  const daysInBetween = Math.round(
    (endDate.getTime() - startDate.getTime()) / 86400000
  )
  // closes the modal
  const closeBtn = () => setDatePopOver(false)

  // console.log(daysInBetween)

  // !Price breakdown

  const price = data.price_per_night

  const pricePerGuest = data.price_per_guest * guests

  const serviceFee = data.service_fee

  const cleaningfee = data.cleaning_fee

  const accomodationPrice = price * daysInBetween + pricePerGuest

  const priceTotal = serviceFee + cleaningfee + accomodationPrice

  // ? add minimum date for the calendar
  // ? add a price total after we set the range
  // ? add guests pop up
  // ? add the conditional rendering for the add dates and 1 guests
  // ?add the reserving pop over


  return (
    <div className="top-2 hidden bg-scroll md:sticky md:inline-block w-[40%]">
      <div
        className={
          accomodationPrice > price
            ? "z-50 mt-6 h-[452px] w-[372px] gap-5 rounded-xl border-[1px] bg-white p-4  shadow-lg drop-shadow-md"
            : "z-50 mt-6 h-[262px] w-[372px] gap-5 rounded-xl border-[1px] bg-white p-4  shadow-lg drop-shadow-md"
        }
      >
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-medium">{price}€ per night</h1>
          <div>
            <ul className="flex items-center gap-2 text-sm font-medium">
              <li>
                <StarIcon className="h-4" />
              </li>
              <li>{data.rating}</li>
              <li className="text-gray-500 underline">
                <a href="">{data.number_of_reviews} Reviews</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative grid h-24 grid-cols-2 grid-rows-2 rounded-xl border-[1px] border-gray-500 text-xs">
          <button
            className="col-span-2 border-r-[1px] border-gray-500 active:rounded-lg active:border-2 active:border-black"
            onClick={() => setDatePopOver(true)}
          >
            <div className="flex justify-around">
              <p className="font-medium uppercase ">Check-in</p>
              <p className="font-medium uppercase">Checkout</p>
            </div>
            <div className="flex justify-around">
              <p>
                {/* if the accomodation price is higher than the price per night it means the user has selected the dates so display it otherside show the placeholder */}
                {accomodationPrice > price ? formattedStartDate : "Add dates"}
              </p>
              <p>
                {accomodationPrice > price ? formattedEndDate : "add dates"}
              </p>
            </div>
          </button>

          <button
            onClick={handleGuestPopOver}
            className="col-span-2  border-t-[1px] border-gray-500 px-14 text-left"
          >
            <p className="font-medium uppercase">Guests</p>
            <p>
              {guests} {guests > 1 ? "guests " : "guest"}
            </p>
          </button>
        </div>
        <div className="mt-4">
          {/* reserve button is only avaibable if not input has been passed by the user */}
          {accomodationPrice > price ? (
            <button className="w-full  rounded-xl bg-[#DA0A65] p-3 font-semibold text-white">
              {accomodationPrice > price ? "Reserve" : "Check Availability"}
            </button>
          ) : (
            <button
              onClick={() => setDatePopOver(true)}
              className="w-full  rounded-xl bg-[#DA0A65] p-3 font-semibold text-white"
            >
              {accomodationPrice > price ? "Reserve" : "Check Availability"}
            </button>
          )}
        </div>
        {accomodationPrice > price ? (
          <div>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex justify-between">
                <p className="underline">Accomodation</p>
                <p>{accomodationPrice}€</p>
              </li>
              <li className="flex justify-between">
                <p className="underline">Cleaning fee</p>
                <p>{cleaningfee}€</p>
              </li>
              <li className="flex justify-between border-b-2 pb-5">
                <p className="underline">Service fee</p>
                <p>{serviceFee}€</p>
              </li>
              <li className="flex justify-between">
                <p className="font-bold">Total</p>
                <p>{priceTotal}€</p>
              </li>
            </ul>
          </div>
        ) : null}
        {datePopOver && (
          <div className="absolute top-20 right-0 z-50 rounded-xl border-[1px] bg-white p-6 shadow-lg">
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
                  <p>{formattedEndDate}</p>
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
        {guestPopOver && (
          <div className="absolute top-[180px] z-50 flex w-[340px] items-center justify-between rounded-xl border-[1px] bg-white px-4 py-6 drop-shadow-lg">
            <h2 className="font-semibold">Guests</h2>
            <div className="flex items-center gap-4">
              <MinusIcon
                onClick={handleDecrementClickGuests}
                className="h-10 rounded-full border-2 p-2"
              />
              <p>{guests}</p>
              <PlusIcon
                onClick={handleIncrementClickGuests}
                className="h-10 rounded-full border-2 p-2"
              />
            </div>
          </div>
        )}
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
    </div>
  )
}

export default Availability
