import React from "react"
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"
import NavSearchModal from "./NavSearchModal"

function Navbar() {
  const [showModal, setShowModal] = React.useState(false)

  return (
    <nav>
      <div className="h-[55px] flex justify-around items-center border rounded-full shadow mt-3">
        <div className="">
          <MagnifyingGlassIcon
            onClick={() => setShowModal(true)}
            className="h-5 w-5 text-gray-600 "
          />
        </div>
        <div
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
        {showModal && <NavSearchModal closeModal={setShowModal} />}
        <div>
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
