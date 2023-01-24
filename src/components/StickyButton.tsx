import { MapIcon } from '@heroicons/react/24/solid'
import React from 'react'

function StickyButton() {
  return (
    <div className="fixed z-20 bottom-20 left-1/2 -translate-x-1/2">
    <button className="flex items-center justify-center gap-2 p-2 h-[48px] w-[132px] bg-[#222222] text-white text-sm rounded-3xl">
      <p>Show map</p>
      <MapIcon className="h-5" />
    </button>
  </div>
  )
}

export default StickyButton