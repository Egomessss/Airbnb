import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"

import DestinationPopOver from "./DestinationPopOver"
import CheckInPopOver from "./CheckInPopOver"
import GuestsPopOver from "./GuestsPopOver"

function MiddleNavSearch() {
  return (
    <nav className="flex w-full justify-center py-4">
      <div className="hidden h-[65px] w-[848px] cursor-pointer items-center justify-between rounded-full border-[1px] border-gray-300 bg-white shadow hover:shadow-lg md:flex ">
        <DestinationPopOver>
          <p className="text-left text-xs font-semibold">Where</p>
          <input
            className="bg-inherit text-black"
            type="text"
            placeholder="Search Destinations"
          />
        </DestinationPopOver>

        <CheckInPopOver>
          <div className="flex">
            <div className="rounded-full border-l-[1px] border-gray-300 px-4  hover:bg-gray-300">
              <p className="text-left text-xs font-semibold">Check in</p>
              <p className="whitespace-nowrap text-sm  text-gray-400">
                Add dates
              </p>
            </div>
            <div className="rounded-full border-l-[1px] border-gray-300 px-4  hover:bg-gray-300">
              <p className="text-left text-xs font-semibold">Check out</p>
              <p className="whitespace-nowrap text-sm  text-gray-400">
                Add dates
              </p>
            </div>
          </div>
        </CheckInPopOver>

        <GuestsPopOver>
          <p className="text-left text-xs font-semibold">Who</p>
          <p className="whitespace-nowrap text-sm text-gray-400">Add guests</p>
        </GuestsPopOver>

        <button className="mr-2 flex h-[50px] w-[120px] items-center justify-center gap-2 rounded-3xl bg-[#DA0A64] text-white">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <p className="font-semibold">Search</p>
        </button>
      </div>
    </nav>
  )
}

export default MiddleNavSearch
