import React from "react"
import {
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import NavSearchModal from "./NavSearchModal"
import logo from "../assets/images/logo.png"
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline"
import Dropdown from "./Dropdown"

function Navbar() {
  // !state for the NavSearchModal
  const [showModal, setShowModal] = React.useState(false)
  const [showDropdown, setShowDropdown] = React.useState(false)

  const openDropdown = ()=>{
    return (
      setShowDropdown(true)
    )
  }

  return (
    <nav>
      <div className="md:hidden h-[55px] flex justify-around items-center border rounded-full shadow mt-3">
        <div className="">
          <MagnifyingGlassIcon
            // opens the modal
            onClick={() => setShowModal(true)}
            className="h-5 w-5 text-gray-600 "
          />
        </div>
        <div
          // opens the modal
          onClick={() => setShowModal(true)}
          className="flex flex-col w-[240px]"
        >
          <p className="font-medium">Where to?</p>
          <div>
            <ul className="flex flex-row text-xs justify-between">
              <li>Anywhere</li>
              <li className="list-disc marker:text-gray-500	">Any week</li>
              <li className="list-disc marker:text-gray-500	">Add guests</li>
            </ul>
          </div>
        </div>
        {/* renders the modal */}
        {showModal && <NavSearchModal closeModal={setShowModal} />}
        <div>
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </div>
      </div>

      {/* navbar for screen over 760px */}
      <div className="flex items-center">
        <div className="mr-auto">
          <img
            className="h-8 w-8"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="max-w-[352px] min-w-[305px] h-[55px] flex justify-around items-center border rounded-full shadow mt-3 cursor-pointer hover:shadow-lg ">
          <div
            // opens the modal
            onClick={() => setShowModal(true)}
            className="flex"
          >
            <div className="">
              <ul className="flex flex-row items-center text-xs gap-3 ">
                <li className="border-r-2 pr-2 font-semibold">Anywhere</li>
                <li className=" marker:text-gray-500 border-r-2 pr-2 font-semibold	">
                  Any week
                </li>
                <li className=" marker:text-gray-500	">Add guests</li>
                <li>
                  <div>
                    <MagnifyingGlassIcon
                      // opens the modal
                      onClick={() => setShowModal(true)}
                      className="h-8 w-8 text-white p-2 rounded-full bg-red-500 "
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* renders the modal */}
          {showModal && <NavSearchModal closeModal={setShowModal} />}
        </div>
        <div className="flex items-center ml-auto gap-4">
          <div>
            <p className="rounded-full hover:bg-gray-100 p-2">
              Airbnb your home
            </p>
          </div>
          <div className=" rounded-full hover:bg-gray-100">
            <GlobeAltIcon className="h-11 p-3" />
          </div>
          <div>
            <button onClick={openDropdown} className="flex items-center justify-between border-gray-200 border-2 p-1 rounded-r-full rounded-l-full gap-2 w-[72px] cursor-pointer  hover:shadow-lg">
              <Bars3Icon className="h-5" />
              <UserCircleIcon className="h-6" />
             
            </button>
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
