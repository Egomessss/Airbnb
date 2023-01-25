import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper"

import data from "../assets/data.json"
function ListingCarousel() {
  return (
    <div className="-mx-6">
      <Swiper
        className="mySwiper"
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
      >
        {data.listingImgs.map((img) => {
          return (
            <SwiperSlide>
              <img
                src={img}
                alt=""
                className="object-cover min-w-[390px] h-[260px]"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ListingCarousel
