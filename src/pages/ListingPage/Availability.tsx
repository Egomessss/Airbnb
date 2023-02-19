import { StarIcon } from "@heroicons/react/24/solid"
import React from "react"

function Availability() {
  return (
    <div className="top-2 hidden h-[302px] w-[372px] flex-col gap-5 rounded-xl border-[1px]  bg-scroll p-4 shadow-lg md:flex">
      <div className="h-16">
        <h1 className="text-xl font-medium">Add dates for prices</h1>
        <div>
          <ul className="flex items-center gap-2 text-sm font-medium">
            <li>
              <StarIcon className="h-4" />
            </li>
            <li>4.89</li>
            <li className="text-gray-500 underline">
              <a href="">111 Reviews</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid h-24 grid-cols-2 grid-rows-2 rounded-xl border-[1px] border-gray-500 text-xs">
        <button className=" border-r-[1px] border-gray-500">
          <p className="font-medium uppercase ">Check-in</p>
          <p>add date</p>
        </button>
        <button className=" border-gray-500 ">
          {" "}
          <p className="font-medium uppercase">Checkout</p>
          <p>add date</p>
        </button>
        <button className="col-span-2   border-t-[1px] border-gray-500">
          {" "}
          <p className="font-medium uppercase">Guests</p>
          <p>1 guest</p>
        </button>
      </div>
      <div>
        <button className="w-full  rounded-xl bg-[#DA0A65] p-3 font-semibold text-white">
          Check availabily
        </button>
      </div>
    </div>
  )
}

export default Availability
