import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import { MdOutlineSingleBed, MdOutlineKingBed } from "react-icons/md"

// import required modules
import { Pagination } from "swiper"
import { FaChevronRight } from "react-icons/fa"

export default function ReviewsCarousel() {
  return (
    <>
      <Swiper
        slidesPerView={1.1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="-mx-6"
      >
        <SwiperSlide>
          <div className="flex flex-col j p-4 border-[1px] rounded-lg w-[309px] h-[236px] gap-2 ml-6 mb-6">
            <div className="flex gap-2">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://a0.muscache.com/im/pictures/user/471e910a-870c-409d-9946-4df356fe8eb4.jpg?im_w=240"
                alt="profilephoto"
              />
              <div className="flex flex-col text-sm">
                <p className="font-semibold">Baylee</p>
                <p>January 2023</p>
              </div>
            </div>
            <div>
              <p className="w-[273px] h-[120px] text-ellipsis overflow-hidden ...">
                Amazing stay - such a fantastic apartment. Was able to see every
                sunrise and sunset, perfect views both indoors in the
                lounge/diner and outside on either balcony. Can be a lot of
                stairs but there is a lift so at the end of a long day it was
                nice to be able to get the private lift up to the pent house.
                Lots of space (was 6 of us). Hot tub was not working during our
                stay but we were kept up to date with action Andre was taking to
                try and get someone out to fix it - wasn't in the cards for us
                but even without use of the hot tub, this penthouse is a
                wonderful stay! Bar up the road has live music on Wednesday
                afternoon/evening and it was very fun! Lots of nice restaurants,
                supermarket near by, good walks and lovely beach and views. My
                highlight of the stay was watching the sunrise from the bedroom
                and sunset on the roof. Absolutely magical.
              </p>
            </div>
            <button className="flex items-center underline font-semibold">
              Show more <FaChevronRight className="h-3" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col j p-4 border-[1px] rounded-lg w-[309px] h-[236px] gap-2">
            <div className="flex gap-2">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://a0.muscache.com/im/pictures/user/471e910a-870c-409d-9946-4df356fe8eb4.jpg?im_w=240"
                alt="profilephoto"
              />
              <div className="flex flex-col text-sm">
                <p className="font-semibold">Baylee</p>
                <p>January 2023</p>
              </div>
            </div>
            <div>
              <p className="w-[273px] h-[120px] text-ellipsis overflow-hidden ...">
                Amazing stay - such a fantastic apartment. Was able to see every
                sunrise and sunset, perfect views both indoors in the
                lounge/diner and outside on either balcony. Can be a lot of
                stairs but there is a lift so at the end of a long day it was
                nice to be able to get the private lift up to the pent house.
                Lots of space (was 6 of us). Hot tub was not working during our
                stay but we were kept up to date with action Andre was taking to
                try and get someone out to fix it - wasn't in the cards for us
                but even without use of the hot tub, this penthouse is a
                wonderful stay! Bar up the road has live music on Wednesday
                afternoon/evening and it was very fun! Lots of nice restaurants,
                supermarket near by, good walks and lovely beach and views. My
                highlight of the stay was watching the sunrise from the bedroom
                and sunset on the roof. Absolutely magical.
              </p>
            </div>
            <button className="flex items-center underline font-semibold">
              Show more <FaChevronRight className="h-3" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col j p-4 border-[1px] rounded-lg w-[309px] h-[236px] gap-2">
            <div className="flex gap-2">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src="https://a0.muscache.com/im/pictures/user/471e910a-870c-409d-9946-4df356fe8eb4.jpg?im_w=240"
                alt="profilephoto"
              />
              <div className="flex flex-col text-sm">
                <p className="font-semibold">Baylee</p>
                <p>January 2023</p>
              </div>
            </div>
            <div>
              <p className="w-[273px] h-[120px] text-ellipsis overflow-hidden ...">
                Amazing stay - such a fantastic apartment. Was able to see every
                sunrise and sunset, perfect views both indoors in the
                lounge/diner and outside on either balcony. Can be a lot of
                stairs but there is a lift so at the end of a long day it was
                nice to be able to get the private lift up to the pent house.
                Lots of space (was 6 of us). Hot tub was not working during our
                stay but we were kept up to date with action Andre was taking to
                try and get someone out to fix it - wasn't in the cards for us
                but even without use of the hot tub, this penthouse is a
                wonderful stay! Bar up the road has live music on Wednesday
                afternoon/evening and it was very fun! Lots of nice restaurants,
                supermarket near by, good walks and lovely beach and views. My
                highlight of the stay was watching the sunrise from the bedroom
                and sunset on the roof. Absolutely magical.
              </p>
            </div>
            <button className="flex items-center underline font-semibold">
              Show more <FaChevronRight className="h-3" />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
