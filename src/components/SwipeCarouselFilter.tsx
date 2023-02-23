import React, { useRef, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"

import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import ListingData from "../assets/ListingsData.json"
import { useSearchParams } from "react-router-dom"
// each search parameter needs to match their title to the search query

function SwipeCarouselFilter(props) {
  const filters = [
    {
      id: 1,
      title: "Surprise me",
      link: "https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg",
    },
    {
      id: 2,
      title: "Beachfront",
      link: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
    },
    {
      id: 3,
      title: "Cabin",
      link: "https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg",
    },
    {
      id: 4,
      title: "LakeSide",
      link: "https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg",
    },
    {
      id: 5,
      title: "Tropical",
      link: "https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg",
    },
    {
      id: 6,
      title: "Countryside",
      link: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
    },
    {
      id: 7,
      title: "Mansions",
      link: "https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg",
    },
    {
      id: 8,
      title: "Skiing",
      link: "https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg",
    },
    {
      id: 9,
      title: "Iconic cities",
      link: "https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg",
    },
  ]

  // how to pass this search query to the listings
  // const filterData = () => {
    // set filter based on the title
    // ListingData.filter(p => !filter || p.property_type === filter)
    // if the title matches the data we filter
    // if the title matches surprise me we have to do a random value frm the data

// const [searchParams, setSearchParams] = useSearchParams()

// const filter = searchParams.get("filter")

// function setFilter(filter){
//   setSearchParams({filter:filter})
// }
  

  return (
    <div className="mx-auto hidden w-[600px] items-center justify-center gap-2 py-6 md:flex">
      <Swiper
        slidesPerView="auto"
        spaceBetween={60}
        navigation={true}
        modules={[Navigation]}
      >
        {filters.map((data) => {
          return (
            <SwiperSlide
              key={data.id}
              className="my-2 flex h-[51px] w-[77px] flex-auto flex-col flex-wrap items-center justify-center decoration-2 underline-offset-8 hover:underline hover:decoration-gray-300  focus:underline focus:decoration-black"
            >
              <button onClick={()=>props.setFilter(`${data.title}`)} className="flex flex-col items-center justify-center">
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
      <div className="hidden items-center gap-1 rounded-xl border-2 p-3 font-semibold md:flex">
        <AdjustmentsHorizontalIcon className="h-5" />
        <p className="text-xs">Filters</p>
      </div>
    </div>
  )
}

export default SwipeCarouselFilter
