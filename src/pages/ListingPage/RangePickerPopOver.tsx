import { Popover, Transition } from "@headlessui/react"

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"
import { CiKeyboard } from "react-icons/ci"
import RangePicker from "../../components/Navbar/NavbarSearch/RangePicker"

export default function GuestsPopOver({ children }: any) {
  

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
            <Popover.Panel className="absolute right-8 z-50 mt-6 w-screen max-w-sm translate-x-1/2 ">
            <div className="absolute top-24 right-0 z-50 rounded-xl border-[1px] bg-white p-6 shadow-lg">
      <div className="flex justify-between">
        <div>
          <p>5 nights</p>
          <p>dates</p>
        </div>
        <div className="flex w-[300px] gap-4 rounded-lg border-[1px] p-2">
          <button className=" w-1/2 border-r-[1px] border-gray-500 px-2 text-left">
            <p className="text-[10px] font-medium  uppercase">Check-in</p>
            <p>add date</p>
          </button>
          <button className=" w-1/2  border-gray-500 px-2 text-left">
            {" "}
            <p className="text-[10px] font-medium uppercase">Checkout</p>
            <p>add date</p>
          </button>
        </div>
      </div>

      <RangePicker />
      <div className=" flex justify-between">
        <CiKeyboard className="text-3xl" />
        <div className="flex gap-3">
          <button className="font-medium underline">Clear dates</button>
          <button className="rounded-lg bg-black py-1 px-3 font-semibold text-white">
            Close
          </button>
        </div>
      </div>
    </div>
               
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
