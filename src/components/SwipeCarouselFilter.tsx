import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../assets/data.json"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { FreeMode } from "swiper"

function SwipeCarouselFilter() {
  return (
    <Swiper
      slidesPerView={4.6}
      spaceBetween={1}
      freeMode={true}
      modules={[FreeMode]}
      className="flex justify-between items-center border-b-2 drop-shadow-md
      "
    >
      {data.imgs.map((img) => {
        return (
          <SwiperSlide
            key={img.id}
            className="flex flex-col items-center h-[74px] p-2 hover:underline active:underline focus:underine focus:underline"
          >
            <img
              className="h-[28px]"
              alt={img.title}
              src={img.link}
            />
            <p className="text-xs mt-1">Contryside</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwipeCarouselFilter
