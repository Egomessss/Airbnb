import { GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"
import Dropdown from "../../Dropdown"

function NavRightSide() {
  return (
    <div className=" hidden h-[50px] w-[260px] min-w-[280px] items-center justify-between md:flex">
      <button className="h-[30px] whitespace-nowrap p-1 text-sm font-semibold hover:rounded-full hover:bg-gray-100">
        Airbnb your home
      </button>
      <GlobeAltIcon className="h-11 rounded-full p-3 hover:bg-gray-100" />
    
    </div>
  )
}

export default NavRightSide
