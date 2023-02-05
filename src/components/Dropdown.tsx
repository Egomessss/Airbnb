import React from "react"

import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"

import { Bars3Icon} from "@heroicons/react/24/outline"

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
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" 
          className="block h-8 w-8 fill-[#717171]"><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
          
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
