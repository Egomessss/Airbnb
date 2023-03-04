import { StarIcon } from "@heroicons/react/24/outline"

import { DateRangePicker } from "react-date-range"

import { FaMedal } from "react-icons/fa"
import { SlDiamond } from "react-icons/sl"
import { BiRightArrow } from "react-icons/bi"

import MapApi from "../../components/MapApi"

function ListingDetails({
  data,
  minDate,
  maxDate,
  staticRanges,
  inputRanges,
  showDateDisplay,
  months,
  direction,
  ranges,
  onChange,
  daysInBetween,
}) {
  // fetches the amenities data from the json file and splits the string into multiple strings
  const amenities = data.amenities

  return (
    <div className=" mb-14 w-full md:mb-6 md:w-[70%]">
      <div className="flex flex-col gap-2 py-6 md:hidden">
        <div>
          <h1 className="text-2xl font-semibold">{data.summary}</h1>
          <h1 className="text-2xl font-semibold">{data.property_type}</h1>
        </div>
        <div className="text-sm font-semibold">
          <ul className="flex items-center gap-5">
            <li className="flex items-center">
              <StarIcon className="h-4" />
              <p>{data.rating}</p>
            </li>
            <li className="items-center font-semibold underline underline-offset-1">
              <p>{data.number_of_reviews} reviews</p>
            </li>
            {data.isSuperHost ? (
              <li className="flex items-center gap-1 ">
                <FaMedal className="h-3 " />
                <p> Superhost</p>
              </li>
            ) : null}
            <li>
              <p className="font-semibold underline underline-offset-1">
                {data.host_location}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex border-t-[1px] py-6 md:hidden">
        <p>
          <span className="font-semibold">This is a rare find.</span> this
          listing is usually fully booked.
        </p>
        <SlDiamond className="block h-[32px] w-[42px] fill-[#E31C5F]" />
      </div>

      <div className="flex justify-between border-t-[1px] py-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{data.room_type}</h3>
          <ul className="flex gap-2 text-sm">
            <li className="flex items-center">{data.accommodates} guests</li>
            <li>{data.bedrooms} bedrooms</li>
            <li>{data.beds} beds</li>
            <li>{data.bathrooms} bathrooms</li>
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
      <div className="border-t-[1px] pt-8 pb-6">
        <div className="pb-6">
          {" "}
          <p className="leading-5">{data.description}</p>
        </div>

        <div className="border-t-[1px] pt-8 pb-6 md:h-[500px]">
          <h2 className="mb-4 text-xl font-semibold">What this place offers</h2>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {amenities.map((amenitie) => {
              return (
                <li className="flex w-[250px] gap-2 whitespace-nowrap">
                  <BiRightArrow className="block h-[24px] w-[24px]" />
                  <p>{amenitie}</p>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          <h2 className="mb-4 text-xl font-semibold">Where you'll be</h2>
          <p className="mb-4">{data.host_location}</p>
          <div className="h-[318px] w-full  border-black">
            <MapApi data={data} />
          </div>
        </div>

        <div className="border-t-[1px] pt-8 pb-6 md:hidden">
          <h2 className="mb-4 text-xl font-semibold">
            {daysInBetween} nights in {data.host_location}
          </h2>
          <div>
            <DateRangePicker
              minDate={minDate}
              maxDate={maxDate}
              staticRanges={staticRanges}
              inputRanges={inputRanges}
              showDateDisplay={showDateDisplay}
              months={months}
              direction={direction}
              ranges={ranges}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingDetails
