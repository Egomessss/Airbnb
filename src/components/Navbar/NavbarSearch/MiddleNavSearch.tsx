import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"

import DestinationPopOver from "./DestinationPopOver"
import CheckInPopOver from "./CheckInPopOver"
import GuestsPopOver from "./GuestsPopOver"

function MiddleNavSearch() {
  return (
    <nav className="flex w-full justify-center py-4">
      <div className="hidden h-[65px] w-[820px] cursor-pointer items-center rounded-full border-[1px] border-gray-300 bg-white shadow hover:shadow-lg md:flex ">
        <DestinationPopOver>
          <p className="text-left text-xs font-semibold">Where</p>
          <input
            className="bg-inherit text-black"
            type="text"
            placeholder="Search Destinations"
          />
        </DestinationPopOver>

        <CheckInPopOver>
          <div className="flex items-center justify-center">
            <div className="rounded-full  border-gray-300 py-4 px-8  hover:bg-gray-300">
              <p className="text-left text-xs font-semibold">Check in</p>
              <p className="whitespace-nowrap text-sm  text-gray-400">
                Add dates
              </p>
            </div>
            <div className="rounded-full  border-gray-300 py-4 px-8  hover:bg-gray-300">
              <p className="text-left text-xs font-semibold">Check out</p>
              <p className="whitespace-nowrap text-sm  text-gray-400">
                Add dates
              </p>
            </div>
          </div>
        </CheckInPopOver>
        <div className="flex h-full w-[35%]  items-center justify-center gap-12 rounded-full hover:bg-gray-300">
          <GuestsPopOver>
            <div>
              <p className="text-left text-xs font-semibold">Who</p>
              <p className="whitespace-nowrap text-sm text-gray-400">
                Add guests
              </p>
            </div>
          </GuestsPopOver>
          <button className="flex h-[50px] w-[110px] items-center justify-center gap-2 rounded-3xl bg-[#DA0A64] text-white">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <p className="font-semibold">Search</p>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default MiddleNavSearch
