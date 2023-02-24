import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"

import { HeartIcon, StarIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

function Listings({ data, guests, days }) {
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
  // listing card individuais
  // display the swiper for the images
  // text area em baixo
  // fazer loop das imagens e

  return (
    <div className="flex flex-wrap gap-6">
      {data.map((listing, index) => {
        const total =
          days && guests
            ? listing.price_per_night * days + guests * listing.price_per_guest
            : listing.price_per_night

        // formats the number to introduce commas for the larger values
        const formattedTotal = total.toLocaleString("de-DE")

        return (
          <div
            key={index}
            className=" flex h-[460px] w-[340px] flex-auto  flex-col "
          >
            <div>
              <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="relative"
              >
                {listing.thumbImages.map((image, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Link to={`/ListingPage/${listing.id}`}>
                        <img
                          className="h-[345px] w-full rounded-xl object-cover"
                          alt={listing.state}
                          src={image}
                        />
                      </Link>

                      <div className="absolute top-4 right-4">
                        <HeartIcon
                          onClick={toogleFavorite}
                          className={
                            !favorite
                              ? "h-6 w-6 cursor-pointer fill-black/40 text-white"
                              : "h-6 w-6 cursor-pointer fill-red-600"
                          }
                        />
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>

            <div className="pt-2 text-sm">
              <div className="flex justify-between">
                <p className="mt-1 text-sm font-semibold">{`${listing.state}, ${listing.country}`}</p>
                <div className="flex flex-row items-center gap-1">
                  <StarIcon className="h-4 w-4 fill-black" />
                  <p className="">{listing.rating}</p>
                </div>
              </div>
              <p className=" mt-1 underline underline-offset-2">
                <span className="font-semibold">€{formattedTotal}</span>{" "}
                {days && guests ? `total` : `per night`}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Listings
