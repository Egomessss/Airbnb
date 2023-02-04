import React from "react"

import NavLeftSide from "./NavLeftSide"
import NavMiddleFull from "./NavMiddleFull"
import NavMidleMobile from "./NavMidleMobile"
import NavRightSide from "./NavRightSide"

function Navbar() {
  return (
    <nav className="py-2 md:pt-4 border-b-[1.5px] flex justify-between items-center gap-2">
      {/* full scale */}
      <NavLeftSide />

      <NavMiddleFull />
      <NavRightSide />
      {/* mobile nav */}
      <NavMidleMobile />
    </nav>
  )
}

export default Navbar

// fix the rounded shadow in the log in button
