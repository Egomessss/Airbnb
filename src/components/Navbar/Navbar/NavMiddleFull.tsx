import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import SearchPopOver from "../NavbarSearch"

function NavMiddleFull() {
  // !state for the NavSearchModal
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div className="hidden h-[55px] min-w-[362px] cursor-pointer items-center justify-around rounded-full border shadow hover:shadow-lg md:flex">
        <ul className="flex flex-row items-center gap-7 text-xs ">
          <li
            onClick={() => setOpen(true)}
            className="border-r-2 pr-2 font-semibold"
          >
            Anywhere
          </li>
          <li className=" border-r-2 pr-2 font-semibold marker:text-gray-500	">
            Any week
          </li>
          <li className=" flex items-center justify-center gap-2 marker:text-gray-500	">
            Add guests
          </li>
          <li>
            <Link to="/SearchPage" >
              
              <MagnifyingGlassIcon className="h-8 w-8 rounded-full bg-red-500 p-2 text-white " />
            </Link>
          </li>
        </ul>
        {/* renders the modal */}
        {open && (
          <SearchPopOver
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>
    </div>
  )
}

export default NavMiddleFull
//  closeSearch={showModal}
