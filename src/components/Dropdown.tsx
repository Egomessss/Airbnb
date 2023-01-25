import React from "react"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"

import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline"

export default function Dropdown() {
  const aStyle =
    "block px-4 py-2 text-sm hover:bg-gray-100 active:bg-gray-100 active:font-semibold"
  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
    >
      <div>
        <Menu.Button className="flex items-center justify-between border-gray-200 border-2 p-2 rounded-3xl gap-2 h-[40px] w-[72px] cursor-pointer hover:shadow-lg">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-7" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <a
                href="#"
                className={aStyle}
              >
                Sign up
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className={aStyle}
              >
                Log in
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className={aStyle}
              >
                Airbnb your home
              </a>
            </Menu.Item>
            <form
              method="POST"
              action="#"
            >
              <Menu.Item>
                <a
                  type="submit"
                  className={aStyle}
                >
                  Host an experience
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  type="submit"
                  className={aStyle}
                >
                  Help
                </a>
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
