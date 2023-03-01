import React from "react"

import NavLeftSide from "./NavLeftSide"
import NavMiddleFull from "./NavMiddleFull"
import NavMidleMobile from "./NavMidleMobile"
import NavRightSide from "./NavRightSide"



function Navbar() {
  return (
    <nav className="flex items-center justify-between  border-b-[1.5px] px-4 py-2 md:pt-4  md:min-w-[400px]">
      {/* full scale */}
      <NavLeftSide />
      <NavMiddleFull /> 
      {/* mobile nav */}
      <NavMidleMobile   />
      <NavRightSide />
    </nav>
  )
}

export default Navbar

// fix the rounded shadow in the log in button
