import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

import { DateRangePicker } from "react-date-range"
import { useState } from "react"

export default function RangePicker() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const handleSelection = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <DateRangePicker
      staticRanges={[]}
      inputRanges={[]}
      showDateDisplay={false}
      months={2}
      direction="horizontal"
      ranges={[selectionRange]}
      onChange={handleSelection}
    />
  )
}
