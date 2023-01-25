import React from "react"

import NavLeftSide from "./Navbar/NavLeftSide"
import NavMiddleFull from "./Navbar/NavMiddleFull"
import NavMidleMobile from "./Navbar/NavMidleMobile"
import NavRightSide from "./Navbar/NavRightSide"

function Navbar() {
 

  return (
    <nav className="py-2 md:py-4 border-b-[1.5px] flex justify-between items-center gap-2">
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
