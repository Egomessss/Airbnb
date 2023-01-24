import { GlobeAltIcon } from "@heroicons/react/24/outline"
import React from "react"

function Footer() {
  return (
    <footer className="mx-auto px-3 md:px-16 border-t-[1px] border-gray-400 bg-white shadow md:flex md:items-center md:justify-between md:p-6 fixed inset-x-0 bottom-0 z-10">
      <div>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              © 2023 Airbnb, Inc.
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6"
            >
              Terms
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6"
            >
              Sitemap
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              UK Mordern Slavery Act
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Company details
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline"
            >
              Destinations
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-bold sm:mt-0">
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              <GlobeAltIcon className="h-5 text-black" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              English(GB)
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              £ GBP
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 hover:underline md:mr-6 "
            >
              Support & resources
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
