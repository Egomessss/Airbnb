import { GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"
import Dropdown from "../Dropdown"

function NavRightSide() {
  return (
    <div className=" hidden md:flex items-center justify-between h-[50px] w-[260px] min-w-[280px]">
      <button className="hover:rounded-full hover:bg-gray-100 text-sm font-semibold whitespace-nowrap h-[30px] p-1">
        Airbnb your home
      </button>
      <GlobeAltIcon className="h-11 p-3 rounded-full hover:bg-gray-100" />
      <Dropdown />
    </div>
  )
}

export default NavRightSide
