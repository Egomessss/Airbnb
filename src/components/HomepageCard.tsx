import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

import data from "../assets/data.json"
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline"

function HomepageCard() {
  const [favorite, setFavorite] = React.useState(false)

  return (
    <div>
      {data.cardImgs.map((card) => {
        return (
          <div className="pt-6">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="relative"
            >
              {card.slides.map((slide) => {
                return (
                  <SwiperSlide>
                    <img
                      className="rounded-xl h-[342px] shadow-md object-cover"
                      alt={card.location}
                      src={slide}
                    />
                    <div className="absolute top-4 right-4">
                      {!favorite && <HeartIcon className="h-6 w-6" /> }
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className="text-sm pt-2">
              <div className="flex justify-between">
                <p className="font-semibold text-sm mt-1">{card.location}</p>
                <div className="flex flex-row items-center gap-1">
                  <StarIcon className="h-3 w-3" />
                  <p className="">{card.rating}</p>
                </div>
              </div>

              <p className=" mt-1 ">{card.host}</p>
              <p className=" mt-1">{card.date}</p>
              <p className=" mt-1 underline underline-offset-2">
                <span className="font-semibold">${card.price}</span> total
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default HomepageCard

//  <div>
{
  /* <Swiper
pagination={true}
modules={[Pagination]}
className="mySwiper"
>
{data.cardImgs.map((card) => {
  return (
   
      {card.slides.map((slide) => {
        return (
            <SwiperSlide key={card.location}>
          <img
            className="rounded-xl h-[142px] shadow-md"
            alt={card.location}
            src={slide}
          />
          </SwiperSlide>
        )
      })}
      
      <p className="text-xs mt-1">{card.location}</p>
      <p className="text-xs mt-1">{card.host}</p>
      <p className="text-xs mt-1">{card.date}</p>
      <p className="text-xs mt-1">{card.rating}</p>
      <p className="text-xs mt-1">{card.price}</p>
  )
})}
</Swiper>
</div> */
}
