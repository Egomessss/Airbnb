import {
  ArrowUpTrayIcon,
  ChevronLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import React from "react"

function ListingNav() {
  return (
    <div className="md:hidden flex h-[64px] items-center justify-between">
      <a
        href=""
        className="flex items-center"
      >
        <ChevronLeftIcon className="h-4" />
        <p className="text-sm font-semibold">Homes</p>
      </a>
      <div className="flex justify-around w-14">
        <ArrowUpTrayIcon className="h-4" />
        <HeartIcon className="h-4" />
      </div>
    </div>
  )
}

export default ListingNav
