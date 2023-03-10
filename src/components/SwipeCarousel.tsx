// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import data from "../assets/data.json"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import { FreeMode } from "swiper"

export default function SwipeCarousel() {
  return (
    <Swiper
      slidesPerView={2.3}
      spaceBetween={1}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {data.map((img) => {
        return (
          <SwiperSlide key={img.id}>
            <img
              className="rounded-xl h-[142px] shadow-md"
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
