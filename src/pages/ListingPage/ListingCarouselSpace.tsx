import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import { MdOutlineSingleBed, MdOutlineKingBed } from "react-icons/md"

// import required modules
import { Pagination } from "swiper"

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={2.1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-start py-6 px-4 border-[1px] rounded-lg w-[165px] h-[155px]">
            <div className="flex">
              <MdOutlineSingleBed className="h-8 w-8" />
              <MdOutlineKingBed className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-semibold">Bedroom 1</h4>
              <p>1 double bed</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-start py-6 px-4 border-[1px] rounded-lg w-[165px] h-[155px]">
            <div className="flex">
              <MdOutlineSingleBed className="h-8 w-8" />
              <MdOutlineKingBed className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-semibold">Bedroom 1</h4>
              <p>1 double bed</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-start py-6 px-4 border-[1px] rounded-lg w-[165px] h-[155px]">
            <div className="flex">
              <MdOutlineSingleBed className="h-8 w-8" />
              <MdOutlineKingBed className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-semibold">Bedroom 1</h4>
              <p>1 double bed</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
