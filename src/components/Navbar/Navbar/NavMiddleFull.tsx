import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"

import SearchPopOver from "../NavbarSearch"

function NavMiddleFull() {
  // !state for the NavSearchModal
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="hidden md:flex min-w-[362px] h-[55px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg">
        <ul className="flex flex-row items-center text-xs gap-7 ">
          <li
            onClick={() => setOpen(true)}
            className="border-r-2 pr-2 font-semibold"
          >
            Anywhere
          </li>
          <li className=" marker:text-gray-500 border-r-2 pr-2 font-semibold	">
            Any week
          </li>
          <li className=" marker:text-gray-500 flex justify-center items-center gap-2	">
            Add guests
            <MagnifyingGlassIcon
              // opens the modal

              className="h-8 w-8 text-white p-2 rounded-full bg-red-500 "
            />
          </li>
        </ul>
        {/* renders the modal */}
        {open && <SearchPopOver open={open} setOpen={setOpen}/>}
      </div>
    </div>
  )
}

export default NavMiddleFull
//  closeSearch={showModal}
