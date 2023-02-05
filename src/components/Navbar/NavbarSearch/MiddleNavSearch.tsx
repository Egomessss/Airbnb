import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"
import { Popover } from "@headlessui/react"
import DestinationPopOver from "./DestinationPopOver"
import CheckInPopOver from "./CheckInPopOver"

function MiddleNavSearch() {
  return (
    <div className="w-full flex justify-center py-4">
      <div className="hidden md:flex w-[802px] h-[65px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg">
        <div>
          <DestinationPopOver>
            <p>Where</p>
            <input
              type="text"
              placeholder="Search Destinations"
            />
          </DestinationPopOver>
        </div>
        <div className="border-l-[1px] px-4 border-gray-400">
          <CheckInPopOver>
            <p className="text-xs font-semibold text-left">Check in</p>
            <p className="text-sm  text-gray-400">Add dates</p>
          </CheckInPopOver>
        </div>
        <div className="border-l-[1px] px-4 border-gray-400">
          <DestinationPopOver>
            <p className="text-xs font-semibold text-left">Check out</p>
            <p className="text-sm  text-gray-400">Add dates</p>
          </DestinationPopOver>
        </div>
        <div className="border-l-[1px] px-4 border-gray-400">
          <DestinationPopOver>
            <p className="text-xs font-semibold text-left">Who</p>
            <p className="text-sm text-gray-400">Add guests</p>
          </DestinationPopOver>
        </div>
        <button>
          <MagnifyingGlassIcon className="h-12 w-12 p-2 text-white  rounded-full bg-red-500 " />
        </button>
      </div>
    </div>
  )
}

export default MiddleNavSearch
