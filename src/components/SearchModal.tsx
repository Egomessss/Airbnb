import {
  ArrowLeftCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"
import React from "react"

function SearchModal({ closeSearchModal }:any) {
  return (
    <div className="h-full w-full fixed bg-white flex flex-col overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none min-h-screen">
      <div className="flex items-center gap-12 p-4 bg-[#F7F7F7]">
        <ArrowLeftCircleIcon
          onClick={() => closeSearchModal()}
          className="h-10 w-10"
        />
        <div className="flex flex-row font-semibold gap-3">
          <p className=" hover:underline underline-offset-4">Stays</p>
          <p className=" hover:underline underline-offset-4">Experiences</p>
        </div>
      </div>
      <div className="h-screen rounded-t-3xl flex justify-center">
        <div className="flex p-2 mt-8 items-center gap-5 bg-[#F7F7F7] rounded-lg w-[342px] h-[60px] border-solid border-[1.5px] border-gray-300">
          <MagnifyingGlassIcon className="h-5 w-5" />
          <input
            className="bg-inherit"
            type="text"
            placeholder="Search destinations"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchModal
