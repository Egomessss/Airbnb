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
    <div className="-mx-3">
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
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ListingCarousel
