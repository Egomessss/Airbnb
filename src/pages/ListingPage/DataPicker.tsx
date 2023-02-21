import React from "react"
import { CiKeyboard } from "react-icons/ci"
import RangePicker from "../../components/Navbar/NavbarSearch/RangePicker"

function DatePicker() {
  return (
    <div className="absolute top-24 right-0 z-50 rounded-xl border-[1px] bg-white p-6 shadow-lg">
      <div className="flex justify-between">
        <div>
          <p>5 nights</p>
          <p>dates</p>
        </div>
        <div className="flex w-[300px] gap-4 rounded-lg border-[1px] p-2">
          <button className=" w-1/2 border-r-[1px] border-gray-500 px-2 text-left">
            <p className="text-[10px] font-medium  uppercase">Check-in</p>
            <p>add date</p>
          </button>
          <button className=" w-1/2  border-gray-500 px-2 text-left">
            {" "}
            <p className="text-[10px] font-medium uppercase">Checkout</p>
            <p>add date</p>
          </button>
        </div>
      </div>

      <RangePicker />
      <div className=" flex justify-between">
        <CiKeyboard className="text-3xl" />
        <div className="flex gap-3">
          <button className="font-medium underline">Clear dates</button>
          <button className="rounded-lg bg-black py-1 px-3 font-semibold text-white">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default DatePicker
