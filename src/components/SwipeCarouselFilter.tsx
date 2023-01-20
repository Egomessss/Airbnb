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
      className="mySwiper"
    >
      {data.imgs.map((img) => {
        return (
          <SwiperSlide
            key={img.id}
            className="flex flex-col items-center h-[74px] justify-between"
          >
            <img
              className="h-[28px]"
              alt={img.title}
              src={img.link}
            />
            <p className="text-xs mt-1">{img.title}</p>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwipeCarouselFilter
