import { StarIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import { SlDiamond } from "react-icons/sl"
import CheckInPopOver from "../../components/Navbar/NavbarSearch/CheckInPopOver"
import RangePicker from "../../components/Navbar/NavbarSearch/RangePicker"
import DataPicker from "./DataPicker"

function Availability(data) {
  const [datePopOver, setDatePopOver] = useState(false)

  const [price, setPrice] = useState(data.data.price_per_night)

  const stayPrice = () => {
    price
  }

  return (
    <div className="sticky top-2 hidden flex-col  bg-scroll md:flex ">
      <div className=" mt-6 h-[302px] w-[372px] gap-5 rounded-xl border-[1px]  p-4 shadow-lg">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-medium">{price}€ night</h1>
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
          <button
            className=" border-r-[1px] border-gray-500"
            onClick={() => setDatePopOver(true)}
          >
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
      <div className=" mt-6 flex h-[92px] w-[372px] items-center justify-center  gap-2 rounded-xl border-[1px]  bg-scroll p-2 shadow-lg ">
        <div className="w-3/4">
          <p>
            <span className="font-semibold">This is a rare find.</span> Pedro's
            place on Airbnb is usually fully booked.
          </p>
        </div>
        <SlDiamond className="block h-[32px] w-[32px] fill-[#E31C5F]" />
      </div>
      {datePopOver && <DataPicker />}
    </div>
  )
}

export default Availability
