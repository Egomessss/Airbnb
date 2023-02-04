import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"
import { Popover } from '@headlessui/react'

function PopOverMiddle() {
const [Destination, setDestination] = React.useState(false)
// const [CheckIn, seCheckIn] = React.useState
// const [CheckOut, seCheckOut] = React.useState
// const [Guests, setGuests] = React.useState

const destinationPopOver = ()=>setDestination(true)


  return (
    <div className="w-full flex justify-center py-4">
      <div className="hidden md:flex w-[802px] h-[65px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg">
        <button onClick={destinationPopOver}>
          <p className="text-xs font-semibold text-left"> Where</p>
          <input
            type="text"
            placeholder="Search Destinations"
          />
    
        </button>
        <button className="border-l-[1px] px-4 border-gray-400">
          <p className="text-xs font-semibold text-left">Check in</p>
          <p className="text-sm  text-gray-400">Add dates</p>
        </button>

        <button className="border-l-[1px] px-4 border-gray-400">
          <p className="text-xs font-semibold text-left">Check out</p>
          <p className="text-sm  text-gray-400">Add dates</p>
        </button>

        <button className="border-l-[1px] px-4 border-gray-400">
          <p className="text-xs font-semibold text-left">Who</p>
          <p className="text-sm text-gray-400">Add guests</p>
        </button>

        <button>
          <MagnifyingGlassIcon className="h-12 w-12 p-2 text-white  rounded-full bg-red-500 " />
        </button>
      </div>
    </div>
  )
}

export default PopOverMiddle
