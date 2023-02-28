import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { format } from "date-fns"
import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import NavbarSearchDrawer from "../NavbarSearch"

function NavMiddleFull() {
  // !state for the NavSearchModal
  const [open, setOpen] = useState(false)

  //  url searchparams filter

  //  gets the current location object, which we store in the location variable.
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  // creates a new instance of the URLSearchParams object, passing in the search property of the location object.

  // gives us access to the query parameters, which we store in separate variables (locationParam, guestsParam, startDateParam, and endDateParam).

  const locationParam = searchParams.get("location")

  const guestsParam = searchParams.get("guests")

  const startDateParam = searchParams.get("startDate")
  const endDateParam = searchParams.get("endDate")

  // formats the dataparams into a human-readable format
  const formattedStartDate = format(new Date(startDateParam), "dd MMM")
  const formattedEndDate = format(new Date(endDateParam), "dd MMM")

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`

  const guests = Number(guestsParam)

  return (
    <div>
      <div
        className="hidden h-[55px] min-w-[362px] cursor-pointer items-center justify-around rounded-full border shadow hover:shadow-lg md:flex"
        onClick={() => setOpen(true)}
      >
        <ul className="flex items-center gap-7 text-xs ">
          <li className="border-r-2 px-2 font-semibold">
            {/* if the searchparams is not empty and doesnt include the word filter we pass the variable otherwise we pass the placeholder  */}
            {searchParams.toString() !== "" &&
            searchParams.toString().includes("filter") !== true
              ? `${locationParam}`
              : "Anywhere"}
          </li>
          <li
            placeholder="Any week"
            className=" border-r-2 pr-2 font-semibold	"
          >
            {/* if the searchparams is not empty and doesnt include the word filter we pass the variable otherwise we pass the placeholder  */}
            {searchParams.toString() !== "" &&
            searchParams.toString().includes("filter") !== true
              ? `${dateRange}`
              : "Any week"}
          </li>
          {/* if the searchparams is not empty and doesnt include the word filter we pass the variable otherwise we pass the placeholder */}
          <li
            className={
              searchParams.toString() !== "" &&
              searchParams.toString().includes("filter") !== true
                ? " flex items-center justify-center gap-2 font-semibold marker:text-gray-500	"
                : " flex items-center justify-center gap-2 font-semibold text-gray-500"
            }
          >
            {searchParams.toString() !== "" &&
            searchParams.toString().includes("filter") !== true
              ? `${guests} ${guests > 1 ? "guests" : "guest"}`
              : "Add guests"}
          </li>
          <li>
            <button>
              <MagnifyingGlassIcon className="h-8 w-8 rounded-full bg-red-500 p-2 text-white " />
            </button>
          </li>
        </ul>
        {/* renders the modal */}
        {open && (
          <NavbarSearchDrawer
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
