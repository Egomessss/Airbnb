import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

import TopNavSearch from "./TopNavSearch"
import MiddleNavSearch from "./MiddleNavSearch"

export default function NavbarSearchDrawer({ open, setOpen }: any) {
  return (
    <Transition.Root
      show={open}
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed top-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                {/* Content */}
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="hidden md:flex h-[160px] w-screen flex-col bg-white py-4 px-20 shadow-xl">
                    {/* top section of searchnavbar drawer */}
                    <TopNavSearch />
                    {/* Middle section of searchnavbar drawer */}
                    <MiddleNavSearch />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
