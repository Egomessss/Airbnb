import { Popover, Transition } from "@headlessui/react"
import { MapPinIcon } from "@heroicons/react/24/outline"

import { Fragment } from "react"
import data from "../../../assets/data.json"

export default function DestinationAutocomplete({ children }: any) {
  return (
    <div className="absolute top-[75px] left-[65%] z-50 h-[400px] w-[354px] -translate-x-1/2 transform rounded-[40px] border-[1px] bg-white px-12 py-10 ">
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
      </div>
      <div className="flex items-center gap-4 py-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-200">
          <MapPinIcon className="h-7 w-7" />
        </div>
        <p className="text-sm font-medium">Algarve, Portugal</p>
      </div>
      
    </div>
  )
}

