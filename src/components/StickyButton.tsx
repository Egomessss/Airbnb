import { MapIcon } from "@heroicons/react/24/solid"
import React from "react"

function StickyButton() {
  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2">
      <button className="flex items-center justify-center gap-2 p-2	hover:scale-105 h-[38px] w-[90px] md:h-[48px] md:w-[132px] bg-[#222222] text-white text-sm rounded-3xl">
        <p className="md:hidden">Map</p>
        <p className="hidden md:block">Show map</p>
        <MapIcon className="h-5" />
      </button>
    </div>
  )
}

export default StickyButton
