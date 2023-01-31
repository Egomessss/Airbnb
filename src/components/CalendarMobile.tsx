import React, { useState } from "react"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

import { DateRange } from "react-date-range"

function CalendarMobile() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const handleSelection = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <div>
      <DateRange
        ranges={[selectionRange]}
        onChange={handleSelection}
        minDate={new Date()}
        rangeColors={["black"]}
        showDateDisplay={false}
      />
    </div>
  )
}

export default CalendarMobile
