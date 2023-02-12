import React from "react"

import NavLeftSide from "./NavLeftSide"
import NavMiddleFull from "./NavMiddleFull"
import NavMidleMobile from "./NavMidleMobile"
import NavRightSide from "./NavRightSide"

function Navbar() {
  return (
    <nav className="flex items-center justify-between  border-b-[1.5px] py-2 md:pt-4">
      {/* full scale */}
      <NavLeftSide />
      <NavMiddleFull /> 
      {/* mobile nav */}
      <NavMidleMobile />
      <NavRightSide />
    </nav>
  )
}

export default Navbar

// fix the rounded shadow in the log in button
