import { StarIcon, TrophyIcon } from "@heroicons/react/24/solid"
import React from "react"

function ListingInfo() {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl">Luz Beach Rooftop</h1>
        <h1 className="font-semibold text-2xl">Penthouse</h1>
      </div>
      <div className="text-sm font-semibold">
        <ul className="flex gap-5 ">
          <li className="flex items-center">
            <StarIcon className="h-4" />
            4.89
          </li>
          <li className="font-semibold underline underline-offset-1">
            110 reviews
          </li>
          <li className="flex gap-1 items-center font-normal">
            <TrophyIcon className="h-3 " />
            Superhost
          </li>
        </ul>
        <p className=" font-semibold underline underline-offset-1 mt-1">
          Luz, Lagos, Faro, Portugal
        </p>
      </div>
    </div>
  )
}

export default ListingInfo
