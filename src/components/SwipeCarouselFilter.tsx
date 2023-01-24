import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../assets/data.json"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"

// import required modules
import { FreeMode } from "swiper"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

function SwipeCarouselFilter() {
  return (
    <div className="flex items-center">
      <Swiper
        slidesPerView="auto"
        spaceBetween={1}
        freeMode={true}
        modules={[FreeMode]}
        className="
      "
      >
        {data.imgs.map((img) => {
          return (
            <SwiperSlide
              key={img.id}
              className="flex flex-col flex-auto flex-wrap h-[72px] items-center justify-center p-2 hover:underline active:underline focus:underine focus:underline"
            >
              <img
                className="h-[28px] w-[28px]"
                alt={img.title}
                src={img.link}
              />
              <p className="text-xs mt-1">Contryside</p>
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
