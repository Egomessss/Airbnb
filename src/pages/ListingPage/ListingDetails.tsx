import {
  StarIcon,
  LanguageIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import React from "react"
import { CiLocationOn, CiCalendar } from "react-icons/ci"
import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
import { TbBeach } from "react-icons/tb"
import CalendarMobile from "../../components/CalendarMobile"
import MapApi from "../../components/MapApi"
import MobileBtn from "../../components/MobileBtn"

// add conditional rending for the superhost and rare find properties

function ListingDetails(data) {
  const string = data.data.amenities
  // console.log(string)
  const splitToString = string.split(",")

  return (
    <div className="md:max-w-[60%]">
      <div className="flex flex-col gap-2 py-6 md:hidden">
        <div>
          <h1 className="text-2xl font-semibold">{data.data.summary}</h1>
          <h1 className="text-2xl font-semibold">{data.data.property_type}</h1>
        </div>
        <div className="text-sm font-semibold">
          <ul className="flex gap-5 ">
            <li className="flex items-center">
              <StarIcon className="h-4" />
              {data.data.rating}
            </li>
            <li className="font-semibold underline underline-offset-1">
              {data.data.number_of_reviews} reviews
            </li>
            {/* {data.data.isSuperHost == true  } */}
            <li className="flex items-center gap-1 font-normal">
              <FaMedal className="h-3 " />
              Superhost
            </li>
          </ul>
          <p className=" mt-1 font-semibold underline underline-offset-1">
            {data.data.host_location}
          </p>
        </div>
      </div>

      {/* body */}
      {/* fix this or remove */}

      <div className="flex md:hidden">
        <p>
          <span className="font-semibold">This is a rare find.</span> Pedro's
          place on Airbnb is usually fully booked.
        </p>
        <SlDiamond className="block h-[32px] w-[42px] fill-[#E31C5F]" />
      </div>

      <div className="flex justify-between py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{data.data.room_type}</h3>
          <ul className="flex gap-2 text-sm">
            <li className="flex items-center">
              {data.data.accommodates} guests
            </li>
            <li>{data.data.bedrooms} bedrooms</li>
            <li>{data.data.beds} beds</li>
            <li>{data.data.bathrooms} bathrooms</li>
          </ul>
        </div>
        <div className="relative">
          <img
            src="https://a0.muscache.com/im/pictures/user/1f9954af-c6cb-425d-b975-d2a7e32ea999.jpg?im_w=240"
            alt=""
            className="h-[54px] w-[54px] rounded-full"
          />
          <FaMedal className="absolute bottom-1 -right-2  z-20 text-2xl text-yellow-500" />
        </div>
      </div>

      {/* add translation */}
      <div className="border-t-[1px] pt-8 pb-6">
        <div className="flex gap-2">
          <LanguageIcon className="block h-[24px] w-[18px]" />
          <div className="text-sm">
            <p>Some info has been automatically translated.</p>
            <a
              href=""
              className="font-semibold underline"
            >
              Show original language
            </a>
          </div>
        </div>
        <div className="pt-8">
          <p className="leading-5">{data.data.description}</p>
          <a
            href=""
            className="flex items-center pt-4 font-semibold underline"
          >
            {/* add the rest */}
            Show more <ChevronRightIcon className="block h-5" />
          </a>
        </div>
      
          <div className="h-[500px] border-t-[1px] pt-8 pb-6">
            <h2 className="mb-4 text-xl font-semibold">
              What this place offers
            </h2>

            {/* make the string into an array
            map over the string
            display
            */}
            <div className="flex flex-col flex-wrap gap-4  md:flex-row">
              {splitToString.map((amenitie) => {
                return (
                  <div className="flex w-[250px] gap-2 whitespace-nowrap">
                    <TbBeach className="block h-[24px] w-[24px]" />
                    <p>{amenitie}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <MobileBtn
                text={"Show all 37 amenities"}
                link={""}
              />
            </div>
          </div>
       
        {/* adicionar mapa */}

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
          <p className="mb-4">{data.data.host_location}</p>
          <div className="h-[218px] w-[342px] border-2 border-black">
            <MapApi />
          </div>
        </div>

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          {" "}
          <h2 className="mb-4 text-xl font-semibold">7 nights in Luz, Lagos</h2>
          <p className="text-sm">30 may 2023-5 Jun 2023</p>
          <button className="text-sm font-semibold underline">
            Clear dates
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
