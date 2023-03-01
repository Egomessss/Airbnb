import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"

function NavRightSide() {
  return (
    <div className=" hidden h-[50px] w-[260px] min-w-[280px] items-center justify-between md:flex">
      <button className="h-[30px] whitespace-nowrap p-1 text-sm font-semibold hover:rounded-full hover:bg-gray-100">
        Airbnb your home
      </button>
      <GlobeAltIcon className="h-11 rounded-full p-3 hover:bg-gray-100" /> <div className="flex h-[40px] w-[72px] cursor-pointer items-center justify-between gap-2 rounded-3xl border-2 border-gray-200 p-2 hover:shadow-lg">
            <Bars3Icon className="h-6" />
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-8 w-8 fill-[#717171]"
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </div>
    </div>
  )
}

export default NavRightSide
