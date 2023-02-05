import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import data from "../../../assets/data.json"
import RangePicker from "./RangePicker"

export default function CheckInPopOver({ children }: any) {
  const data = [
    {
      id: 1,
      title: "I'm Flexible",
      link: "https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg",
    },
    {
      id: 2,
      title: "South America",
      link: "https://a0.muscache.com/im/pictures/06a30699-aead-492e-ad08-33ec0b383399.jpg?im_w=320",
    },
    {
      id: 3,
      title: "Spain",
      link: "https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320",
    },
    {
      id: 4,
      title: "Africa",
      link: "https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320",
    },
    {
      id: 5,
      title: "France",
      link: "https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320",
    },
    {
      id: 6,
      title: "United States",
      link: "https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320",
    },
  ]

  return (
    <div className="w-full max-w-sm px-4">
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
              <Popover.Panel className="absolute right-44 z-50 mt-5 w-screen max-w-sm translate-x-1/2 ">
                <div className="bg-white w-[814px] h-[470px] rounded-[40px] px-12 py-10 flex flex-col justify-center items-center">
                  <div className="flex justify-between w-[300px] bg-gray-300 p-1 rounded-3xl">
                    <button className="bg-white text-sm font-semibold p-2 rounded-3xl ">
                      Choose dates
                    </button>
                    <button className="bg-white text-sm font-semibold p-2 rounded-3xl ">
                      Flexible dates
                    </button>
                  </div>
                  <RangePicker />
                  <div className="flex gap-4 text-xs">
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 p-[3.5px]">Exact dates</button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 p-[3.5px]">± 1 day</button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 p-[3.5px]">± 2 days</button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 p-[3.5px]">± 3 days</button>
                    <button className="hover:border-black hover:border-1 rounded-3xl border-[1px] w-24 p-[3.5px]">± 7 days</button>
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
