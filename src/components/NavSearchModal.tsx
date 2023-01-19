import { XCircleIcon } from "@heroicons/react/24/outline"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import React from "react"
import SearchModal from "./SearchModal"
import SwipeCarousel from "./SwipeCarousel"
import data from "../assets/data.json"

// remove active effect on search

function NavSearchModal({ closeModal }: any) {
  const [isSearching, setIsSearching] = React.useState(false)

  return (
    <div className="p-3 h-full w-full fixed bg-[#F7F7F7] flex flex-col overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none min-h-screen">
      <header className="py-2">
        <div className="flex items-center gap-12">
          <XCircleIcon
            onClick={() => closeModal()}
            className="h-10 w-10"
          />
          <div className="flex flex-row font-semibold gap-3">
            <p className=" hover:underline underline-offset-4">Stays</p>
            <p className=" hover:underline underline-offset-4">Experiences</p>
          </div>
        </div>
      </header>
      <section>
        <div className="flex flex-col gap-2">
          <div className="bg-white max-w-[366px] h-[324px] rounded-xl shadow-md">
            <div className=" flex flex-col gap-4">
              <div className="p-4 flex flex-col gap-4">
                <h1 className="font-bold">Where to?</h1>
                <div className="border-2 rounded-md h-12 flex items-center gap-2 p-2">
                  <MagnifyingGlassIcon className="w-4 h-4" />
                  <input
                    className=""
                    type="text"
                    placeholder="France"
                    onClick={() => setIsSearching(true)}
                  />
                  {isSearching && (
                    <SearchModal closeSearchModal={setIsSearching} />
                  )}
                </div>
              </div>

              <div className="p-2">
                <SwipeCarousel/>
              </div>
            </div>
          </div>
          <div className="flex justify-between h-12 items-center bg-white rounded-lg shadow-md p-2 text-sm">
            <p>When</p>
            <p className="font-semibold">Add dates</p>
          </div>
          <div className="flex justify-between h-12 items-center bg-white rounded-lg shadow-md p-2 text-sm">
            <p>Who</p>
            <p className="font-semibold">Add guests</p>
          </div>
        </div>
      </section>
      <footer className="flex justify-between items-center sticky top-[100vh] bg-white rounded-lg shadow-md p-2">
        <p className="underline font-semibold">Clear all</p>
        <button className=" p-2 rounded-md w-[100px] text-white flex bg-[#E21C61]">
          <MagnifyingGlassIcon className="w-5 h-5" />
          Search
        </button>
      </footer>
    </div>
  )
}

export default NavSearchModal
