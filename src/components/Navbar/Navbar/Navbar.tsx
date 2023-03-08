
import { Link } from "react-router-dom"

import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import { format } from "date-fns"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import NavbarSearchDrawer from "./NavbarSearchDrawer"
import { AiOutlineFire } from "react-icons/ai"

function Navbar({ resetFilter }: any) {
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
  const formattedStartDate = startDateParam ? format(new Date(startDateParam), "dd MMM") : '';
  const formattedEndDate = endDateParam ? format(new Date(endDateParam), "dd MMM") : '';

  const dateRange = `${formattedStartDate} - ${formattedEndDate}`

  const guests = Number(guestsParam)


  return (
    <nav className="hidden items-center justify-between border-b-[1.5px]  px-4 py-2 md:flex md:pt-4">
      {/* nav left side */}
      <div className=" hidden h-[50px] w-[280px] min-w-[40px] cursor-pointer items-center justify-start md:flex">
        <Link onClick={resetFilter} className="flex items-center font-bold" to="/">
          <AiOutlineFire className="text-5xl h-full text-red-500" />
          <p className="text-red-500 text-xl hidden lg:block ">firebnb</p>
        </Link>
      </div>
      {/* nav middle side */}
      <div
        className="hidden h-[55px] min-w-[362px] cursor-pointer items-center justify-around rounded-full border shadow hover:shadow-lg md:flex"
        onClick={() => setOpen(true)}
      >
        <ul className="flex items-center w-full justify-between px-2 text-xs ">
          <li className="border-r-2 px-2 font-semibold">
            {/* if the searchparams is not empty and doesnt include the word filter we pass the variable otherwise we pass the placeholder  */}
            {searchParams.toString() !== "" &&
              searchParams.toString().includes("filter") !== true && searchParams.toString().includes("minPrice") !== true
              ? `${locationParam}`
              : "Anywhere"}
          </li>
          <li
            placeholder="Any week"
            className=" border-r-2 pr-2 font-semibold	"
          >
            {/* if the searchparams is not empty and doesnt include the word filter we pass the variable otherwise we pass the placeholder  */}
            {searchParams.toString() !== "" &&
              searchParams.toString().includes("filter") !== true && searchParams.toString().includes("minPrice") !== true
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
              searchParams.toString().includes("filter") !== true && searchParams.toString().includes("minPrice") !== true
              ? `${guests} ${guests > 1 ? "guests" : "guest"}`
              : "Add guests"}
          </li>
          <li>
            <button aria-label="search">
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
      {/* nav right side */}
      <div className=" hidden h-[50px] w-[260px] min-w-[280px] items-center justify-between md:flex">
        <button aria-label="rent your home" className="h-[30px] whitespace-nowrap p-1 text-sm font-semibold hover:rounded-full hover:bg-gray-100">
          Rent your home
        </button>
        <GlobeAltIcon className="h-11 rounded-full p-3 hover:bg-gray-100" />
        <div className="flex h-[40px] w-[72px] cursor-pointer items-center justify-between gap-2 rounded-3xl border-2 border-gray-200 p-2 hover:shadow-lg">
          <Bars3Icon className="h-6" />
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="block h-8 w-8 fill-[#717171]"
          >
            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
