
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"


import { Pagination } from "swiper"


function ListingCarousel({thisListing}) {
  return (
    <div className="block md:hidden -mx-6">
      <Swiper
        className="mySwiper"
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
      >
        {thisListing.thumbImages.map((img) => {
          return (
            <SwiperSlide key={thisListing.description}>
              <img
                src={img}
                alt=""
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
