
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper"


function ListingCarousel({thisListing}:any) {
  return (
    <div className="block md:hidden -mx-6">
      <Swiper
        className="mySwiper"
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
      >
        {thisListing.thumbImages.map((img:any, index:any) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={thisListing.city}
                className="object-cover w-full h-[360px]"
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ListingCarousel
