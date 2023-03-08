import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import { useState } from "react"
import Filter from "../../Filter"
import NavSearchModal from "./NavSearchModal"

function NavMobile({ removeFixed, showFixed }: any) {

  // removes bottom nav and map button when modal is open
  const ShowFilterRemoveFixed = () => {
    if (removeFixed !== null) {
      removeFixed()
    }
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
    if (removeFixed === null) {
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
    if (showFixed === null) {
      closeSearchModal()
    } else {
      closeSearchModal()
      showFixed()
    }
  }

  return (
    <nav className=" my-3 mx-4 flex h-[55px] z-50 items-center justify-around rounded-full border shadow md:hidden">
      <button aria-label="search">
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
      <Filter removeBottom={ShowFilterRemoveFixed} />
  
    </nav>
  )
}

export default NavMobile
