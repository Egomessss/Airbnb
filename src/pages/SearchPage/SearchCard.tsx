import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Pagination } from "swiper"

import data from "../../assets/data.json"
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline"

function SearchCard() {
  
  // handles favorite post state
  //   fetches state from localstorage and persists after reload
  //   the "!" tells the compiler the value cannot be null
  const [favorite, setFavorite] = React.useState(
    JSON.parse(localStorage.getItem("my-fav-posts")!) || false
  )

  //   toogle between favorite or !favorite

  //    reactively setting the favorite state in the local storage whenever it changes by using React's useEffect Hook
  const toogleFavorite = () => {
    setFavorite(!favorite)
  }

  // saves to local storage

  //   stringify the state because local storage only accepts strings

  //  it is stored with every user interaction and retrieved for the initial state when rendering the component for the first time and therefore initializing its hooks
  React.useEffect(() => {
    localStorage.setItem("my-fav-posts", JSON.stringify(favorite))
  }, [favorite])

  // !guardar state para cada card separado, provalmente nao dá porque o key e o mesmo

  return (
    <div className="flex gap-6 flex-wrap">
      {data.cardImgs.map((card) => {
        return (
          <div className=" w-[240px] h-[420px] flex flex-col  flex-auto ">
            <div>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="relative"
              >
                {card.slides.map((slide) => {
                  return (
                    <SwiperSlide>
                      <a href="">
                        <img
                          className="rounded-xl object-cover h-[315px]"
                          alt={card.location}
                          src={slide}
                        />
                      </a>

                      <div className="absolute top-4 right-4">
                        <HeartIcon
                          onClick={toogleFavorite}
                          className={
                            !favorite
                              ? "h-6 w-6 cursor-pointer text-white fill-black/40"
                              : "h-6 w-6 fill-red-600 cursor-pointer"
                          }
                        />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            <div className="text-sm pt-2">
              <div className="flex justify-between">
                <p className="font-semibold text-sm mt-1">{card.location}</p>
                <div className="flex flex-row items-center gap-1">
                  <StarIcon className="h-4 w-4 fill-black" />
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

export default SearchCard