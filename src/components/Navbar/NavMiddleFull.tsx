import React from "react"
import NavSearchModal from "./NavSearchModal"

function NavMiddleFull() {
  return (
    <div className="flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="flex w-[362px] h-[55px] justify-around items-center border rounded-full shadow cursor-pointer hover:shadow-lg ">
        <div
          // opens the modal
          onClick={() => setShowModal(true)}
          className="flex"
        >
          <div className="">
            <ul className="flex flex-row items-center text-xs gap-7 truncate ">
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
    </div>
  )
}

export default NavMiddleFull
