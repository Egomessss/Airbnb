import { Popover, Transition } from "@headlessui/react"
import { MapPinIcon } from "@heroicons/react/24/outline"

import { Fragment } from "react"
import data from "../../../assets/data.json"

export default function DestinationAutocomplete({ children }: any) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button>
            <span>{children}</span>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute top-14 left-[70%] z-50 mt-5 w-screen max-w-sm -translate-x-1/2 transform ">
              <div className="h-[470px] w-[494px] rounded-[40px] border-[1px] bg-white px-12 py-10">
                <p className="mb-8 text-sm font-semibold">Search by region</p>
                <div className="">
                  <MapPinIcon />
                  <p>Austurias</p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
