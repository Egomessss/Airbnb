import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import data from "../../../assets/data.json"
import RangePicker from "./RangePicker"

export default function CheckInPopOver({ children }: any) {
  
  return (
    <div className="flex justify-start items-center">
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
              <Popover.Panel className="absolute right-[20rem] z-50 mt-5 w-screen max-w-sm translate-x-1/2 ">
                <div className="bg-white w-[805px] h-[470px] rounded-[40px] px-12 py-10 flex flex-col justify-center items-center border-[1px]">
                  <div className="flex justify-between w-[300px] bg-gray-300 p-1 rounded-3xl ">
                    <button className="bg-white text-sm font-semibold py-2 px-5 rounded-3xl ">
                      Choose dates
                    </button>
                    <button className="bg-white text-sm font-semibold py-2 px-5 rounded-3xl ">
                      Flexible dates
                    </button>
                  </div>
                  <RangePicker />
                  <div className="flex gap-4 text-xs mt-4">
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 px-2 py-[8px]">
                      Exact dates
                    </button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 px-2 py-[8px]">
                      ± 1 day
                    </button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 px-2 py-[8px]">
                      ± 2 days
                    </button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 px-2 py-[8px]">
                      ± 3 days
                    </button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 px-2 py-[8px]">
                      ± 7 days
                    </button>
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
