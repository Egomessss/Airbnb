import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"

import data from "../../../assets/data.json"
import { DateRangePicker } from "react-date-range"
import { addDays, format } from "date-fns"
import { createSearchParams, Link } from "react-router-dom"

// remove active effect on search

function NavSearchModal({ closeModal }: any) {
  // open location dropdown
  const [openLocation, setOpenLocation] = useState(false)

  // select detination
  const [selectDestination, SetSelectDestination] = useState("")

  const handleLocation = () => setOpenLocation((prevState) => !prevState)

  // open date dropdown

  const [openDate, setOpenDate] = useState(false)

  const handleDate = () => setOpenDate((prevState) => !prevState)

  // open guests dropdown

  const [openGuests, setOpenGuests] = useState(false)

  const handleGuests = () => setOpenGuests((prevState) => !prevState)

  const [guests, setGuests] = useState(1)

  // if guest over 10 prevent further clicks
  const handleIncrementClickGuests = () => {
    if (guests < 10) {
      setGuests(guests + 1)
    }
  }

  // minimum always 1 guest never below
  const handleDecrementClickGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

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
  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  // max date of 30 days from the current date selected
  const maxDate = addDays(startDate, 30)

  // formats the data so it can be shown in the navbar when a user select from the range picker
  const formattedStartDate = format(new Date(startDate), "dd MMM")
  const formattedendDate = format(new Date(endDate), "dd MMM")

  const range = `${formattedStartDate} - ${formattedendDate}`

  // ! clears the selections and closes the dropdowns

  const clearSelections = () => {
    setOpenDate(false)
    setOpenGuests(false)
    setOpenLocation(false)
    SetSelectDestination("")
    setGuests(1)
    setStartDate(new Date())
    setEndDate(new Date())
  }

  return (
    <div className="fixed inset-0 z-[100] flex h-full w-full flex-col gap-4 overflow-y-auto overflow-x-hidden bg-[#F7F7F7] px-4 pt-6 outline-none focus:outline-none">
      <div className="flex items-center gap-12">
        <XCircleIcon
          onClick={() => closeModal()}
          className="h-10 w-10"
        />
        <p className=" font-bold underline-offset-4 hover:underline">Stays</p>
      </div>

      <button
        onClick={handleLocation}
        className="flex h-12 items-center justify-between rounded-lg  bg-white p-2 px-4 text-sm shadow-xl"
      >
        <p>Where to</p>
        <p className="font-semibold">
          {selectDestination !== "" ? selectDestination : "Add location"}
        </p>
      </button>
      {/* destination section */}
      {openLocation && (
        <div className="grid h-[190px] grid-cols-3 items-center justify-between gap-2 rounded-lg  bg-white  px-4 text-sm shadow-xl">
          {data.map((img) => {
            return (
              <button className="max-w-[150px]" onClick={() => SetSelectDestination(img.action)}>
                <img
                  className="rounded-xl shadow-md"
                  alt={img.title}
                  src={img.link}
                />
                <p className="mt-1 text-xs font-semibold">{img.title}</p>
              </button>
            )
          })}
        </div>
      )}
      {/* dates section */}
      <button
        onClick={handleDate}
        className="flex h-12 items-center justify-between rounded-lg  bg-white p-2 px-4 text-sm shadow-xl"
      >
        <p>When</p>
        <p className="font-semibold">{range}</p>
      </button>

      {openDate && (
        <div className="z-50 mt-4 w-full rounded-lg bg-white p-2 text-sm shadow-xl">
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
      )}
      {/* guest section */}
      <button
        onClick={handleGuests}
        className="flex h-12 w-full items-center justify-between rounded-lg bg-white px-4 text-sm shadow-xl"
      >
        <p>Who</p>
        <p className="font-semibold">
          {guests > 1 ? `${guests} guests` : "Add guests"}
        </p>
      </button>

      {openGuests && (
        <div className="flex h-20 items-center justify-between rounded-lg  bg-white px-4 text-sm shadow-xl">
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

      <div className="sticky top-[100vh] z-50 -mx-6 flex items-center justify-between rounded-lg bg-white py-2 px-6 shadow-xl">
        <button
          onClick={clearSelections}
          className="font-semibold underline"
        >
          Clear all
        </button>
        <Link
          to={{
            pathname: "/SearchPage",
            search: `?${createSearchParams({
              location: selectDestination,
              startDate: startDate.toISOString(),
              endDate: endDate.toISOString(),
              guests: guests.toString(),
            })}`,
          }}
        >
          {" "}
          <button className=" flex w-[100px] rounded-md bg-[#E21C61] p-2 text-white">
            <MagnifyingGlassIcon className="h-5 w-5" />
            Search
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavSearchModal
