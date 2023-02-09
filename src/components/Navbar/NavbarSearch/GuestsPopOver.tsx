import { Popover, Transition } from "@headlessui/react"

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"

export default function GuestsPopOver({ children }: any) {
  const [adultGuests, setAdultsGuests] = useState(0)

  const handleIncrementClickAdults = () => setAdultsGuests(adultGuests + 1)
  const handleDecrementClickAdults = () => setAdultsGuests(adultGuests - 1)

  const [childrenGuests, setChildrenGuests] = useState(0)

  const handleIncrementClickChildren = () =>
    setChildrenGuests(childrenGuests + 1)
  const handleDecrementClickChildren = () =>
    setChildrenGuests(childrenGuests - 1)

  const [infantsGuests, setInfantsGuests] = useState(0)

  const handleIncrementClickInfants = () => setInfantsGuests(infantsGuests + 1)
  const handleDecrementClickInfants = () => setInfantsGuests(infantsGuests - 1)

  const [petsGuests, setPetsGuests] = useState(0)

  const handleIncrementClickPets = () => setPetsGuests(petsGuests + 1)
  const handleDecrementClickPets = () => setPetsGuests(petsGuests - 1)

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
              <div className="flex h-[400px] w-[405px] flex-col items-center justify-center rounded-[40px] border-[1px] bg-white px-12 py-10">
                <div className="flex w-[350px] justify-between border-b-2 py-6">
                  <div className="flex flex-col">
                    <h2 className="font-semibold">Adults</h2>
                    <p className="text-sm text-gray-400">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MinusIcon
                      onClick={handleDecrementClickAdults}
                      className="h-10 rounded-full border-2 p-2"
                    />
                    <p>{adultGuests}</p>
                    <PlusIcon
                      onClick={handleIncrementClickAdults}
                      className="h-10 rounded-full border-2 p-2"
                    />
                  </div>
                </div>
                <div className="flex w-[350px] justify-between border-b-2 py-6">
                  <div className="flex flex-col">
                    <h2 className="font-semibold">Children</h2>
                    <p className="text-sm text-gray-400">Ages 2-12</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MinusIcon
                      onClick={handleDecrementClickChildren}
                      className="h-10 rounded-full border-2 p-2"
                    />
                    <p>{childrenGuests}</p>
                    <PlusIcon
                      onClick={handleIncrementClickChildren}
                      className="h-10 rounded-full border-2 p-2"
                    />
                  </div>
                </div>
                <div className="flex w-[350px] justify-between border-b-2 py-6">
                  <div className="flex flex-col">
                    <h2 className="font-semibold">Infants</h2>
                    <p className="text-sm text-gray-400">Under 2</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MinusIcon
                      onClick={handleDecrementClickInfants}
                      className="h-10 rounded-full border-2 p-2"
                    />
                    <p>{infantsGuests}</p>
                    <PlusIcon
                      onClick={handleIncrementClickInfants}
                      className="h-10 rounded-full border-2 p-2"
                    />
                  </div>
                </div>
                <div className="flex w-[350px] justify-between py-6">
                  <div className="flex flex-col">
                    <h2 className="font-semibold">Pets</h2>
                    <a className="text-sm font-semibold text-gray-400 underline">
                      Bringing a service animal?
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MinusIcon
                      onClick={handleDecrementClickPets}
                      className="h-10 rounded-full border-2 p-2"
                    />
                    <p>{petsGuests}</p>
                    <PlusIcon
                      onClick={handleIncrementClickPets}
                      className="h-10 rounded-full border-2 p-2"
                    />
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
