import { Popover, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Fragment } from "react"
import data from "../../../assets/data.json"

export default function DestinationPopOver({ children }: any) {
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
    <Popover className="relative flex h-full w-[35%] items-center px-6 justify-start rounded-full hover:bg-gray-300">
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
                <div className="relative grid grid-cols-3 gap-y-7">
                  {data.map((img) => {
                    return (
                      <div>
                        <img
                          className="h-[122px] w-[122px] cursor-pointer rounded-xl border-[1px] hover:border-black"
                          alt={img.title}
                          src={img.link}
                        />
                        <p className="mt-2 text-xs font-medium">Countryside</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
