import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import {
  MinusCircleIcon,
  MinusIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline"
import { Fragment } from "react"
import data from "../../../assets/data.json"
import RangePicker from "./RangePicker"

export default function GuestsPopOver({ children }: any) {
  return (
    <div className="flex justify-start items-center px-6 w-[129px] h-full hover:bg-gray-300 rounded-full">
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
              <Popover.Panel className="absolute right-24 z-50 mt-5 w-screen max-w-sm translate-x-1/2 ">
                <div className="bg-white w-[405px] h-[400px] rounded-[40px] px-12 py-10 flex flex-col justify-center items-center border-[1px]">
                  <div className="flex w-[350px] justify-between border-b-2 py-6">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Adults</h2>
                      <p className="text-gray-400 text-sm">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MinusIcon className="h-10 p-2 border-2 rounded-full" />
                      <p>0</p>
                      <PlusIcon className="h-10 p-2 border-2 rounded-full" />
                    </div>
                  </div>
                  <div className="flex w-[350px] justify-between border-b-2 py-6">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Adults</h2>
                      <p className="text-gray-400 text-sm">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MinusIcon className="h-10 p-2 border-2 rounded-full" />
                      <p>0</p>
                      <PlusIcon className="h-10 p-2 border-2 rounded-full" />
                    </div>
                  </div>
                  <div className="flex w-[350px] justify-between border-b-2 py-6">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Adults</h2>
                      <p className="text-gray-400 text-sm">Ages 13 or above</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MinusIcon className="h-10 p-2 border-2 rounded-full" />
                      <p>0</p>
                      <PlusIcon className="h-10 p-2 border-2 rounded-full" />
                    </div>
                  </div>
                  <div className="flex w-[350px] justify-between py-6">
                    <div className="flex flex-col">
                      <h2 className="font-semibold">Adults</h2>
                      <a className="text-gray-400 text-sm underline font-semibold">Bringing a service animal?</a>
                    </div>
                    <div className="flex items-center gap-4">
                      <MinusIcon className="h-10 p-2 border-2 rounded-full" />
                      <p>0</p>
                      <PlusIcon className="h-10 p-2 border-2 rounded-full" />
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
