import React from "react"
import {
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import NavSearchModal from "./Navbar/NavSearchModal"

import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline"
import Dropdown from "./Dropdown"
import NavLeftSide from "./Navbar/NavLeftSide"
import NavMiddleFull from "./Navbar/NavMiddleFull"
import NavMidleMobile from "./Navbar/NavMidleMobile"
import NavRightSide from "./Navbar/NavRightSide"

function Navbar() {
  // !state for the NavSearchModal
  const [showModal, setShowModal] = React.useState(false)

  return (
    <nav className="py-2 md:py-4 border-b-[1.5px] flex justify-between items-center gap-2">
      {/* <div className="w-[200px] h-[50px]"></div>
      <div className="w-[20px] h-[50px]"></div>
      <div className="w-[200px] h-[50px]"></div> */}
      {/* full scale */}
      <NavLeftSide />

      <NavMiddleFull
        show={showModal}
        setModal={setShowModal}
      />
      <NavRightSide />
      {/* mobile nav */}
      <NavMidleMobile
        show={showModal}
        setModal={setShowModal}
      />
    </nav>
  )
}

export default Navbar

// fix the rounded shadow in the log in button
