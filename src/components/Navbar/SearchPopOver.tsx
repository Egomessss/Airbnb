import React from "react"
import NavLeftSide from "./NavLeftSide"
import NavRightSide from "./NavRightSide"
import Drawer from "@mui/material/Drawer"

function SearchPopOver() {
  return (
    <div className="h-[240px] w-[1400px] bg-white z-50">
      {/* top section */}
      <div className="flex justify-between w-full">
        <NavLeftSide />
        <div className="flex items-center w-[444px]">
          <ul className="flex justify-between items-center gap-6 font-medium">
            <li>Stays</li>
            <li>Experiences</li>
            <li>Online Experiences</li>
          </ul>
        </div>
        <NavRightSide />
      </div>

      {/* Middle section */}
    </div>
  )
}

export default SearchPopOver
