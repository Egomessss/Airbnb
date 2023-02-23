import { Popover, Transition } from "@headlessui/react"
import { MapPinIcon } from "@heroicons/react/24/outline"

import { Fragment } from "react"
import ListingData from "../../../assets/ListingsData.json"

export default function SearchInputModal() {
  return (
    <div className="absolute top-[75px] left-[65%] z-50 h-[400px] w-[354px] -translate-x-1/2 transform rounded-[40px] border-[1px] bg-white  flex flex-wrap items-center justify-center">
      {ListingData.map((listing) => {
        return (
          <div className="flex items-center gap-4 w-[150px] ">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gray-200">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium">{listing.city}</p>
          </div>
        )
      })}
      {/* <div className="flex items-center gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
          <MapPinIcon className="h-7 w-7" />
        </div>
        <p className="text-sm font-medium">Algarve, Portugal</p>
      </div>
      <div className="flex items-center gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
          <MapPinIcon className="h-7 w-7" />
        </div>
        <p className="text-sm font-medium">Algarve, Portugal</p>
      </div>
      <div className="flex items-center gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
          <MapPinIcon className="h-7 w-7" />
        </div>
        <p className="text-sm font-medium">Algarve, Portugal</p>
      </div>
      <div className="flex items-center gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
          <MapPinIcon className="h-7 w-7" />
        </div>
        <p className="text-sm font-medium">Algarve, Portugal</p>
      </div> */}
    </div>
  )
}
