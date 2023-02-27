import { addDays, format } from "date-fns"
import { useState } from "react"
import { DateRangePicker } from "react-date-range"
import { CiKeyboard } from "react-icons/ci"

function ListingDatePicker({ closeModal }) {
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
  const closeBtn = () => closeModal()

  console.log(daysInBetween)

  return (
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
  )
}

export default ListingDatePicker
