import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination } from "swiper"

import data from "../assets/data.json"
import { HeartIcon, StarIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

function Litings() {
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
    <div className="flex flex-wrap gap-6 mb-32">
      {data.cardImgs.map((card) => {
        return (
          <div className=" flex h-[460px] w-[340px] flex-auto  flex-col ">
            <div>
              <Swiper
                pagination={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="relative"
              >
                {card.slides.map((slide) => {
                  return (
                    <SwiperSlide>
                      <Link to="/ListingPage">
                        <img
                          className="h-[345px] w-full rounded-xl object-cover"
                          alt={card.location}
                          src={slide}
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
                <p className="mt-1 text-sm font-semibold">{card.location}</p>
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

export default Litings


// import React, { useRef, useState } from "react"
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react"

// // Import Swiper styles
// import "swiper/css"
// import "swiper/css/pagination"

// // import required modules
// import { Navigation, Pagination } from "swiper"

// import data from "../assets/data.json"
// import { HeartIcon, StarIcon } from "@heroicons/react/24/outline"
// import { Link } from "react-router-dom"

// function HomepageCard() {
//   // handles favorite post state
//   //   fetches state from localstorage and persists after reload
//   //   the "!" tells the compiler the value cannot be null
//   const [favorite, setFavorite] = React.useState(
//     JSON.parse(localStorage.getItem("my-fav-posts")!) || false
//   )

//   //   toogle between favorite or !favorite

//   //    reactively setting the favorite state in the local storage whenever it changes by using React's useEffect Hook
//   const toogleFavorite = () => {
//     setFavorite(!favorite)
//   }

//   // saves to local storage

//   //   stringify the state because local storage only accepts strings

//   //  it is stored with every user interaction and retrieved for the initial state when rendering the component for the first time and therefore initializing its hooks
//   React.useEffect(() => {
//     localStorage.setItem("my-fav-posts", JSON.stringify(favorite))
//   }, [favorite])

//   // !guardar state para cada card separado, provalmente nao dá porque o key e o mesmo

//   return (
//     <div className="flex flex-wrap gap-6">
//       {data.cardImgs.map((card) => {
//         return (
//           <div className=" flex h-[460px] w-[340px] flex-auto  flex-col ">
//             <div>
//               <Swiper
//                 pagination={true}
//                 navigation={true}
//                 modules={[Pagination, Navigation]}
//                 className="relative"
//               >
//                 {card.slides.map((slide) => {
//                   return (
//                     <SwiperSlide>
//                       <Link to="/ListingPage">
//                         <img
//                           className="h-[345px] w-full rounded-xl object-cover"
//                           alt={card.location}
//                           src={slide}
//                         />
//                       </Link>

//                       <div className="absolute top-4 right-4">
//                         <HeartIcon
//                           onClick={toogleFavorite}
//                           className={
//                             !favorite
//                               ? "h-6 w-6 cursor-pointer fill-black/40 text-white"
//                               : "h-6 w-6 cursor-pointer fill-red-600"
//                           }
//                         />
//                       </div>
//                     </SwiperSlide>
//                   )
//                 })}
//               </Swiper>
//             </div>

//             <div className="pt-2 text-sm">
//               <div className="flex justify-between">
//                 <p className="mt-1 text-sm font-semibold">{card.location}</p>
//                 <div className="flex flex-row items-center gap-1">
//                   <StarIcon className="h-4 w-4 fill-black" />
//                   <p className="">{card.rating}</p>
//                 </div>
//               </div>

//               <p className=" mt-1 ">{card.host}</p>
//               <p className=" mt-1">{card.date}</p>
//               <p className=" mt-1 underline underline-offset-2">
//                 <span className="font-semibold">${card.price}</span> total
//               </p>
//             </div>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

// export default HomepageCard
