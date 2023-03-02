import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import React, { useState } from "react"
import FilterModal from "../../FilterModal"
import NavSearchModal from "./NavSearchModal"

function NavMobile({ removeFixed, showFixed }) {
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false)

  // prevents scrolling when modal is open
  const showFilterModal = () => {
    setOpenFilterDropdown(true)
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden"
    }
  }

  const ShowFilterRemoveFixed = () => {
    if (removeFixed === undefined) {
      showFilterModal()
    } else {
      removeFixed()
      showFilterModal()
    }
  }

  // allows scrolling when the modal is closed
  const closeFilterModal = () => {
    setOpenFilterDropdown(false)
    document.body.style.overflow = "unset"
  }

  const [showModal, setShowModal] = useState(false)

  // prevents scrolling when modal is open
  const showSearchModal = () => {
    setShowModal(true)
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden"
    }
  }

  const ShowModalRemoveFixed = () => {
    if (removeFixed === undefined) {
      showSearchModal()
    } else {
      removeFixed()
      showSearchModal()
    }
  }

  // allows scrolling when the modal is closed
  const closeSearchModal = () => {
    setShowModal(false)
    document.body.style.overflow = "unset"
  }

  const closeModalShowFixed = () => {
    if (showFixed === undefined) {
      closeSearchModal()
    } else {
      closeSearchModal()
      showFixed()
    }
  }

  return (
    <nav className=" my-3 flex h-[55px] w-full items-center justify-around rounded-full border shadow md:hidden">
      <button>
        <MagnifyingGlassIcon
          // opens the modal
          onClick={ShowModalRemoveFixed}
          className="h-5 w-5 text-gray-600 "
        />
      </button>
      <div
        // opens the modal
        onClick={ShowModalRemoveFixed}
        className="flex w-[240px] flex-col"
      >
        <p className="font-medium">Where to?</p>
        <div>
          <ul className="flex flex-row justify-between text-xs">
            <li>Anywhere</li>
            <li className="list-disc marker:text-gray-500	">Any week</li>
            <li className="list-disc marker:text-gray-500	">Add guests</li>
          </ul>
        </div>
      </div>
      {/* renders the modal */}
      {showModal && <NavSearchModal closeModal={closeModalShowFixed} />}

      <button onClick={ShowFilterRemoveFixed}>
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
      </button>

      {openFilterDropdown && (
        <FilterModal closeFilterDropdown={closeFilterModal} />
      )}
    </nav>
  )
}

export default NavMobile
