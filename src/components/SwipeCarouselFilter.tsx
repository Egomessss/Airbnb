import React, { useRef, useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../assets/data.json"
// Import Swiper styles
import "swiper/css"

import "swiper/css/navigation"

// import required modules
import { Navigation } from "swiper"

import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

function SwipeCarouselFilter() {
  return (
    <div className="flex items-center py-2 gap-2">
      <Swiper
        slidesPerView="auto"
         navigation={true}
        modules={[Navigation]}
      >
        {data.imgs.map((img) => {
          return (
            <SwiperSlide
              key={img.id}
              className="flex flex-col flex-auto flex-wrap w-[77px] h-[56px] my-2 items-center justify-center hover:underline active:underline active:decoration-black active:decoration-2  focus:underline decoration-2 decoration-gray-300 underline-offset-8 cursor-pointer"
            >
              <img
                className="h-[28px] w-[28px]"
                alt={img.title}
                src={img.link}
              />
              <p className="text-xs mt-1">Countryside</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="hidden md:flex items-center gap-1 border-2 rounded-xl p-3 font-semibold">
        <AdjustmentsHorizontalIcon className="h-5" />
        <p className="text-xs">Filters</p>
      </div>
    </div>
  )
}

export default SwipeCarouselFilter
