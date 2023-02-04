import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"
import NavSearchModal from "./NavSearchModal"

function NavMiddleFull() {
  // !state for the NavSearchModal
  const [showModal, setShowModal] = React.useState(false)
  
  return (
    <div
      // opens the modal
      onClick={() => setShowModal(true)}
      className="hidden md:flex min-w-[362px] h-[55px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg "
    >
      <ul className="flex flex-row items-center text-xs gap-7 ">
        <li className="border-r-2 pr-2 font-semibold">Anywhere</li>
        <li className=" marker:text-gray-500 border-r-2 pr-2 font-semibold	">
          Any week
        </li>
        <li className=" marker:text-gray-500 flex justify-center items-center gap-2	">
          Add guests
          <MagnifyingGlassIcon
            // opens the modal
            onClick={() => setShowModal(true)}
            className="h-8 w-8 text-white p-2 rounded-full bg-red-500 "
          />
        </li>
      </ul>
      {/* renders the modal */}
      {showModal && <NavSearchModal closeSearchModal={setShowModal} />}
    </div>
  )
}

export default NavMiddleFull
