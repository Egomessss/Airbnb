import { Popover, Transition } from "@headlessui/react"

import { Fragment, useState } from "react"

import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"


export default function CheckInPopOver({ children }: any) {

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


  return (
    <div className="flex items-center justify-start">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button>
              <span>{children}</span>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-[22rem] z-50 mt-2 w-screen max-w-sm translate-x-1/2 ">
                <div className="flex h-[470px] w-[820px] flex-col items-center justify-center rounded-[40px] border-[1px] bg-white px-12 py-10">
                  <div className="flex w-[300px] justify-between rounded-3xl bg-gray-300 p-1 ">
                    <button className="rounded-3xl bg-white py-2 px-5 text-sm font-semibold ">
                      Choose dates
                    </button>
                    <button className="rounded-3xl bg-white py-2 px-5 text-sm font-semibold ">
                      Flexible dates
                    </button>
                  </div>
                  <DateRangePicker
                    staticRanges={[]}
                    inputRanges={[]}
                    showDateDisplay={false}
                    months={2}
                    direction="horizontal"
                    ranges={[selectionRange]}
                    onChange={handleSelection}
                  />
                  <div className="mt-4 flex gap-4 text-xs">
                    <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                      Exact dates
                    </button>
                    <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                      ± 1 day
                    </button>
                    <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                      ± 2 days
                    </button>
                    <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                      ± 3 days
                    </button>
                    <button className="hover:border-1 w-24 rounded-3xl border-[1px] px-2 py-[8px] hover:border-black">
                      ± 7 days
                    </button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
