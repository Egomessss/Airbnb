import React from "react"
import {
  AdjustmentsHorizontalIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import NavSearchModal from "./NavSearchModal"
import logo from "../assets/images/logo.png"
import logoMobile from "../assets/images/logoMobile.png"
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline"
import Dropdown from "./Dropdown"

function Navbar() {
  // !state for the NavSearchModal
  const [showModal, setShowModal] = React.useState(false)

  return (
    <nav className="flex justify-between items-center py-4 gap-3  border-b-[1.5px]">
      {/* logo */}
      <div className="flex justify-center items-center">
        <img
          className="h-8 w-15 hidden lg:flex"
          src={logo}
          alt="logo"
        />
        <img
          className="h-8 w-15 hidden md:flex lg:hidden"
          src={logoMobile}
          alt="logo"
        />
      </div>
      {/* midle and right side div */}

      {/* searchbar for mobile */}
      <div className="md:hidden h-[55px] w-full flex justify-around items-center border rounded-full shadow mt-3">
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

      <div className="hidden md:flex max-w-[382px] min-w-[365px] h-[55px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg ">
        <div
          // opens the modal
          onClick={() => setShowModal(true)}
          className="flex"
        >
          <div className="">
            <ul className="flex flex-row items-center text-xs gap-7 ">
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

      {/* right side nav */}
      <div className="items-center gap-1 hidden md:flex">
        <div>
          <p className="rounded-full hover:bg-gray-100 p-2">Airbnb your home</p>
        </div>
        <div>
          <GlobeAltIcon className="h-11 p-3 rounded-full hover:bg-gray-100" />
        </div>
        <Dropdown />
      </div>
    </nav>
  )
}

export default Navbar

// fix the rounded shadow in the log in button
