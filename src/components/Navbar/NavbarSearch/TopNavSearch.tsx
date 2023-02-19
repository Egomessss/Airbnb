import React from "react"
import NavLeftSide from "../Navbar/NavLeftSide"
import NavRightSide from "../Navbar/NavRightSide"

function TopNavSearch() {
  return (
    <div className="flex w-full justify-between ">
      <NavLeftSide />
      <NavRightSide />
    </div>
  )
}

export default TopNavSearch
