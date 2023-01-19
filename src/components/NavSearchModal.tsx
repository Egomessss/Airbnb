import { XCircleIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React from "react"
import SwipeCarousel from "./SwipeCarousel"

function NavSearchModal({ closeModal }) {
  return (
    <div className="p-5 h-full w-full fixed bg-gray-300 flex flex-col  overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none ">
      <header>
        <div className="flex">
          <XCircleIcon className="h-10 w-10" />
          <div className="flex flex-row font-semibold">
            <p>Stays</p>
            <p>Experiences</p>
          </div>
        </div>
      </header>
      <body>
        <div className="bg-white max-w-[366px] h-[324px]">
          <div>
            <h1>Where to?</h1>
            <input type="text" />
            <div className="">
              {" "}
              <SwipeCarousel />
            </div>
          </div>
          <div>
            <p>when</p>
            <p>Add dates</p>
          </div>
          <div>
            <p>Who</p>
            <p>Add guests</p>
          </div>
        </div>
      </body>
      <footer>
        <p>Clear all</p>
        <button>
          <MagnifyingGlassIcon />
          Search
        </button>
      </footer>
    </div>
  )
}

export default NavSearchModal
