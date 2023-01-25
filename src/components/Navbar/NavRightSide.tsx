import { GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"
import Dropdown from "../Dropdown"

function NavRightSide() {
  return (
    <div className="flex items-center">
      <div>
        <p className="rounded-full hover:bg-gray-100  text-sm font-semibold whitespace-nowrap">
          Airbnb your home
        </p>
      </div>
      <div>
        <GlobeAltIcon className="h-11 p-3 rounded-full hover:bg-gray-100" />
      </div>
      <Dropdown />
    </div>
  )
}

export default NavRightSide
