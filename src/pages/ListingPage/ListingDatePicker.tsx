import { addDays, format } from "date-fns"
import React, { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { CiKeyboard } from "react-icons/ci"
import { start } from "repl"
import RangePicker from "../../components/Navbar/NavbarSearch/RangePicker"

function ListingDatePicker() {
  // !checkin/out and calendar data

  // creates a start and end date starting from the current day so you can't go back
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 5))

  // stores the start and end date
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  // sets the start and end date in the calendar
  const handleSelection = (ranges) => {
    const rangeStartDate = ranges.selection.startDate

    // Always set the end date to be 5 days after the start date because the minimum stay is 5 days
    const rangeEndDate = addDays(rangeStartDate, 5)

    if (rangeEndDate > maxDate) {
      alert("The minimum stay is 5 days!")
    } else if (rangeEndDate < rangeStartDate) {
      alert("You must select a range that is atleast 5 days long")
    } else {
      setStartDate(rangeStartDate)
      setEndDate(rangeEndDate)
    }
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
  console.log(daysInBetween)

  return (
    <div className="absolute top-24 right-0 z-50 rounded-xl border-[1px] bg-white p-6 shadow-lg">
      <div className="flex justify-between">
        <div>
          <p>{daysInBetween} nights</p>
          <p>dates</p>
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
          <button className="font-medium underline">Clear dates</button>
          <button className="rounded-lg bg-black py-1 px-3 font-semibold text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingDatePicker
