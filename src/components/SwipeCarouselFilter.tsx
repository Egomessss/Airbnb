import React, { useRef, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

import ListingData from "../assets/ListingsData.json"
import filters from "../assets/filters.json"
import amenities from "../assets/amenities.json"
import { Link, useSearchParams } from "react-router-dom"
// each search parameter needs to match their title to the search query

function SwipeCarouselFilter(props) {
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false)

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  console.log(selectedAmenities)
  return (
    <div className="mx-auto hidden w-[600px] items-center justify-center gap-2 py-6 md:flex">
      <Swiper
        slidesPerView="auto"
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide className="my-2 flex h-[51px] w-[77px]  flex-col flex-wrap items-center justify-center decoration-2 underline-offset-8 hover:underline hover:decoration-gray-300  focus:underline focus:decoration-black">
          <Link
            to={`/ListingPage/${
              ListingData[Math.floor(Math.random() * ListingData.length)].id
            }`}
            className="flex flex-col items-center justify-center"
          >
            <img
              className="h-[28px] w-[28px]"
              alt=""
              src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
            />
            <p className="mt-1 whitespace-nowrap text-xs">Surprise me</p>
          </Link>
        </SwiperSlide>
        {filters.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="my-2 flex h-[51px] w-[77px]  flex-col flex-wrap items-center justify-center decoration-2 underline-offset-8 hover:underline hover:decoration-gray-300  focus:underline focus:decoration-black"
            >
              <button
                onClick={() => props.setFilter(`${data.title}`)}
                className="flex w-full flex-col items-center justify-center"
              >
                <img
                  className="h-[28px] w-[28px]"
                  alt={data.title}
                  src={data.link}
                />
                <p className="mt-1 whitespace-nowrap text-xs">{data.title}</p>
              </button>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <button
        onClick={() => setOpenFilterDropdown(true)}
        className="relative hidden items-center gap-1 rounded-xl border-2 p-3 font-semibold md:flex"
      >
        <AdjustmentsHorizontalIcon className="h-5" />
        <p className="text-xs">Filters</p>
      </button>
      {openFilterDropdown && (
        <div className="z-index absolute top-44 h-[600px] w-[600px] overflow-y-scroll rounded-lg border-[1px] bg-white px-4 ">
          <div className="flex h-14 items-center justify-between border-b-2 ">
            <XMarkIcon className="h-5" />
            <p>Filters</p>
            {/* empty html tag so we can justify between technique utilized by the airbnb folks */}
            <p></p>
          </div>
          <div className="h-[300px] border-b-2">
            <h2 className=" font-semibold">Price range</h2>
            <p>The average nightly price is €158</p>
            <div className="flex flex-col items-center">
              <div>
                <input type="range" />
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <p className="absolute p-2 text-xs text-gray-400">
                    min price
                  </p>
                  <input
                    className="h-14  w-[270px] rounded-lg border-[1px] pt-2 pl-2"
                    type="number"
                    placeholder="300€"
                  />
                </div>
                <p>-</p>
                <div className="relative">
                  <p className="absolute p-2 text-xs text-gray-400">
                    max price
                  </p>
                  <input
                    className="h-14  w-[270px] rounded-lg border-[1px] pt-2 pl-2"
                    type="number"
                    placeholder="300€"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className=" font-semibold">Amenities</h2>
            <ul className="flex w-full flex-wrap gap-4">
              {amenities.map((amenity, index) => {
                return (
                  <li className="w-[250px] ">
                    <label key={index} className="flex items-center gap-3">
                      {/* creates a list of checkboxes for the amneties */}
                      <input className="w-5 h-5"
                        type="checkbox"
                        value={amenity}
                        checked={selectedAmenities.includes(amenity)}
                        onChange={(e) =>
                          e.target.checked
                            ? // If the checkbox is checked , the setSelectedAmenities function is called with a new array that includes the current amenity in addition to the existing selected amenities.
                              setSelectedAmenities([
                                ...selectedAmenities,
                                amenity,
                              ])
                            : // If the checkbox is unchecked , the setSelectedAmenities function is called with a new array that excludes the current amenity.
                              setSelectedAmenities(
                                // If a is not equal to amenity, the element is included in the new array. If a is equal to amenity, the element is excluded from the new array.
                                selectedAmenities.filter((a) => a !== amenity)
                              )
                        }
                      />
                      {amenity}
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2 className=" font-semibold">Top-tier stays</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default SwipeCarouselFilter
